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
          <h1 className="text-2xl font-semibold text-text-main">
            Notifications
          </h1>
          <p className="text-xs text-text-main/70 mt-1">
            Stay updated with your workspace activity
          </p>
        </div>

        <button className="text-sm text-primary flex items-center gap-1">
          <Check size={14} />
          Mark all read
        </button>

      </div>

      {/* Tabs */}

      <div className="bg-surface border border-border rounded-xl p-2 flex gap-2 w-fit shadow-sm">

        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-1.5 text-xs rounded-lg transition-colors ${
              tab === t
                ? "text-white shadow-sm"
                : "text-text-main/70 hover:bg-text-main/5"
            }`}
            style={tab === t ? { backgroundColor: 'var(--color-primary)' } : {}}
          >
            {t}
          </button>
        ))}

      </div>

      {/* Notifications List */}

      <div className="bg-surface rounded-xl border border-border shadow-sm overflow-hidden">

        {filtered.map((n, i) => (

          <div
            key={i}
            className={`flex items-start gap-3 p-4 border-b border-border last:border-none`}
            style={n.unread ? { backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, transparent)' } : {}}
          >

            {/* Avatar */}
            <div className="w-8 h-8 rounded-full bg-primary/10 text-white flex items-center justify-center text-xs">
              N
            </div>

            {/* Content */}
            <div className="flex-1">

              <p className="text-sm text-text-main">
                {n.text}
              </p>

              <div className="flex items-center gap-2 mt-1 text-xs text-text-main/70">
                <span>{n.time}</span>

                {n.type === "ai" && (
                  <span className="flex items-center gap-1 text-primary">
                    <Sparkles size={12} />
                    AI
                  </span>
                )}
              </div>

            </div>

            {/* Action */}
            <button className="text-xs text-text-main/50 hover:text-text-main">
              Dismiss
            </button>

          </div>

        ))}

      </div>

    </div>
  )
}