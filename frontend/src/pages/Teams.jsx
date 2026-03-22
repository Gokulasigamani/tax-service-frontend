import { useState } from "react"
import {
  UserPlus,
  Trash2,
  Search
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
    violet: "from-violet-50/60 to-transparent",
    blue: "from-blue-50/60 to-transparent",
    emerald: "from-emerald-50/60 to-transparent"
  }

  return (
    <div className="relative overflow-hidden bg-white rounded-xl sm:rounded-2xl border border-neutral-200 shadow-sm p-4 sm:p-5 min-h-[110px]">

      <div className={`absolute inset-0 bg-gradient-to-br ${variants[variant]} pointer-events-none`} />

      <div className="relative">

        <div className="flex justify-between text-xs sm:text-sm text-neutral-500 mb-2 sm:mb-4">
          <span className="truncate">{title}</span>
          <span className="text-[10px] sm:text-xs">{footer}</span>
        </div>

        <div className="flex items-end justify-between">

          <div>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-900">
              {value}
            </p>
            <span className={`text-xs sm:text-sm ${positive ? "text-green-600" : "text-red-500"}`}>
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

export default function TeamPage() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")

  const [members, setMembers] = useState([
    { name: "Gokul", role: "Admin", status: "Active" },
    { name: "Rahul", role: "Editor", status: "Active" },
    { name: "Priya", role: "Viewer", status: "Invited" }
  ])

  const roles = ["Admin", "Editor", "Viewer"]
  const filters = ["All", "Admin", "Editor", "Viewer"]

  const filteredMembers = members.filter((m) => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === "All" || m.role === filter
    return matchSearch && matchFilter
  })

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <h1 className="text-xl sm:text-2xl font-semibold text-neutral-800">
          Team Members
        </h1>

        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23] text-white text-sm">
          <UserPlus size={16} />
          Invite Member
        </button>

      </div>

      {/* Metrics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

        <MetricCard title="Total Members" value="12" change="+2" footer="All users">
          {[6, 8, 10, 12, 14, 16, 18].map((h, i) => (
            <div key={i} style={{ height: `${h}px` }} className="w-[3px] sm:w-[4px] bg-violet-400 rounded-sm" />
          ))}
        </MetricCard>

        <MetricCard title="Active Users" value="9" change="+1" footer="Online" variant="blue">
          {[4, 6, 8, 10, 12, 14, 16].map((h, i) => (
            <div key={i} style={{ height: `${h}px` }} className="w-[3px] sm:w-[4px] bg-blue-400 rounded-sm" />
          ))}
        </MetricCard>

        <MetricCard title="Pending Invites" value="3" change="-1" positive={false} footer="Awaiting" variant="emerald">
          <svg width="80" height="30">
            <polyline fill="none" stroke="#10b981" strokeWidth="2"
              points="0,25 10,22 20,21 30,18 40,16 50,14 60,10 70,7 80,5" />
          </svg>
        </MetricCard>

      </div>

      {/* Search + Filter */}

      <div className="flex flex-col sm:flex-row gap-3">

        <div className="flex items-center gap-2 border border-neutral-200 rounded-lg px-3 py-2 w-full sm:w-64 bg-white">
          <Search size={16} className="text-neutral-400" />
          <input
            placeholder="Search members..."
            className="outline-none text-sm w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="w-full sm:w-40">
          <Select value={filter} onChange={setFilter} options={filters} />
        </div>

      </div>

      {/* Invite Section */}

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-4 sm:p-5 flex flex-col sm:flex-row gap-3">

        <input
          placeholder="Enter email..."
          className="flex-1 border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none"
        />

        <Select value="Editor" onChange={() => {}} options={roles} />

        <button className="w-full sm:w-auto px-4 py-2 bg-violet-600 text-white rounded-lg text-sm">
          Invite
        </button>

      </div>

      {/* Desktop Table */}

      <div className="hidden sm:block bg-white rounded-xl border border-neutral-200 shadow-sm p-5 overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="text-neutral-500 border-b">
            <tr>
              <th className="text-left py-3">Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">

            {filteredMembers.map((m, i) => (

              <tr key={i}>

                <td className="py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-violet-400 text-white flex items-center justify-center text-xs">
                    {m.name[0]}
                  </div>
                  {m.name}
                </td>

                <td>
                  <Select
                    value={m.role}
                    onChange={(val) => {
                      const updated = [...members]
                      updated[i].role = val
                      setMembers(updated)
                    }}
                    options={roles}
                  />
                </td>

                <td>
                  <span className={`text-xs ${
                    m.status === "Active" ? "text-green-600" : "text-orange-500"
                  }`}>
                    {m.status}
                  </span>
                </td>

                <td>
                  <button className="text-red-500 text-xs flex items-center gap-1">
                    <Trash2 size={14} />
                    Remove
                  </button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile Cards */}

      <div className="sm:hidden space-y-3">

        {filteredMembers.map((m, i) => (

          <div key={i} className="bg-white border border-neutral-200 rounded-xl p-4 shadow-sm space-y-3">

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-violet-400 text-white flex items-center justify-center text-xs">
                {m.name[0]}
              </div>
              <span className="font-medium">{m.name}</span>
            </div>

            <Select
              value={m.role}
              onChange={(val) => {
                const updated = [...members]
                updated[i].role = val
                setMembers(updated)
              }}
              options={roles}
            />

            <div className="text-xs">
              Status:{" "}
              <span className={m.status === "Active" ? "text-green-600" : "text-orange-500"}>
                {m.status}
              </span>
            </div>

            <button className="text-red-500 text-xs flex items-center gap-1">
              <Trash2 size={14} />
              Remove
            </button>

          </div>

        ))}

      </div>

    </div>
  )
}