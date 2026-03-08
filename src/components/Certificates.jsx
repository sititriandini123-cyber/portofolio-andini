import { useState } from "react";

const certificates = [
  {
    title: "Master Of Ceremony",
    image: "/sertif-mc.jpeg",
    link: "",
    category: "Campus Expo",
  },
  {
    title: "Pramuka Penegak Garuda Kab.Bogor",
    image: "/sertif-garuda.jpeg",
    link: "",
    category: "Prestasi",
  },
  {
    title: "Campus Creator Network",
    image: "/sertif-ccn.jpeg",
    link: "",
    category: "Peserta",
  },
];

export default function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(certificates.map((c) => c.category))];

  const filtered =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === selectedCategory);

  return (
    <section
      id="certificates"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-sm font-semibold text-rose-600 tracking-widest uppercase bg-rose-50 px-4 py-1.5 rounded-full border border-rose-100">
            Achievements
          </span>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent my-4">
            Certificates
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A collection of my professional certifications and learning
            achievements
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-3 mb-14 flex-wrap" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${selectedCategory === cat
                ? "bg-gradient-to-r from-rose-500 to-fuchsia-500 text-white shadow-md shadow-rose-200"
                : "bg-white/80 text-slate-700 hover:text-rose-600 border border-slate-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-rose-100 shadow-sm hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <img
                  src={import.meta.env.BASE_URL + cert.image.replace(/^\//, "")}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block mb-3 px-3 py-1 bg-rose-50 text-rose-600 border border-rose-100 text-xs font-semibold rounded-full">
                  {cert.category}
                </span>

                <h3 className="font-bold text-lg text-slate-800 mb-4 group-hover:text-rose-600 transition">
                  {cert.title}
                </h3>

                <div className="text-rose-600 font-semibold text-sm">
                  Lihat Sertifikat →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
