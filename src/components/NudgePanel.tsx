import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ThumbsUp, ThumbsDown, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import aiAvatarImage from 'figma:asset/238aa62da88a865d27ab0c11df68f4096ddb6e8c.png';

interface NudgeData {
  id: string;
  message: string;
  timestamp: string;
  avatar: string;
  userName: string;
  role: string;
}

const nudgeData: NudgeData = {
  id: "1",
  message: "Hi there! 👋 I noticed you've been working for 3 hours straight despite Chennai's warm afternoon. How about taking a quick 5-minute mindfulness break? Maybe step outside for some fresh air! Your mental wellness matters! 🌿",
  timestamp: "2:34 PM IST",
  avatar: aiAvatarImage,
  userName: "Wellness AI",
  role: "Chennai Wellness Assistant"
};

export function NudgePanel() {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
    >
      <Card className="border-blue-800/30 bg-gradient-to-r from-slate-800/50 to-blue-900/30 shadow-lg backdrop-blur-sm relative overflow-hidden">
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: ["-200% 0%", "200% 0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <CardContent className="p-6 relative z-10">
          <div className="flex items-start space-x-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Avatar className="h-12 w-12 ring-2 ring-blue-500/50">
                <AvatarImage src={nudgeData.avatar} alt={nudgeData.userName} />
                <AvatarFallback className="bg-blue-900/50 text-blue-300">AI</AvatarFallback>
              </Avatar>
            </motion.div>
            
            <div className="flex-1 space-y-3">
              <motion.div 
                className="flex items-center justify-between"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-blue-300">{nudgeData.userName}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">{nudgeData.role}</span>
                  <span className="h-1 w-1 bg-blue-500/50 rounded-full"></span>
                  <span className="text-blue-400">{nudgeData.timestamp}</span>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-slate-300 leading-relaxed"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {nudgeData.message}
              </motion.p>
              
              <motion.div 
                className="flex items-center space-x-3 pt-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="sm" 
                    className="bg-green-900/30 hover:bg-green-800/50 text-green-300 border-green-700/50 transition-all duration-200"
                    variant="outline"
                  >
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Helpful
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="sm" 
                    className="bg-red-900/30 hover:bg-red-800/50 text-red-300 border-red-700/50 transition-all duration-200"
                    variant="outline"
                  >
                    <ThumbsDown className="h-4 w-4 mr-2" />
                    Not Now
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="sm" 
                    className="bg-blue-900/30 hover:bg-blue-800/50 text-blue-300 border-blue-700/50 transition-all duration-200"
                    variant="outline"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Tell me more
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}