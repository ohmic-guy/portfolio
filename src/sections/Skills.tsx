import { motion } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts";

const aiSkills = ["Deep Learning", "NLP", "Computer Vision", "Generative AI", "Agentic AI", "LLMs", "RAG Systems", "Prompt Engineering"];
const cyberSkills = ["Ethical Hacking", "Penetration Testing", "SIEM", "Cryptography", "Red Team Ops", "Threat Detection"];
const devStack = ["Python", "C", "C++", "AgenticAI", "GenAI", "Agentscope", "LangChain", "LangGraph", "Linux", "Git"];

const radarData = [
  { subject: 'AI/ML', A: 90, fullMark: 100 },
  { subject: 'Cybersecurity', A: 85, fullMark: 100 },
  { subject: 'Agent Systems', A: 80, fullMark: 100 },
  { subject: 'Problem Solving', A: 92, fullMark: 100 },
  { subject: 'Research', A: 88, fullMark: 100 },
];

const SkillPill = ({ skill }: { skill: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative px-4 py-2 rounded-md font-mono text-sm border border-cyan-500/30 bg-[#0a0a1a] text-cyan-100 overflow-hidden group cursor-default"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
    <span className="relative z-10">{skill}</span>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display font-bold text-4xl text-white mb-4">
            <span className="text-cyan-400 mr-2">04.</span> CAPABILITIES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* AI Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-xl border-t-2 border-t-cyan-400"
          >
            <h3 className="font-display text-xl text-cyan-400 mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Artificial Intelligence
            </h3>
            <div className="flex flex-wrap gap-3">
              {aiSkills.map(s => <SkillPill key={s} skill={s} />)}
            </div>
          </motion.div>

          {/* Cyber Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-xl border-t-2 border-t-violet-500"
          >
            <h3 className="font-display text-xl text-violet-400 mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
              Cybersecurity
            </h3>
            <div className="flex flex-wrap gap-3">
              {cyberSkills.map(s => <SkillPill key={s} skill={s} />)}
            </div>
          </motion.div>
        </div>

        {/* Dev Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h3 className="font-mono text-gray-400 mb-6 uppercase tracking-widest text-sm">Development Stack</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {devStack.map(s => <SkillPill key={s} skill={s} />)}
          </div>
        </motion.div>

        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="h-[400px] w-full max-w-2xl mx-auto glass-panel rounded-xl p-4 flex items-center justify-center relative"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none rounded-xl" />
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
              <PolarGrid stroke="rgba(0, 245, 255, 0.2)" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12, fontFamily: 'JetBrains Mono' }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Proficiency"
                dataKey="A"
                stroke="#00F5FF"
                fill="#00F5FF"
                fillOpacity={0.3}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(5, 5, 16, 0.9)', borderColor: 'rgba(0, 245, 255, 0.3)', borderRadius: '8px', fontFamily: 'JetBrains Mono' }}
                itemStyle={{ color: '#00F5FF' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
