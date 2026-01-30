'use client';

interface CheckboxFieldProps {
  field: {
    id: string;
    label: string;
    required?: boolean;
  };
  value: boolean;
  onChange: (value: boolean) => void;
  error?: string;
}

export default function CheckboxField({ field, value, onChange, error }: CheckboxFieldProps) {
  return (
    <div className="mb-4">
      <label className="flex items-start gap-3 cursor-pointer">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            checked={value || false}
            onChange={(e) => onChange(e.target.checked)}
            required={field.required}
            className="w-5 h-5 bg-white/5 border border-white/10 rounded text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
          />
        </div>
        <span className="text-sm text-gray-300 leading-tight">
          {field.label}
          {field.required && <span className="text-red-400 ml-1">*</span>}
        </span>
      </label>
      {error && <p className="text-red-400 text-sm mt-1 ml-8">{error}</p>}
    </div>
  );
}

