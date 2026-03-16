import { NavLink } from "react-router-dom"
import { sidebarItems } from "../datas/sidebarConfig.js"

export default function Sidebar({ collapsed }) {
  return (
    <aside
      className={`h-screen flex flex-col
      bg-gradient-to-b from-[#0b0715] via-[#120c23] to-[#0a0713]
      border-r border-white/5 text-gray-300
      transition-all duration-300
      ${collapsed ? "w-20" : "w-64"}`}
    >

      {/* Logo */}

      <div className="px-6 py-6 border-b border-white/5">

        {!collapsed ? (
          <>
            <h2 className="text-lg font-semibold text-white tracking-tight">
              DocExtract AI
            </h2>

            <p className="text-xs text-gray-400 mt-1">
              Document Intelligence
            </p>
          </>
        ) : (
          <div className="text-white font-bold text-lg">
            AI
          </div>
        )}

      </div>

      {/* Menu */}

      <nav className="flex-1 px-3 py-4 space-y-1">

        {sidebarItems.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all
                ${
                  isActive
                    ? "bg-violet-600/20 text-white border border-violet-500/30"
                    : "hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <Icon size={18} strokeWidth={1.8} />

              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          )
        })}

      </nav>

      {/* Bottom */}

      <div className="px-4 py-4 border-t border-white/5">

        {!collapsed && (
          <button className="w-full text-left text-sm text-gray-400 hover:text-white transition">
            Help & Documentation
          </button>
        )}

      </div>

    </aside>
  )
}