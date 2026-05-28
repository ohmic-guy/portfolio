import { motion } from "framer-motion";

const experiences = [
  {
    role: "GenAI Engineer",
    company: "Neuradyne AI Systems Pvt. Ltd.",
    date: "May 2026 – Present",
    location: "Bhubaneswar, Odisha",
    current: true,
  },
  {
    role: "Student Body Member",
    company: "thingQbator TAT (NASSCOM + Cisco CSR)",
    date: "Feb 2025 – Present",
    location: "Bhubaneswar, Odisha",
    current: true,
  },
  {
    role: "SIEM Engineer",
    company: "PyDaddy",
    date: "Sep 2024 – Apr 2025",
    location: "India",
    current: false,
  },
  {
    role: "B.Tech CSE (AI & ML)",
    company: "Trident Academy of Technology, BPUT",
    date: "Sep 2024 – Present",
    location: "Bhubaneswar, Odisha",
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display font-bold text-4xl text-white mb-4">
            <span className="text-cyan-400 mr-2">02.</span> TIMELINE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mx-auto" />
        </motion.div>

        <div className="relative border-l border-cyan-500/30 ml-3 md:ml-0 md:border-none">
          {/* Central line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-cyan-500/30 -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className={`mb-12 relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 z-10">
                {exp.current ? (
                  <>
                    {/* Outer pulse ring */}
                    <motion.div
                      className="absolute rounded-full border-2 border-cyan-400"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                      style={{ width: 20, height: 20, top: -4, left: -4 }}
                    />
                    {/* Bright core dot */}
                    <div
                      className="w-3 h-3 rounded-full bg-cyan-400"
                      style={{ boxShadow: "0 0 10px #00F5FF, 0 0 24px rgba(0,245,255,0.6)" }}
                    />
                  </>
                ) : (
                  <div className="w-3 h-3 rounded-full bg-cyan-800 border border-cyan-600/50" />
                )}
              </div>

              {/* Card */}
              <div className={`w-full md:w-[45%] pl-6 md:pl-0 ${
                index % 2 === 0 ? "md:pl-12" : "md:pr-12 text-left md:text-right"
              }`}>
                <div
                  className={`relative p-6 rounded-lg transition-all group overflow-hidden ${
                    exp.current
                      ? "glass-panel border border-cyan-400/50"
                      : "glass-panel hover:border-cyan-400/30 transition-colors"
                  }`}
                  style={exp.current ? {
                    boxShadow: "0 0 20px rgba(0,245,255,0.12), inset 0 0 20px rgba(0,245,255,0.04)"
                  } : undefined}
                >
                  {/* Active shimmer sweep on current role */}
                  {exp.current && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent pointer-events-none"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                    />
                  )}

                  {/* ACTIVE badge */}
                  {exp.current && (
                    <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                      <motion.span
                        className="w-2 h-2 rounded-full bg-cyan-400 inline-block"
                        animate={{ opacity: [1, 0.2, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                      />
                      <span className="font-mono text-[10px] tracking-widest text-cyan-400 uppercase">
                        Active
                      </span>
                    </div>
                  )}

                  <h3 className={`font-display text-xl font-bold mb-1 transition-colors ${
                    exp.current
                      ? "text-cyan-300 group-hover:text-cyan-200"
                      : "text-cyan-300/70 group-hover:text-cyan-400"
                  }`}>
                    {exp.role}
                  </h3>
                  <h4 className={`font-heading text-base mb-2 ${exp.current ? "text-white" : "text-white/70"}`}>
                    {exp.company}
                  </h4>
                  <div className="font-mono text-sm text-gray-400 flex flex-col gap-1">
                    <span className={exp.current ? "text-cyan-500/80" : ""}>{exp.date}</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
