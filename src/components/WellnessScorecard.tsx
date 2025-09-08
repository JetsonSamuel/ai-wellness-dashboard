import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { motion } from "motion/react";
import { 
  Trophy, 
  Target, 
  TrendingUp, 
  Heart, 
  Brain, 
  Zap, 
  Shield, 
  Star,
  Flame,
  Calendar
} from "lucide-react";

interface ScoreMetric {
  label: string;
  score: number;
  maxScore: number;
  icon: any;
  color: string;
  trend: "up" | "down" | "stable";
  trendValue: number;
}

interface StreakData {
  current: number;
  longest: number;
  thisWeek: number;
  thisMonth: number;
}

const wellnessMetrics: ScoreMetric[] = [
  {
    label: "Overall Wellness",
    score: 87,
    maxScore: 100,
    icon: Heart,
    color: "text-rose-400",
    trend: "up",
    trendValue: 5
  },
  {
    label: "Mental Clarity",
    score: 92,
    maxScore: 100,
    icon: Brain,
    color: "text-purple-400",
    trend: "up",
    trendValue: 8
  },
  {
    label: "Energy Level",
    score: 78,
    maxScore: 100,
    icon: Zap,
    color: "text-amber-400",
    trend: "stable",
    trendValue: 0
  },
  {
    label: "Stress Management",
    score: 85,
    maxScore: 100,
    icon: Shield,
    color: "text-emerald-400",
    trend: "up",
    trendValue: 12
  }
];

const streakData: StreakData = {
  current: 23,
  longest: 45,
  thisWeek: 7,
  thisMonth: 23
};

const getScoreColor = (score: number) => {
  if (score >= 90) return "text-emerald-400";
  if (score >= 75) return "text-blue-400";
  if (score >= 60) return "text-amber-400";
  return "text-rose-400";
};

const getScoreBg = (score: number) => {
  if (score >= 90) return "bg-emerald-500";
  if (score >= 75) return "bg-blue-500";
  if (score >= 60) return "bg-amber-500";
  return "bg-rose-500";
};

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case "up":
      return <TrendingUp className="h-3 w-3 text-emerald-400" />;
    case "down":
      return <TrendingUp className="h-3 w-3 text-rose-400 rotate-180" />;
    default:
      return <div className="h-3 w-3 bg-slate-400 rounded-full" />;
  }
};

const PulsingOrb = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
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
    style={{
      left: `${20 + Math.random() * 60}%`,
      top: `${20 + Math.random() * 60}%`,
    }}
  />
);

export function WellnessScorecard() {
  const overallScore = Math.round(wellnessMetrics.reduce((acc, metric) => acc + metric.score, 0) / wellnessMetrics.length);

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <PulsingOrb key={i} delay={i * 0.8} />
        ))}
      </div>

      <Card className="border-purple-800/30 bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))",
              "linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))",
              "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(139, 92, 246, 0.1))",
            ]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        <CardHeader className="pb-4 relative z-10">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <CardTitle className="text-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Trophy className="h-5 w-5 text-amber-400" />
                </motion.div>
                <span>Wellness Scorecard</span>
              </div>
              <motion.div 
                className={`text-3xl ${getScoreColor(overallScore)}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                {overallScore}
              </motion.div>
            </CardTitle>
            <p className="text-slate-400">Your comprehensive wellness metrics</p>
          </motion.div>
        </CardHeader>

        <CardContent className="space-y-6 relative z-10">
          {/* Daily Streak Section */}
          <motion.div 
            className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Flame className="h-5 w-5 text-orange-400" />
                </motion.div>
                <span className="text-slate-300">Daily Streak</span>
              </div>
              <Badge variant="outline" className="bg-orange-900/30 text-orange-300 border-orange-700/50">
                🔥 Active
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl text-orange-400">{streakData.current}</div>
                <div className="text-xs text-slate-400">Current</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl text-amber-400">{streakData.longest}</div>
                <div className="text-xs text-slate-400">Longest</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl text-emerald-400">{streakData.thisWeek}</div>
                <div className="text-xs text-slate-400">This Week</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl text-blue-400">{streakData.thisMonth}</div>
                <div className="text-xs text-slate-400">This Month</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Wellness Metrics */}
          <div className="space-y-4">
            {wellnessMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/20"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(51, 65, 85, 0.4)" }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className={`h-5 w-5 ${metric.color}`} />
                      </motion.div>
                      <span className="text-slate-300">{metric.label}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getTrendIcon(metric.trend)}
                      {metric.trendValue > 0 && (
                        <span className="text-xs text-slate-400">
                          +{metric.trendValue}%
                        </span>
                      )}
                      <span className={`text-lg ${getScoreColor(metric.score)}`}>
                        {metric.score}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <motion.div 
                        className={`h-2 rounded-full ${getScoreBg(metric.score)}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${(metric.score / metric.maxScore) * 100}%` }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>0</span>
                      <span>{metric.maxScore}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Achievement Badge */}
          <motion.div
            className="text-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 150 }}
          >
            <Badge 
              variant="outline" 
              className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 text-purple-300 border-purple-700/50 px-4 py-2"
            >
              <Star className="h-4 w-4 mr-2" />
              Wellness Champion
            </Badge>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}