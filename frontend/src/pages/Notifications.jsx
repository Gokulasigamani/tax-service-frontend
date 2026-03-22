import { useState } from "react"
import {
  Bell,
  Check,
  Sparkles
} from "lucide-react"

export default function NotificationsPage() {
  const [tab, setTab] = useState("All")

  const tabs = ["All", "Mentions", "AI", "System"]

  const notifications = [
    {
      text: "Gokul edited Project Plan",
      type: "mentions",
      time: "2 min ago",
      unread: true
    },
    {
      text: "AI generated document summary",
      type: "ai",
      time: "5 min ago",
      unread: true
    },
    {
      text: "New member joined your team",
      type: "system",
      time: "10 min ago",
      unread: false
    }
  ]

  const filtered =
    tab === "All"
      ? notifications
      : notifications.filter(n => n.type === tab.toLowerCase())

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-semibold text-neutral-800">
            Notifications
          </h1>
          <p className="text-xs text-neutral-500 mt-1">
            Stay updated with your workspace activity
          </p>
        </div>

        <button className="text-sm text-violet-600 flex items-center gap-1">
          <Check size={14} />
          Mark all read
        </button>

      </div>

      {/* Tabs */}

      <div className="bg-white border border-neutral-200 rounded-xl p-2 flex gap-2 w-fit shadow-sm">

        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-1.5 text-xs rounded-lg ${
              tab === t
                ? "bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23] text-white"
                : "text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            {t}
          </button>
        ))}

      </div>

      {/* Notifications List */}

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm">

        {filtered.map((n, i) => (

          <div
            key={i}
            className={`flex items-start gap-3 p-4 border-b last:border-none
              ${n.unread ? "bg-violet-50/40" : ""}
            `}
          >

            {/* Avatar */}
            <div className="w-8 h-8 rounded-full bg-violet-400 text-white flex items-center justify-center text-xs">
              N
            </div>

            {/* Content */}
            <div className="flex-1">

              <p className="text-sm text-neutral-800">
                {n.text}
              </p>

              <div className="flex items-center gap-2 mt-1 text-xs text-neutral-500">
                <span>{n.time}</span>

                {n.type === "ai" && (
                  <span className="flex items-center gap-1 text-violet-600">
                    <Sparkles size={12} />
                    AI
                  </span>
                )}
              </div>

            </div>

            {/* Action */}
            <button className="text-xs text-neutral-400 hover:text-neutral-700">
              Dismiss
            </button>

          </div>

        ))}

      </div>

    </div>
  )
}