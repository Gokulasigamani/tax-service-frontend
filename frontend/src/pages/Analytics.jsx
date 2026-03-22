import { useState } from "react"
import {
  BarChart3,
  Sparkles,
  TrendingUp,
  FileText
} from "lucide-react"

import Select from "../components/ui/Select"

/* ---------- Metric Card (UNCHANGED) ---------- */

function MetricCard({
  title,
  value,
  change,
  positive = true,
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

        <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
          {title}
          <span>{footer}</span>
        </div>

        <div className="flex items-end justify-between">

          <div>
            <p className="text-2xl font-semibold text-neutral-900">
              {value}
            </p>
            <span className={`text-sm ${positive ? "text-green-600" : "text-red-500"}`}>
              {change}
            </span>
          </div>

          <div className="flex items-end gap-[3px] h-10">
            {children}
          </div>

        </div>

      </div>
    </div>
  )
}

/* ---------- Page ---------- */

export default function Analytics() {
  const [range, setRange] = useState("Last 7 days")

  const ranges = ["Last 7 days", "Last 30 days", "Last 90 days"]

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <h1 className="text-2xl font-semibold text-neutral-800">
          Analytics
        </h1>

        <div className="flex items-center gap-3">

          {/* ✅ USING YOUR SELECT */}
          <div className="w-44">
            <Select
              value={range}
              onChange={setRange}
              options={ranges}
            />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23] text-white text-sm">
            <Sparkles size={16} />
            Generate Report
          </button>

        </div>

      </div>

      {/* Metric Cards */}

      <div className="grid grid-cols-3 gap-6">

        <MetricCard
          title="Documents Processed"
          value="12,482"
          change="+18.2%"
          positive
          footer={range}
          variant="violet"
        >
          {[6, 10, 14, 8, 16, 12, 18].map((h, i) => (
            <div key={i} style={{ height: `${h}px` }} className="w-[4px] bg-violet-400 rounded-sm" />
          ))}
        </MetricCard>

        <MetricCard
          title="Avg Extraction Accuracy"
          value="97.4%"
          change="+1.8%"
          positive
          footer="Model"
          variant="blue"
        >
          {[10, 12, 14, 15, 16, 17, 18].map((h, i) => (
            <div key={i} style={{ height: `${h}px` }} className="w-[4px] bg-blue-400 rounded-sm" />
          ))}
        </MetricCard>

        <MetricCard
          title="Processing Time"
          value="1.8s"
          change="-0.4s"
          positive={false}
          footer="Avg per doc"
          variant="emerald"
        >
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

      {/* Charts Section */}

      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2 bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold text-neutral-800">
            <TrendingUp size={18} />
            Document Processing Trend
          </div>

          <div className="h-64 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-400 text-sm">
            Line Chart (Docs vs Time)
          </div>

        </div>

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold text-neutral-800">
            <BarChart3 size={18} />
            Document Types
          </div>

          <div className="space-y-3">

            {[
              { name: "Invoices", value: "45%" },
              { name: "Receipts", value: "25%" },
              { name: "Contracts", value: "18%" },
              { name: "Others", value: "12%" }
            ].map((item, i) => (

              <div key={i}>

                <div className="flex justify-between text-sm text-neutral-600 mb-1">
                  <span>{item.name}</span>
                  <span>{item.value}</span>
                </div>

                <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-violet-500"
                    style={{ width: item.value }}
                  />
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  )
}