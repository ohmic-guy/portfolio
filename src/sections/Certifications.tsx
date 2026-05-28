import { motion } from "framer-motion";
import { Shield, Brain, Award } from "lucide-react";
import { SiGoogle, SiKaggle } from "react-icons/si";

const certs = [
  {
    name: "Certified Red Team Operations Management (CRTOM)",
    issuer: "Red Team Leaders",
    date: "Dec 2025",
    icon: "shield",
    color: "text-red-400",
    border: "hover:border-red-400/60",
    gradient: "from-red-500/10",
  },
  {
    name: "5-Day AI Agents Intensive Course with Google",
    issuer: "Kaggle",
    date: "Dec 2025",
    icon: "kaggle",
    color: "text-cyan-400",
    border: "hover:border-cyan-400/60",
    gradient: "from-cyan-500/10",
  },
  {
    name: "Google Cybersecurity Specialization",
    issuer: "Google",
    date: "Nov 2025",
    credentialId: "UE987CYSLJL7",
    icon: "google",
    color: "text-blue-400",
    border: "hover:border-blue-400/60",
    gradient: "from-blue-500/10",
  },
  {
    name: "Certified Cybersecurity Educator Professional (CCEP)",
    issuer: "Red Team Leaders",
    date: "Nov 2025",
    credentialId: "631dac4336f87ef5",
    icon: "shield",
    color: "text-violet-400",
    border: "hover:border-violet-400/60",
    gradient: "from-violet-500/10",
  },
];

function CertIcon({ icon, className }: { icon: string; className: string }) {
  if (icon === "kaggle") return <SiKaggle className={className} size={32} />;
  if (icon === "google") return <SiGoogle className={className} size={32} />;
  if (icon === "brain") return <Brain className={className} size={32} />;
  return <Shield className={className} size={32} />;
}

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-right"
        >
          <h2 className="font-display font-bold text-4xl text-white mb-4 flex items-center justify-end">
            <span className="text-cyan-400 mr-2">05.</span> CREDENTIALS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-l from-cyan-400 to-violet-500 rounded-full ml-auto" />
        </motion.div>

        <div className="flex overflow-x-auto gap-6 pb-12 pt-4 px-4 snap-x snap-mandatory -mx-4 sm:mx-0"
          style={{ scrollbarWidth: "none" }}
        >
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ rotateX: 4, rotateY: 4, scale: 1.02 }}
              style={{ transformStyle: "preserve-3d" }}
              className={`flex-none w-80 glass-panel p-6 rounded-xl relative group snap-center border border-cyan-500/20 ${cert.border} transition-colors shimmer-effect`}
              data-testid={`cert-card-${index}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`} />

              <div style={{ transform: "translateZ(20px)" }} className="relative z-10 h-full flex flex-col justify-between gap-4">
                <CertIcon icon={cert.icon} className={cert.color} />

                <div>
                  <h3 className="font-heading font-bold text-base text-white group-hover:text-cyan-300 transition-colors leading-snug mb-2">
                    {cert.name}
                  </h3>
                  <p className="font-mono text-sm text-cyan-500/70">{cert.issuer}</p>
                  <p className="font-mono text-xs text-white/40 mt-1">Issued {cert.date}</p>
                  {cert.credentialId && (
                    <p className="font-mono text-xs text-violet-400/60 mt-1 truncate">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>

                <div className="w-8 h-[2px] bg-cyan-500/50 rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
