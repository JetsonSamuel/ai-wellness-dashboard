import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { TrendingUp, Heart, Zap, Target } from "lucide-react";
import { motion } from "motion/react";

const statsData = [
  {
    title: "Weekly Check-ins",
    value: "12",
    target: "14",
    progress: 86,
    icon: Heart,
    color: "bg-rose-900/30 text-rose-300",
    progressColor: "bg-rose-500",
    gradient: "from-rose-900/20 to-rose-800/10"
  },
  {
    title: "Mindfulness Minutes",
    value: "84",
    target: "105",
    progress: 80,
    icon: Zap,
    color: "bg-emerald-900/30 text-emerald-300",
    progressColor: "bg-emerald-500",
    gradient: "from-emerald-900/20 to-emerald-800/10"
  },
  {
    title: "Wellness Score",
    value: "8.2",
    target: "10",
    progress: 82,
    icon: TrendingUp,
    color: "bg-blue-900/30 text-blue-300",
    progressColor: "bg-blue-500",
    gradient: "from-blue-900/20 to-blue-800/10"
  },
  {
    title: "Goals Achieved",
    value: "3",
    target: "4",
    progress: 75,
    icon: Target,
    color: "bg-amber-900/30 text-amber-300",
    progressColor: "bg-amber-500",
    gradient: "from-amber-900/20 to-amber-800/10"
  }
];

export function EngagementStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.03, rotateY: 5 }}
            className="group"
          >
            <Card className={`border-slate-700/30 bg-gradient-to-br ${stat.gradient} backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:border-slate-600/50 overflow-hidden relative`}>
              {/* Subtle glow effect on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
                animate={{ translateX: ["-100%", "100%"] }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatDelay: 5,
                  ease: "linear" 
                }}
              />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 relative z-10">
                <CardTitle className="text-slate-300">{stat.title}</CardTitle>
                <motion.div 
                  className={`p-2 rounded-lg ${stat.color}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3">
                  <motion.div 
                    className="flex items-baseline space-x-2"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <span className="text-slate-100">{stat.value}</span>
                    <span className="text-slate-400">/ {stat.target}</span>
                  </motion.div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Progress</span>
                      <span className="text-slate-400">{stat.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <motion.div 
                        className={`h-2 rounded-full ${stat.progressColor}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}