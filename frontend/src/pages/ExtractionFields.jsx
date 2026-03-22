import { useState } from "react"
import {
  Sparkles,
  Search,
  TrendingUp
} from "lucide-react"

/* ---------- Metric Card (UNCHANGED BASE) ---------- */

function MetricCard({ title, value, footer, variant = "violet" }) {
  const variants = {
    violet: "from-violet-50/60 to-transparent",
    blue: "from-blue-50/60 to-transparent",
    emerald: "from-emerald-50/60 to-transparent"
  }

  return (
    <div className="relative bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
      <div className={`absolute inset-0 bg-gradient-to-br ${variants[variant]}`} />
      <div className="relative">
        <p className="text-sm text-neutral-500 mb-3">{title}</p>
        <p className="text-2xl font-semibold text-neutral-900">{value}</p>
        <span className="text-xs text-neutral-400">{footer}</span>
      </div>
    </div>
  )
}

/* ---------- Page ---------- */

export default function ProjectsPage() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")

  const filters = ["All", "Active", "Completed"]

  const projects = [
    {
      name: "Product Launch",
      docs: 12,
      status: "Active",
      progress: 70,
      priority: "High"
    },
    {
      name: "HR Policies",
      docs: 8,
      status: "Completed",
      progress: 100,
      priority: "Low"
    },
    {
      name: "Support SOP",
      docs: 5,
      status: "Active",
      progress: 45,
      priority: "Medium"
    }
  ]

  const filteredProjects = projects.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === "All" || p.status === filter
    return matchSearch && matchFilter
  })

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-semibold text-neutral-800">
            Projects
          </h1>
          <p className="text-xs text-neutral-500 mt-1">
            Manage and track your team projects
          </p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23] text-white text-sm shadow-sm">
          <Sparkles size={16} />
          Create Project
        </button>

      </div>

      {/* Metrics */}

      <div className="grid grid-cols-3 gap-6">

        <MetricCard title="Total Projects" value="18" footer="All" variant="violet" />
        <MetricCard title="Active Projects" value="12" footer="Ongoing" variant="blue" />
        <MetricCard title="Team Members" value="32" footer="Across teams" variant="emerald" />

      </div>

      {/* Search + Filter */}

      <div className="flex gap-3">

        <div className="flex items-center gap-2 border border-neutral-200 rounded-lg px-3 py-2 w-64 bg-white shadow-sm">
          <Search size={16} className="text-neutral-400" />
          <input
            placeholder="Search projects..."
            className="outline-none text-sm w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-2 bg-white border border-neutral-200 rounded-xl p-1 shadow-sm">

          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 text-xs rounded-lg transition ${
                filter === f
                  ? "bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23] text-white"
                  : "text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              {f}
            </button>
          ))}

        </div>

      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-3 gap-6">

        {/* Projects */}

        <div className="col-span-2 grid grid-cols-2 gap-6">

          {filteredProjects.map((project, i) => (

            <div
              key={i}
              className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 transition hover:shadow-md"
            >

              {/* Header */}
              <div className="flex justify-between items-center mb-3">

                <h2 className="font-semibold text-neutral-800">
                  {project.name}
                </h2>

                <div className="flex items-center gap-2">

                  {/* Status */}
                  <span className={`text-xs px-2 py-1 rounded-md ${
                    project.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-neutral-100 text-neutral-500"
                  }`}>
                    {project.status}
                  </span>

                  {/* Priority */}
                  <span className={`text-xs px-2 py-1 rounded-md ${
                    project.priority === "High"
                      ? "bg-red-100 text-red-500"
                      : project.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-neutral-100 text-neutral-500"
                  }`}>
                    {project.priority}
                  </span>

                </div>

              </div>

              {/* Docs + Activity */}
              <div className="flex justify-between text-xs text-neutral-500 mb-3">
                <span>{project.docs} docs</span>
                <span className="flex items-center gap-1 text-green-600">
                  ● Active now
                </span>
              </div>

              {/* Progress */}
              <div className="mb-4">

                <div className="flex justify-between text-xs text-neutral-500 mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>

                <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-500 to-blue-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>

              </div>

              {/* Health Score */}
              <div className="text-xs text-neutral-500 mb-4 flex items-center gap-2">
                <TrendingUp size={12} className="text-violet-600" />
                Project Health: Good
              </div>

              {/* Members */}
              <div className="flex items-center justify-between mb-4">

                <div className="flex -space-x-2">
                  <div className="w-7 h-7 bg-violet-400 rounded-full" />
                  <div className="w-7 h-7 bg-blue-400 rounded-full" />
                  <div className="w-7 h-7 bg-emerald-400 rounded-full" />
                  <div className="w-7 h-7 bg-neutral-300 rounded-full flex items-center justify-center text-xs">
                    +2
                  </div>
                </div>

              </div>

              {/* Actions */}
              <div className="flex justify-between text-xs text-neutral-600">
                <button className="hover:text-black">Open</button>
                <button className="hover:text-black">Add Doc</button>
                <button className="text-violet-600">AI Plan</button>
              </div>

            </div>

          ))}

        </div>

        {/* AI Insights */}

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold text-neutral-800">
            <Sparkles size={16} className="text-violet-600" />
            Smart Insights
          </div>

          <div className="bg-violet-50 p-3 rounded-lg text-sm">
            Projects below 50% progress need immediate attention
          </div>

          <div className="bg-blue-50 p-3 rounded-lg text-sm">
            Teams with 3+ members complete tasks faster
          </div>

          <div className="bg-emerald-50 p-3 rounded-lg text-sm">
            AI-generated documents improved efficiency by 28%
          </div>

        </div>

      </div>

    </div>
  )
}