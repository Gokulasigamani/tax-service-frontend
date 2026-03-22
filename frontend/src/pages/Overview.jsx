import {
  Sparkles,
  FileText,
  Brain,
} from "lucide-react"
import GreetingSection from "../components/GreetingSection"

import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  Area
} from "recharts"

// Data for charts
const chartData = [
  { name: "Mon", docs: 120 },
  { name: "Tue", docs: 210 },
  { name: "Wed", docs: 180 },
  { name: "Thu", docs: 260 },
  { name: "Fri", docs: 300 },
  { name: "Sat", docs: 240 },
  { name: "Sun", docs: 280 }
]

const activityData = [
  { name: "Mon", logins: 120, tasks: 80, errors: 5 },
  { name: "Tue", logins: 200, tasks: 160, errors: 3 },
  { name: "Wed", logins: 150, tasks: 120, errors: 4 },
  { name: "Thu", logins: 220, tasks: 200, errors: 2 },
  { name: "Fri", logins: 250, tasks: 230, errors: 1 },
  { name: "Sat", logins: 210, tasks: 180, errors: 3 },
  { name: "Sun", logins: 300, tasks: 290, errors: 0 }
]

export default function Overview() {
  return (
    <div className="space-y-6 px-3 sm:px-4 md:px-0">

      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-xl sm:text-2xl font-semibold text-neutral-800">
          Overview
        </h1>

        <button className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23] text-white text-sm shadow-sm hover:opacity-90 transition w-full sm:w-auto">
          <Sparkles size={16} />
          Create
        </button>
      </div>

      <GreetingSection />

      {/* Metric Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

        {/* Card 1 */}
        <div className="relative bg-white p-4 sm:p-5 rounded-xl border border-neutral-200 shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50/60 to-transparent pointer-events-none" />
          <div className="relative">
            <div className="flex justify-between text-xs sm:text-sm text-neutral-500 mb-3 sm:mb-4">
              Total Documents
              <span>Last 7 days</span>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-semibold">2,184</p>
              <span className="text-green-600 text-xs sm:text-sm">+14.2%</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white p-4 sm:p-5 rounded-xl border border-neutral-200 shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-transparent pointer-events-none" />
          <div className="relative">
            <div className="flex justify-between text-xs sm:text-sm text-neutral-500 mb-3 sm:mb-4">
              Active Collaborations
              <span>Last 7 days</span>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-semibold">128</p>
              <span className="text-green-600 text-xs sm:text-sm">+9.3%</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white p-4 sm:p-5 rounded-xl border border-neutral-200 shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 to-transparent pointer-events-none" />
          <div className="relative">
            <div className="flex justify-between text-xs sm:text-sm text-neutral-500 mb-3 sm:mb-4">
              AI Generated Content
              <span>All time</span>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-semibold">742</p>
              <span className="text-green-600 text-xs sm:text-sm">+21.8%</span>
            </div>
          </div>
        </div>

      </div>

      {/* Chart Section */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

        {/* Chart */}
        <div className="md:col-span-2 bg-white rounded-xl border border-neutral-200 shadow-sm p-4 sm:p-5">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-1">
            <h2 className="font-semibold text-neutral-800 text-sm sm:text-base">
              Team Collaboration Activity
            </h2>
            <span className="text-xs sm:text-sm text-neutral-400">
              Last 7 days
            </span>
          </div>

          <div className="h-[220px] sm:h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorDocs" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="name" stroke="#999" />
                <YAxis stroke="#999" hide />
                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="docs"
                  stroke="#7c3aed"
                  strokeWidth={2}
                  fill="url(#colorDocs)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* Insights */}
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-4 sm:p-5 space-y-3 sm:space-y-4">

          <div className="flex items-center gap-2 font-semibold text-neutral-800 text-sm sm:text-base">
            <Brain size={18} />
            Insights
          </div>

          <div className="bg-violet-50 rounded-lg p-3 text-xs sm:text-sm text-neutral-700">
            Team collaboration increased by 21% this week.
          </div>

          <div className="bg-blue-50 rounded-lg p-3 text-xs sm:text-sm text-neutral-700">
            AI-generated documents are growing rapidly.
          </div>

          <div className="bg-emerald-50 rounded-lg p-3 text-xs sm:text-sm text-neutral-700">
            Most activity observed in shared workspaces.
          </div>

        </div>

      </div>

<<<<<<< HEAD
      {/* Bottom Section */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

        <div className="md:col-span-2 bg-white rounded-xl border p-4 sm:p-5">
          <h2 className="font-semibold mb-4 text-sm sm:text-base">
            Recent Documents
          </h2>

          <div className="divide-y">
            {["Project Plan", "Meeting Notes", "AI SOP Document"].map((doc, i) => (
              <div key={i} className="py-3 flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <FileText size={16} className="text-violet-600" />
                  <span className="text-sm">{doc}</span>
                </div>
                <span className="text-xs text-neutral-400">Today</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border p-4 sm:p-5 space-y-4">
          <div className="flex items-center gap-2 font-semibold text-sm sm:text-base">
            <Brain size={18} />
            AI Copilot
          </div>

          <div className="bg-neutral-50 p-3 rounded-lg text-xs sm:text-sm">
            Generate a new document using AI or templates.
          </div>

          <div className="border rounded-lg flex px-3 py-2">
            <input
              className="flex-1 outline-none text-sm"
              placeholder="Ask AI to create or summarize..."
            />
            <Sparkles size={16} className="text-violet-600" />
          </div>
        </div>
=======
      {/* 🔥 NEW SECTION: ACTIVITY INSIGHTS */}

     {/* 🔥 NEW SECTION: ACTIVITY INSIGHTS */}

<div className="grid grid-cols-3 gap-6">

  {/* Chart */}
  <div className="col-span-2 bg-white rounded-xl border border-neutral-200 shadow-sm p-5">

    <div className="flex justify-between items-center mb-4">
      <h2 className="font-semibold text-neutral-800">
        System Activity Insights
      </h2>
      <span className="text-sm text-neutral-400">Last 7 days</span>
    </div>

    <div className="h-[260px]">

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={activityData}>
>>>>>>> 60f6aa940b3e82866fa24214d11afe2837600d53

          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />

          <XAxis dataKey="name" stroke="#999" />
          <YAxis stroke="#999" />

          <Tooltip
            contentStyle={{
              background: "#fff",
              border: "1px solid #eee",
              borderRadius: "8px"
            }}
          />

          {/* 🔥 FIX: NO LEGEND (avoids crash if not imported) */}

          <Line
            type="monotone"
            dataKey="logins"
            stroke="#6366f1"
            strokeWidth={2}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="tasks"
            stroke="#10b981"
            strokeWidth={2}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="errors"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={false}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>

  </div>

  {/* Insights */}
  <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-4">

    <h3 className="font-semibold text-neutral-800">
      Activity Insights
    </h3>

    <div className="bg-indigo-50 rounded-lg p-3 text-sm text-neutral-700">
      Peak logins reached 300 on Sunday.
    </div>

    <div className="bg-emerald-50 rounded-lg p-3 text-sm text-neutral-700">
      Task completion increased by 20%.
    </div>

    <div className="bg-amber-50 rounded-lg p-3 text-sm text-neutral-700">
      Error rate dropped significantly this week.
    </div>

  </div>

</div>
      

    </div>
  )
}