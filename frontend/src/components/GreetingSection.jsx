import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function GreetingSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl p-6
      bg-gradient-to-br from-white via-violet-50 to-indigo-50
      border border-neutral-200 shadow-lg"
    >

      {/* 🌫️ Grain Texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* ✨ Soft Glow Effects */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-300/30 blur-3xl rounded-full" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-300/30 blur-3xl rounded-full" />

      {/* 🧊 Light Glass Layer */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <div className="relative flex items-center justify-between">

        {/* LEFT CONTENT */}
        <div>

          

          <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">
           Welcome back <span className="text-violet-600">Gokul</span> 👋
          </h1>

          <p className="text-sm text-neutral-600 mt-2 max-w-md leading-relaxed">
            You’ve processed{" "}
            <span className="text-neutral-900 font-semibold">
              1,294 documents
            </span>{" "}
            this week. Your AI extraction performance is improving steadily.
          </p>

        </div>

        {/* RIGHT CTA */}
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg
          bg-white text-neutral-800 text-sm font-medium
          border border-neutral-200
          shadow-sm
          hover:bg-violet-50 hover:border-violet-200
          transition"
        >
          <Sparkles size={16} className="text-violet-600" />
          Create Workflow
        </button>

      </div>

      

     

    </motion.div>
  )
}