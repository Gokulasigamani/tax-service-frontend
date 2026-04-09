import { useState } from "react"
import {
  BarChart3,
  Sparkles,
  TrendingUp
} from "lucide-react"

import Select from "../components/ui/Select"

/* ---------- Metric Card ---------- */

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
    violet: "from-violet-500/10 to-transparent",
    blue: "from-blue-500/10 to-transparent",
    emerald: "from-emerald-500/10 to-transparent"
  }

  return (
    <div className="relative overflow-hidden bg-surface rounded-xl sm:rounded-2xl border border-border shadow-sm p-4 sm:p-5 min-h-[110px] sm:min-h-[130px]">

      <div className={`absolute inset-0 bg-gradient-to-br ${variants[variant]} pointer-events-none`} />

      <div className="relative h-full flex flex-col justify-between">

        <div className="flex items-center justify-between text-xs sm:text-sm text-text-main/70 mb-2 sm:mb-4">
          <span className="truncate">{title}</span>
          <span className="text-[10px] sm:text-xs">{footer}</span>
        </div>

        <div className="flex items-end justify-between gap-2">

          <div className="min-w-0">
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-text-main truncate">
              {value}
            </p>

            <span className={`text-xs sm:text-sm ${positive ? "text-green-500" : "text-red-500"}`}>
              {change}
            </span>
          </div>

          <div className="flex items-end gap-[2px] sm:gap-[3px] h-8 sm:h-10 shrink-0">
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

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-text-main">
            Analytics
          </h1>
          <p className="text-xs text-text-main/70 mt-1">
            Track performance and AI insights
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

          <div className="w-full sm:w-44">
            <Select
              value={range}
              onChange={setRange}
              options={ranges}
            />
          </div>

          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23] text-white text-sm">
            <Sparkles size={16} />
            Generate Report
          </button>

        </div>

      </div>

      {/* Metrics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

        <MetricCard
          title="Documents Processed"
          value="12,482"
          change="+18.2%"
          footer={range}
        >
          {[6, 10, 14, 8, 16, 12, 18].map((h, i) => (
            <div key={i} style={{ height: `${h}px` }} className="w-[3px] sm:w-[4px] bg-primary/10 rounded-sm" />
          ))}
        </MetricCard>

        <MetricCard
          title="Avg Extraction Accuracy"
          value="97.4%"
          change="+1.8%"
          footer="Model"
          variant="blue"
        >
          {[10, 12, 14, 15, 16, 17, 18].map((h, i) => (
            <div key={i} style={{ height: `${h}px` }} className="w-[3px] sm:w-[4px] bg-blue-400 rounded-sm" />
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

      {/* Charts */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">

        {/* Trend */}

        <div className="lg:col-span-2 bg-surface rounded-xl border border-border shadow-sm p-4 sm:p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold text-text-main">
            <TrendingUp size={18} />
            Document Processing Trend
          </div>

          <div className="h-48 sm:h-64 bg-surface rounded-lg flex items-center justify-center text-text-main/50 text-sm">
            Line Chart
          </div>

        </div>

        {/* Types */}

        <div className="bg-surface rounded-xl border border-border shadow-sm p-4 sm:p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold text-text-main">
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

                <div className="flex justify-between text-sm text-text-main/70 mb-1">
                  <span>{item.name}</span>
                  <span>{item.value}</span>
                </div>

                <div className="h-2 bg-surface rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary"
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