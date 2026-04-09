import { useState } from "react"
import {
  Sparkles,
  Users,
  Wand2
} from "lucide-react"

export default function EditorPage() {
  const [content, setContent] = useState("Start writing your document here...")

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <h1 className="text-2xl font-semibold text-text-main">
            Document Editor
          </h1>
          <p className="text-xs text-text-main/70 mt-1">
            Create, edit, and enhance documents with AI
          </p>
        </div>

        {/* Collaborators */}
        <div className="flex items-center gap-3">

          <div className="flex -space-x-2">
            <div className="w-7 h-7 rounded-full bg-primary/10" />
            <div className="w-7 h-7 rounded-full bg-blue-400" />
            <div className="w-7 h-7 rounded-full bg-emerald-400" />
          </div>

          <span className="text-xs text-text-main/70">
            3 active collaborators
          </span>

        </div>

      </div>

      {/* Toolbar */}

      <div className="
        bg-surface border border-border
        rounded-xl p-3 shadow-sm
        flex flex-wrap items-center gap-2
      ">

        {/* Tools */}
        {["Bold", "Heading", "List"].map((tool) => (
          <button
            key={tool}
            className="
              px-3 py-1.5 text-xs rounded-md
              text-text-main/70
              hover:bg-surface transition
            "
          >
            {tool}
          </button>
        ))}

        {/* Right Actions */}
        <div className="ml-auto flex gap-2">

          <button className="
            px-3 py-1.5 text-xs rounded-md
            bg-gradient-to-br from-[#1a1333] via-[#2a1f4a] to-[#120c23]
            text-white shadow-sm
            hover:opacity-90 transition
          ">
            Save
          </button>

          <button className="
            px-3 py-1.5 text-xs rounded-md
            border border-border
            text-text-main
            hover:bg-background transition
          ">
            Share
          </button>

        </div>

      </div>

      {/* Main Layout */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Editor */}

        <div className="
          lg:col-span-2
          bg-surface rounded-xl border border-border
          shadow-sm p-5
        ">

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="
              w-full h-[300px] sm:h-[400px]
              outline-none resize-none
              text-sm text-text-main leading-relaxed
            "
          />

        </div>

        {/* AI Panel */}

        <div className="
          bg-surface rounded-xl border border-border
          shadow-sm p-5 space-y-4
        ">

          <div className="flex items-center gap-2 font-semibold text-text-main">
            <Sparkles size={16} className="text-primary" />
            AI Assistant
          </div>

          {/* Actions */}

          <div className="space-y-3">

            <button className="
              w-full text-left text-sm p-3 rounded-lg
              bg-primary/10 hover:bg-primary/10 transition
            ">
              Generate content
            </button>

            <button className="
              w-full text-left text-sm p-3 rounded-lg
              bg-blue-500/10 text-blue-500 hover:bg-blue-100 transition
            ">
              Improve writing
            </button>

            <button className="
              w-full text-left text-sm p-3 rounded-lg
              bg-emerald-500/10 text-emerald-500 hover:bg-emerald-100 transition
            ">
              Summarize document
            </button>

          </div>

          {/* Suggestions */}

          <div className="pt-4 border-t border-border space-y-2">

            <div className="flex items-center gap-2 font-semibold text-sm">
              <Wand2 size={14} />
              Suggestions
            </div>

            <div className="text-xs text-text-main/70 bg-surface p-2 rounded">
              Consider adding a summary section at the end.
            </div>

            <div className="text-xs text-text-main/70 bg-surface p-2 rounded">
              Improve clarity in the introduction paragraph.
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}