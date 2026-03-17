import { Listbox } from "@headlessui/react"
import { Check, ChevronDown } from "lucide-react"

export default function Select({ value, onChange, options }) {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">

        {/* Button */}

        <Listbox.Button
          className="w-full flex items-center justify-between
          border border-neutral-200 rounded-lg px-3 py-2 text-sm
          bg-white text-neutral-800
          hover:border-neutral-300 focus:outline-none"
        >
          <span>{value}</span>
          <ChevronDown size={16} className="text-neutral-400" />
        </Listbox.Button>

        {/* Options */}

        <Listbox.Options
          className="absolute mt-2 w-full z-50
          bg-white border border-neutral-200 rounded-xl shadow-lg
          overflow-hidden text-sm"
        >

          {options.map((option, i) => (
            <Listbox.Option
              key={i}
              value={option}
              className={({ active }) =>
                `cursor-pointer px-3 py-2 flex items-center justify-between
                ${
                  active
                    ? "bg-violet-50 text-violet-700"
                    : "text-neutral-700"
                }`
              }
            >
              {({ selected }) => (
                <>
                  <span>{option}</span>
                  {selected && (
                    <Check size={14} className="text-violet-600" />
                  )}
                </>
              )}
            </Listbox.Option>
          ))}

        </Listbox.Options>

      </div>
    </Listbox>
  )
}