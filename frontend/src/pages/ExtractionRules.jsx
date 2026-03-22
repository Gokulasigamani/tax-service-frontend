import {
  Activity,
  Brain,
  Users
} from "lucide-react"

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts"

import { useState } from "react"

/* ---------- Chart Data ---------- */

const mainData = [
  { name: "Mon", edits: 40 },
  { name: "Tue", edits: 70 },
  { name: "Wed", edits: 60 },
  { name: "Thu", edits: 90 },
  { name: "Fri", edits: 120 },
  { name: "Sat", edits: 80 },
  { name: "Sun", edits: 100 }
]

const miniData = [
  { v: 10 },
  { v: 30 },
  { v: 20 },
  { v: 50 },
  { v: 40 },
  { v: 60 },
  { v: 55 }
]

/* ---------- Metric Card ---------- */

function MetricCard({ title, value, sub, variant }) {

  const gradientMap = {
    violet: "from-violet-50/60 to-transparent",
    blue: "from-blue-50/60 to-transparent",
    emerald: "from-emerald-50/60 to-transparent"
  }

  const colorMap = {
    violet: "#7c3aed",
    blue: "#3b82f6",
    emerald: "#10b981"
  }

  return (
    <div className="relative bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-neutral-200 shadow-sm min-h-[120px]">

      <div className={`absolute inset-0 bg-gradient-to-br ${gradientMap[variant]} pointer-events-none`} />

      <div className="relative space-y-3">

        <div className="flex justify-between items-center text-xs sm:text-sm text-neutral-500">
          <span className="truncate">{title}</span>
          <span className="text-[10px] sm:text-xs">{sub}</span>
        </div>

        <div className="flex items-end justify-between gap-3">

          <div>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-900">
              {value}
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              vs last week
            </p>
          </div>

          {/* Mini Chart */}
          <div className="w-[70px] sm:w-[90px] h-[35px] sm:h-[40px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={miniData}>
                <defs>
                  <linearGradient id={`mini-${variant}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={colorMap[variant]} stopOpacity={0.25} />
                    <stop offset="100%" stopColor={colorMap[variant]} stopOpacity={0} />
                  </linearGradient>
                </defs>

                <Area
                  type="monotone"
                  dataKey="v"
                  stroke={colorMap[variant]}
                  strokeWidth={2}
                  fill={`url(#mini-${variant})`}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

        </div>

      </div>
    </div>
  )
}

/* ---------- Page ---------- */

export default function ActivityPage() {
  const [activeTab, setActiveTab] = useState("All")

  const activities = [
    { text: "Gokul edited Project Plan", type: "user" },
    { text: "AI generated SOP document", type: "ai" },
    { text: "Team added comments", type: "team" },
    { text: "New document created", type: "doc" },
    { text: "Project updated", type: "system" }
  ]

  const activityColors = {
    user: "bg-violet-50",
    ai: "bg-blue-50",
    team: "bg-emerald-50",
    doc: "bg-neutral-100",
    system: "bg-neutral-50"
  }

  const filteredActivities =
    activeTab === "All"
      ? activities
      : activities.filter((a) => a.type === activeTab.toLowerCase())

  const tabs = ["All", "AI", "Team", "Doc", "System"]

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-neutral-800">
            Activity & Insights
          </h1>
          <p className="text-xs text-neutral-500 mt-1">
            Track collaboration, AI usage, and team productivity
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs px-3 py-1 bg-green-50 text-green-600 rounded-full w-fit">
          ● Live Updates
        </div>

      </div>

      {/* Metrics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

        <MetricCard title="Total Edits" value="1,284" sub="Last 7 days" variant="violet" />
        <MetricCard title="Active Users" value="32" sub="Workspace" variant="blue" />
        <MetricCard title="AI Actions" value="742" sub="Automation" variant="emerald" />

      </div>

      {/* Chart */}

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-4 sm:p-5">

        <div className="flex justify-between mb-4">
          <h2 className="font-semibold text-neutral-800">
            Activity Trend
          </h2>
          <span className="text-xs sm:text-sm text-neutral-400">
            Last 7 days
          </span>
        </div>

        <div className="h-[220px] sm:h-[260px]">

          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mainData}>
              <defs>
                <linearGradient id="colorEdits" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="name" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip />

              <Area
                type="monotone"
                dataKey="edits"
                stroke="#7c3aed"
                strokeWidth={2}
                fill="url(#colorEdits)"
              />
            </AreaChart>
          </ResponsiveContainer>

        </div>

      </div>

      {/* Tabs */}

      <div className="overflow-x-auto">
        <div className="bg-white border border-neutral-200 rounded-xl p-2 flex gap-2 w-max shadow-sm">

          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap ${
                activeTab === tab
                  ? "bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23] text-white"
                  : "text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              {tab}
            </button>
          ))}

        </div>
      </div>

      {/* Feed */}

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-4 sm:p-5">

        <div className="flex items-center gap-2 font-semibold mb-4">
          <Activity size={16} />
          Activity Feed
        </div>

        <div className="space-y-3 text-sm text-neutral-600">

          {filteredActivities.map((act, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg ${activityColors[act.type]}`}
            >
              {act.text}
            </div>
          ))}

        </div>

      </div>

    </div>
  )
}