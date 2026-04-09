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
        bg-surface
        border border-border
        shadow-sm
      "
    >

      {/* 🌫️ Grain Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
          mixBlendMode: 'overlay'
        }}
      />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom right, color-mix(in srgb, var(--color-primary) 12%, transparent), transparent)' }} />

      {/* ✨ Glow Effects */}
      <div className="absolute -top-16 -right-16 w-56 h-56 blur-3xl rounded-full" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)' }} />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 blur-3xl rounded-full" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, transparent)' }} />

      {/* 🧊 Glass Layer */}
      <div className="absolute inset-0 backdrop-blur-[3px]" />

      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        {/* LEFT CONTENT */}
        <div className="space-y-3">

          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium w-fit" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 15%, transparent)', color: 'var(--color-primary)' }}>
            <Sparkles size={12} />
            Workspace Insights
          </div>

          {/* Heading */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-text-main tracking-tight leading-snug">
            Welcome back{" "}
            <span style={{ color: 'var(--color-primary)' }}>Gokul</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-[15px] text-text-main/70 max-w-lg leading-relaxed">
            You’ve processed{" "}
            <span className="text-text-main font-semibold">
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
              text-white text-sm font-medium
              shadow-sm hover:opacity-90 transition
            "
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <Sparkles size={16} />
            Create Workflow
          </button>

          {/* Secondary subtle action */}
          <button
            className="
              flex items-center justify-center gap-2
              px-4 py-2.5 rounded-lg
              bg-surface text-text-main text-sm
              border border-border
              hover:bg-background transition
            "
          >
            View Analytics
          </button>

        </div>

      </div>

    </motion.div>
  )
}