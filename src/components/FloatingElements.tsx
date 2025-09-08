import { motion } from "motion/react";
import { Heart, Zap, Star, Sparkles, Brain, Target } from "lucide-react";

const icons = [Heart, Zap, Star, Sparkles, Brain, Target];

const FloatingIcon = ({ 
  Icon, 
  delay, 
  duration,
  startX,
  startY,
  color 
}: {
  Icon: any;
  delay: number;
  duration: number;
  startX: string;
  startY: string;
  color: string;
}) => (
  <motion.div
    className={`absolute ${color} opacity-20`}
    style={{ 
      left: startX, 
      top: startY 
    }}
    initial={{ scale: 0, rotate: 0 }}
    animate={{ 
      scale: [0, 1, 0],
      rotate: [0, 180, 360],
      y: [0, -50, 0],
      x: [0, 30, -30, 0]
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    <Icon className="h-6 w-6" />
  </motion.div>
);

const PulsingDot = ({ 
  delay, 
  left, 
  top, 
  color 
}: {
  delay: number;
  left: string;
  top: string;
  color: string;
}) => (
  <motion.div
    className={`absolute w-2 h-2 ${color} rounded-full`}
    style={{ left, top }}
    animate={{
      scale: [0, 1.5, 0],
      opacity: [0, 0.8, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "easeOut"
    }}
  />
);

const MovingLine = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
    style={{ 
      width: "200px",
      left: "10%",
      top: "50%"
    }}
    animate={{
      x: ["0%", "80%", "0%"],
      rotate: [0, 90, 180, 270, 360],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      delay,
      ease: "linear"
    }}
  />
);

export function FloatingElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {/* Floating Icons */}
      {icons.map((Icon, index) => (
        <FloatingIcon
          key={index}
          Icon={Icon}
          delay={index * 2}
          duration={8 + Math.random() * 4}
          startX={`${10 + Math.random() * 80}%`}
          startY={`${10 + Math.random() * 80}%`}
          color={[
            "text-purple-400",
            "text-blue-400", 
            "text-emerald-400",
            "text-amber-400",
            "text-rose-400",
            "text-indigo-400"
          ][index]}
        />
      ))}

      {/* Pulsing Dots */}
      {[...Array(15)].map((_, i) => (
        <PulsingDot
          key={i}
          delay={i * 0.5}
          left={`${Math.random() * 100}%`}
          top={`${Math.random() * 100}%`}
          color={[
            "bg-purple-400",
            "bg-blue-400", 
            "bg-emerald-400",
            "bg-amber-400",
            "bg-rose-400"
          ][i % 5]}
        />
      ))}

      {/* Moving Lines */}
      {[...Array(5)].map((_, i) => (
        <MovingLine key={i} delay={i * 3} />
      ))}

      {/* Corner Animations */}
      <motion.div
        className="absolute top-4 right-4 w-16 h-16 border border-purple-400/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute top-2 left-2 w-2 h-2 bg-purple-400/40 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-4 w-12 h-12 border-2 border-blue-400/20 rounded-lg"
        animate={{ 
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Flowing Stream Effect */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: "linear-gradient(45deg, transparent 40%, rgba(139, 92, 246, 0.1) 50%, transparent 60%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}