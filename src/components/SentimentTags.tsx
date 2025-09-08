import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { 
  Smile, 
  Heart, 
  Zap, 
  Shield, 
  Target, 
  Sparkles, 
  Coffee, 
  Sun,
  Moon,
  CloudRain
} from "lucide-react";

interface SentimentTag {
  id: string;
  label: string;
  icon: any;
  color: string;
  bgColor: string;
  borderColor: string;
  intensity: number;
  isActive: boolean;
}

const sentimentTags: SentimentTag[] = [
  {
    id: "positive",
    label: "Positive",
    icon: Smile,
    color: "text-emerald-300",
    bgColor: "bg-emerald-900/30",
    borderColor: "border-emerald-700/50",
    intensity: 85,
    isActive: true
  },
  {
    id: "grateful",
    label: "Grateful",
    icon: Heart,
    color: "text-rose-300",
    bgColor: "bg-rose-900/30",
    borderColor: "border-rose-700/50",
    intensity: 92,
    isActive: true
  },
  {
    id: "energetic",
    label: "Energetic",
    icon: Zap,
    color: "text-amber-300",
    bgColor: "bg-amber-900/30",
    borderColor: "border-amber-700/50",
    intensity: 78,
    isActive: true
  },
  {
    id: "focused",
    label: "Focused",
    icon: Target,
    color: "text-blue-300",
    bgColor: "bg-blue-900/30",
    borderColor: "border-blue-700/50",
    intensity: 88,
    isActive: true
  },
  {
    id: "calm",
    label: "Calm",
    icon: Shield,
    color: "text-cyan-300",
    bgColor: "bg-cyan-900/30",
    borderColor: "border-cyan-700/50",
    intensity: 90,
    isActive: false
  },
  {
    id: "motivated",
    label: "Motivated",
    icon: Sparkles,
    color: "text-purple-300",
    bgColor: "bg-purple-900/30",
    borderColor: "border-purple-700/50",
    intensity: 87,
    isActive: true
  },
  {
    id: "alert",
    label: "Alert",
    icon: Coffee,
    color: "text-orange-300",
    bgColor: "bg-orange-900/30",
    borderColor: "border-orange-700/50",
    intensity: 82,
    isActive: false
  },
  {
    id: "optimistic",
    label: "Optimistic",
    icon: Sun,
    color: "text-yellow-300",
    bgColor: "bg-yellow-900/30",
    borderColor: "border-yellow-700/50",
    intensity: 91,
    isActive: true
  }
];

const FloatingIcon = ({ Icon, delay, color }: { Icon: any; delay: number; color: string }) => (
  <motion.div
    className={`absolute ${color} opacity-20`}
    initial={{ scale: 0, rotate: 0 }}
    animate={{ 
      scale: [0, 1, 0],
      rotate: [0, 180, 360],
      y: [0, -20, 0],
      x: [0, 10, -10, 0]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    style={{
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 60 + 20}%`,
    }}
  >
    <Icon className="h-4 w-4" />
  </motion.div>
);

export function SentimentTags() {
  const activeTags = sentimentTags.filter(tag => tag.isActive);
  const inactiveTags = sentimentTags.filter(tag => !tag.isActive);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-4 relative"
    >
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {activeTags.slice(0, 4).map((tag, i) => (
          <FloatingIcon
            key={tag.id}
            Icon={tag.icon}
            delay={i * 0.5}
            color={tag.color}
          />
        ))}
      </div>

      {/* Active Sentiment Tags */}
      <div className="relative z-10">
        <motion.h3 
          className="text-slate-300 mb-3 flex items-center space-x-2"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="h-4 w-4 text-purple-400" />
          </motion.div>
          <span>Current Mood</span>
        </motion.h3>
        
        <div className="flex flex-wrap gap-2">
          {activeTags.map((tag, index) => {
            const Icon = tag.icon;
            return (
              <motion.div
                key={tag.id}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.3 + index * 0.1, 
                  type: "spring", 
                  stiffness: 200 
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -2,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge 
                  variant="outline" 
                  className={`${tag.bgColor} ${tag.color} ${tag.borderColor} px-3 py-1.5 cursor-pointer transition-all duration-200 relative overflow-hidden group`}
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                    animate={{ translateX: ["-100%", "100%"] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatDelay: 3,
                      ease: "linear" 
                    }}
                  />
                  
                  <div className="flex items-center space-x-2 relative z-10">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.2 
                      }}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.div>
                    <span>{tag.label}</span>
                    <motion.div 
                      className="text-xs opacity-75"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {tag.intensity}%
                    </motion.div>
                  </div>
                </Badge>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Suggested Tags */}
      <div className="relative z-10">
        <motion.h4 
          className="text-slate-400 text-sm mb-2"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Suggested feelings to explore:
        </motion.h4>
        
        <div className="flex flex-wrap gap-2">
          {inactiveTags.map((tag, index) => {
            const Icon = tag.icon;
            return (
              <motion.div
                key={tag.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: tag.bgColor.replace('/30', '/50')
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge 
                  variant="outline" 
                  className="bg-slate-800/30 text-slate-400 border-slate-600/50 px-3 py-1 cursor-pointer transition-all duration-200 hover:text-slate-300"
                >
                  <div className="flex items-center space-x-2">
                    <Icon className="h-3 w-3" />
                    <span className="text-xs">{tag.label}</span>
                  </div>
                </Badge>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}