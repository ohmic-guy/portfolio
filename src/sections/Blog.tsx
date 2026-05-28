import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const posts = [
  {
    title: "RAG Without Vectors: BM25 + MongoDB for NCERT",
    tag: "AI/ML",
  },
  {
    title: "AI + Cybersecurity: The Next Frontier",
    tag: "Security",
  },
  {
    title: "Building a Crypto Bot: From Signals to Production",
    tag: "Trading",
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display font-bold text-4xl text-white mb-4">
            <span className="text-cyan-400 mr-2">06.</span> TRANSMISSIONS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 rounded-xl relative overflow-hidden group h-64 flex flex-col justify-between"
            >
              {/* Coming soon overlay */}
              <div className="absolute inset-0 bg-[#050510]/80 backdrop-blur-sm z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-mono text-cyan-400 tracking-widest font-bold px-4 py-2 border border-cyan-400 bg-cyan-950/50 rounded-sm">
                  COMING SOON
                </span>
              </div>

              {/* Shimmer effect inside */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

              <div>
                <span className="px-3 py-1 rounded-full text-xs font-mono text-violet-300 bg-violet-900/30 border border-violet-500/30 mb-4 inline-block">
                  {post.tag}
                </span>
                <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-200 transition-colors">
                  {post.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-2 text-gray-500 font-mono text-sm mt-4">
                <BookOpen size={16} />
                <span>Read Article</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-block font-mono text-sm text-cyan-400/70 hover:text-cyan-400 hover:underline underline-offset-4 transition-all"
            onClick={(e) => e.preventDefault()}
          >
            [ VIEW ALL ON HASHNODE ]
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Blog;
