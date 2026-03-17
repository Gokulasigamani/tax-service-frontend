import { useState, useRef, useEffect } from "react"
import {
  Search,
  Bell,
  Settings,
  Wand2,
  CheckCircle2,
  AlertCircle,
  Info
} from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Header() {
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
    <header className="h-16 flex items-center justify-between px-6
    bg-gradient-to-r from-white via-violet-50 to-white
    border-b border-violet-100">

      {/* Search */}

      <div className="flex items-center gap-3 w-full max-w-md">

        <div className="flex items-center gap-3 w-full border-b border-neutral-300 focus-within:border-violet-500 transition">

          <Search size={18} className="text-neutral-500" />

          <input
            type="text"
            placeholder="Search documents, rules, fields..."
            className="w-full py-2 text-sm outline-none bg-transparent placeholder:text-neutral-400"
          />

        </div>

      </div>

      {/* Right Section */}

      <div className="flex items-center gap-4 relative">

        {/* Create */}

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-violet-200 bg-white text-sm font-medium text-violet-700 shadow-sm hover:bg-violet-50 transition">
          <Wand2 size={16} />
          Create
        </button>

        {/* Notifications */}

        <div ref={dropdownRef} className="relative">

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg hover:bg-neutral-100 transition relative"
          >
            <Bell size={18} className="text-neutral-600" />

            {/* Dot */}
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* Dropdown */}

          {open && (
            <div className="absolute right-0 mt-3 w-80 bg-white border border-neutral-200 rounded-xl shadow-xl p-3 z-50">

              <div className="flex items-center justify-between mb-2 px-2">

                <p className="text-sm font-semibold text-neutral-800">
                  Notifications
                </p>

                <button className="text-xs text-violet-600">
                  Mark all read
                </button>

              </div>

              <div className="space-y-2">

                {notifications.map((n, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-neutral-50 transition"
                  >

                    <div className={`p-2 rounded-lg ${n.style}`}>
                      {n.icon}
                    </div>

                    <div className="flex-1">

                      <p className="text-sm text-neutral-800">
                        {n.text}
                      </p>

                      <p className="text-xs text-neutral-400">
                        {n.time}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          )}

        </div>

        {/* Settings */}

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
          className="w-9 h-9 rounded-full border border-neutral-200 cursor-pointer hover:ring-2 hover:ring-violet-200 transition"
        />

      </div>

    </header>
  )
}