import { useState } from "react"
import { Outlet } from "react-router-dom"

import Sidebar from "../layouts/Sidebar.jsx"
import Header from "../layouts/Header.jsx"
import Footer from "../layouts/Footer.jsx"

export function AppLayout() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">

      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className="flex flex-col flex-1">

        <Header />

        <main className="flex-1 p-6 overflow-auto bg-neutral-50">
          <div className="route-fade-enter">
            <Outlet />
          </div>
        </main>

        <Footer />

      </div>

    </div>
  )
}