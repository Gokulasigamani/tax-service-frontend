import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="hidden md:flex flex-col sm:flex-row h-auto py-4 sm:h-12 items-center justify-center gap-2 sm:gap-4
      backdrop-blur-md bg-white/70
      border-t border-violet-100/50 text-xs md:text-sm text-gray-500"
    >
      <div className="flex items-center gap-2">
        <Sparkles size={14} className="text-violet-500" />
        <span>Powered by AI Document Intelligence</span>
      </div>
      <span className="hidden sm:inline text-gray-300">|</span>
      <span className="text-gray-400">© 2026 DocExtract</span>
    </footer>
  );
}