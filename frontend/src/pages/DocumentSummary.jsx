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

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-semibold text-neutral-800">
            Document Editor
          </h1>
          <p className="text-xs text-neutral-500 mt-1">
            Create, edit, and enhance documents with AI
          </p>
        </div>

        {/* Active Users */}
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <Users size={14} />
          3 active collaborators
        </div>

      </div>

      {/* Toolbar */}

      <div className="bg-white border border-neutral-200 rounded-xl p-3 flex gap-2 shadow-sm">

        {["Bold", "Heading", "List"].map((tool) => (
          <button
            key={tool}
            className="px-3 py-1 text-xs rounded-md text-neutral-600 hover:bg-neutral-100"
          >
            {tool}
          </button>
        ))}

        <div className="ml-auto flex gap-2">

          <button className="px-3 py-1 text-xs rounded-md bg-violet-600 text-white">
            Save
          </button>

          <button className="px-3 py-1 text-xs rounded-md border border-neutral-200">
            Share
          </button>

        </div>

      </div>

      {/* Main Layout */}

      <div className="grid grid-cols-3 gap-6">

        {/* Editor */}

        <div className="col-span-2 bg-white rounded-xl border border-neutral-200 shadow-sm p-5">

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-[400px] outline-none resize-none text-sm text-neutral-700"
          />

        </div>

        {/* AI Panel */}

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-4">

          <div className="flex items-center gap-2 font-semibold">
            <Sparkles size={16} className="text-violet-600" />
            AI Assistant
          </div>

          <button className="w-full text-left text-sm p-3 rounded-lg bg-violet-50 hover:bg-violet-100">
            Generate content
          </button>

          <button className="w-full text-left text-sm p-3 rounded-lg bg-blue-50 hover:bg-blue-100">
            Improve writing
          </button>

          <button className="w-full text-left text-sm p-3 rounded-lg bg-emerald-50 hover:bg-emerald-100">
            Summarize document
          </button>

          {/* Suggestions */}

          <div className="pt-4 border-t border-neutral-200 space-y-2">

            <div className="flex items-center gap-2 font-semibold text-sm">
              <Wand2 size={14} />
              Suggestions
            </div>

            <div className="text-xs text-neutral-500 bg-neutral-100 p-2 rounded">
              Consider adding a summary section at the end.
            </div>

            <div className="text-xs text-neutral-500 bg-neutral-100 p-2 rounded">
              Improve clarity in the introduction paragraph.
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}