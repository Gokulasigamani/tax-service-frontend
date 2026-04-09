import { useState } from "react"
import { motion } from "framer-motion"
import { Switch } from "@headlessui/react"
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Palette,
  KeyRound,
  Globe,
  Check
} from "lucide-react"

import Select from "../components/ui/Select"
import { useTheme } from "../contexts/ThemeContext"

const THEMES = [
  { id: 'light', name: 'Light Default', color: '#f8fafc', accent: '#cbd5e1' },
  { id: 'orange-mechanic', name: 'Orange Mechanic', color: '#1a1a1a', accent: '#f97316' },
  { id: 'purple-disco', name: 'Purple Disco', color: '#141124', accent: '#a855f7' },
  { id: 'blue-powder', name: 'Blue Powder', color: '#0f172a', accent: '#3b82f6' }
]

function ThemeCard({ theme, active, onClick }) {
  const isLight = theme.id === 'light'
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative cursor-pointer rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
        active ? 'border-primary shadow-lg shadow-primary/20' : 'border-border bg-surface hover:border-primary/50'
      }`}
    >
      <div 
        className="h-28 p-3.5 flex flex-col gap-2.5 transition-colors" 
        style={{ backgroundColor: theme.color }}
      >
        <div className="flex gap-1.5">
          <div className={`w-2.5 h-2.5 rounded-full ${isLight ? 'bg-red-400' : 'bg-red-500'}`}></div>
          <div className={`w-2.5 h-2.5 rounded-full ${isLight ? 'bg-amber-400' : 'bg-amber-500'}`}></div>
          <div className={`w-2.5 h-2.5 rounded-full ${isLight ? 'bg-green-400' : 'bg-green-500'}`}></div>
        </div>
        <div className="flex gap-2.5 h-full mt-1.5">
          <div className="w-1/4 h-full rounded flex-shrink-0" style={{ backgroundColor: isLight ? '#00000010' : '#ffffff10' }}></div>
          <div className="w-full flex flex-col gap-2">
            <div className="h-3.5 rounded w-2/3" style={{ backgroundColor: theme.accent }}></div>
            <div className="h-2 rounded w-4/5" style={{ backgroundColor: isLight ? '#00000010' : '#ffffff10' }}></div>
            <div className="h-2 rounded w-full" style={{ backgroundColor: isLight ? '#00000010' : '#ffffff10' }}></div>
          </div>
        </div>
      </div>
      <div className="p-3.5 bg-surface flex justify-between items-center border-t border-border">
        <span className="text-sm font-semibold text-text-main">{theme.name}</span>
        {active ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-5 h-5 rounded-full flex items-center justify-center text-white"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <Check size={12} strokeWidth={3} />
          </motion.div>
        ) : (
          <div className="w-5 h-5 rounded-full border-2 border-border" />
        )}
      </div>
    </motion.div>
  )
}

export default function Settings() {
  const { 
    activeTheme, setActiveTheme, 
    primaryColor, setPrimaryColor, 
    transparentSidebar, setTransparentSidebar 
  } = useTheme()

  const [language, setLanguage] = useState("English")
  const [notifications, setNotifications] = useState("Enabled")

  return (
    <div className="space-y-6 text-text-main pb-10">

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-surface shadow-sm p-5 sm:p-6"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
        <div className="relative flex items-center gap-4">
          <div className="p-3 rounded-xl" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 15%, transparent)' }}>
            <SettingsIcon size={20} style={{ color: 'var(--color-primary)' }} />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-semibold">Settings</h1>
            <p className="text-xs sm:text-sm opacity-70">Manage your preferences and workspace configuration</p>
          </div>
        </div>
      </motion.div>

      {/* Premium Appearance Section */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-surface rounded-2xl border border-border shadow-sm overflow-hidden"
      >
        <div className="p-5 sm:p-6 border-b border-border flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Palette size={20} style={{ color: 'var(--color-primary)' }} />
                Appearance
              </h2>
              <p className="text-sm opacity-60 mt-1">Customize your workspace experience.</p>
            </div>
        </div>

        <div className="p-5 sm:p-6 space-y-10">
          {/* Themes */}
          <div>
            <h3 className="font-medium mb-1 text-base">Interface theme</h3>
            <p className="text-sm opacity-60 mb-5">Select your preferred base color scheme.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
              {THEMES.map(t => (
                <ThemeCard 
                  key={t.id} 
                  theme={t} 
                  active={activeTheme === t.id} 
                  onClick={() => setActiveTheme(t.id)} 
                />
              ))}
            </div>
          </div>

          <div className="h-px bg-border w-full" />

          {/* Primary Color & Transparent Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="font-medium mb-1 text-base">Customize primary color</h3>
              <p className="text-sm opacity-60 mb-5">Choose an accent color for your workspace buttons and highlights.</p>
              
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 flex-wrap">
                  {['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#f97316', '#B2F96F'].map(color => (
                    <motion.button
                      key={color}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setPrimaryColor(color)}
                      className={`w-10 h-10 rounded-full border-2 relative flex items-center justify-center ${primaryColor.toLowerCase() === color.toLowerCase() ? 'border-text-main' : 'border-transparent'}`}
                      style={{ backgroundColor: color }}
                    >
                      {primaryColor.toLowerCase() === color.toLowerCase() && (
                          <div className="w-4 h-4 bg-surface rounded-full flex items-center justify-center">
                              <span className="w-2 h-2 rounded-full" style={{backgroundColor: color}}></span>
                          </div>
                      )}
                    </motion.button>
                  ))}
                  <div className="relative">
                    <input 
                      type="color" 
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="opacity-0 absolute inset-0 w-10 h-10 cursor-pointer"
                    />
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="w-10 h-10 rounded-full border-2 border-dashed border-text-main/30 flex items-center justify-center cursor-pointer transition-colors hover:border-text-main/60"
                      style={{ backgroundColor: 'var(--color-bg)' }}
                    >
                      <span className="text-xl leading-none -mt-0.5 opacity-70">+</span>
                    </motion.div>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-40">
                  <div className="h-10 px-4 rounded-xl border border-border bg-background text-sm flex items-center justify-between font-mono uppercase tracking-wider w-full shadow-inner shadow-black/5">
                    <span className="opacity-50">#</span>
                    <span className="font-semibold">{primaryColor.replace('#', '')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start justify-between sm:gap-4">
                <div>
                  <h3 className="font-medium mb-1 text-base">Transparent Sidebar</h3>
                  <p className="text-sm opacity-60 mb-5">Add a translucent background blur to your sidebar navigation.</p>
                </div>
                <Switch
                    checked={transparentSidebar}
                    onChange={setTransparentSidebar}
                    className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none`}
                    style={{ backgroundColor: transparentSidebar ? 'var(--color-primary)' : 'var(--color-border)' }}
                >
                    <span className="sr-only">Toggle transparent sidebar</span>
                    <span
                    className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-surface shadow ring-0 transition duration-200 ease-in-out ${transparentSidebar ? 'translate-x-5' : 'translate-x-0'}`}
                    />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Top Sections (Profile, Options) */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
      >
        {/* Profile */}
        <div className="bg-surface rounded-xl border border-border shadow-sm p-4 sm:p-5 space-y-4">
          <div className="flex items-center gap-2 font-semibold">
            <User size={18} />
            Profile
          </div>
          <div>
            <p className="text-xs opacity-60 mb-1">Full Name</p>
            <input
              defaultValue="Gokul"
              className="w-full border border-border bg-background rounded-lg px-3 py-2 text-sm outline-none transition-colors"
              style={{ paddingBottom: '0.5rem', paddingTop: '0.5rem' }}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
            />
          </div>
          <div>
            <p className="text-xs opacity-60 mb-1">Email</p>
            <input
              defaultValue="gokul@email.com"
              className="w-full border border-border bg-background rounded-lg px-3 py-2 text-sm outline-none transition-colors"
              onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
            />
          </div>
          <div>
            <p className="text-xs opacity-60 mb-1">Language</p>
            <Select
              value={language}
              onChange={setLanguage}
              options={["English", "Tamil", "Hindi"]}
            />
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-surface rounded-xl border border-border shadow-sm p-4 sm:p-5 space-y-4">
          <div className="flex items-center gap-2 font-semibold">
            <Bell size={18} />
            Notifications
          </div>
          <div>
            <p className="text-xs opacity-60 mb-1">Email Notifications</p>
            <Select
              value={notifications}
              onChange={setNotifications}
              options={["Enabled", "Disabled"]}
            />
          </div>
          <div className="bg-background rounded-lg p-3 text-sm opacity-80 border border-border">
            Receive updates about document processing, AI training and alerts
          </div>
        </div>
      </motion.div>

      {/* Bottom Sections */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
      >
        {/* API */}
        <div className="bg-surface rounded-xl border border-border shadow-sm p-4 sm:p-5 space-y-4">
          <div className="flex items-center gap-2 font-semibold">
            <KeyRound size={18} />
            API Access
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-background border border-border rounded-lg p-3">
            <span className="text-sm opacity-80 break-all font-mono">
              sk_live_***********
            </span>
            <button 
                className="text-sm font-medium transition-opacity hover:opacity-80"
                style={{ color: 'var(--color-primary)' }}
            >
              Regenerate
            </button>
          </div>
        </div>

        {/* Region */}
        <div className="bg-surface rounded-xl border border-border shadow-sm p-4 sm:p-5 space-y-4">
          <div className="flex items-center gap-2 font-semibold">
            <Globe size={18} />
            Region
          </div>
          <Select
            value="Asia (India)"
            onChange={() => {}}
            options={["Asia (India)", "US East", "Europe West"]}
          />
        </div>
      </motion.div>

      {/* Save Button */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex justify-end pt-4"
      >
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto px-8 py-2.5 rounded-xl text-white text-sm font-medium shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/30"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          Save Preferences
        </motion.button>
      </motion.div>

    </div>
  )
}