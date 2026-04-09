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
      starred: false
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

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-text-main">
            Workspace
          </h1>
          <p className="text-xs text-text-main/70 mt-1">
            Manage and collaborate on documents
          </p>
        </div>

        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23] text-white text-sm shadow-sm">
          <Sparkles size={16} />
          Create Document
        </button>

      </div>

      {/* Metrics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

        <MetricCard title="Total Documents" value={docs.length} change="+14%" footer="Workspace">
          {[6, 10, 14, 8, 16, 12, 18].map((h, i) => (
            <div key={i} style={{ height: `${h}px` }} className="w-[3px] sm:w-[4px] bg-primary/10 rounded-sm" />
          ))}
        </MetricCard>

        <MetricCard title="Collaborations" value="128" change="+9%" footer="Last 7 days" variant="blue">
          {[14, 16, 12, 10, 9, 8, 7].map((h, i) => (
            <div key={i} style={{ height: `${h}px` }} className="w-[3px] sm:w-[4px] bg-blue-400 rounded-sm" />
          ))}
        </MetricCard>

        <MetricCard title="AI Docs" value="742" change="+21%" footer="All time" variant="emerald">
          <svg width="80" height="30">
            <polyline fill="none" stroke="#10b981" strokeWidth="2"
              points="0,25 10,22 20,21 30,18 40,16 50,14 60,10 70,7 80,5" />
          </svg>
        </MetricCard>

      </div>

      {/* Search */}

      <div className="w-full sm:w-72">
        <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 bg-surface">
          <Search size={16} className="text-text-main/50" />
          <input
            placeholder="Search documents..."
            className="outline-none text-sm w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Tabs */}

      <div className="overflow-x-auto">
        <div className="bg-surface border border-border rounded-xl p-2 flex gap-2 w-max shadow-sm">

          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap
                ${
                  activeTab === tab
                    ? "bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23] text-white"
                    : "text-text-main/70 hover:bg-surface"
                }`}
            >
              {tab}
            </button>
          ))}

        </div>
      </div>

      {/* Upload */}

      <label
        className="block cursor-pointer bg-surface rounded-xl border border-border p-6 text-center hover:border-primary/30 transition"
      >
        <UploadCloud size={24} className="mx-auto text-primary mb-2" />
        <p className="text-sm text-text-main">
          Drag & drop files or click to upload
        </p>

        <input
          type="file"
          multiple
          onChange={(e) => handleDocs(e.target.files)}
          className="hidden"
        />
      </label>

      {/* Documents */}

      <div className="bg-surface rounded-xl border border-border shadow-sm p-4 sm:p-5">

        {filteredDocs.length === 0 ? (
          <div className="text-center py-10 text-text-main/70 text-sm">
            No documents available
          </div>
        ) : (

          <div className="divide-y">

            {filteredDocs.map((doc, i) => (

              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3">

                {/* Left */}
                <div className="flex items-center gap-3 min-w-0">

                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <FileText size={16} className="text-primary" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-medium text-text-main truncate">
                      {doc.file.name}
                    </p>

                    <div className="flex flex-wrap gap-2 text-xs text-text-main/70 mt-1">
                      <span>{doc.edited}</span>
                      <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-md">
                        {doc.tag}
                      </span>
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-500 rounded-md">
                        {doc.status}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Right */}
                <div className="flex items-center gap-3 sm:gap-4">

                  <button onClick={() => toggleStar(i)}>
                    <Star
                      size={16}
                      className={
                        doc.starred
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-text-main/50"
                      }
                    />
                  </button>

                  <button
                    onClick={() => setDocs(docs.filter((_, idx) => idx !== i))}
                    className="p-2 hover:bg-surface rounded-md"
                  >
                    <Trash2 size={16} className="text-text-main/70" />
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