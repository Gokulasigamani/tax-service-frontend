import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function GreetingSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        relative overflow-hidden
        rounded-2xl sm:rounded-3xl
        p-5 sm:p-6 lg:p-8
        bg-gradient-to-br from-white via-violet-50/70 to-indigo-50/70
        border border-neutral-200
        shadow-[0_10px_40px_rgba(0,0,0,0.08)]
      "
    >

      {/* 🌫️ Grain */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* ✨ Glow Effects */}
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-violet-300/30 blur-3xl rounded-full" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-indigo-300/30 blur-3xl rounded-full" />

      {/* 🧊 Glass Layer */}
      <div className="absolute inset-0 backdrop-blur-[3px]" />

      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        {/* LEFT CONTENT */}
        <div className="space-y-3">

          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
            bg-violet-100 text-violet-600 text-xs font-medium w-fit">
            <Sparkles size={12} />
            Workspace Insights
          </div>

          {/* Heading */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-900 tracking-tight leading-snug">
            Welcome back{" "}
            <span className="text-violet-600">Gokul</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-[15px] text-neutral-600 max-w-lg leading-relaxed">
            You’ve processed{" "}
            <span className="text-neutral-900 font-semibold">
              1,294 documents
            </span>{" "}
            this week. Your AI extraction performance is improving steadily,
            helping your team work faster and smarter.
          </p>

        </div>

        {/* RIGHT CTA */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3">

          <button
            className="
              flex items-center justify-center gap-2
              px-4 py-2.5 rounded-lg
              bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23]
              text-white text-sm font-medium
              shadow-sm
              hover:opacity-90 transition
            "
          >
            <Sparkles size={16} />
            Create Workflow
          </button>

          {/* Secondary subtle action */}
          <button
            className="
              flex items-center justify-center gap-2
              px-4 py-2.5 rounded-lg
              bg-white text-neutral-700 text-sm
              border border-neutral-200
              hover:bg-neutral-50 transition
            "
          >
            View Analytics
          </button>

        </div>

      </div>

    </motion.div>
  )
}