import { motion } from "motion/react";
import { Heart, Brain, Zap, Shield, Star, Sparkles } from "lucide-react";

const icons = [Heart, Brain, Zap, Shield, Star, Sparkles];

const BreathingOrb = ({ delay, size, color }: { delay: number; size: number; color: string }) => (
  <motion.div
    className={`absolute rounded-full ${color} opacity-10 blur-xl`}
    style={{ 
      width: size, 
      height: size,
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 80 + 10}%`,
    }}
    animate={{
      scale: [1, 1.3, 1],
      opacity: [0.1, 0.3, 0.1],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  />
);

const MicroIcon = ({ 
  Icon, 
  delay, 
  position 
}: {
  Icon: any;
  delay: number;
  position: { x: string; y: string };
}) => (
  <motion.div
    className="absolute text-purple-400/20"
    style={{ left: position.x, top: position.y }}
    initial={{ scale: 0, rotate: 0 }}
    animate={{ 
      scale: [0, 1, 0],
      rotate: [0, 360],
      y: [0, -20, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    <Icon className="h-5 w-5" />
  </motion.div>
);

const PulsingRing = ({ delay, size }: { delay: number; size: number }) => (
  <motion.div
    className="absolute border border-purple-400/10 rounded-full"
    style={{
      width: size,
      height: size,
      left: `${Math.random() * 70 + 15}%`,
      top: `${Math.random() * 70 + 15}%`,
    }}
    animate={{
      scale: [0.8, 1.2, 0.8],
      opacity: [0.1, 0.3, 0.1],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: "linear"
    }}
  />
);

export function MicroInteractions() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-5">
      {/* Breathing Orbs */}
      {[...Array(5)].map((_, i) => (
        <BreathingOrb
          key={`orb-${i}`}
          delay={i * 1.2}
          size={80 + Math.random() * 60}
          color={[
            "bg-purple-500",
            "bg-blue-500", 
            "bg-emerald-500",
            "bg-amber-500",
            "bg-rose-500"
          ][i]}
        />
      ))}

      {/* Micro Icons */}
      {icons.map((Icon, i) => (
        <MicroIcon
          key={`icon-${i}`}
          Icon={Icon}
          delay={i * 1.5}
          position={{
            x: `${15 + (i * 15)}%`,
            y: `${20 + Math.random() * 60}%`
          }}
        />
      ))}

      {/* Pulsing Rings */}
      {[...Array(4)].map((_, i) => (
        <PulsingRing
          key={`ring-${i}`}
          delay={i * 2}
          size={40 + i * 20}
        />
      ))}

      {/* Subtle Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Corner Breathing Elements */}
      <motion.div
        className="absolute top-8 left-8 w-3 h-3 bg-purple-400/20 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute top-8 right-8 w-2 h-2 bg-blue-400/20 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      
      <motion.div
        className="absolute bottom-8 left-8 w-4 h-4 bg-emerald-400/20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      />
      
      <motion.div
        className="absolute bottom-8 right-8 w-3 h-3 bg-amber-400/20 rounded-full"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
      />
    </div>
  );
}