import { Navigate, Route, Routes } from "react-router-dom"

import { ProtectedRoute } from "./ProtectedRoute.jsx"
import { PublicRoute } from "./PublicRoute.jsx"

import { AppLayout } from "../layouts/AppLayout.jsx"
import { AuthLayout } from "../layouts/AuthLayout.jsx"

import Overview from "../pages/Overview.jsx"
import Signin from "../pages/sigin.jsx"
import Signup from "../pages/Signup.jsx"

export function AppRoutes() {
  return (
    <Routes>

      {/* Root */}

      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Public Routes */}

      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>

          <Route path="/signin" element={<Signin />} />

          <Route path="/signup" element={<Signup />} />

        </Route>
      </Route>

      {/* Protected Routes */}

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<AppLayout />}>

          {/* Default page */}

          <Route index element={<Overview />} />

          {/* Future dashboard pages */}

          {/* <Route path="documents" element={<Documents />} /> */}
          {/* <Route path="fields" element={<Fields />} /> */}
          {/* <Route path="rules" element={<Rules />} /> */}
          {/* <Route path="analytics" element={<Analytics />} /> */}

        </Route>
      </Route>

      {/* Fallback */}

      <Route path="*" element={<Navigate to="/dashboard" replace />} />

    </Routes>
  )
}