import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-white/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(244,63,94,0.10)] border-b border-rose-100/50"
        : "bg-white/40 backdrop-blur-md"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* LOGO */}
          <div className="relative group cursor-pointer">
            <h1 className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Andini
            </h1>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-purple-600 group-hover:w-full transition-all duration-500"></span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="relative px-4 py-2 text-sm font-semibold text-slate-700 rounded-xl transition-all duration-300 hover:text-rose-600 hover:bg-rose-50"
              >
                {item.label}
                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-purple-600 transition-all duration-300 group-hover:w-1/2 -translate-x-1/2"></span>
              </a>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-xl bg-white/70 backdrop-blur border border-rose-200 text-slate-700 hover:text-rose-600 transition"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute top-0 left-0 w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""
                    }`}
                />
                <span
                  className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""
                    }`}
                />
                <span
                  className={`absolute top-5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-white/90 backdrop-blur-xl border-t border-rose-100">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-xl text-slate-700 font-semibold transition-all duration-300 hover:bg-rose-50 hover:text-rose-600 ${isOpen ? "animate-slide-in" : ""
                  }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
