import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoadingScreen({ isLoaded }: { isLoaded: boolean }) {
  const [loadingText, setLoadingText] = useState('LOADING');
  
  useEffect(() => {
    const texts = ['LOADING', 'LOADING.', 'LOADING..', 'LOADING...'];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setLoadingText(texts[index]);
    }, 300);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] bg-[#f8f8f8] flex flex-col items-center justify-center"
        >
          {/* Logo / Brand Area */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-[#6E8FEA] mb-2">
              Aryan
            </h1>
            <p className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
              Visual Designer
            </p>
          </motion.div>
          
          {/* Animated Loading Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 60, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-[2px] bg-[#6E8FEA] mt-8"
          />
          
          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="mt-6"
          >
            <p className="text-[10px] font-mono text-neutral-400 tracking-widest">
              {loadingText}
            </p>
          </motion.div>
          
          {/* Progress dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="flex gap-2 mt-4"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.5, opacity: 0.3 }}
                animate={{
                  scale: [0.5, 1, 0.5],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
                className="w-1.5 h-1.5 rounded-full bg-[#6E8FEA]"
              />
            ))}
          </motion.div>
          
          {/* Footer text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8 text-[10px] font-mono text-neutral-300 tracking-widest"
          >
            ©2025 Aryan Abhishek
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
