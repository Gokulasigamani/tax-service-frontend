import { NavLink } from "react-router-dom"
import { sidebarItems } from "../datas/sidebarConfig.js"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

export default function Sidebar({ collapsed, setCollapsed }) {
  return (
    <aside
      className={`h-screen flex flex-col
        bg-gradient-to-b from-[#0b0715] via-[#120c23] to-[#0a0713]
        border-r border-white/5 text-gray-300
        transition-[width] duration-300 ease-in-out
        ${collapsed ? "w-20" : "w-64"}`}
    >
      {/* Header */}
      <div className="h-16 flex items-center px-3 border-b border-white/5 gap-2">
        <div
          className={`flex flex-col justify-center overflow-hidden transition-all duration-300 ease-in-out
            ${collapsed ? "w-0 opacity-0" : "w-full opacity-100"}`}
        >
          <p className="text-base font-semibold text-white leading-none whitespace-nowrap">
            DocExtract
          </p>
          <p className="text-[11px] text-gray-400 mt-1 whitespace-nowrap">
            Document Intelligence
          </p>
        </div>

        <div className="w-10 flex-shrink-0 flex justify-center">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-md hover:bg-white/10 transition"
          >
            {collapsed ? (
              <PanelLeftOpen size={18} className="text-gray-400" />
            ) : (
              <PanelLeftClose size={18} className="text-gray-400" />
            )}
          </button>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-visible">
        {sidebarItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.end ?? false}
              className={({ isActive }) =>
                `group relative flex items-center
                py-2.5 rounded-lg text-sm border
                transition-colors duration-150
                ${collapsed ? "justify-center px-0" : "gap-3 px-3"}
                ${
                  isActive
                    ? "bg-violet-600/20 text-white border-violet-500/30"
                    : "border-transparent hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <div className="flex-shrink-0 flex justify-center">
                <Icon size={18} strokeWidth={1.8} />
              </div>

              <span
                className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out
                  ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"}`}
              >
                {item.label}
              </span>

              {/* Tooltip */}
              <div
                className={`absolute left-full ml-3 px-3 py-1.5
                  rounded-md text-xs whitespace-nowrap
                  bg-[#1a1333] border border-white/10
                  text-white shadow-lg
                  opacity-0 translate-x-2
                  group-hover:opacity-100 group-hover:translate-x-0
                  transition-all duration-200
                  pointer-events-none z-50
                  ${collapsed ? "block" : "hidden"}`}
              >
                {item.label}
              </div>
            </NavLink>
          )
        })}
      </nav>

      {/* Bottom */}
      <div className="h-12 flex items-center border-t border-white/5 px-0">
        <div className="w-10 flex-shrink-0 flex justify-center">
          <span className="text-xs text-gray-500">?</span>
        </div>
        <span
          className={`text-sm text-gray-400 whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out
            ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"}`}
        >
          Help & Docs
        </span>
      </div>
    </aside>
  )
}