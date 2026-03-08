import React, { useState, useEffect } from "react";

const projects = [
  {
    title: "Sosialisasi Aplikasi Strava",
    description: "Mengedukasi kelompok ibu-ibu dan bapak-bapak mengenai penggunaan aplikasi Strava untuk memantau aktivitas fisik, dengan peran sebagai MC.",
    tech: ["Public Speaking", "MC", "Education"],
    image: "/foto strava.jpeg",
    demo: null,
    code: null,
    category: "Public",
  },
  {
    title: "Digital Content Creator - Campus Creator Network by Paragon",
    description: "Memproduksi konten untuk mempromosikan produk, melalui program campus creator network yang diselenggarakan oleh Paragon. Peran: Creative Strategist & Content Creator.",
    tech: ["Creative Strategist", "Content Creator"],
    image: "/projek ccn.jpeg",
    demo: "https://instagram.com/inst.dinii_",
    code: null,
    category: "Content Creation",
  },
  {
    title: "Founder ANDN Fashion",
    description: "Menginisiasi bisnis hijab dengan pendekatan digital.",
    tech: ["Business", "Digital Marketing", "Fashion"],
    image: "/logo andn.png",
    demo: "https://www.instagram.com/andn_fashion?igsh=d29tN3phemptanJn",
    code: null,
    category: "Enterpreneurship",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden bg-white">
      {/* soft background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,63,94,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(217,70,239,0.05),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          data-aos="fade-up"
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
          <span className="inline-block mb-6 text-xs font-bold tracking-[0.2em] uppercase text-rose-600 bg-rose-50 px-4 py-2 rounded-full border border-rose-100">
            Portfolio Showcase
          </span>

          <h2 className="text-6xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-rose-600 to-fuchsia-600 bg-clip-text text-transparent">
              Exclusive
            </span>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-slate-600 text-xl max-w-3xl mx-auto">
            Exclusive creations in modern web development, crafted with
            cutting-edge technologies.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16" data-aos="fade-up" data-aos-delay="100">
          {categories.map((category, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === category
                ? "bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white shadow-[0_8px_20px_rgba(244,63,94,0.2)]"
                : "bg-white/70 text-slate-600 border border-rose-200 hover:bg-rose-50 hover:text-rose-600"
                }`}>
              {category}
            </button>
          ))}
        </div>

        {/* Regular Projects */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {(activeFilter === "All" ? regularProjects : filteredProjects).map(
            (project, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white/80 backdrop-blur-xl rounded-2xl border border-rose-100 shadow-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgba(244,63,94,0.12)] hover:-translate-y-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover rounded-t-2xl"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-rose-50 text-rose-700 px-2 py-1 rounded border border-rose-100">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-center bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg text-sm font-semibold transition-colors ${project.code && project.code !== "#"
                          ? "flex-1"
                          : "w-full"
                          }`}>
                        Live Demo
                      </a>
                    )}
                    {project.code && project.code !== "#" && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-center border border-rose-200 text-rose-700 hover:bg-rose-50 py-3 rounded-lg text-sm font-semibold transition-colors ${project.demo && project.demo !== "#"
                          ? "flex-1"
                          : "w-full"
                          }`}>
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
