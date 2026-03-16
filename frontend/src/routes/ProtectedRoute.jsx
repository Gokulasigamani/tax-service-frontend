import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { isAuthenticated } from './auth.js'

export function ProtectedRoute() {
  const location = useLocation()

  if (!isAuthenticated()) {
    return <Navigate to="/signin" replace state={{ from: location }} />
  }

  return <Outlet />
}

