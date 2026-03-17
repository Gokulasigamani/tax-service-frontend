import {
  LayoutDashboard,
  Upload,
  FileText,
  Database,
  Workflow,
  Brain,
  BarChart3,
  Settings,
  Users,
  Shield
} from "lucide-react"
import { ROUTES } from "../routes/routeConfig.js"

export const sidebarItems = [
  {
    label: "Dashboard",
    path: ROUTES.dashboard,
    icon: LayoutDashboard,
    end: true
  },
  {
    label: "Upload Documents",
    path: ROUTES.upload,
    icon: Upload,
    end: true
  },
  {
    label: "Document Library",
    path: ROUTES.documents,
    icon: FileText
  },
  {
    label: "Extraction Fields",
    path: ROUTES.fields,
    icon: Database
  },
  {
    label: "Extraction Rules",
    path: ROUTES.rules,
    icon: Workflow
  },
  {
    label: "AI Training",
    path: ROUTES.aiTraining,
    icon: Brain
  },
  {
    label: "Analytics",
    path: ROUTES.analytics,
    icon: BarChart3
  },
  {
    label: "Team",
    path: ROUTES.team,
    icon: Users
  },
  {
    label: "Security",
    path: ROUTES.security,
    icon: Shield
  },
  {
    label: "Settings",
    path: ROUTES.settings,
    icon: Settings
  }
]