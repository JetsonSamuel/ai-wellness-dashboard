import { NudgePanel } from "./components/NudgePanel";
import { MoodAnalytics } from "./components/MoodAnalytics";
import { AdvancedMoodAnalytics } from "./components/AdvancedMoodAnalytics";
import { EngagementStats } from "./components/EngagementStats";
import { MoodTrackingTable } from "./components/MoodTrackingTable";
import { PersonalizedGreeting } from "./components/PersonalizedGreeting";
import { WellnessScorecard } from "./components/WellnessScorecard";
import { SentimentTags } from "./components/SentimentTags";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { FloatingElements } from "./components/FloatingElements";
import { MicroInteractions } from "./components/MicroInteractions";
import { Brain, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="dark min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Micro Interactions */}
      <MicroInteractions />
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm relative z-20"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  animate={{ 
                    boxShadow: [
                      "0 0 10px rgba(139, 92, 246, 0.3)",
                      "0 0 20px rgba(139, 92, 246, 0.6)",
                      "0 0 10px rgba(139, 92, 246, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl"
                >
                  <Brain className="h-6 w-6 text-white" />
                </motion.div>
                <div>
                  <h1 className="text-slate-100">Wellness AI Dashboard</h1>
                  <p className="text-slate-400">Your personal mental health companion</p>
                </div>
              </div>
            </div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-900/50 to-blue-900/50 border border-emerald-700/30 rounded-full"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-4 w-4 text-emerald-400" />
              </motion.div>
              <span className="text-emerald-300">All systems healthy</span>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 relative z-20">
        <div className="space-y-8">
          {/* Personalized Greeting */}
          <motion.section
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <PersonalizedGreeting />
          </motion.section>

          {/* Sentiment Tags & Wellness Scorecard */}
          <motion.section 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="lg:col-span-1"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-slate-200 mb-4">Mood Insights</h2>
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700/30">
                <SentimentTags />
              </div>
            </motion.div>
            <motion.div 
              className="lg:col-span-2"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-slate-200 mb-4">Wellness Overview</h2>
              <WellnessScorecard />
            </motion.div>
          </motion.section>

          {/* AI Nudge Panel */}
          <motion.section
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-slate-200 mb-4">Latest Wellness Nudge</h2>
            <NudgePanel />
          </motion.section>

          {/* Engagement Statistics */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-slate-200 mb-4">Your Wellness Journey</h2>
            <EngagementStats />
          </motion.section>

          {/* Advanced Analytics Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-8"
          >
            <h2 className="text-slate-200 mb-4">Interactive Mood Analytics</h2>
            <AdvancedMoodAnalytics />
          </motion.section>

          {/* Analytics Section */}
          <motion.section 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div 
              className="lg:col-span-1"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-slate-200 mb-4">Basic Analytics</h2>
              <MoodAnalytics />
            </motion.div>
            <motion.div 
              className="lg:col-span-2"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-slate-200 mb-4">Mood Timeline</h2>
              <MoodTrackingTable />
            </motion.div>
          </motion.section>
        </div>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="border-t border-slate-700 bg-slate-800/50 backdrop-blur-sm mt-16 relative z-20"
      >
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-slate-400">
            <p>Your mental wellness journey is unique. Keep tracking, keep growing. 🌱</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}