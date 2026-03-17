import {
  Sparkles,
  FileText,
  Brain
} from "lucide-react"

export default function Overview() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <h1 className="text-2xl font-semibold text-neutral-800">
          Overview
        </h1>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 text-white text-sm shadow-sm hover:bg-violet-700 transition">
          <Sparkles size={16} />
          Create
        </button>

      </div>

      {/* Metric Cards */}

      <div className="grid grid-cols-3 gap-6">

  {/* Documents Processed */}

  <div className="relative overflow-hidden bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">

    {/* Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-violet-50/60 to-transparent pointer-events-none" />

    <div className="relative">

      <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
        Documents Processed
        <span>Last 7 days</span>
      </div>

      <div className="flex items-end justify-between">

        <div>
          <p className="text-2xl font-semibold">1,294</p>
          <span className="text-green-600 text-sm">+12.4%</span>
        </div>

        <div className="flex items-end gap-[3px] h-10">
          {[6, 10, 14, 8, 16, 12, 18].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}px` }}
              className="w-[4px] bg-violet-400 rounded-sm"
            />
          ))}
        </div>

      </div>

    </div>

  </div>

  {/* Extraction Runs */}

  <div className="relative overflow-hidden bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">

    {/* Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-transparent pointer-events-none" />

    <div className="relative">

      <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
        Extraction Runs
        <span>Last 7 days</span>
      </div>

      <div className="flex items-end justify-between">

        <div>
          <p className="text-2xl font-semibold">842</p>
          <span className="text-red-500 text-sm">-2.1%</span>
        </div>

        <div className="flex items-end gap-[3px] h-10">
          {[14, 16, 12, 10, 9, 8, 7].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}px` }}
              className="w-[4px] bg-blue-400 rounded-sm"
            />
          ))}
        </div>

      </div>

    </div>

  </div>

  {/* Total Fields */}

  <div className="relative overflow-hidden bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">

    {/* Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 to-transparent pointer-events-none" />

    <div className="relative">

      <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
        Total Fields Extracted
        <span>All time</span>
      </div>

      <div className="flex items-end justify-between">

        <div>
          <p className="text-2xl font-semibold">68,674</p>
          <span className="text-green-600 text-sm">+4.1%</span>
        </div>

        <svg width="80" height="30">
          <polyline
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            points="0,25 10,22 20,21 30,18 40,16 50,14 60,10 70,7 80,5"
          />
        </svg>

      </div>

    </div>

  </div>

</div>

      {/* Middle Section */}

      <div className="grid grid-cols-3 gap-6">

        {/* Latest Documents */}

        <div className="col-span-2 bg-white rounded-xl border border-neutral-200 shadow-sm p-5">

          <div className="flex items-center justify-between mb-4">

            <h2 className="font-semibold text-neutral-800">
              Latest Processed Documents
            </h2>

            <button className="text-violet-600 text-sm">
              View all
            </button>

          </div>

          <div className="divide-y">

            {[
              { name: "Invoice_March.pdf", source: "Finance", date: "Today" },
              { name: "Contract_Agreement.docx", source: "Legal", date: "Yesterday" },
              { name: "Shipment_Details.pdf", source: "Logistics", date: "Mon, May 20" },
              { name: "KYC_Form.pdf", source: "Compliance", date: "Sun, May 19" },
              { name: "Receipt_2026.pdf", source: "Billing", date: "Sun, May 19" }
            ].map((doc, i) => (

              <div
                key={i}
                className="flex items-center justify-between py-3"
              >

                <div className="flex items-center gap-3">

                  <div className="p-2 bg-violet-100 rounded-lg">
                    <FileText size={16} className="text-violet-600" />
                  </div>

                  <div>

                    <p className="text-sm font-medium">{doc.name}</p>

                    <p className="text-xs text-neutral-500">
                      {doc.source}
                    </p>

                  </div>

                </div>

                <span className="text-xs text-neutral-400">
                  {doc.date}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Copilot */}

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 space-y-4">

          <div className="flex items-center gap-2 text-neutral-800 font-semibold">

            <Brain size={18} />

            Copilot

          </div>

          <div className="bg-neutral-50 rounded-lg p-3 text-sm text-neutral-600">
            Invoice documents increased processing volume this week.
            Consider adding automated rules.
          </div>

          <div className="bg-neutral-50 rounded-lg p-3 text-sm text-neutral-600">
            Similar table layouts detected across multiple documents.
          </div>

          <div className="bg-neutral-50 rounded-lg p-3 text-sm text-neutral-600">
            Some extraction fields are missing validation rules.
          </div>

          <div className="border rounded-lg flex items-center px-3 py-2 text-sm">

            <input
              placeholder="Ask AI anything..."
              className="flex-1 outline-none"
            />

            <Sparkles size={16} className="text-violet-600" />

          </div>

        </div>

      </div>

      {/* Bottom Table */}

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5">

        <div className="flex items-center justify-between mb-4">

          <h2 className="font-semibold text-neutral-800">
            Most Processed Document Types
          </h2>

          <button className="text-violet-600 text-sm">
            View all
          </button>

        </div>

        <table className="w-full text-sm">

          <thead className="text-neutral-500 border-b">

            <tr>
              <th className="text-left py-3">Document Type</th>
              <th className="text-left">Processed</th>
              <th className="text-left">Fields Extracted</th>
              <th className="text-left">Avg Accuracy</th>
            </tr>

          </thead>

          <tbody className="divide-y text-neutral-700">

            <tr>
              <td className="py-3">Invoices</td>
              <td>932</td>
              <td>3,421</td>
              <td>98%</td>
            </tr>

            <tr>
              <td className="py-3">Contracts</td>
              <td>712</td>
              <td>2,103</td>
              <td>96%</td>
            </tr>

            <tr>
              <td className="py-3">Receipts</td>
              <td>445</td>
              <td>1,292</td>
              <td>95%</td>
            </tr>

            <tr>
              <td className="py-3">Bank Statements</td>
              <td>371</td>
              <td>986</td>
              <td>94%</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  )
}