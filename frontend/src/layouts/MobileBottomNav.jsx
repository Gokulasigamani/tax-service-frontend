import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  Upload, 
  BarChart3, 
  Menu 
} from "lucide-react";

export default function MobileBottomNav({ setIsMobileMenuOpen }) {
  const navItems = [
    { label: "Home", path: "dashboard", icon: LayoutDashboard },
    { label: "Docs", path: "documents", icon: FileText },
    { label: "Upload", path: "upload", icon: Upload },
    { label: "Stats", path: "analytics", icon: BarChart3 },
  ];

  return (
    <nav className="md:hidden fixed bottom-4 left-4 right-4 z-40">
      <div className="flex items-center justify-around h-16 bg-[#0b0715]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 flex-1 transition-all duration-300
                ${isActive ? "text-violet-400 scale-110" : "text-gray-400 hover:text-gray-200"}`
              }
            >
              <Icon size={20} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </NavLink>
          );
        })}
        
        {/* More Button to open Sidebar */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="flex flex-col items-center justify-center gap-1 flex-1 text-gray-400 hover:text-gray-200 transition-all"
        >
          <Menu size={20} />
          <span className="text-[10px] font-medium">More</span>
        </button>
      </div>
    </nav>
  );
}
