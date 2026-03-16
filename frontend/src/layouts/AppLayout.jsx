import { useState } from "react"
import { Outlet } from "react-router-dom"

import Sidebar from "../layouts/Sidebar.jsx"
import Header from "../layouts/Header.jsx"
import Footer from "../layouts/Footer.jsx"

export function AppLayout() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex h-screen">

      <Sidebar collapsed={collapsed} />

      <div className="flex flex-col flex-1">

        <Header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        <main className="flex-1 p-6 overflow-auto bg-neutral-50">
          <Outlet />
        </main>

        <Footer />

      </div>

    </div>
  )
}