import { motion } from "framer-motion";

const technologies = [
  "Python", "FastAPI", "React", "Node.js", "MongoDB", "PostgreSQL", 
  "Docker", "AWS", "TensorFlow", "PyTorch", "LangChain", "Cybersecurity",
  "Penetration Testing", "SIEM", "Git"
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="font-display font-bold text-4xl text-white mb-4">
            <span className="text-cyan-400 mr-2">01.</span> IDENTIFICATION
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-violet-500 rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative aspect-square max-w-md mx-auto rounded-lg border border-cyan-500/30 glass-panel overflow-hidden flex items-center justify-center">
              {/* Fallback avatar if no image */}
              <div className="w-full h-full bg-[#0a0a1a] flex items-center justify-center">
                <span className="font-display text-8xl text-cyan-500/20 font-black tracking-tighter">OHMIC</span>
              </div>
              <div className="absolute inset-0 border border-cyan-400/50 rounded-lg pointer-events-none mix-blend-overlay" />
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-2xl text-white mb-6">
              Engineer of Intelligent Systems. <br/>
              <span className="text-cyan-400">Defender of Networks.</span>
            </h3>
            
            <p className="text-gray-300 mb-8 font-sans leading-relaxed text-lg">
              I engineer intelligent systems and secure them. At the intersection of AI and cybersecurity — building tools that think, detect, and defend. Born in Odisha, India, I operate where offensive security meets generative intelligence.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["AI/ML", "Ethical Hacking", "GenAI", "Deep Learning", "Red Team"].map((chip) => (
                <span key={chip} className="px-4 py-1.5 rounded-full text-sm font-mono text-cyan-300 border border-cyan-500/30 bg-cyan-950/30">
                  {chip}
                </span>
              ))}
            </div>
            
            <div className="p-4 glass-panel border-l-4 border-l-violet-500 rounded-r-md">
              <p className="font-mono text-sm text-gray-400">
                <span className="text-violet-400">STATUS:</span> ACTIVE<br/>
                <span className="text-violet-400">LOCATION:</span> BHUBANESWAR, IN<br/>
                <span className="text-violet-400">DIRECTIVE:</span> BUILD. BREAK. SECURE.
              </p>
            </div>

          </motion.div>
        </div>

      </div>

      {/* Infinite Ticker */}
      <div className="mt-24 border-y border-cyan-500/20 bg-cyan-950/10 py-4 overflow-hidden relative flex">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050510] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050510] to-transparent z-10" />
        
        <div className="flex animate-scroll whitespace-nowrap items-center">
          {[...technologies, ...technologies].map((tech, i) => (
            <span key={i} className="mx-8 font-display text-xl text-gray-500 font-bold uppercase tracking-widest">
              {tech}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;
