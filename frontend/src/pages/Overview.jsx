import {
  Sparkles,
  FileText,
  Brain
} from "lucide-react"
import GreetingSection from "../components/GreetingSection"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  Area
} from "recharts"

const chartData = [
  { name: "Mon", docs: 120, accuracy: 92 },
  { name: "Tue", docs: 210, accuracy: 94 },
  { name: "Wed", docs: 180, accuracy: 93 },
  { name: "Thu", docs: 260, accuracy: 96 },
  { name: "Fri", docs: 300, accuracy: 97 },
  { name: "Sat", docs: 240, accuracy: 95 },
  { name: "Sun", docs: 280, accuracy: 98 }
]

export default function Overview() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-800">
          Overview
        </h1>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23] text-white text-sm shadow-sm hover:opacity-90 transition">
          <Sparkles size={16} />
          Create
        </button>
      </div>

      <GreetingSection />

      {/* Metric Cards */}

      <div className="grid grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="relative bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50/60 to-transparent pointer-events-none" />
          <div className="relative">
            <div className="flex justify-between text-sm text-neutral-500 mb-4">
              Documents Processed
              <span>Last 7 days</span>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-2xl font-semibold">1,294</p>
                <span className="text-green-600 text-sm">+12.4%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-transparent pointer-events-none" />
          <div className="relative">
            <div className="flex justify-between text-sm text-neutral-500 mb-4">
              Extraction Runs
              <span>Last 7 days</span>
            </div>
            <div>
              <p className="text-2xl font-semibold">842</p>
              <span className="text-red-500 text-sm">-2.1%</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 to-transparent pointer-events-none" />
          <div className="relative">
            <div className="flex justify-between text-sm text-neutral-500 mb-4">
              Total Fields Extracted
              <span>All time</span>
            </div>
            <div>
              <p className="text-2xl font-semibold">68,674</p>
              <span className="text-green-600 text-sm">+4.1%</span>
            </div>
          </div>
        </div>

      </div>

      {/* 🔥 PREMIUM CHART SECTION */}

      <div className="grid grid-cols-3 gap-6">

        {/* MAIN CHART */}
        <div className="col-span-2 bg-white rounded-xl border border-neutral-200 shadow-sm p-5">

          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-neutral-800">
              Document Processing Trend
            </h2>
            <span className="text-sm text-neutral-400">
              Last 7 days
            </span>
          </div>

          <div className="h-[260px]">

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
                <YAxis stroke="#999" />
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

        {/* SIDE INSIGHT CARD */}
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold text-neutral-800">
            <Brain size={18} />
            Insights
          </div>

          <div className="bg-violet-50 rounded-lg p-3 text-sm text-neutral-700">
            Processing volume increased by 18% compared to last week.
          </div>

          <div className="bg-blue-50 rounded-lg p-3 text-sm text-neutral-700">
            Peak activity observed on Friday.
          </div>

          <div className="bg-emerald-50 rounded-lg p-3 text-sm text-neutral-700">
            AI accuracy improved to 98%.
          </div>

        </div>

      </div>

      {/* Middle Section */}

      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2 bg-white rounded-xl border p-5">
          <h2 className="font-semibold mb-4">Latest Documents</h2>

          <div className="divide-y">
            {["Invoice.pdf", "Contract.docx", "KYC.pdf"].map((doc, i) => (
              <div key={i} className="py-3 flex justify-between">
                <div className="flex gap-3 items-center">
                  <FileText size={16} className="text-violet-600" />
                  <span>{doc}</span>
                </div>
                <span className="text-xs text-neutral-400">Today</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border p-5 space-y-4">
          <div className="flex items-center gap-2 font-semibold">
            <Brain size={18} />
            Copilot
          </div>

          <div className="bg-neutral-50 p-3 rounded-lg text-sm">
            Try adding validation rules for invoices.
          </div>

          <div className="border rounded-lg flex px-3 py-2">
            <input className="flex-1 outline-none" placeholder="Ask AI..." />
            <Sparkles size={16} className="text-violet-600" />
          </div>
        </div>

      </div>

    </div>
  )
}