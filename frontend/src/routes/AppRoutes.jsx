import { Navigate, Route, Routes } from "react-router-dom"

import { ProtectedRoute } from "./ProtectedRoute.jsx"
import { PublicRoute } from "./PublicRoute.jsx"
import { ROUTES } from "./routeConfig.js"

import { AppLayout } from "../layouts/AppLayout.jsx"
import { AuthLayout } from "../layouts/AuthLayout.jsx"

import Overview from "../pages/Overview.jsx"
import UploadDocuments from "../pages/UploadDocuments.jsx"
import Signin from "../pages/sigin.jsx"
import Signup from "../pages/Signup.jsx"
import DocumentSummary from "../pages/DocumentSummary.jsx"
import ExtractionFields from "../pages/ExtractionFields.jsx"

function UnderConstruction({ title = "Page" }) {
  return (
    <div className="p-6 bg-white rounded-xl border border-neutral-200 shadow-sm">
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <p className="text-neutral-600">This feature is under construction.</p>
    </div>
  )
}

export function AppRoutes() {
  return (
    <Routes>

      {/* Root */}

      <Route path={ROUTES.root} element={<Navigate to={ROUTES.dashboard} replace />} />

      {/* Public Routes */}

      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>

          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />

        </Route>
      </Route>

      {/* Protected Routes */}

      <Route element={<ProtectedRoute />}>

        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Overview />} />
          <Route path="upload" element={<UploadDocuments />} />
          <Route path="documents" element={<DocumentSummary />} />
          <Route path="fields" element={<ExtractionFields />} />
          <Route path="rules" element={<UnderConstruction title="Extraction Rules" />} />
          <Route path="ai-training" element={<UnderConstruction title="AI Training" />} />
          <Route path="analytics" element={<UnderConstruction title="Analytics" />} />
          <Route path="team" element={<UnderConstruction title="Team" />} />
          <Route path="security" element={<UnderConstruction title="Security" />} />
          <Route path="settings" element={<UnderConstruction title="Settings" />} />
        </Route>

      </Route>

      {/* Fallback */}

      <Route path="*" element={<Navigate to={ROUTES.dashboard} replace />} />

    </Routes>
  )
}