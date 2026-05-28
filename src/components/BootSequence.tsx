import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  "INITIALIZING SYSTEM...",
  "LOADING MODULES...",
  "ESTABLISHING SECURE CONNECTION...",
  "SYSTEM READY"
];

const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];
    
    bootLines.forEach((line, index) => {
      const id = setTimeout(() => {
        setLines((prev) => [...prev, line]);
      }, index * 500 + 200);
      timeoutIds.push(id);
    });

    const completeId = setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, 500);
    }, bootLines.length * 500 + 500);
    
    timeoutIds.push(completeId);

    return () => timeoutIds.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col justify-center items-start p-8 bg-[#050510] font-mono text-cyan-400"
          data-testid="boot-sequence"
        >
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-lg md:text-2xl mb-2 flex items-center gap-2"
            >
              <span className="text-violet-500">{'>'}</span>
              {line}
            </motion.div>
          ))}
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-3 h-6 bg-cyan-400 ml-6 mt-1"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootSequence;
