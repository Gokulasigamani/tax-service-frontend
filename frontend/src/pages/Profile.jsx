import {
  User,
  Shield,
  Camera,
  KeyRound,
  Activity,
  BarChart3,
  Sparkles
} from "lucide-react"

/* ---------- Metric Card ---------- */

function MetricCard({
  title,
  value,
  footer,
  variant = "violet",
  children
}) {
  const variants = {
    violet: "from-violet-500/10 to-transparent",
    blue: "from-blue-500/10 to-transparent",
    emerald: "from-emerald-500/10 to-transparent"
  }

  return (
    <div className="relative overflow-hidden bg-surface rounded-xl sm:rounded-2xl border border-border shadow-sm p-4 sm:p-5 min-h-[110px] sm:min-h-[130px]">

      <div className={`absolute inset-0 bg-gradient-to-br ${variants[variant]} pointer-events-none`} />

      <div className="relative h-full flex flex-col justify-between">

        <div className="flex justify-between text-xs sm:text-sm text-text-main/70 mb-2 sm:mb-4">
          <span className="truncate">{title}</span>
          <span className="text-[10px] sm:text-xs">{footer}</span>
        </div>

        <div className="flex items-end justify-between">

          <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-text-main truncate">
            {value}
          </p>

          <div className="flex items-end gap-[2px] sm:gap-[3px] h-8 sm:h-10">
            {children}
          </div>

        </div>

      </div>
    </div>
  )
}

/* ---------- Page ---------- */

export default function Profile() {
  return (
    <div className="space-y-6">

      {/* Hero */}

      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-surface shadow-sm p-5 sm:p-6">

        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent" />

        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

          <div className="flex items-center gap-4">

            <div className="relative">
              <img
                src="https://i.pravatar.cc/100"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border"
              />
              <button className="absolute bottom-0 right-0 p-1.5 bg-surface rounded-full shadow">
                <Camera size={12} />
              </button>
            </div>

            <div>
              <h1 className="text-lg sm:text-xl font-semibold">Gokul</h1>
              <p className="text-xs sm:text-sm text-text-main/70">
                AI Product Builder
              </p>
            </div>

          </div>

          <button className="w-full sm:w-auto px-4 py-2 bg-primary text-white rounded-lg text-sm">
            Edit Profile
          </button>

        </div>

      </div>

      {/* Metrics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

        <MetricCard title="Documents Processed" value="1,284" footer="This month">
          {[6, 10, 14, 8, 16, 12, 18].map((h, i) => (
            <div key={i} style={{ height: h }} className="w-[3px] sm:w-[4px] bg-primary/10 rounded" />
          ))}
        </MetricCard>

        <MetricCard title="AI Accuracy" value="97.2%" footer="Avg" variant="blue">
          {[10, 12, 14, 15, 16, 17, 18].map((h, i) => (
            <div key={i} style={{ height: h }} className="w-[3px] sm:w-[4px] bg-blue-400 rounded" />
          ))}
        </MetricCard>

        <MetricCard title="Storage Used" value="2.4GB" footer="of 10GB" variant="emerald">
          <svg width="80" height="30">
            <polyline
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              points="0,25 10,23 20,20 30,18 40,16 50,14 60,10 70,7 80,5"
            />
          </svg>
        </MetricCard>

      </div>

      {/* Analytics */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">

        <div className="lg:col-span-2 bg-surface rounded-xl border border-border shadow-sm p-4 sm:p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold text-text-main">
            <BarChart3 size={18} />
            Activity Overview
          </div>

          <div className="h-48 sm:h-52 bg-surface rounded-lg flex items-center justify-center text-text-main/50 text-sm">
            Activity Graph
          </div>

        </div>

        <div className="bg-surface rounded-xl border border-border shadow-sm p-4 sm:p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold text-text-main">
            <Sparkles size={16} className="text-primary" />
            Insights
          </div>

          {[
            "Document processing increased by 18%",
            "AI accuracy improved",
            "Storage usage growing steadily"
          ].map((item, i) => (
            <div key={i} className="bg-background p-3 rounded-lg text-sm">
              {item}
            </div>
          ))}

        </div>

      </div>

      {/* Details */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">

        {/* Personal */}
        <div className="bg-surface rounded-xl border border-border shadow-sm p-4 sm:p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold">
            <User size={18} />
            Personal Info
          </div>

          <input className="w-full border border-border rounded-lg px-3 py-2 text-sm" defaultValue="Gokul" />
          <input className="w-full border border-border rounded-lg px-3 py-2 text-sm" defaultValue="gokul@email.com" />

        </div>

        {/* Security */}
        <div className="bg-surface rounded-xl border border-border shadow-sm p-4 sm:p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold">
            <Shield size={18} />
            Security
          </div>

          <div className="flex justify-between bg-background p-3 rounded-lg text-sm">
            <span>Password</span>
            <button className="text-primary">Change</button>
          </div>

          <div className="flex justify-between bg-background p-3 rounded-lg text-sm">
            <span>2FA</span>
            <span className="text-green-500">Enabled</span>
          </div>

        </div>

        {/* API */}
        <div className="bg-surface rounded-xl border border-border shadow-sm p-4 sm:p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold">
            <KeyRound size={18} />
            API Usage
          </div>

          <div className="bg-background p-3 rounded-lg text-sm">
            12,432 requests this month
          </div>

          <div className="bg-background p-3 rounded-lg text-sm">
            Rate limit: 1000/min
          </div>

        </div>

      </div>

      {/* Timeline */}

      <div className="bg-surface rounded-xl border border-border shadow-sm p-4 sm:p-5 space-y-4">

        <div className="flex items-center gap-2 font-semibold">
          <Activity size={18} />
          Recent Activity
        </div>

        <div className="space-y-3 text-sm text-text-main/70">

          {[
            { text: "Uploaded 5 documents", time: "Today" },
            { text: "Trained AI model", time: "Yesterday" },
            { text: "Updated extraction rules", time: "2 days ago" }
          ].map((item, i) => (

            <div key={i} className="flex justify-between">
              <span>{item.text}</span>
              <span className="text-text-main/50 text-xs">{item.time}</span>
            </div>

          ))}

        </div>

      </div>

    </div>
  )
}