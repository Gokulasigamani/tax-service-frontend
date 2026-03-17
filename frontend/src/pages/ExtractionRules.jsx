import { useState } from "react"
import {
  Plus,
  Trash2,
  Sparkles,
  Workflow
} from "lucide-react"

import Select from "../components/ui/Select.jsx"

export default function ExtractionRules() {

  const [selectedRule, setSelectedRule] = useState("Invoice Total Rule")

  const rules = [
    "Invoice Total Rule",
    "Invoice Number Rule",
    "Vendor Name Rule"
  ]

  const templates = [
    "Invoice Template",
    "Receipt Template",
    "Contract Template"
  ]

  const [template, setTemplate] = useState("Invoice Template")

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <h1 className="text-2xl font-semibold text-neutral-800">
          Extraction Rules
        </h1>

        <div className="flex items-center gap-3">

          <div className="w-48">
            <Select
              value={template}
              onChange={setTemplate}
              options={templates}
            />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 text-white text-sm hover:bg-violet-700 transition">
            <Plus size={16} />
            New Rule
          </button>

        </div>

      </div>

      {/* Main Layout */}

      <div className="grid grid-cols-3 gap-6">

        {/* LEFT: Rule List */}

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-4 space-y-2">

          <div className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-3">
            <Workflow size={16} />
            Rules
          </div>

          {rules.map((rule, i) => (

            <div
              key={i}
              onClick={() => setSelectedRule(rule)}
              className={`px-3 py-2 rounded-lg cursor-pointer text-sm transition
                ${
                  selectedRule === rule
                    ? "bg-violet-50 text-violet-700"
                    : "hover:bg-neutral-100"
                }`}
            >
              {rule}
            </div>

          ))}

        </div>

        {/* RIGHT: Rule Editor */}

        <div className="col-span-2 bg-white rounded-xl border border-neutral-200 shadow-sm p-6 space-y-6">

          {/* Rule Title */}

          <div>

            <label className="text-sm text-neutral-500">
              Rule Name
            </label>

            <input
              value={selectedRule}
              onChange={(e) => setSelectedRule(e.target.value)}
              className="w-full mt-1 border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-violet-500"
            />

          </div>

          {/* Field Target */}

          <div>

            <label className="text-sm text-neutral-500">
              Target Field
            </label>

            <input
              placeholder="e.g. Total Amount"
              className="w-full mt-1 border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-violet-500"
            />

          </div>

          {/* Conditions */}

          <div className="space-y-3">

            <label className="text-sm text-neutral-500">
              Conditions
            </label>

            <div className="flex gap-3">

              <input
                placeholder="Keyword (e.g. Total)"
                className="flex-1 border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none"
              />

              <input
                placeholder="Position (e.g. right of label)"
                className="flex-1 border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none"
              />

            </div>

            <button className="text-sm text-violet-600">
              + Add Condition
            </button>

          </div>

          {/* AI Instruction */}

          <div>

            <label className="text-sm text-neutral-500">
              AI Instruction
            </label>

            <textarea
              rows={3}
              placeholder="Describe how AI should extract this field..."
              className="w-full mt-1 border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-violet-500"
            />

          </div>

          {/* Actions */}

          <div className="flex items-center justify-between">

            <button className="flex items-center gap-2 text-red-500 text-sm">
              <Trash2 size={16} />
              Delete Rule
            </button>

            <div className="flex items-center gap-3">

              <button className="px-4 py-2 text-sm border border-neutral-200 rounded-lg hover:bg-neutral-50">
                Test Rule
              </button>

              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 text-white text-sm hover:bg-violet-700">
                <Sparkles size={16} />
                Save Rule
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}