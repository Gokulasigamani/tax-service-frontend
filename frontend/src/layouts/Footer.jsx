import { Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="h-12 flex items-center justify-center gap-2
    bg-gradient-to-r from-white via-violet-50 to-white
    border-t border-violet-100 text-sm text-gray-500">

      <Sparkles size={14} className="text-violet-500" />

      <span>
        Powered by AI Document Intelligence
      </span>

      <span className="text-gray-400">
        © 2026 DocExtract
      </span>

    </footer>
  )
}