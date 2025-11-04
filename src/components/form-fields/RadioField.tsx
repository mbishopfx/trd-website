'use client';

interface RadioFieldProps {
  field: {
    id: string;
    label: string;
    options: string[];
    required?: boolean;
  };
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function RadioField({ field, value, onChange, error }: RadioFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-white mb-2">
        {field.label}
        {field.required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <div className="space-y-2">
        {field.options?.map((option, index) => (
          <label key={index} className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name={field.id}
              value={option}
              checked={value === option}
              onChange={(e) => onChange(e.target.value)}
              required={field.required}
              className="w-5 h-5 bg-white/5 border border-white/10 text-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-sm text-white">{option}</span>
          </label>
        ))}
      </div>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}

