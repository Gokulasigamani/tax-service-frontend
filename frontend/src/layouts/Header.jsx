import { useState, useRef, useEffect } from "react"
import {
  Search,
  Bell,
  Settings,
  Wand2,
  CheckCircle2,
  AlertCircle,
  Info,
  Menu
} from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Header({ setIsMobileMenuOpen }) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef()
  const navigate = useNavigate()

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const notifications = [
    {
      type: "success",
      text: "Document processed successfully",
      time: "2 min ago",
      icon: <CheckCircle2 size={16} />,
      style: "bg-green-50 text-green-600"
    },
    {
      type: "warning",
      text: "Low confidence in extraction",
      time: "10 min ago",
      icon: <AlertCircle size={16} />,
      style: "bg-amber-50 text-amber-600"
    },
    {
      type: "info",
      text: "New AI model update available",
      time: "1 hour ago",
      icon: <Info size={16} />,
      style: "bg-violet-50 text-violet-600"
    }
  ]

  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-6
    sticky top-0 z-40 backdrop-blur-md bg-white/70
    border-b border-violet-100/50">

      {/* Left: Search (Mobile menu moved to Bottom Nav) */}
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 -ml-2 rounded-lg hidden md:hidden hover:bg-violet-50 text-violet-600 transition"
        >
          <Menu size={22} />
        </button>

        <div className="flex items-center gap-2 md:gap-3 w-full border-b border-neutral-200 focus-within:border-violet-500 transition">
          <Search size={18} className="text-neutral-500 shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 text-sm outline-none bg-transparent placeholder:text-neutral-400"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 md:gap-4 relative ml-4">
        {/* Create */}
        <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg border border-violet-200 bg-white/50 text-sm font-medium text-violet-700 shadow-sm hover:bg-violet-50 transition">
          <Wand2 size={16} />
          <span>Create</span>
        </button>

        {/* Notifications */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg hover:bg-neutral-100 transition relative"
          >
            <Bell size={18} className="text-neutral-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {open && (
            <div className="absolute right-0 mt-3 w-72 md:w-80 bg-white/90 backdrop-blur-lg border border-violet-100 rounded-xl shadow-xl p-3 z-50">
              <div className="flex items-center justify-between mb-2 px-2">
                <p className="text-sm font-semibold text-neutral-800">Notifications</p>
                <button className="text-xs text-violet-600">Mark all read</button>
              </div>
              <div className="space-y-1">
                {notifications.map((n, i) => (
                  <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-neutral-50 transition cursor-pointer">
                    <div className={`p-2 rounded-lg ${n.style}`}>{n.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-neutral-800 truncate">{n.text}</p>
                      <p className="text-xs text-neutral-400">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Settings Swapped for Icons on mobile */}
        <button
          onClick={() => navigate("/app/settings")}
          className="p-2 rounded-lg hover:bg-neutral-100 transition"
        >
          <Settings size={18} className="text-neutral-600" />
        </button>

        {/* Profile */}
        <img
          onClick={() => navigate("/app/profile")}
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-neutral-200 cursor-pointer hover:ring-2 hover:ring-violet-200 transition"
        />
      </div>
    </header>
  )
}