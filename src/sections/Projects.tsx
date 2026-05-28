import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Mnemosyne",
    type: "Python Library",
    description: "Immutable (persistent) and time-aware data structures. Every operation creates a new version — no data is ever lost, always roll back to any previous state. 12 fully-typed data structures, 126 tests, zero mutation.",
    tech: ["Python", "Immutable DS", "Type Safety", "Persistent Trees"],
    link: "https://github.com/ohmic-guy/Mnemosyne",
    span: "col-span-1 lg:col-span-2",
    accent: "cyan",
  },
  {
    title: "WEB_SHERLOCK",
    type: "Security Scanner",
    description: "Python-based vulnerability scanner — port scanning, SQL injection & XSS detection, sensitive file exposure checks. Generates a Markdown report summarizing all findings.",
    tech: ["Python", "Port Scanning", "SQLi/XSS", "Markdown Reports"],
    link: "https://github.com/ohmic-guy/web_sherlock",
    span: "col-span-1 lg:col-span-1",
    accent: "red",
  },
  {
    title: "Cryptex Terminal",
    type: "Encryption App",
    description: "Real-time encryption-decryption app with a dark terminal UI. React + Flask + Fernet encryption with auto-generated keys, live character-by-character preview, and one-click copy.",
    tech: ["React", "Flask", "Fernet", "Python"],
    link: "https://github.com/ohmic-guy/Cryptex",
    span: "col-span-1 lg:col-span-1",
    accent: "violet",
  },
  {
    title: "AtmoSync",
    type: "Blockchain + IoT",
    description: "Decentralized framework combining Blockchain and IoT for secure data integrity. Smart contracts on Polygon Amoy Testnet, token-based auth, AES encryption, and tamper-proof logs across connected devices.",
    tech: ["Solidity", "Hardhat", "Ethers.js", "IoT", "AES", "Polygon"],
    link: "https://github.com/ohmic-guy/AeroCoin_atmosync",
    span: "col-span-1 lg:col-span-2",
    accent: "cyan",
  },
  {
    title: "Redis-ish",
    type: "Systems / C",
    description: "A compact, learnable Redis-like microserver written in C — minimal surface, muscular intent. Perfect for hacking, teaching, and micro-benchmarks.",
    tech: ["C", "TCP/IP", "Key-Value Store", "Microserver", "Systems Programming"],
    link: "https://github.com/ohmic-guy/mini-redis",
    span: "col-span-1 lg:col-span-3",
    accent: "amber",
  },
];

const accentMap: Record<string, { border: string; label: string; pill: string; hover: string }> = {
  cyan: {
    border: "hover:border-cyan-400/60",
    label: "text-cyan-400",
    pill: "bg-cyan-950/40 border-cyan-500/20 text-cyan-200",
    hover: "from-cyan-500/5",
  },
  violet: {
    border: "hover:border-violet-400/60",
    label: "text-violet-400",
    pill: "bg-violet-950/40 border-violet-500/20 text-violet-200",
    hover: "from-violet-500/5",
  },
  red: {
    border: "hover:border-red-400/60",
    label: "text-red-400",
    pill: "bg-red-950/40 border-red-500/20 text-red-200",
    hover: "from-red-500/5",
  },
  amber: {
    border: "hover:border-amber-400/60",
    label: "text-amber-400",
    pill: "bg-amber-950/40 border-amber-500/20 text-amber-200",
    hover: "from-amber-500/5",
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display font-bold text-4xl text-white mb-4">
            <span className="text-cyan-400 mr-2">03.</span> ARCHIVES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const a = accentMap[project.accent];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ rotateX: 2, rotateY: -2, z: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ transformStyle: "preserve-3d" }}
                className={`glass-panel p-8 rounded-xl flex flex-col group relative border border-cyan-500/20 ${a.border} transition-colors ${project.span}`}
                data-testid={`project-card-${i}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${a.hover} to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none`} />

                <div className="flex justify-between items-start mb-6" style={{ transform: "translateZ(30px)" }}>
                  <div>
                    <span className={`font-mono text-xs ${a.label} mb-2 block tracking-widest uppercase`}>{project.type}</span>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-full hover:bg-cyan-500/10 flex-shrink-0"
                    data-testid={`project-github-${i}`}
                  >
                    <Github size={22} />
                  </a>
                </div>

                <p className="text-gray-400 font-sans text-sm leading-relaxed mb-8 flex-grow" style={{ transform: "translateZ(20px)" }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto" style={{ transform: "translateZ(40px)" }}>
                  {project.tech.map(tech => (
                    <span key={tech} className={`px-3 py-1 rounded-full text-xs font-mono border ${a.pill}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/ohmic-guy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-500/50 text-cyan-400 font-mono hover:bg-cyan-500/10 transition-colors rounded-sm hover:neon-glow group"
            data-testid="more-projects-link"
          >
            <span>ACCESS MORE PROJECTS</span>
            <Github size={18} className="group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
