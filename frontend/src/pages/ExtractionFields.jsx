import { useState } from "react"
import {
  Plus,
  Trash2,
  Sparkles
} from "lucide-react"
import Select from "../components/ui/Select.jsx"

export default function ExtractionFields() {
  const [fields, setFields] = useState([
    {
      name: "Invoice Number",
      type: "text",
      instruction: "Extract invoice number",
      required: true
    },
    {
      name: "Total Amount",
      type: "number",
      instruction: "Extract total payable amount",
      required: true
    }
  ])

  const addField = () => {
    setFields([
      ...fields,
      {
        name: "",
        type: "text",
        instruction: "",
        required: false
      }
    ])
  }

  const removeField = (index) => {
    setFields(fields.filter((_, i) => i !== index))
  }

  const updateField = (index, key, value) => {
    const updated = [...fields]
    updated[index][key] = value
    setFields(updated)
  }

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <h1 className="text-2xl font-semibold text-neutral-800">
          Extraction Fields
        </h1>

        <button
          onClick={addField}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 text-white text-sm shadow-sm hover:bg-violet-700 transition"
        >
          <Plus size={16} />
          Add Field
        </button>

      </div>

      {/* Info Card */}

      <div className="relative bg-white rounded-xl border border-neutral-200 shadow-sm p-5 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/60 to-transparent pointer-events-none" />

        <p className="relative text-sm text-neutral-600 leading-relaxed">
          Define the fields you want to extract from documents. These fields guide
          the AI to structure accurate outputs and improve extraction quality.
        </p>

      </div>

      {/* Fields */}

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-6">

        {fields.map((field, index) => (
          <div
            key={index}
            className="border border-neutral-200 rounded-xl p-4 space-y-4 hover:border-neutral-300 transition"
          >

            {/* Top Row */}

            <div className="grid grid-cols-3 gap-4">

              {/* Name */}

              <div>
                <p className="text-xs text-neutral-500 mb-1">
                  Field Name
                </p>

                <input
                  value={field.name}
                  onChange={(e) =>
                    updateField(index, "name", e.target.value)
                  }
                  placeholder="e.g. Invoice Number"
                  className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm
                  outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-100"
                />
              </div>

              {/* Type (Premium Select) */}

              <div>
                <p className="text-xs text-neutral-500 mb-1">
                  Field Type
                </p>

                <Select
                  value={field.type}
                  onChange={(val) =>
                    updateField(index, "type", val)
                  }
                  options={["text", "number", "date", "currency"]}
                />
              </div>

              {/* Required + Delete */}

              <div className="flex items-end justify-between">

                {/* Premium Checkbox */}

                <label className="flex items-center gap-2 text-sm text-neutral-600 cursor-pointer">

                  <input
                    type="checkbox"
                    checked={field.required}
                    onChange={(e) =>
                      updateField(index, "required", e.target.checked)
                    }
                    className="w-4 h-4 accent-violet-600 cursor-pointer"
                  />

                  Required

                </label>

                <button
                  onClick={() => removeField(index)}
                  className="p-2 hover:bg-neutral-100 rounded-md transition"
                >
                  <Trash2 size={16} className="text-neutral-500" />
                </button>

              </div>

            </div>

            {/* Instruction */}

            <div>
              <p className="text-xs text-neutral-500 mb-1">
                AI Instruction
              </p>

              <textarea
                value={field.instruction}
                onChange={(e) =>
                  updateField(index, "instruction", e.target.value)
                }
                placeholder="Explain how AI should extract this field..."
                className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm
                outline-none resize-none h-20
                focus:border-violet-500 focus:ring-1 focus:ring-violet-100"
              />
            </div>

          </div>
        ))}

      </div>

      {/* AI Assist */}

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-4">

        <div className="flex items-center gap-2 font-semibold text-neutral-800">

          <Sparkles size={18} className="text-violet-600" />

          AI Assist

        </div>

        <div className="bg-neutral-50 rounded-lg p-4 text-sm text-neutral-600 leading-relaxed">

          You can define intelligent extraction rules such as:
          <br />• Extract values near keywords  
          <br />• Identify totals from tables  
          <br />• Detect structured sections automatically  

        </div>

      </div>

    </div>
  )
}