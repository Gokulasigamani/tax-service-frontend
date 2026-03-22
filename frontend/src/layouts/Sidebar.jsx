import { NavLink } from "react-router-dom";
import { sidebarItems } from "../datas/sidebarConfig.js";
import { PanelLeftClose, PanelLeftOpen, X } from "lucide-react";

export default function Sidebar({ collapsed, setCollapsed, isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 md:relative h-screen flex flex-col
          bg-gradient-to-b from-[#0b0715] via-[#120c23] to-[#0a0713]
          border-r border-white/5 text-gray-300
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0 w-64" : "-translate-x-full md:translate-x-0"}
          ${collapsed ? "md:w-20" : "md:w-64"}`}
      >
        {/* Header */}
        <div className="h-16 flex items-center px-4 border-b border-white/5 justify-between md:justify-start gap-2">
          <div
            className={`flex flex-col justify-center overflow-hidden transition-all duration-300 ease-in-out
              ${collapsed && !isMobileMenuOpen ? "md:w-0 md:opacity-0" : "w-full opacity-100"}`}
          >
            <p className="text-base font-semibold text-white leading-none whitespace-nowrap">
              DocExtract
            </p>
            <p className="text-[11px] text-gray-400 mt-1 whitespace-nowrap">
              Document Intelligence
            </p>
          </div>

          <div className="flex items-center gap-1">
             {/* Close button for mobile */}
             <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md hover:bg-white/10 md:hidden transition text-gray-400"
            >
              <X size={18} />
            </button>

            {/* Collapse button for desktop */}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-md hover:bg-white/10 hidden md:flex transition text-gray-400"
            >
              {collapsed ? (
                <PanelLeftOpen size={18} />
              ) : (
                <PanelLeftClose size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto overflow-x-hidden">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.label}
                to={item.path}
                end
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `group relative flex items-center
                  py-2.5 rounded-lg text-sm border
                  transition-all duration-150
                  ${collapsed && !isMobileMenuOpen ? "md:justify-center md:px-0" : "gap-3 px-3"}
                  ${
                    isActive
                      ? "bg-violet-600/30 text-white border-violet-500/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                      : "border-transparent hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                <div className="flex-shrink-0 flex justify-center">
                  <Icon size={18} strokeWidth={1.8} />
                </div>

                <span
                  className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out
                    ${collapsed && !isMobileMenuOpen ? "md:w-0 md:opacity-0" : "w-auto opacity-100"}`}
                >
                  {item.label}
                </span>

                {/* Tooltip for collapsed desktop menu */}
                <div
                  className={`absolute left-full ml-3 px-3 py-1.5
                    rounded-md text-xs whitespace-nowrap
                    bg-[#1a1333] border border-white/10
                    text-white shadow-lg
                    opacity-0 translate-x-2
                    group-hover:opacity-100 group-hover:translate-x-0
                    transition-all duration-200
                    pointer-events-none z-50
                    ${collapsed ? "hidden md:block" : "hidden"}`}
                >
                  {item.label}
                </div>
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="h-14 flex items-center border-t border-white/5 px-4 mb-2">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400 border border-violet-500/20">
               <span className="text-xs font-bold">?</span>
             </div>
             <span
                className={`text-sm text-gray-400 whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out
                  ${collapsed && !isMobileMenuOpen ? "md:w-0 md:opacity-0" : "w-auto opacity-100"}`}
              >
                Help & Support
              </span>
          </div>
        </div>
      </aside>
    </>
  );
}
