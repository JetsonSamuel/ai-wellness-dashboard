import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { motion } from "motion/react";

interface MoodEntry {
  id: string;
  date: string;
  time: string;
  mood: string;
  intensity: number;
  trigger: string;
  shift: "up" | "down" | "stable";
  notes: string;
  user: string;
  role: string;
}

const moodEntries: MoodEntry[] = [
  {
    id: "1",
    date: "Sep 8",
    time: "2:30 PM IST",
    mood: "Happy",
    intensity: 8,
    trigger: "Completed project",
    shift: "up",
    notes: "Feeling accomplished after finishing the quarterly report",
    user: "Jetson",
    role: "Product Manager"
  },
  {
    id: "2",
    date: "Sep 8",
    time: "11:15 AM IST",
    mood: "Stressed",
    intensity: 6,
    trigger: "Meeting deadline",
    shift: "down",
    notes: "Pressure from upcoming presentation",
    user: "Alexandra",
    role: "UX Designer"
  },
  {
    id: "3",
    date: "Sep 7",
    time: "4:45 PM IST",
    mood: "Calm",
    intensity: 7,
    trigger: "Meditation session",
    shift: "up",
    notes: "10-minute breathing exercise helped center myself",
    user: "Marcus",
    role: "Software Engineer"
  },
  {
    id: "4",
    date: "Sep 7",
    time: "1:20 PM IST",
    mood: "Energetic",
    intensity: 8,
    trigger: "Lunch break walk",
    shift: "up",
    notes: "Fresh air despite Chennai heat boosted energy levels",
    user: "Sofia",
    role: "Marketing Director"
  },
  {
    id: "5",
    date: "Sep 6",
    time: "6:00 PM IST",
    mood: "Tired",
    intensity: 4,
    trigger: "Long work day",
    shift: "down",
    notes: "Need to improve work-life balance",
    user: "Chen",
    role: "Data Analyst"
  }
];

const getMoodColor = (mood: string) => {
  const colors: { [key: string]: string } = {
    "Happy": "bg-green-900/30 text-green-300 border-green-700/50",
    "Stressed": "bg-red-900/30 text-red-300 border-red-700/50",
    "Calm": "bg-blue-900/30 text-blue-300 border-blue-700/50",
    "Energetic": "bg-orange-900/30 text-orange-300 border-orange-700/50",
    "Tired": "bg-gray-700/30 text-gray-300 border-gray-600/50"
  };
  return colors[mood] || "bg-gray-700/30 text-gray-300 border-gray-600/50";
};

const getShiftIcon = (shift: string) => {
  switch (shift) {
    case "up":
      return <TrendingUp className="h-4 w-4 text-green-400" />;
    case "down":
      return <TrendingDown className="h-4 w-4 text-red-400" />;
    default:
      return <Minus className="h-4 w-4 text-gray-400" />;
  }
};

export function MoodTrackingTable() {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-slate-700/30 bg-slate-800/50 backdrop-blur-sm">
        <CardHeader>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <CardTitle className="text-slate-200 flex items-center space-x-2">
              <motion.div 
                className="h-2 w-2 bg-indigo-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <span>Recent Mood Shifts</span>
            </CardTitle>
            <p className="text-slate-400">Track your team's emotional journey throughout the day</p>
          </motion.div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-slate-700/30">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-800/50 hover:bg-slate-800/50">
                  <TableHead className="text-slate-300">User & Time</TableHead>
                  <TableHead className="text-slate-300">Mood</TableHead>
                  <TableHead className="text-slate-300">Intensity</TableHead>
                  <TableHead className="text-slate-300">Trigger</TableHead>
                  <TableHead className="text-slate-300">Shift</TableHead>
                  <TableHead className="text-slate-300">Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {moodEntries.map((entry, index) => (
                  <motion.tr
                    key={entry.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="hover:bg-slate-700/30 transition-colors duration-200 border-b border-slate-700/30"
                  >
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-slate-200">{entry.user}</div>
                        <div className="text-slate-400">{entry.role}</div>
                        <div className="text-slate-500">{entry.date} • {entry.time}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Badge variant="outline" className={getMoodColor(entry.mood)}>
                          {entry.mood}
                        </Badge>
                      </motion.div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div className="w-12 bg-slate-700/50 rounded-full h-2">
                          <motion.div 
                            className="bg-indigo-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${entry.intensity * 10}%` }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                          ></motion.div>
                        </div>
                        <span className="text-slate-400">{entry.intensity}/10</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-slate-300">{entry.trigger}</TableCell>
                    <TableCell>
                      <motion.div 
                        className="flex items-center"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {getShiftIcon(entry.shift)}
                      </motion.div>
                    </TableCell>
                    <TableCell className="text-slate-400 max-w-xs truncate" title={entry.notes}>
                      {entry.notes}
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}