import { useState } from "react"
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Palette,
  KeyRound,
  Globe
} from "lucide-react"

import Select from "../components/ui/Select"

export default function Settings() {
  const [theme, setTheme] = useState("Light")
  const [language, setLanguage] = useState("English")
  const [notifications, setNotifications] = useState("Enabled")

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm p-6">

        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/70 to-transparent pointer-events-none" />

        <div className="relative flex items-center gap-4">

          <div className="p-3 bg-violet-100 rounded-xl">
            <SettingsIcon size={22} className="text-violet-600" />
          </div>

          <div>
            <h1 className="text-xl font-semibold text-neutral-800">
              Settings
            </h1>
            <p className="text-sm text-neutral-500">
              Manage your preferences and workspace configuration
            </p>
          </div>

        </div>

      </div>

      {/* Sections */}

      <div className="grid grid-cols-3 gap-6">

        {/* Profile */}

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold text-neutral-800">
            <User size={18} />
            Profile
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-1">
              Full Name
            </p>
            <input
              defaultValue="Gokul"
              className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-1">
              Email
            </p>
            <input
              defaultValue="gokul@email.com"
              className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-violet-500"
            />
          </div>

        </div>

        {/* Preferences */}

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold text-neutral-800">
            <Palette size={18} />
            Preferences
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-1">
              Theme
            </p>
            <Select
              value={theme}
              onChange={setTheme}
              options={["Light", "Dark", "System"]}
            />
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-1">
              Language
            </p>
            <Select
              value={language}
              onChange={setLanguage}
              options={["English", "Tamil", "Hindi"]}
            />
          </div>

        </div>

        {/* Notifications */}

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold text-neutral-800">
            <Bell size={18} />
            Notifications
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-1">
              Email Notifications
            </p>
            <Select
              value={notifications}
              onChange={setNotifications}
              options={["Enabled", "Disabled"]}
            />
          </div>

          <div className="bg-neutral-50 rounded-lg p-3 text-sm text-neutral-600">
            Receive updates about document processing, AI training and alerts
          </div>

        </div>

      </div>

      {/* Bottom Section */}

      <div className="grid grid-cols-2 gap-6">

        {/* API Keys */}

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold text-neutral-800">
            <KeyRound size={18} />
            API Access
          </div>

          <div className="flex items-center justify-between bg-neutral-50 rounded-lg p-3">

            <span className="text-sm text-neutral-600">
              sk_live_***********
            </span>

            <button className="text-violet-600 text-sm">
              Regenerate
            </button>

          </div>

        </div>

        {/* Region */}

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold text-neutral-800">
            <Globe size={18} />
            Region
          </div>

          <Select
            value="Asia (India)"
            onChange={() => {}}
            options={[
              "Asia (India)",
              "US East",
              "Europe West"
            ]}
          />

        </div>

      </div>

      {/* Save Button */}

      <div className="flex justify-end">

        <button className="px-6 py-2 rounded-lg bg-violet-600 text-white text-sm hover:bg-violet-700 transition shadow-sm">
          Save Changes
        </button>

      </div>

    </div>
  )
}