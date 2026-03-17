import { useState } from "react"
import {
  UploadCloud,
  FileText,
  Trash2,
  Sparkles
} from "lucide-react"

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

      {/* Gradient */}
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

export default function UploadDocuments() {
  const [files, setFiles] = useState([])

  const handleFiles = (selectedFiles) => {
    const newFiles = Array.from(selectedFiles)
    setFiles((prev) => [...prev, ...newFiles])
  }

  const handleDrop = (e) => {
    e.preventDefault()
    handleFiles(e.dataTransfer.files)
  }

  const handleRemove = (index) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-800">
          Upload Documents
        </h1>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23] text-white text-sm shadow-sm hover:bg-violet-700 transition">
          <Sparkles size={16} />
          Run Extraction
        </button>
      </div>

      {/* Metric Cards */}

      <div className="grid grid-cols-3 gap-6">

        <MetricCard
          title="Files Uploaded"
          value={files.length}
          change="+12%"
          positive={true}
          footer="Session"
          variant="violet"
        >
          {[6, 10, 14, 8, 16, 12, 18].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}px` }}
              className="w-[4px] bg-violet-400 rounded-sm"
            />
          ))}
        </MetricCard>

        <MetricCard
          title="Processing Runs"
          value="842"
          change="-2.1%"
          positive={false}
          footer="Last 7 days"
          variant="blue"
        >
          {[14, 16, 12, 10, 9, 8, 7].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}px` }}
              className="w-[4px] bg-blue-400 rounded-sm"
            />
          ))}
        </MetricCard>

        <MetricCard
          title="Total Fields Extracted"
          value="68,674"
          change="+4.1%"
          positive={true}
          footer="All time"
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

      {/* Upload + Config */}

      <div className="grid grid-cols-3 gap-6">

        {/* Upload Area */}

        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="col-span-2 bg-white rounded-xl border border-neutral-200 shadow-sm p-6 flex flex-col items-center justify-center text-center hover:border-violet-300 transition"
        >

          <div className="p-3 bg-violet-100 rounded-xl mb-4">
            <UploadCloud size={24} className="text-violet-600" />
          </div>

          <p className="text-sm font-medium text-neutral-800">
            Drag & drop documents here
          </p>

          <p className="text-xs text-neutral-500 mt-1">
            or click to upload from your system
          </p>

          <input
            type="file"
            multiple
            id="fileUpload"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />

          <label
            htmlFor="fileUpload"
            className="mt-4 px-4 py-2 text-sm font-medium rounded-lg
            bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23] text-white hover:bg-violet-700 transition cursor-pointer"
          >
            Select Files
          </label>

        </div>

        {/* Config */}

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-4">

          <h2 className="font-semibold text-neutral-800">
            Configuration
          </h2>

          <div>
            <p className="text-xs text-neutral-500 mb-1">
              Document Type
            </p>
            <select className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none">
              <option>Invoice</option>
              <option>Contract</option>
              <option>Receipt</option>
              <option>KYC</option>
            </select>
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-1">
              Extraction Template
            </p>
            <select className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none">
              <option>Default Template</option>
              <option>Finance Template</option>
              <option>Custom Template</option>
            </select>
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-1">
              AI Instructions
            </p>
            <textarea
              placeholder="Define extraction rules..."
              className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none resize-none h-20"
            />
          </div>

        </div>

      </div>

      {/* Files */}

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5">

        <div className="flex items-center justify-between mb-4">

          <h2 className="font-semibold text-neutral-800">
            Uploaded Files
          </h2>

          <span className="text-sm text-neutral-500">
            {files.length} files
          </span>

        </div>

        {files.length === 0 ? (
          <p className="text-sm text-neutral-500">
            No files uploaded yet
          </p>
        ) : (
          <div className="divide-y">

            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3"
              >

                <div className="flex items-center gap-3">

                  <div className="p-2 bg-violet-100 rounded-lg">
                    <FileText size={16} className="text-violet-600" />
                  </div>

                  <div>
                    <p className="text-sm font-medium">
                      {file.name}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>

                </div>

                <button
                  onClick={() => handleRemove(index)}
                  className="p-2 hover:bg-neutral-100 rounded-md"
                >
                  <Trash2 size={16} className="text-neutral-500" />
                </button>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  )
}