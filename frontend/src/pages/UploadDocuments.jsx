import { useState } from "react"
import {
  UploadCloud,
  FileText,
  Trash2,
  Sparkles,
  Star,
  Search
} from "lucide-react"

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

export default function WorkspaceDocuments() {
  const [docs, setDocs] = useState([])
  const [search, setSearch] = useState("")
  const [activeTab, setActiveTab] = useState("All")

  const tabs = ["All", "AI", "Draft", "Review"]

  const handleDocs = (files) => {
    const newDocs = Array.from(files).map((file) => ({
      file,
      status: "Draft",
      tag: "AI",
      edited: "Just now",
      starred: false,
      collaborators: ["violet", "blue"]
    }))
    setDocs((prev) => [...prev, ...newDocs])
  }

  const toggleStar = (index) => {
    const updated = [...docs]
    updated[index].starred = !updated[index].starred
    setDocs(updated)
  }

  const filteredDocs = docs.filter((d) => {
    const matchSearch = d.file.name.toLowerCase().includes(search.toLowerCase())
    const matchTab =
      activeTab === "All" ||
      d.tag === activeTab ||
      d.status === activeTab
    return matchSearch && matchTab
  })

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-800">
          Workspace
        </h1>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg
          bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23]
          text-white text-sm shadow-sm">
          <Sparkles size={16} />
          Create Document
        </button>
      </div>

      {/* Metrics */}

      <div className="grid grid-cols-3 gap-6">

        <MetricCard title="Total Documents" value={docs.length} change="+14%" footer="Workspace">
          {[6, 10, 14, 8, 16, 12, 18].map((h, i) => (
            <div key={i} style={{ height: `${h}px` }} className="w-[4px] bg-violet-400 rounded-sm" />
          ))}
        </MetricCard>

        <MetricCard title="Collaborations" value="128" change="+9%" footer="Last 7 days" variant="blue">
          {[14, 16, 12, 10, 9, 8, 7].map((h, i) => (
            <div key={i} style={{ height: `${h}px` }} className="w-[4px] bg-blue-400 rounded-sm" />
          ))}
        </MetricCard>

        <MetricCard title="AI Docs" value="742" change="+21%" footer="All time" variant="emerald">
          <svg width="80" height="30">
            <polyline fill="none" stroke="#10b981" strokeWidth="2"
              points="0,25 10,22 20,21 30,18 40,16 50,14 60,10 70,7 80,5" />
          </svg>
        </MetricCard>

      </div>

      {/* 🔍 Search */}

      <div className="flex items-center gap-3">

        <div className="flex items-center gap-2 border border-neutral-200 rounded-lg px-3 py-2 w-64 bg-white">
          <Search size={16} className="text-neutral-400" />
          <input
            placeholder="Search documents..."
            className="outline-none text-sm w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

      </div>

      {/* 🔥 Premium Tabs */}

      <div className="bg-white border border-neutral-200 rounded-xl p-2 flex gap-2 w-fit shadow-sm">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all
              ${
                activeTab === tab
                  ? "bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23] text-white shadow-sm"
                  : "text-neutral-600 hover:bg-neutral-100"
              }`}
          >
            {tab}
          </button>
        ))}

      </div>

      {/* Upload */}

      <div
        onDrop={(e) => {
          e.preventDefault()
          handleDocs(e.dataTransfer.files)
        }}
        onDragOver={(e) => e.preventDefault()}
        className="bg-white rounded-xl border border-neutral-200 p-6 text-center"
      >
        <UploadCloud size={24} className="mx-auto text-violet-600 mb-2" />
        <p className="text-sm text-neutral-700">
          Drag files or upload documents
        </p>
      </div>

      {/* Documents */}

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5">

        {filteredDocs.length === 0 ? (
          <div className="text-center py-10 text-neutral-500 text-sm">
            No documents available
            <div className="text-violet-600 mt-2 cursor-pointer text-sm">
              Create a document using AI
            </div>
          </div>
        ) : (

          <div className="divide-y">

            {filteredDocs.map((doc, i) => (

              <div key={i} className="flex items-center justify-between py-3 group">

                {/* Left */}
                <div className="flex items-center gap-3">

                  <div className="p-2 bg-violet-100 rounded-lg">
                    <FileText size={16} className="text-violet-600" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-neutral-800">
                      {doc.file.name}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1">
                      <span>{doc.edited}</span>

                      <span className="px-2 py-0.5 bg-violet-100 text-violet-600 rounded-md">
                        {doc.tag}
                      </span>

                      <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded-md">
                        {doc.status}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Right */}
                <div className="flex items-center gap-4">

                  {/* Star */}
                  <button onClick={() => toggleStar(i)}>
                    <Star
                      size={16}
                      className={
                        doc.starred
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-neutral-400"
                      }
                    />
                  </button>

                  {/* Actions */}
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <button className="text-xs text-neutral-600 hover:text-black">
                      Open
                    </button>
                    <button className="text-xs text-neutral-600 hover:text-black">
                      AI
                    </button>
                  </div>

                  {/* Delete */}
                  <button
                    onClick={() => setDocs(docs.filter((_, idx) => idx !== i))}
                    className="p-2 hover:bg-neutral-100 rounded-md"
                  >
                    <Trash2 size={16} className="text-neutral-500" />
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  )
}