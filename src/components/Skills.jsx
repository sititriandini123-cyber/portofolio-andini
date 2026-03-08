import React from "react";
import { Mic, Camera, Video, Megaphone, MonitorPlay, Palette, FileText } from "lucide-react";

const skills = [
  {
    name: "Public Speaking",
    icon: Mic,
    level: 95,
    category: "Communication",
    description: "MC dan Speaker",
    color: "from-rose-400 to-pink-500",
    bgLight: "bg-rose-50/50",
  },
  {
    name: "Photography",
    icon: Camera,
    level: 85,
    category: "Creative",
    description: "Menangkap momen dengan komposisi visual yang menarik",
    color: "from-fuchsia-400 to-purple-500",
    bgLight: "bg-fuchsia-50/50",
  },
  {
    name: "Videography",
    icon: Video,
    level: 85,
    category: "Creative",
    description: "Produksi dan pengambilan video untuk konten digital",
    color: "from-pink-400 to-rose-500",
    bgLight: "bg-pink-50/50",
  },
  {
    name: "Content Strategy",
    icon: Megaphone,
    level: 85,
    category: "Marketing",
    description: "Merancang alur konten yang menarik untuk media sosial",
    color: "from-rose-500 to-fuchsia-600",
    bgLight: "bg-rose-50/50",
  },
  {
    name: "Editing",
    icon: MonitorPlay,
    level: 90,
    category: "Tools",
    description: "Produksi video dengan komposisi visual yang menarik",
    color: "from-fuchsia-500 to-purple-600",
    bgLight: "bg-fuchsia-50/50",
  },
  {
    name: "Graphic Design",
    icon: Palette,
    level: 85,
    category: "Tools",
    description: "Menggambar dengan komposisi visual yang menarik",
    color: "from-purple-400 to-fuchsia-400",
    bgLight: "bg-purple-50/50",
  },
  {
    name: "Microsoft Office",
    icon: FileText,
    level: 90,
    category: "Administrasi",
    description: "Manajemen data dan dokumen",
    color: "from-rose-300 to-pink-400",
    bgLight: "bg-rose-50/50",
  },
];

const Skills = () => {
  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <section
      id="skills"
      className="relative py-32 overflow-hidden bg-white"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,63,94,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(217,70,239,0.05),transparent_50%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block mb-4 text-sm font-bold tracking-[0.2em] uppercase text-rose-600 bg-rose-50 px-4 py-1.5 rounded-full border border-rose-100">
            Expertise
          </span>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 to-fuchsia-600 bg-clip-text text-transparent mb-6">
            My Skills
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A combination of technical, creative, and communication to provide the best results.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-24" data-aos="fade-up">
            <h3 className="text-3xl font-bold mb-10 text-slate-800 flex items-center gap-4">
              <div className="h-2 w-12 bg-gradient-to-r from-rose-400 to-purple-500 rounded-full"></div>
              {category}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <div
                    key={skill.name}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="relative group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(244,63,94,0.12)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  >
                    {/* Hover Glow Background */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${skill.bgLight}`}></div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-8">
                        {/* Icon Container */}
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${skill.color} text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                          <skill.icon className="w-8 h-8" />
                        </div>
                        {/* Level Badge */}
                        <div className={`px-4 py-1.5 rounded-full bg-white shadow-sm border border-slate-100 flex items-center gap-2`}>
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} animate-pulse`}></span>
                          <span className="text-sm font-bold text-slate-700">{skill.level}%</span>
                        </div>
                      </div>

                      <h4 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-slate-600 mb-8 leading-relaxed h-12">
                        {skill.description}
                      </p>

                      {/* Progress Bar Container */}
                      <div className="relative pt-4 px-1">
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Proficiency</span>
                        </div>
                        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner flex p-0.5">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                            style={{
                              width: `${skill.level}%`,
                              transition: 'width 2s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] -translate-x-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Decorative border gradient on hover */}
                    <div className={`absolute inset-0 border-2 border-transparent rounded-3xl group-hover:bg-gradient-to-br group-hover:${skill.color} group-hover:opacity-10 transition-all duration-500 pointer-events-none`}></div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;




