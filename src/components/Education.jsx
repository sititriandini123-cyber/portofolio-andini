import React from "react";

const educations = [
  {
    level: "Madrasah Ibtidaiyah (MI)",
    institution: "MI Mazroatussyibyan",
    description:
      "Membangun fondasi intelektual yang kuat melalui prestasi akademik dan ekstrakurikuler.",
    logo: "/logo-mi.jpeg",
    color: "from-rose-400 to-fuchsia-500",
  },
  {
    level: "Sekolah Menengah Pertama (SMP)",
    institution: "MTs Al-Muchtari Boarding School",
    description:
      "Pencapaian akademik unggulan yang disinergikan dengan eksplorasi ilmiah dan kepemimpinan.",
    logo: "/logo/logo-smp.webp", // ← ganti nanti
    color: "from-rose-400 to-fuchsia-500",
  },
  {
    level: "Madrasah Aliyah Negeri (MAN)",
    institution: "MAN 4 Bogor",
    description:
      "Sinergi antara penguasaan sains dan pengembangan kepemimpinan melalui aktivitas organisasi .",
    logo: "/logo-man-4.jpeg",
    color: "from-rose-400 to-fuchsia-500",
  },
  {
    level: "Perguruan Tinggi",
    institution: "Universitas Padjajaran – Sastra Arab ",
    description:
      "Memadukan analisis linguistik dengan ketangkasan manajerial di organisasi serta eksplorasi industri kreatif.",
    logo: "/logo-unpad.jpeg",
    color: "from-rose-500 to-purple-600",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-32 overflow-hidden bg-white"
    >
      {/* background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(244,63,94,0.05),transparent_45%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(217,70,239,0.05),transparent_45%)]"></div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-rose-600 to-fuchsia-600 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-fuchsia-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
            “An academic journey that builds discipline, mindset, and professional growth.”
          </p>
        </div>

        <div className="relative">
          {/* TIMELINE LINE (KANAN) */}
          <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-400 to-fuchsia-400 rounded-full"></div>

          <div className="space-y-14">
            {educations.map((edu, index) => (
              <div key={index} className="relative group">
                {/* DOT */}
                <div
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className={`absolute right-4 top-6 w-9 h-9 bg-gradient-to-r ${edu.color} rounded-full shadow-lg flex items-center justify-center z-10`}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* CARD */}
                <div
                  className="mr-20"
                  data-aos="fade-up"
                  data-aos-delay={index * 100 + 100}
                >
                  <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl border border-rose-100 shadow-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgba(244,63,94,0.12)] hover:-translate-y-1 relative overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color}`}
                    ></div>

                    <div className="flex items-start justify-between gap-6">
                      {/* TEXT */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-800">
                          {edu.level}
                        </h3>
                        <p className="text-slate-700 font-medium mt-1">
                          {edu.institution}
                        </p>
                      </div>

                      {/* LOGO (KANAN) */}
                      <div className="w-16 h-16 rounded-xl border border-rose-100 bg-white shadow-sm flex items-center justify-center overflow-hidden shrink-0">
                        <img
                          src={import.meta.env.BASE_URL + edu.logo.replace(/^\//, "")}
                          alt={`${edu.institution} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>


                    <p className="text-slate-600 leading-relaxed mt-4">
                      {edu.description}
                    </p>

                    {/* hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-50/0 to-fuchsia-50/0 group-hover:from-rose-50/40 group-hover:to-fuchsia-50/40 transition-all duration-500 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
