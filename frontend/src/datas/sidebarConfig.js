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
  Shield,
  Bell,
} from "lucide-react"
import { ROUTES } from "../routes/routeConfig.js"

export const sidebarItems = [
  {
    label: "Dashboard",
    path: "dashboard",
    icon: LayoutDashboard
  },
  {
    label: "Notifications",
    path: "notifications",
    icon: Bell
  },
  {
    label: "Upload Documents",
    path: "upload",
    icon: Upload
  },
  {
    label: "Document Library",
    path: "documents",
    icon: FileText
  },
  {
    label: "Extraction Fields",
    path: "fields",
    icon: Database
  },
  {
    label: "Extraction Rules",
    path: "rules",
    icon: Workflow
  },
  {
    label: "AI Training",
    path: "ai-training",
    icon: Brain
  },
  {
    label: "Analytics",
    path: "analytics",
    icon: BarChart3
  },
  {
    label: "Team",
    path: "team",
    icon: Users
  },
  {
    label: "Security",
    path: "security",
    icon: Shield
  },
  {
    label: "Settings",
    path: "settings",
    icon: Settings
  }
]