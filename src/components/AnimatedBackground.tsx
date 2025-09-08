import { motion } from "motion/react";

const FloatingOrb = ({ 
  size, 
  color, 
  delay, 
  duration,
  initialX,
  initialY 
}: {
  size: number;
  color: string;
  delay: number;
  duration: number;
  initialX: string;
  initialY: string;
}) => (
  <motion.div
    className={`absolute rounded-full opacity-20 blur-xl ${color}`}
    style={{ 
      width: size, 
      height: size,
      left: initialX,
      top: initialY
    }}
    animate={{
      x: [0, 100, -50, 0],
      y: [0, -80, 60, 0],
      scale: [1, 1.2, 0.8, 1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  />
);

const WaveElement = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute inset-0 opacity-5"
    style={{
      background: "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)",
      height: "2px",
    }}
    animate={{
      x: ["-100%", "100%"],
      scaleY: [1, 2, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: "linear",
    }}
  />
);

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Orbs */}
      <FloatingOrb 
        size={200} 
        color="bg-purple-500" 
        delay={0} 
        duration={20}
        initialX="10%"
        initialY="20%"
      />
      <FloatingOrb 
        size={150} 
        color="bg-blue-500" 
        delay={3} 
        duration={25}
        initialX="80%"
        initialY="60%"
      />
      <FloatingOrb 
        size={120} 
        color="bg-emerald-500" 
        delay={6} 
        duration={18}
        initialX="60%"
        initialY="10%"
      />
      <FloatingOrb 
        size={180} 
        color="bg-indigo-500" 
        delay={9} 
        duration={22}
        initialX="20%"
        initialY="70%"
      />
      <FloatingOrb 
        size={100} 
        color="bg-rose-500" 
        delay={12} 
        duration={16}
        initialX="90%"
        initialY="30%"
      />

      {/* Animated Waves */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div key={i} style={{ top: `${10 + i * 12}%` }}>
            <WaveElement delay={i * 2} />
          </div>
        ))}
      </div>

      {/* Particle System */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay Animation */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 60% 30%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}