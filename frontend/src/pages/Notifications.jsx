import { useState } from "react"
import {
  CheckCircle2,
  AlertCircle,
  Info,
  ChevronDown
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Document Processed Successfully",
      details: "Your document 'Invoice_123.pdf' was processed with 98% accuracy.",
      type: "success",
      read: false,
      isOpen: false
    },
    {
      id: 2,
      title: "Low Confidence in Extraction",
      details: "The AI model had difficulty processing the fields in 'Contract_456.pdf'.",
      type: "warning",
      read: false,
      isOpen: false
    },
    {
      id: 3,
      title: "New AI Model Update Available",
      details: "A new version of the AI model has been released. Update now to improve extraction accuracy.",
      type: "info",
      read: false,
      isOpen: false
    }
  ])

  const dismissNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    )
  }

  const clearAllNotifications = () => {
    setNotifications([])
  }

  const toggleAccordion = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, isOpen: !notification.isOpen }
          : notification
      )
    )
  }

  return (
    <div className="space-y-6 p-6">

      {/* Header */}

      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-neutral-800">Notifications</h1>
        <button
          onClick={clearAllNotifications}
          className="text-sm text-violet-600 hover:text-violet-800"
        >
          Clear All
        </button>
      </div>

      {/* Notifications Accordion */}

      <div className="space-y-4">

        <AnimatePresence>
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                notification.read ? "opacity-50" : ""
              }`}
            >
              <div
                className="cursor-pointer p-4 flex justify-between items-center"
                onClick={() => toggleAccordion(notification.id)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-full ${
                      notification.type === "success"
                        ? "bg-green-50 text-green-600"
                        : notification.type === "warning"
                        ? "bg-yellow-50 text-yellow-600"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {notification.type === "success" && (
                      <CheckCircle2 size={18} />
                    )}
                    {notification.type === "warning" && (
                      <AlertCircle size={18} />
                    )}
                    {notification.type === "info" && <Info size={18} />}
                  </div>
                  <div>
                    <p className="text-lg font-medium text-neutral-800">
                      {notification.title}
                    </p>
                  </div>
                </div>

                <ChevronDown size={18} className="text-neutral-400" />
              </div>

              {/* Notification Details (accordion open) */}
              <AnimatePresence>
                {notification.isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-neutral-50"
                  >
                    <p className="text-sm text-neutral-600">{notification.details}</p>

                    <button
                      onClick={() => dismissNotification(notification.id)}
                      className="text-sm text-red-600 hover:text-red-800 mt-3"
                    >
                      Dismiss
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}