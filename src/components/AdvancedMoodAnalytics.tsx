import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  AreaChart, Area, LineChart, Line,
  RadialBarChart, RadialBar
} from "recharts";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { PieChart as PieIcon, BarChart3, Activity, Target, TrendingUp } from "lucide-react";

const moodData = [
  { name: "Happy", value: 35, color: "#10B981", fullMark: 100 },
  { name: "Calm", value: 28, color: "#3B82F6", fullMark: 100 },
  { name: "Energetic", value: 20, color: "#F59E0B", fullMark: 100 },
  { name: "Stressed", value: 12, color: "#EF4444", fullMark: 100 },
  { name: "Tired", value: 5, color: "#6B7280", fullMark: 100 },
];

const weeklyTrendData = [
  { day: "Mon", Happy: 30, Calm: 25, Energetic: 22, Stressed: 15, Tired: 8 },
  { day: "Tue", Happy: 32, Calm: 28, Energetic: 18, Stressed: 14, Tired: 8 },
  { day: "Wed", Happy: 35, Calm: 30, Energetic: 20, Stressed: 10, Tired: 5 },
  { day: "Thu", Happy: 33, Calm: 32, Energetic: 19, Stressed: 11, Tired: 5 },
  { day: "Fri", Happy: 38, Calm: 26, Energetic: 21, Stressed: 10, Tired: 5 },
  { day: "Sat", Happy: 42, Calm: 30, Energetic: 15, Stressed: 8, Tired: 5 },
  { day: "Sun", Happy: 40, Calm: 35, Energetic: 12, Stressed: 8, Tired: 5 },
];

type ChartType = 'pie' | 'bar' | 'area' | 'line' | 'radial';

const chartTypes = [
  { id: 'pie', name: 'Pie Chart', icon: PieIcon },
  { id: 'bar', name: 'Bar Chart', icon: BarChart3 },
  { id: 'area', name: 'Area Chart', icon: Activity },
  { id: 'line', name: 'Line Chart', icon: TrendingUp },
  { id: 'radial', name: 'Radial Chart', icon: Target },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-slate-800/90 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-slate-600"
      >
        {label && <p className="text-slate-300 mb-2">{label}</p>}
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-slate-100" style={{ color: entry.color }}>
            {entry.name}: {entry.value}%
          </p>
        ))}
      </motion.div>
    );
  }
  return null;
};

const FloatingParticle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
    initial={{ 
      x: Math.random() * 400, 
      y: Math.random() * 300, 
      opacity: 0 
    }}
    animate={{ 
      x: Math.random() * 400, 
      y: Math.random() * 300, 
      opacity: [0, 1, 0] 
    }}
    transition={{ 
      duration: 8 + Math.random() * 4, 
      repeat: Infinity, 
      delay,
      ease: "linear" 
    }}
  />
);

export function AdvancedMoodAnalytics() {
  const [activeChart, setActiveChart] = useState<ChartType>('pie');

  const renderChart = () => {
    switch (activeChart) {
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={moodData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                innerRadius={30}
                paddingAngle={2}
                dataKey="value"
                animationBegin={0}
                animationDuration={1000}
              >
                {moodData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend formatter={(value) => <span className="text-slate-300">{value}</span>} />
            </PieChart>
          </ResponsiveContainer>
        );

      case 'bar':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={moodData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" fill="#8B5CF6" radius={[4, 4, 0, 0]}>
                {moodData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        );

      case 'area':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={weeklyTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="day" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="Happy" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
              <Area type="monotone" dataKey="Calm" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
              <Area type="monotone" dataKey="Energetic" stackId="1" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        );

      case 'line':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="day" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="Happy" stroke="#10B981" strokeWidth={3} dot={{ fill: "#10B981", r: 4 }} />
              <Line type="monotone" dataKey="Calm" stroke="#3B82F6" strokeWidth={3} dot={{ fill: "#3B82F6", r: 4 }} />
              <Line type="monotone" dataKey="Energetic" stroke="#F59E0B" strokeWidth={3} dot={{ fill: "#F59E0B", r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        );

      case 'radial':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="90%" barSize={20} data={moodData}>
              <RadialBar 
                minAngle={15} 
                label={{ position: 'insideStart', fill: '#fff' }} 
                background={{ fill: '#374151' }} 
                clockWise={true} 
                dataKey="value" 
              >
                {moodData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </RadialBar>
              <Tooltip content={<CustomTooltip />} />
            </RadialBarChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} />
        ))}
      </div>

      <Card className="border-purple-800/30 bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm relative overflow-hidden">
        {/* Animated Background Gradient */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "linear-gradient(45deg, #8B5CF6, #3B82F6)",
              "linear-gradient(90deg, #3B82F6, #10B981)",
              "linear-gradient(135deg, #10B981, #F59E0B)",
              "linear-gradient(180deg, #F59E0B, #8B5CF6)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <CardHeader className="pb-4 relative z-10">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <CardTitle className="text-slate-200 flex items-center space-x-2">
              <motion.div 
                className="h-2 w-2 bg-purple-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span>Advanced Mood Analytics</span>
            </CardTitle>
            <p className="text-slate-400">Interactive visualization of emotional patterns</p>
          </motion.div>

          {/* Chart Type Selector */}
          <motion.div 
            className="flex flex-wrap gap-2 mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {chartTypes.map((type) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={activeChart === type.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveChart(type.id as ChartType)}
                    className={`transition-all duration-200 ${
                      activeChart === type.id
                        ? "bg-purple-600 text-white shadow-lg"
                        : "bg-slate-700/50 text-slate-300 border-slate-600 hover:bg-slate-600/50"
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {type.name}
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        </CardHeader>

        <CardContent className="relative z-10">
          <div className="h-80">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChart}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                {renderChart()}
              </motion.div>
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}