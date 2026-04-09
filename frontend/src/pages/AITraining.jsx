import { useState } from "react"
import {
  Brain,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  BarChart3
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
    <div className="relative overflow-hidden bg-surface rounded-xl border border-border shadow-sm p-4 sm:p-5 min-h-[120px]">

      <div className={`absolute inset-0 bg-gradient-to-br ${variants[variant]} pointer-events-none`} />

      <div className="relative">

        <div className="flex justify-between text-xs sm:text-sm text-text-main/70 mb-3 sm:mb-4">
          <span className="truncate">{title}</span>
          <span className="text-[10px] sm:text-xs">{footer}</span>
        </div>

        <div className="flex items-end justify-between">

          <div>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-text-main">
              {value}
            </p>

            <span className={`text-xs sm:text-sm ${positive ? "text-green-500" : "text-red-500"}`}>
              {change}
            </span>
          </div>

          <div className="flex items-end gap-[2px] sm:gap-[3px] h-8 sm:h-10">
            {children}
          </div>

        </div>

      </div>
    </div>
  )
}

/* ---------- Page ---------- */

export default function AITraining() {
  const [dataset, setDataset] = useState("Invoice Dataset")

  const datasets = [
    "Invoice Dataset",
    "Receipt Dataset",
    "Contract Dataset"
  ]

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <h1 className="text-xl sm:text-2xl font-semibold text-text-main">
          AI Training
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

          <div className="w-full sm:w-48">
            <Select value={dataset} onChange={setDataset} options={datasets} />
          </div>

          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23] text-white text-sm shadow-sm">
            <Sparkles size={16} />
            Train Model
          </button>

        </div>

      </div>

      {/* Dataset Info */}

      <div className="flex flex-wrap gap-4 text-xs text-text-main/70">
        <span>Dataset size: 12,842 docs</span>
        <span>Last trained: 2 hours ago</span>
        <span>Model version: v2.1</span>
      </div>

      {/* Metrics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

        <MetricCard title="Model Accuracy" value="96.8%" change="+2.3%" footer="Last 7 days">
          {[6, 10, 14, 12, 16, 18, 20].map((h, i) => (
            <div key={i} style={{ height: `${h}px` }} className="w-[3px] sm:w-[4px] bg-primary/10 rounded-sm" />
          ))}
        </MetricCard>

        <MetricCard title="Documents Trained" value="3,421" change="+8.1%" footer="All time" variant="blue">
          {[8, 9, 10, 12, 14, 15, 16].map((h, i) => (
            <div key={i} style={{ height: `${h}px` }} className="w-[3px] sm:w-[4px] bg-blue-400 rounded-sm" />
          ))}
        </MetricCard>

        <MetricCard title="Pending Feedback" value="128" change="-3.2%" positive={false} footer="Needs review" variant="emerald">
          <svg width="80" height="30">
            <polyline fill="none" stroke="#10b981" strokeWidth="2"
              points="0,25 10,22 20,21 30,18 40,16 50,14 60,10 70,7 80,5"
            />
          </svg>
        </MetricCard>

      </div>

      {/* Training Progress */}

      <div className="bg-surface rounded-xl border border-border shadow-sm p-4 sm:p-5">

        <div className="flex justify-between text-sm mb-2">
          <span className="text-text-main/70">Training Progress</span>
          <span className="text-text-main font-medium">72%</span>
        </div>

        <div className="h-2 bg-surface rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-violet-500 to-blue-500 w-[72%]" />
        </div>

      </div>

      {/* Main Section */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">

        {/* Feedback */}

        <div className="bg-surface rounded-xl border border-border shadow-sm p-4 sm:p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold">
            <Brain size={18} />
            Training Feedback
          </div>

          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="p-3 border border-border rounded-lg space-y-2">

              <p className="text-sm font-medium">
                Invoice #{i + 1001}
              </p>

              <p className="text-xs text-text-main/70">
                Field mismatch detected
              </p>

              <div className="flex gap-3">

                <button className="flex items-center gap-1 text-green-500 text-xs">
                  <CheckCircle2 size={14} />
                  Correct
                </button>

                <button className="flex items-center gap-1 text-red-500 text-xs">
                  <AlertCircle size={14} />
                  Incorrect
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Insights */}

        <div className="lg:col-span-2 bg-surface rounded-xl border border-border shadow-sm p-4 sm:p-5">

          <div className="flex items-center gap-2 font-semibold mb-4">
            <BarChart3 size={18} />
            Training Insights
          </div>

          <div className="h-52 sm:h-64 bg-surface rounded-lg flex items-center justify-center text-text-main/50 text-sm">
            Accuracy Trend Chart
          </div>

        </div>

      </div>

    </div>
  )
}