import { useState } from "react"
import {
  Sparkles,
  Search,
  TrendingUp
} from "lucide-react"

/* ---------- Metric Card ---------- */

function MetricCard({ title, value, footer, variant = "violet" }) {
  const variants = {
    violet: "from-violet-500/10 to-transparent",
    blue: "from-blue-500/10 to-transparent",
    emerald: "from-emerald-500/10 to-transparent"
  }

  return (
    <div className="relative bg-surface p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-border shadow-sm overflow-hidden min-h-[110px]">
      <div className={`absolute inset-0 bg-gradient-to-br ${variants[variant]} pointer-events-none`} />

      <div className="relative flex flex-col justify-between h-full">

        <div className="flex justify-between text-xs sm:text-sm text-text-main/70 mb-2 sm:mb-3">
          <span className="truncate">{title}</span>
          <span className="text-[10px] sm:text-xs">{footer}</span>
        </div>

        <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-text-main">
          {value}
        </p>

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
    { name: "Product Launch", docs: 12, status: "Active", progress: 70, priority: "High" },
    { name: "HR Policies", docs: 8, status: "Completed", progress: 100, priority: "Low" },
    { name: "Support SOP", docs: 5, status: "Active", progress: 45, priority: "Medium" }
  ]

  const filteredProjects = projects.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === "All" || p.status === filter
    return matchSearch && matchFilter
  })

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-text-main">
            Projects
          </h1>
          <p className="text-xs text-text-main/70 mt-1">
            Manage and track your team projects
          </p>
        </div>

        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23] text-white text-sm shadow-sm">
          <Sparkles size={16} />
          Create Project
        </button>

      </div>

      {/* Metrics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

        <MetricCard title="Total Projects" value="18" footer="All" />
        <MetricCard title="Active Projects" value="12" footer="Ongoing" variant="blue" />
        <MetricCard title="Team Members" value="32" footer="Across teams" variant="emerald" />

      </div>

      {/* Search + Filter */}

      <div className="flex flex-col sm:flex-row gap-3">

        <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 w-full sm:w-64 bg-surface shadow-sm">
          <Search size={16} className="text-text-main/50" />
          <input
            placeholder="Search projects..."
            className="outline-none text-sm w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <div className="flex gap-2 bg-surface border border-border rounded-xl p-1 shadow-sm w-max">

            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 text-xs rounded-lg whitespace-nowrap ${
                  filter === f
                    ? "bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23] text-white"
                    : "text-text-main/70 hover:bg-surface"
                }`}
              >
                {f}
              </button>
            ))}

          </div>
        </div>

      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">

        {/* Projects */}

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

          {filteredProjects.map((project, i) => (

            <div
              key={i}
              className="bg-surface rounded-xl border border-border shadow-sm p-4 sm:p-5 space-y-4"
            >

              {/* Header */}
              <div className="flex justify-between items-center">

                <h2 className="font-semibold text-text-main text-sm sm:text-base">
                  {project.name}
                </h2>

                <div className="flex gap-1 sm:gap-2 flex-wrap">

                  <span className={`text-[10px] sm:text-xs px-2 py-1 rounded-md ${
                    project.status === "Active"
                      ? "bg-green-100 text-green-500"
                      : "bg-surface text-text-main/70"
                  }`}>
                    {project.status}
                  </span>

                  <span className={`text-[10px] sm:text-xs px-2 py-1 rounded-md ${
                    project.priority === "High"
                      ? "bg-red-100 text-red-500"
                      : project.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-surface text-text-main/70"
                  }`}>
                    {project.priority}
                  </span>

                </div>

              </div>

              {/* Docs */}
              <div className="flex justify-between text-xs text-text-main/70">
                <span>{project.docs} docs</span>
                <span className="text-green-500">Active</span>
              </div>

              {/* Progress */}
              <div>

                <div className="flex justify-between text-xs text-text-main/70 mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>

                <div className="h-2 bg-surface rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-500 to-blue-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>

              </div>

              {/* Health */}
              <div className="text-xs text-text-main/70 flex items-center gap-2">
                <TrendingUp size={12} className="text-primary" />
                Project Health: Good
              </div>

              {/* Members */}
              <div className="flex -space-x-2">
                <div className="w-6 h-6 bg-primary/10 rounded-full" />
                <div className="w-6 h-6 bg-blue-400 rounded-full" />
                <div className="w-6 h-6 bg-emerald-400 rounded-full" />
                <div className="w-6 h-6 bg-surface rounded-full flex items-center justify-center text-[10px]">
                  +2
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-between text-xs text-text-main/70">
                <button className="hover:text-black">Open</button>
                <button className="hover:text-black">Add Doc</button>
                <button className="text-primary">AI Plan</button>
              </div>

            </div>

          ))}

        </div>

        {/* Insights */}

        <div className="bg-surface rounded-xl border border-border shadow-sm p-4 sm:p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold text-text-main">
            <Sparkles size={16} className="text-primary" />
            Smart Insights
          </div>

          {[
            "Projects below 50% need attention",
            "Teams with more members perform faster",
            "AI usage improved efficiency by 28%"
          ].map((item, i) => (
            <div key={i} className="bg-background p-3 rounded-lg text-sm">
              {item}
            </div>
          ))}

        </div>

      </div>

    </div>
  )
}