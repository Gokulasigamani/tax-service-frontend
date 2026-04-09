import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="hidden md:flex flex-col sm:flex-row h-auto py-4 sm:h-12 items-center justify-center gap-2 sm:gap-4
      backdrop-blur-md bg-surface/70
      text-xs md:text-sm text-text-main/60"
    >
      <div className="flex items-center gap-2">
        <Sparkles size={14} style={{ color: 'var(--color-primary)' }} />
        <span>Powered by AI Document Intelligence</span>
      </div>
      <span className="hidden sm:inline text-text-main/30">|</span>
      <span className="text-text-main/50">© 2026 DocExtract</span>
    </footer>
  );
}