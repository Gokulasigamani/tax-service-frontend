import { useState } from "react"
import {
  FileText,
  Sparkles,
  CheckCircle2,
  AlertCircle
} from "lucide-react"

import Select from "../components/ui/Select.jsx"

export default function DocumentSummary() {
  const [template, setTemplate] = useState("Invoice Template")
  const [status, setStatus] = useState("All Fields")

  const templateOptions = [
    "Invoice Template",
    "Receipt Template",
    "Contract Template"
  ]

  const statusOptions = [
    "All Fields",
    "Validated",
    "Needs Review"
  ]

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <h1 className="text-2xl font-semibold text-neutral-800">
          Document Summary
        </h1>

        <div className="flex items-center gap-3">

          {/* Template Select */}

          <div className="w-48">
            <Select
              value={template}
              onChange={setTemplate}
              options={templateOptions}
            />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23] text-white text-sm shadow-sm hover:bg-violet-700 transition">
            <Sparkles size={16} />
            Re-run Extraction
          </button>

        </div>

      </div>

      {/* Top Info Card */}

      <div className="relative bg-white rounded-xl border border-neutral-200 shadow-sm p-5 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/60 to-transparent pointer-events-none" />

        <div className="relative flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="p-2 bg-violet-100 rounded-lg">
              <FileText size={18} className="text-violet-600" />
            </div>

            <div>
              <p className="text-sm font-medium">
                Invoice_March.pdf
              </p>
              <p className="text-xs text-neutral-500">
                Uploaded • 2 mins ago
              </p>
            </div>

          </div>

          <div className="text-sm text-green-600 flex items-center gap-1">
            <CheckCircle2 size={16} />
            98% Accuracy
          </div>

        </div>

      </div>

      {/* Main Section */}

      <div className="grid grid-cols-3 gap-6">

        {/* Document Preview */}

        <div className="col-span-2 bg-white rounded-xl border border-neutral-200 shadow-sm p-5">

          <div className="flex items-center justify-between mb-4">

            <h2 className="font-semibold text-neutral-800">
              Document Preview
            </h2>

            <button className="text-violet-600 text-sm">
              Open Full View
            </button>

          </div>

          <div className="h-[400px] bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-400 text-sm">
            Document Preview Area
          </div>

        </div>

        {/* Extracted Fields */}

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-4">

          {/* Header with filter */}

          <div className="flex items-center justify-between">

            <h2 className="font-semibold text-neutral-800">
              Extracted Fields
            </h2>

            <div className="w-36">
              <Select
                value={status}
                onChange={setStatus}
                options={statusOptions}
              />
            </div>

          </div>

          {[
            { label: "Invoice Number", value: "INV-2026-001", ok: true },
            { label: "Total Amount", value: "$2,450", ok: true },
            { label: "Vendor Name", value: "ABC Pvt Ltd", ok: true },
            { label: "Date", value: "12 Mar 2026", ok: false }
          ].map((field, i) => (

            <div key={i} className="space-y-1">

              <p className="text-xs text-neutral-500">
                {field.label}
              </p>

              <div className="flex items-center justify-between border border-neutral-200 rounded-lg px-3 py-2 focus-within:border-violet-400 transition">

                <input
                  defaultValue={field.value}
                  className="text-sm outline-none w-full bg-transparent"
                />

                {field.ok ? (
                  <CheckCircle2 size={16} className="text-green-500" />
                ) : (
                  <AlertCircle size={16} className="text-orange-500" />
                )}

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* AI Summary */}

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-4">

        <div className="flex items-center gap-2 font-semibold text-neutral-800">

          <Sparkles size={18} className="text-violet-600" />

          AI Summary

        </div>

        <div className="bg-neutral-50 rounded-lg p-4 text-sm text-neutral-600 leading-relaxed">

          This document is an invoice issued by ABC Pvt Ltd. The total payable
          amount is $2,450. The structure is consistent with previously processed
          invoices, and extraction confidence is high across key fields.

        </div>

      </div>

    </div>
  )
}