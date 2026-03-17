import { useState } from "react"
import {
  Users,
  UserPlus,
  Mail,
  Crown,
  ShieldCheck,
  Eye,
  X
} from "lucide-react"

import Select from "../components/ui/Select"

export default function Teams() {
  const [members, setMembers] = useState([
    {
      name: "Gokul",
      email: "gokul@email.com",
      role: "Admin",
      status: "Active"
    },
    {
      name: "Dharani",
      email: "dharani@email.com",
      role: "Editor",
      status: "Active"
    }
  ])

  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("Viewer")

  const roles = ["Admin", "Editor", "Viewer"]

  const roleIcon = {
    Admin: <Crown size={14} />,
    Editor: <ShieldCheck size={14} />,
    Viewer: <Eye size={14} />
  }

  const handleInvite = () => {
    if (!email) return

    const newMember = {
      name: email.split("@")[0],
      email,
      role,
      status: "Pending"
    }

    setMembers((prev) => [...prev, newMember])
    setShowModal(false)
    setEmail("")
    setRole("Viewer")
  }

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm p-6">

        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/70 to-transparent pointer-events-none" />

        <div className="relative flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="p-3 bg-violet-100 rounded-xl">
              <Users size={22} className="text-violet-600" />
            </div>

            <div>
              <h1 className="text-xl font-semibold text-neutral-800">
                Team Workspace
              </h1>
              <p className="text-sm text-neutral-500">
                Manage members, roles and collaboration access
              </p>
            </div>

          </div>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 text-white text-sm hover:bg-violet-700 transition shadow-sm"
          >
            <UserPlus size={16} />
            Invite Member
          </button>

        </div>

      </div>

      {/* Members */}

      <div className="grid grid-cols-2 gap-4">

        {members.map((user, i) => (

          <div
            key={i}
            className="bg-white border border-neutral-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >

            <div className="flex items-center justify-between">

              {/* Left */}

              <div className="flex items-center gap-4">

                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-semibold">
                  {user.name[0]}
                </div>

                <div>
                  <p className="text-sm font-medium text-neutral-800">
                    {user.name}
                  </p>

                  <p className="text-xs text-neutral-500 flex items-center gap-1">
                    <Mail size={12} />
                    {user.email}
                  </p>
                </div>

              </div>

              {/* Right */}

              <div className="flex items-center gap-3">

                <div className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-violet-100 text-violet-700">
                  {roleIcon[user.role]}
                  {user.role}
                </div>

                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-orange-100 text-orange-600"
                  }`}
                >
                  {user.status}
                </span>

                <div className="w-28">
                  <Select
                    value={user.role}
                    onChange={() => {}}
                    options={roles}
                  />
                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* 🔥 Premium Modal */}

      {showModal && (
        <div className="fixed inset-0 z-50">

          {/* Backdrop */}

          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />

          {/* Modal */}

          <div className="absolute inset-0 flex items-center justify-center p-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-neutral-200 p-6 space-y-5 animate-[fadeIn_0.2s_ease]">

              {/* Header */}

              <div className="flex items-center justify-between">

                <h2 className="text-lg font-semibold text-neutral-800">
                  Invite Team Member
                </h2>

                <button
                  onClick={() => setShowModal(false)}
                  className="text-neutral-400 hover:text-neutral-600"
                >
                  <X size={18} />
                </button>

              </div>

              {/* Email */}

              <div>
                <p className="text-xs text-neutral-500 mb-1">
                  Email Address
                </p>

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition"
                />
              </div>

              {/* Role */}

              <div>
                <p className="text-xs text-neutral-500 mb-1">
                  Role
                </p>

                <Select
                  value={role}
                  onChange={setRole}
                  options={roles}
                />
              </div>

              {/* Actions */}

              <div className="flex justify-end gap-3 pt-2">

                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm border border-neutral-200 rounded-lg hover:bg-neutral-50 transition"
                >
                  Cancel
                </button>

                <button
                  onClick={handleInvite}
                  className="px-4 py-2 text-sm bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition shadow-sm"
                >
                  Send Invite
                </button>

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  )
}