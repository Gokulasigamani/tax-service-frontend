import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function GreetingSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl p-6
      bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23]
      border border-white/10 shadow-xl"
    >

      {/* Glow Effect */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-600/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600/20 blur-3xl rounded-full" />

      {/* Glass Layer */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <div className="relative flex items-center justify-between">

        {/* Left Content */}
        <div>


          <h1 className="text-2xl font-semibold text-white tracking-tight">
             Welcome back, Gokul 👋
          </h1>

          <p className="text-sm text-violet-200 mt-2 max-w-md">
            You’ve processed <span className="text-white font-medium">1,294 documents</span> this week.  
            Your AI extraction performance is improving steadily.
          </p>

        </div>

        {/* Right CTA */}
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg
          bg-white/10 text-white text-sm
          border border-white/10
          hover:bg-white/20 transition
          backdrop-blur-md"
        >
          <Sparkles size={16} />
          Create Workflow
        </button>

      </div>

     

      

    </motion.div>
  )
}