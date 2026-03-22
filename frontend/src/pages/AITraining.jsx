import { useState } from "react"
import {
  Brain,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  BarChart3
} from "lucide-react"

import Select from "../components/ui/Select"

/* ---------- Metric Card (EXACT) ---------- */

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

      <div
        className={`absolute inset-0 bg-gradient-to-br ${variants[variant]} pointer-events-none`}
      />

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
            <span
              className={`text-sm ${
                positive ? "text-green-600" : "text-red-500"
              }`}
            >
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

      <div className="flex items-center justify-between">

        <h1 className="text-2xl font-semibold text-neutral-800">
          AI Training
        </h1>

        <div className="flex items-center gap-3">

          <div className="w-48">
            <Select value={dataset} onChange={setDataset} options={datasets} />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23] text-white text-sm shadow-sm">
            <Sparkles size={16} />
            Train Model
          </button>

        </div>

      </div>

      {/* 🔥 EXACT METRIC DESIGN */}

      <div className="grid grid-cols-3 gap-6">

        <MetricCard
          title="Model Accuracy"
          value="96.8%"
          change="+2.3%"
          positive
          footer="Last 7 days"
          variant="violet"
        >
          {[6, 10, 14, 12, 16, 18, 20].map((h, i) => (
            <div key={i} style={{ height: `${h}px` }} className="w-[4px] bg-violet-400 rounded-sm" />
          ))}
        </MetricCard>

        <MetricCard
          title="Documents Trained"
          value="3,421"
          change="+8.1%"
          positive
          footer="All time"
          variant="blue"
        >
          {[8, 9, 10, 12, 14, 15, 16].map((h, i) => (
            <div key={i} style={{ height: `${h}px` }} className="w-[4px] bg-blue-400 rounded-sm" />
          ))}
        </MetricCard>

        <MetricCard
          title="Pending Feedback"
          value="128"
          change="-3.2%"
          positive={false}
          footer="Needs review"
          variant="emerald"
        >
          <svg width="80" height="30">
            <polyline
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              points="0,25 10,22 20,21 30,18 40,16 50,14 60,10 70,7 80,5"
            />
          </svg>
        </MetricCard>

      </div>

      {/* Rest of your page remains SAME */}

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold">
            <Brain size={18} />
            Training Feedback
          </div>

          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="p-3 border border-neutral-200 rounded-lg space-y-1">

              <p className="text-sm font-medium">
                Invoice #{i + 1001}
              </p>

              <p className="text-xs text-neutral-500">
                Field mismatch detected
              </p>

              <div className="flex gap-3 pt-2">

                <button className="flex items-center gap-1 text-green-600 text-xs">
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

        <div className="col-span-2 bg-white rounded-xl border border-neutral-200 shadow-sm p-5">
          <div className="flex items-center gap-2 font-semibold mb-4">
            <BarChart3 size={18} />
            Training Insights
          </div>

          <div className="h-52 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-400 text-sm">
            Accuracy Trend Chart
          </div>
        </div>

      </div>

    </div>
  )
}