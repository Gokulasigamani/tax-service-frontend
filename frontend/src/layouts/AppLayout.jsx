import { useState } from "react"
import { Outlet } from "react-router-dom"

import Sidebar from "../layouts/Sidebar.jsx"
import Header from "../layouts/Header.jsx"
import Footer from "../layouts/Footer.jsx"
import MobileBottomNav from "../layouts/MobileBottomNav.jsx"

export function AppLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-neutral-50">

      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div className="flex flex-col flex-1 min-w-0">

        <Header setIsMobileMenuOpen={setIsMobileMenuOpen} />

        <main className="flex-1 p-4 md:p-6 pb-24 md:pb-6 overflow-auto">
          <div className="route-fade-enter">
            <Outlet />
          </div>
        </main>

        <Footer />
        <MobileBottomNav setIsMobileMenuOpen={setIsMobileMenuOpen} />

      </div>

    </div>
  )
}