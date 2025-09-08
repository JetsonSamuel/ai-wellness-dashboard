import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { motion } from "motion/react";

const moodData = [
  { name: "Happy", value: 35, color: "#10B981" },
  { name: "Calm", value: 28, color: "#3B82F6" },
  { name: "Energetic", value: 20, color: "#F59E0B" },
  { name: "Stressed", value: 12, color: "#EF4444" },
  { name: "Tired", value: 5, color: "#6B7280" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-slate-800 p-3 rounded-lg shadow-lg border border-slate-700"
      >
        <p className="text-slate-300">
          <span className="text-slate-100">{data.name}</span>: {data.value}%
        </p>
      </motion.div>
    );
  }
  return null;
};

export function MoodAnalytics() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="border-purple-800/30 bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm">
        <CardHeader className="pb-4">
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
              ></motion.div>
              <span>Mood Distribution</span>
            </CardTitle>
            <p className="text-slate-400">Your emotional patterns this week</p>
          </motion.div>
        </CardHeader>
        <CardContent>
          <div className="h-80">
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
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  formatter={(value) => <span className="text-slate-300">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}