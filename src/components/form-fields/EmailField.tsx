'use client';

interface EmailFieldProps {
  field: {
    id: string;
    label: string;
    placeholder?: string;
    required?: boolean;
  };
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function EmailField({ field, value, onChange, error }: EmailFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-white mb-2">
        {field.label}
        {field.required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <input
        type="email"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
        required={field.required}
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}

