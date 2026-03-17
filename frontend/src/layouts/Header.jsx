import {
  Search,
  Bell,
  Settings,
  Wand2
} from "lucide-react"

export default function Header() {
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

      {/* Right */}

      <div className="flex items-center gap-4">

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-violet-200 bg-white text-sm font-medium text-violet-700 shadow-sm hover:bg-violet-50 transition">
          <Wand2 size={16} />
          Create
        </button>

        <button className="p-2 rounded-lg hover:bg-neutral-100 transition">
          <Bell size={18} className="text-neutral-600" />
        </button>

        <button className="p-2 rounded-lg hover:bg-neutral-100 transition">
          <Settings size={18} className="text-neutral-600" />
        </button>

        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-9 h-9 rounded-full border border-neutral-200"
        />

      </div>

    </header>
  )
}