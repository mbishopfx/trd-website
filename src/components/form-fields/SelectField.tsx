'use client';

interface SelectFieldProps {
  field: {
    id: string;
    label: string;
    options: string[];
    placeholder?: string;
    required?: boolean;
  };
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function SelectField({ field, value, onChange, error }: SelectFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-white mb-2">
        {field.label}
        {field.required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <select
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        required={field.required}
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">{field.placeholder || 'Select an option...'}</option>
        {field.options?.map((option, index) => (
          <option key={index} value={option} className="bg-gray-900">
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}

