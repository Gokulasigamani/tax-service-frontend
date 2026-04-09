import { NavLink } from "react-router-dom";
import { sidebarItems } from "../datas/sidebarConfig.js";
import { PanelLeftClose, PanelLeftOpen, X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function Sidebar({ collapsed, setCollapsed, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const { transparentSidebar } = useTheme();
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
          ${transparentSidebar ? 'bg-surface/60 backdrop-blur-xl' : 'bg-surface'}
          border-r border-border text-text-main
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0 w-64" : "-translate-x-full md:translate-x-0"}
          ${collapsed ? "md:w-20" : "md:w-64"}`}
      >
        <div className="h-16 flex items-center px-4 border-b border-border justify-between md:justify-start gap-2">
          <div
            className={`flex flex-col justify-center overflow-hidden transition-all duration-300 ease-in-out
              ${collapsed && !isMobileMenuOpen ? "md:w-0 md:opacity-0" : "w-full opacity-100"}`}
          >
            <p className="text-base font-semibold leading-none whitespace-nowrap" style={{ color: 'var(--color-primary)' }}>
              DocExtract
            </p>
            <p className="text-[11px] opacity-70 mt-1 whitespace-nowrap">
              Document Intelligence
            </p>
          </div>

          <div className="flex items-center gap-1">
             {/* Close button for mobile */}
             <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md hover:bg-surface/10 md:hidden transition text-text-main/50"
            >
              <X size={18} />
            </button>

            {/* Collapse button for desktop */}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-md hover:bg-surface/10 hidden md:flex transition text-text-main/50"
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
                  py-2.5 rounded-xl text-sm font-medium
                  transition-all duration-300
                  ${collapsed && !isMobileMenuOpen ? "md:justify-center md:px-0 mx-2" : "gap-3 px-3 mx-2"}
                  ${
                    isActive
                      ? "shadow-sm backdrop-blur-md" 
                      : "opacity-60 hover:opacity-100 hover:bg-text-main/5 text-text-main"
                  }`
                }
                style={({ isActive }) => isActive ? { 
                  background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 15%, transparent) 0%, color-mix(in srgb, var(--color-primary) 3%, transparent) 100%)',
                  color: 'var(--color-primary)',
                  border: '1px solid color-mix(in srgb, var(--color-primary) 20%, transparent)',
                  boxShadow: 'inset 0 1px 1px color-mix(in srgb, var(--color-primary) 25%, transparent)'
                } : { border: '1px solid transparent' }}
              >
                {({ isActive }) => (
                  <>
                    <div className="flex-shrink-0 flex justify-center z-10 transition-transform duration-300 group-active:scale-95 group-hover:scale-110">
                      <Icon size={18} strokeWidth={isActive ? 2.2 : 1.8} />
                    </div>

                    <span
                      className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out z-10
                        ${collapsed && !isMobileMenuOpen ? "md:w-0 md:opacity-0" : "w-auto opacity-100"}`}
                    >
                      {item.label}
                    </span>

                    {/* Tooltip for collapsed desktop menu */}
                    <div
                      className={`absolute left-full ml-3 px-3 py-1.5
                        rounded-lg text-xs whitespace-nowrap font-medium
                        bg-surface border border-border
                        text-text-main shadow-xl
                        opacity-0 translate-x-2
                        group-hover:opacity-100 group-hover:translate-x-0
                        transition-all duration-200
                        pointer-events-none z-50
                        ${collapsed ? "hidden md:block" : "hidden"}`}
                    >
                      {item.label}
                    </div>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="h-14 flex items-center border-t border-border px-4 mb-2">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full flex items-center justify-center border" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, transparent)', color: 'var(--color-primary)', borderColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)' }}>
               <span className="text-xs font-bold">?</span>
             </div>
             <span
                className={`text-sm opacity-80 whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out
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
