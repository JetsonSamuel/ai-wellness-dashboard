import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Thermometer } from "lucide-react";
import profileImage from 'figma:asset/238aa62da88a865d27ab0c11df68f4096ddb6e8c.png';

interface UserData {
  name: string;
  avatar: string;
  location: string;
  timeZone: string;
  currentMood: string;
  weather: string;
  temperature: string;
}

const userData: UserData = {
  name: "Jetson",
  avatar: profileImage,
  location: "Chennai, Tamil Nadu",
  timeZone: "IST",
  currentMood: "Focused",
  weather: "Partly Cloudy",
  temperature: "32°C"
};

const getGreetingMessage = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
};

const getCurrentDate = () => {
  return new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

const getCurrentTime = () => {
  return new Date().toLocaleTimeString('en-IN', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata'
  });
};

const FloatingParticle = ({ delay, duration }: { delay: number; duration: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
    initial={{ 
      x: Math.random() * 300, 
      y: Math.random() * 100, 
      opacity: 0 
    }}
    animate={{ 
      x: Math.random() * 300, 
      y: Math.random() * 100, 
      opacity: [0, 1, 0] 
    }}
    transition={{ 
      duration, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
  />
);

export function PersonalizedGreeting() {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0, y: -20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.3} duration={6 + Math.random() * 4} />
        ))}
      </div>

      <Card className="border-emerald-800/30 bg-gradient-to-br from-slate-800/50 to-emerald-900/20 backdrop-blur-sm relative overflow-hidden">
        {/* Animated Background Glow */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.2) 0%, transparent 70%)",
              "radial-gradient(circle at 80% 70%, rgba(52, 211, 153, 0.15) 0%, transparent 70%)",
              "radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
              "radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.2) 0%, transparent 70%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <CardContent className="p-6 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Avatar className="h-16 w-16 ring-2 ring-emerald-500/50 shadow-lg">
                  <AvatarImage src={userData.avatar} alt={userData.name} />
                  <AvatarFallback className="bg-emerald-900/50 text-emerald-300 text-xl">
                    {userData.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </motion.div>
              
              <div className="space-y-2">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-slate-100 text-2xl">
                    {getGreetingMessage()}, {userData.name}! 👋
                  </h2>
                  <p className="text-emerald-300">
                    Ready to continue your wellness journey?
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4 text-sm text-slate-400"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{getCurrentDate()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{getCurrentTime()} {userData.timeZone}</span>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div 
              className="flex flex-col items-end space-y-3"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">{userData.location}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Thermometer className="h-4 w-4 text-orange-400" />
                <span className="text-slate-300">{userData.weather} • {userData.temperature}</span>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Badge 
                  variant="outline" 
                  className="bg-emerald-900/30 text-emerald-300 border-emerald-700/50 px-3 py-1"
                >
                  Currently: {userData.currentMood}
                </Badge>
              </motion.div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}