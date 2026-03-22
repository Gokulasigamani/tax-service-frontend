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

export default function Header({ setIsMobileMenuOpen }) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef()
  const navigate = useNavigate()

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
      text: "Document processed successfully",
      time: "2 min ago",
      icon: <CheckCircle2 size={16} />,
      style: "bg-green-50 text-green-600"
    },
    {
      text: "Low confidence in extraction",
      time: "10 min ago",
      icon: <AlertCircle size={16} />,
      style: "bg-amber-50 text-amber-600"
    },
    {
      text: "New AI model update available",
      time: "1 hour ago",
      icon: <Info size={16} />,
      style: "bg-violet-50 text-violet-600"
    }
  ]

  return (
    <header className="
      h-16 flex items-center justify-between
      px-3 sm:px-4 md:px-6
      sticky top-0 z-40
      backdrop-blur-md bg-white/70
      border-b border-violet-100/50
    ">

      {/* LEFT - SEARCH */}
      <div className="flex items-center gap-2 sm:gap-3 flex-1 max-w-md">

        <div className="
          flex items-center gap-2 w-full
          border-b border-neutral-200
          focus-within:border-violet-500 transition
        ">
          <Search size={16} className="text-neutral-500 shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            className="
              w-full py-2 text-sm outline-none bg-transparent
              placeholder:text-neutral-400
            "
          />
        </div>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-1 sm:gap-2 md:gap-4 ml-2 sm:ml-4">

        {/* Create */}
        <button className="
          hidden sm:flex items-center gap-2 px-3 py-2
          rounded-lg border border-violet-200
          bg-white/60 text-sm font-medium text-violet-700
          hover:bg-violet-50 transition
        ">
          <Wand2 size={14} />
          <span className="hidden md:inline">Create</span>
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
            <div className="
              fixed sm:absolute
              left-1/2 sm:left-auto
              -translate-x-1/2 sm:translate-x-0
              sm:right-0
              top-16 sm:top-full
              mt-2
              w-[92%] sm:w-80
              max-w-sm
              bg-white/90 backdrop-blur-xl
              border border-violet-100
              rounded-xl shadow-xl
              p-3 z-50
            ">

              {/* Header */}
              <div className="flex items-center justify-between mb-2 px-1">
                <p className="text-sm font-semibold text-neutral-800">
                  Notifications
                </p>
                <button className="text-xs text-violet-600">
                  Mark all read
                </button>
              </div>

              {/* List */}
              <div className="space-y-1 max-h-72 overflow-y-auto">

                {notifications.map((n, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-neutral-50 transition"
                  >
                    <div className={`p-2 rounded-lg ${n.style}`}>
                      {n.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-neutral-800 line-clamp-2">
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
          className="
            w-8 h-8 sm:w-9 sm:h-9
            rounded-full border border-neutral-200
            cursor-pointer
            hover:ring-2 hover:ring-violet-200 transition
          "
        />

      </div>
    </header>
  )
}