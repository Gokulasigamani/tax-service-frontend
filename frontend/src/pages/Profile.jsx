import {
  User,
  Mail,
  Shield,
  Camera,
  KeyRound,
  Activity,
  BarChart3,
  Database,
  Sparkles
} from "lucide-react"

function MetricCard({
  title,
  value,
  footer,
  variant = "violet",
  children
}) {
  const variants = {
    violet: "from-violet-50/60 to-transparent",
    blue: "from-blue-50/60 to-transparent",
    emerald: "from-emerald-50/60 to-transparent"
  }

  return (
    <div className="relative overflow-hidden bg-white rounded-xl border border-neutral-200 shadow-sm p-5">

      <div className={`absolute inset-0 bg-gradient-to-br ${variants[variant]} pointer-events-none`} />

      <div className="relative">

        <div className="flex justify-between text-sm text-neutral-500 mb-4">
          {title}
          <span>{footer}</span>
        </div>

        <div className="flex items-end justify-between">

          <p className="text-2xl font-semibold text-neutral-900">
            {value}
          </p>

          <div className="flex items-end gap-[3px] h-10">
            {children}
          </div>

        </div>

      </div>
    </div>
  )
}

export default function Profile() {
  return (
    <div className="space-y-6">

      {/* Hero */}

      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm p-6">

        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/70 to-transparent" />

        <div className="relative flex items-center justify-between">

          <div className="flex items-center gap-5">

            <div className="relative">
              <img
                src="https://i.pravatar.cc/100"
                className="w-20 h-20 rounded-full border"
              />
              <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow">
                <Camera size={14} />
              </button>
            </div>

            <div>
              <h1 className="text-xl font-semibold">Gokul</h1>
              <p className="text-sm text-neutral-500">
                AI Product Builder
              </p>
            </div>

          </div>

          <button className="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm">
            Edit Profile
          </button>

        </div>

      </div>

      {/* 🔥 Metrics */}

      <div className="grid grid-cols-3 gap-6">

        <MetricCard title="Documents Processed" value="1,284" footer="This month">
          {[6, 10, 14, 8, 16, 12, 18].map((h, i) => (
            <div key={i} style={{ height: h }} className="w-[4px] bg-violet-400 rounded" />
          ))}
        </MetricCard>

        <MetricCard title="AI Accuracy" value="97.2%" footer="Avg" variant="blue">
          {[10, 12, 14, 15, 16, 17, 18].map((h, i) => (
            <div key={i} style={{ height: h }} className="w-[4px] bg-blue-400 rounded" />
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

      {/* 🔥 Analytics Section */}

      <div className="grid grid-cols-3 gap-6">

        {/* Activity Chart */}

        <div className="col-span-2 bg-white rounded-xl border p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold">
            <BarChart3 size={18} />
            Activity Overview
          </div>

          <div className="h-52 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-400 text-sm">
            Activity Graph (Docs / Time)
          </div>

        </div>

        {/* Insights */}

        <div className="bg-white rounded-xl border p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold">
            <Sparkles size={16} className="text-violet-600" />
            Insights
          </div>

          <div className="bg-neutral-50 p-3 rounded-lg text-sm">
            Your document processing increased by 18% this week.
          </div>

          <div className="bg-neutral-50 p-3 rounded-lg text-sm">
            AI accuracy improved after last training cycle.
          </div>

          <div className="bg-neutral-50 p-3 rounded-lg text-sm">
            Storage usage is approaching 25%.
          </div>

        </div>

      </div>

      {/* 🔥 Details */}

      <div className="grid grid-cols-3 gap-6">

        {/* Personal */}

        <div className="bg-white rounded-xl border p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold">
            <User size={18} />
            Personal Info
          </div>

          <input defaultValue="Gokul" className="input" />
          <input defaultValue="gokul@email.com" className="input" />

        </div>

        {/* Security */}

        <div className="bg-white rounded-xl border p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold">
            <Shield size={18} />
            Security
          </div>

          <div className="flex justify-between bg-neutral-50 p-3 rounded-lg">
            Password
            <button className="text-violet-600 text-sm">Change</button>
          </div>

          <div className="flex justify-between bg-neutral-50 p-3 rounded-lg">
            2FA
            <span className="text-green-600 text-sm">Enabled</span>
          </div>

        </div>

        {/* API */}

        <div className="bg-white rounded-xl border p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold">
            <KeyRound size={18} />
            API Usage
          </div>

          <div className="bg-neutral-50 p-3 rounded-lg text-sm">
            12,432 requests this month
          </div>

          <div className="bg-neutral-50 p-3 rounded-lg text-sm">
            Rate limit: 1000/min
          </div>

        </div>

      </div>

      {/* 🔥 Timeline */}

      <div className="bg-white rounded-xl border p-5 space-y-4">

        <div className="flex items-center gap-2 font-semibold">
          <Activity size={18} />
          Recent Activity
        </div>

        <div className="space-y-3 text-sm text-neutral-600">

          <div className="flex justify-between">
            <span>Uploaded 5 documents</span>
            <span className="text-neutral-400">Today</span>
          </div>

          <div className="flex justify-between">
            <span>Trained AI model</span>
            <span className="text-neutral-400">Yesterday</span>
          </div>

          <div className="flex justify-between">
            <span>Updated extraction rules</span>
            <span className="text-neutral-400">2 days ago</span>
          </div>

        </div>

      </div>

    </div>
  )
}