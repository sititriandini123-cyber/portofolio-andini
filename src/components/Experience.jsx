import React, { useState } from "react";

const experiences = [
  {
    title: "Ketua pramuka",
    date: "Februari 2024 - Januari 2025",
    description:
      "Bertanggung jawab atas manajemen operasional, penyusunan jadwal latihan, serta pembekalan teknis untuk persiapan kompetisi.",
    logo: "/logo-dipodesa.jpeg",
    instagramUrl: "https://www.instagram.com/scoutdipodesa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    title: "Pramuka penegak garuda kab.bogor",
    date: "Agustus 2024",
    description:
      "Menyandang gelar kehormatan pramuka tertinggi tingkat penegak.",
    logo: "/logo-kwarcab.jpeg",
    instagramUrl: "https://www.instagram.com/kwarcab_kabbogor?igsh=NTZrZjNhNXE1eDd3",
  },
  {
    title: "Korps protokoler mahasiswa unpad",
    date: "Oktober 2025 - sekarang",
    description:
      "Menjadi seorang yang berperan dalam kegiatan acara seperti acting dan mengatur hubungan antar internal.",
    logo: "/logo-kpm.jpeg",
    instagramUrl: "https://www.instagram.com/kpmunpad?igsh=b29pb2p0dGg2OXB5",
  },
  {
    title: "Campus creator network unpad ",
    date: "Oktober 2025 - Januari 2026",
    description:
      "Mengoptimalkan branding digital dan jangkauan konten kreatif melalui analisis trend dan strategi storytelling.",
    logo: "/logo-ccn.jpeg",
    instagramUrl: "https://www.instagram.com/campuscreatornetwork?igsh=MWV0cGlqc3A4dnAwaQ==",
  },
  {
    title: "Hima sastra arab",
    date: "Februari 2026 - sekarang",
    description:
      "Berada di staff hubungan eksternal, bekerja sama dengan pihak eksternal.",
    logo: "/logo-himasa.jpeg",
    instagramUrl: "https://www.instagram.com/himasaunpad?igsh=NDZkY2t6Ymh2aHg2",
  },
];

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="experience"
      className="relative py-32 overflow-hidden bg-white"
    >
      {/* background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(244,63,94,0.05),transparent_45%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(217,70,239,0.05),transparent_45%)]"></div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-rose-600 to-fuchsia-600 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-fuchsia-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
            “A journey of career growth and organizational experiences that shape my professional skills and character.”
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-400 to-fuchsia-400 rounded-full"></div>

          <div className="space-y-14">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Dot */}
                <div
                  className="absolute left-4 top-6 w-9 h-9 bg-gradient-to-r from-rose-400 to-fuchsia-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.3)] flex items-center justify-center z-10"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Card */}
                <div
                  className="ml-20"
                  data-aos="fade-up"
                  data-aos-delay={index * 100 + 100}
                >
                  <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl border border-rose-100 shadow-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgba(244,63,94,0.12)] hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 to-fuchsia-500"></div>

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-center gap-4 mb-4 sm:mb-0">
                        <img
                          src={import.meta.env.BASE_URL + exp.logo.replace(/^\//, "")}
                          alt={`${exp.title} logo`}
                          className="w-12 h-12 rounded-xl border border-rose-100 shadow-sm object-contain bg-white"
                        />
                        <h3 className="text-2xl font-bold text-slate-800">
                          {exp.title}
                        </h3>
                      </div>
                      <span className="inline-flex items-center px-4 py-2 bg-rose-50 text-rose-700 text-sm font-semibold rounded-full border border-rose-100">
                        {exp.date}
                      </span>
                    </div>

                    <p className="text-slate-600 leading-relaxed mt-4">
                      {exp.description}
                    </p>

                    {/* ACTION LINKS */}
                    <div className="flex flex-wrap gap-4 mt-5">
                      {exp.certificateUrl && (
                        <button
                          onClick={() => setSelectedImage(exp.certificateUrl)}
                          className="text-sm font-medium text-rose-600 hover:text-fuchsia-600 underline underline-offset-4"
                        >
                          📄 Lihat Sertifikat
                        </button>
                      )}

                      {exp.instagramUrl && (
                        <a
                          href={exp.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-rose-600 hover:text-fuchsia-600 underline underline-offset-4"
                        >
                          📸 Instagram
                        </a>
                      )}
                    </div>

                    {/* hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-50/0 to-fuchsia-50/0 group-hover:from-rose-50/40 group-hover:to-fuchsia-50/40 transition-all duration-500 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-[0_20px_60px_rgba(244,63,94,0.15)] max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white font-semibold rounded-t-xl">
              <h3 className="text-lg">Sertifikat</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-white text-2xl hover:scale-110 transition"
              >
                &times;
              </button>
            </div>
            <img
              src={import.meta.env.BASE_URL + selectedImage.replace(/^\//, "")}
              alt="Sertifikat"
              className="w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
