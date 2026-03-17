import { useState } from "react"
import {
  Shield,
  Lock,
  KeyRound,
  CheckCircle2,
  AlertTriangle,
  Activity
} from "lucide-react"

import Select from "../components/ui/Select"

function MetricCard({
  title,
  value,
  footer,
  variant = "violet",
  children
}) {
  const variants = {
    violet: "from-violet-50/60 to-transparent",
    emerald: "from-emerald-50/60 to-transparent",
    amber: "from-amber-50/60 to-transparent"
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
          </div>

          <div className="flex items-end gap-[3px] h-10">
            {children}
          </div>

        </div>

      </div>
    </div>
  )
}

export default function Security() {
  const [mfa, setMfa] = useState("Enabled")
  const [session, setSession] = useState("7 Days")

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm p-6">

        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/70 to-transparent pointer-events-none" />

        <div className="relative flex items-center gap-4">

          <div className="p-3 bg-violet-100 rounded-xl">
            <Shield size={22} className="text-violet-600" />
          </div>

          <div>
            <h1 className="text-xl font-semibold text-neutral-800">
              Security & Access
            </h1>
            <p className="text-sm text-neutral-500">
              Manage authentication, sessions and system security
            </p>
          </div>

        </div>

      </div>

      {/* Metrics */}

      <div className="grid grid-cols-3 gap-6">

        <MetricCard title="Security Score" value="92%" footer="Overall" variant="violet">
          {[10, 12, 14, 16, 18, 20, 22].map((h, i) => (
            <div key={i} style={{ height: `${h}px` }} className="w-[4px] bg-violet-400 rounded-sm" />
          ))}
        </MetricCard>

        <MetricCard title="Active Sessions" value="14" footer="Users" variant="emerald">
          {[6, 8, 10, 12, 14, 16, 18].map((h, i) => (
            <div key={i} style={{ height: `${h}px` }} className="w-[4px] bg-emerald-400 rounded-sm" />
          ))}
        </MetricCard>

        <MetricCard title="Threat Alerts" value="2" footer="Last 24h" variant="amber">
          {[14, 12, 10, 8, 6, 5, 4].map((h, i) => (
            <div key={i} style={{ height: `${h}px` }} className="w-[4px] bg-amber-400 rounded-sm" />
          ))}
        </MetricCard>

      </div>

      {/* Settings */}

      <div className="grid grid-cols-3 gap-6">

        {/* Authentication */}

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold text-neutral-800">
            <Lock size={18} />
            Authentication
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-1">
              Multi-Factor Authentication
            </p>
            <Select
              value={mfa}
              onChange={setMfa}
              options={["Enabled", "Disabled"]}
            />
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-50">

            <span className="text-sm text-neutral-700">
              Password Strength
            </span>

            <span className="text-green-600 text-sm flex items-center gap-1">
              <CheckCircle2 size={14} />
              Strong
            </span>

          </div>

        </div>

        {/* Sessions */}

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold text-neutral-800">
            <KeyRound size={18} />
            Sessions
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-1">
              Session Duration
            </p>

            <Select
              value={session}
              onChange={setSession}
              options={["1 Day", "7 Days", "30 Days"]}
            />

          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-50">

            <span className="text-sm text-neutral-700">
              Active Devices
            </span>

            <span className="text-neutral-600 text-sm">
              5 devices
            </span>

          </div>

        </div>

        {/* Alerts */}

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold text-neutral-800">
            <AlertTriangle size={18} />
            Alerts
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-700">
            Suspicious login detected from new location
          </div>

          <div className="bg-neutral-50 rounded-lg p-3 text-sm text-neutral-600">
            No critical threats detected
          </div>

        </div>

      </div>

      {/* Activity Logs */}

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5">

        <div className="flex items-center gap-2 font-semibold text-neutral-800 mb-4">
          <Activity size={18} />
          Activity Logs
        </div>

        <div className="divide-y text-sm">

          {[
            "User Gokul logged in from Chrome",
            "New API key generated",
            "Password updated successfully",
            "Failed login attempt detected"
          ].map((log, i) => (

            <div key={i} className="py-3 text-neutral-600">
              {log}
            </div>

          ))}

        </div>

      </div>

    </div>
  )
}