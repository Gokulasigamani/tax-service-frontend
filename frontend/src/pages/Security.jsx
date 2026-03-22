import { useState } from "react"
import {
  Sparkles,
  Zap,
  Play,
  Pause,
  Plus,
  Activity,
  Clock
} from "lucide-react"

/* ---------- Metric Card ---------- */

function MetricCard({ title, value, footer }) {
  return (
    <div className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-neutral-200 shadow-sm min-h-[110px]">

      <p className="text-xs sm:text-sm text-neutral-500 mb-2">
        {title}
      </p>

      <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-900">
        {value}
      </p>

      <span className="text-xs text-neutral-400">
        {footer}
      </span>

    </div>
  )
}

/* ---------- Page ---------- */

export default function AutomationHub() {
  const [workflows, setWorkflows] = useState([
    {
      name: "Invoice Processing",
      trigger: "Document Upload",
      action: "Extract Data",
      active: true,
      runs: 1240,
      success: "98%",
      lastRun: "2 mins ago",
      tag: "AI"
    },
    {
      name: "AI Summary",
      trigger: "New Document",
      action: "Generate Summary",
      active: false,
      runs: 842,
      success: "95%",
      lastRun: "10 mins ago",
      tag: "System"
    }
  ])

  const toggleWorkflow = (index) => {
    const updated = [...workflows]
    updated[index].active = !updated[index].active
    setWorkflows(updated)
  }

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-neutral-800">
            Automation Hub
          </h1>
          <p className="text-xs text-neutral-500 mt-1">
            Build intelligent workflows powered by AI
          </p>
        </div>

        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg
          bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23]
          text-white text-sm shadow-sm">
          <Plus size={16} />
          Create Workflow
        </button>

      </div>

      {/* Metrics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

        <MetricCard title="Active Workflows" value="6" footer="Running" />
        <MetricCard title="Executions" value="2,842" footer="This week" />
        <MetricCard title="Time Saved" value="18h" footer="Automation impact" />

      </div>

      {/* Performance Strip */}

      <div className="flex flex-wrap gap-3 text-xs text-neutral-500">
        <span>Automation success rate at 97%</span>
        <span>High usage in AI workflows</span>
        <span>System efficiency improved</span>
      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">

        {/* Workflows */}

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

          {workflows.map((wf, i) => (

            <div
              key={i}
              className="bg-white rounded-xl border border-neutral-200 shadow-sm p-4 sm:p-5 space-y-4"
            >

              {/* Header */}
              <div className="flex justify-between items-center">

                <h2 className="font-semibold text-neutral-800 text-sm sm:text-base">
                  {wf.name}
                </h2>

                <button onClick={() => toggleWorkflow(i)}>
                  {wf.active ? (
                    <Pause size={16} className="text-orange-500" />
                  ) : (
                    <Play size={16} className="text-green-600" />
                  )}
                </button>

              </div>

              {/* Tag */}
              <span className="text-xs px-2 py-1 rounded-md bg-violet-100 text-violet-600">
                {wf.tag}
              </span>

              {/* Flow */}
              <div className="text-sm text-neutral-600 space-y-2">

                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-violet-600" />
                  {wf.trigger}
                </div>

                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-blue-500" />
                  {wf.action}
                </div>

              </div>

              {/* Stats */}
              <div className="flex justify-between text-xs text-neutral-500">
                <span>{wf.runs} runs</span>
                <span>{wf.success} success</span>
              </div>

              <div className="text-xs text-neutral-400 flex items-center gap-1">
                <Clock size={12} />
                Last run {wf.lastRun}
              </div>

              {/* Status */}
              <span className={`text-xs px-2 py-1 rounded-md ${
                wf.active
                  ? "bg-green-100 text-green-600"
                  : "bg-neutral-100 text-neutral-500"
              }`}>
                {wf.active ? "Active" : "Paused"}
              </span>

            </div>

          ))}

        </div>

        {/* Activity Feed */}

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-4 sm:p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold text-neutral-800">
            <Activity size={16} />
            Execution Activity
          </div>

          {[
            "Invoice processed successfully",
            "Summary generated",
            "Workflow paused",
            "New automation triggered"
          ].map((log, i) => (
            <div key={i} className="text-sm text-neutral-600 bg-neutral-100 p-2 rounded">
              {log}
            </div>
          ))}

        </div>

      </div>

      {/* AI Suggestions */}

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-4 sm:p-5 space-y-3">

        <div className="flex items-center gap-2 font-semibold text-neutral-800">
          <Sparkles size={16} className="text-violet-600" />
          Smart Automation Suggestions
        </div>

        <div className="bg-violet-50 p-3 rounded-lg text-sm">
          Auto-approve low-risk invoices to reduce manual work
        </div>

        <div className="bg-blue-50 p-3 rounded-lg text-sm">
          Trigger alerts for failed document processing
        </div>

        <div className="bg-emerald-50 p-3 rounded-lg text-sm">
          Generate weekly reports automatically
        </div>

      </div>

    </div>
  )
}