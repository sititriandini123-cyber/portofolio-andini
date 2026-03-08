import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Dynamic gradient background */}
      <div
        className="absolute inset-0 opacity-80 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(244,63,94,0.08) 0%, 
            rgba(217,70,239,0.05) 30%, 
            rgba(168,85,247,0.03) 55%, 
            transparent 75%)`,
        }}
      ></div>

      {/* Mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-rose-50/50 to-purple-50/50 pointer-events-none z-0"></div>

      {/* ================= FLOATING ELEMENTS (FINAL) ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Small glowing dots */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-rose-400 rounded-full animate-ping shadow-[0_0_14px_rgba(244,63,94,0.6)]"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-fuchsia-400 rounded-full animate-ping delay-1000 shadow-[0_0_12px_rgba(217,70,239,0.6)]"></div>
        <div className="absolute top-1/2 left-3/4 w-2.5 h-2.5 bg-purple-400 rounded-full animate-ping delay-500 shadow-[0_0_14px_rgba(168,85,247,0.6)]"></div>

        {/* Medium floating orbs */}
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-gradient-to-br from-rose-300 to-fuchsia-300 rounded-full blur-md animate-float opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-gradient-to-br from-fuchsia-300 to-purple-300 rounded-full blur-md animate-float-delayed opacity-60"></div>

        {/* Large glow blobs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-fuchsia-200/40 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 -right-48 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(244,63,94,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(244,63,94,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-20">
          {/* LEFT */}
          <div
            className={`space-y-10 transform transition-all duration-1200 ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
              }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-rose-100 shadow-sm backdrop-blur-xl">
              <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-sm font-medium text-slate-700">
                Available for Collab
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight">
              <span className="block text-slate-800 mb-2">Hi, I'm </span>
              <span className="block relative">
                <span className="bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent animate-gradient-shift">
                  Siti Tri Andini
                </span>
                <div className="absolute -inset-1 bg-rose-200/30 blur-lg animate-pulse-glow z-[-1]"></div>
              </span>
            </h1>

            <div className="flex items-center space-x-4">
              <div className="h-px w-12 bg-rose-400"></div>
              <span className="text-xl sm:text-2xl font-semibold text-slate-600">
                Sastra Arab
              </span>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Saya{" "}
              <span className="font-semibold text-slate-800">
                Siti Tri Andini
              </span>
              , mahasiswa sastra arab yang berfokus pada{" "}
              <span className="font-semibold bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
                komunikasi arab, konten kreator, hubungan eksternal
              </span>{" "}
              dan strategi digital.
            </p>

            <div className="flex flex-wrap gap-4">
              {["", "", ""].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-white/70 border border-sky-200 backdrop-blur text-sky-600 text-sm font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-white/70 border border-rose-100 text-rose-600 text-sm rounded-xl backdrop-blur">
                ⚜️ Pramuka Penegak Garuda Kab.Bogor
              </div>
              <div className="px-4 py-2 bg-white/70 border border-rose-100 text-rose-600 text-sm rounded-xl backdrop-blur">
                🎓 Sastra Arab
              </div>
              <div className="px-4 py-2 bg-white/70 border border-rose-100 text-rose-600 text-sm rounded-xl backdrop-blur">
                📷 konten kreator
              </div>
              <div className="px-4 py-2 bg-white/70 border border-rose-100 text-rose-600 text-sm rounded-xl backdrop-blur">
                👔 Korps Protokoler Mahasiswa UNPAD
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-600 text-white font-semibold rounded-2xl shadow-[0_8px_20px_rgba(244,63,94,0.3)] hover:scale-105 hover:shadow-[0_10px_25px_rgba(244,63,94,0.4)] transition-all"
              >
                Eksplorasi Proyek →
              </a>

              <a
                href="#contact"
                className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-semibold rounded-2xl shadow-sm hover:border-rose-200 hover:text-rose-600 transition-all hover:bg-rose-50"
              >
                Mari Berkolaborasi
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`flex justify-center lg:justify-end transform transition-all duration-1200 delay-300 ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
              }`}
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-rose-300/30 blur-3xl rounded-full animate-pulse-glow z-0"></div>

              <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-300 via-pink-300 to-purple-400 animate-border-spin p-0.5">
                  <div className="w-full h-full rounded-full bg-white"></div>
                </div>

                <div className="absolute inset-2 rounded-full overflow-hidden shadow-xl">
                  <img
                    src="/foto-dini.jpeg"
                    alt="Siti Tri Andini"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
