'use client';

import { useState } from 'react';

interface FileUploadFieldProps {
  field: {
    id: string;
    label: string;
    required?: boolean;
    accept?: string;
    maxSize?: number; // in MB
  };
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function FileUploadField({ field, value, onChange, error }: FileUploadFieldProps) {
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const maxSize = (field.maxSize || 5) * 1024 * 1024; // Convert MB to bytes
    if (file.size > maxSize) {
      alert(`File size must be less than ${field.maxSize || 5}MB`);
      return;
    }

    setUploading(true);
    setFileName(file.name);

    try {
      // Create form data
      const formData = new FormData();
      formData.append('file', file);

      // Upload to API
      const response = await fetch('/api/forms/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        onChange(data.url);
      } else {
        alert('File upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('File upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-white mb-2">
        {field.label}
        {field.required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          type="file"
          onChange={handleFileChange}
          accept={field.accept || 'image/*,.pdf,.doc,.docx'}
          required={field.required && !value}
          disabled={uploading}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        />
        {uploading && (
          <p className="text-blue-400 text-sm mt-1">Uploading {fileName}...</p>
        )}
        {value && !uploading && (
          <p className="text-green-400 text-sm mt-1">✓ File uploaded successfully</p>
        )}
      </div>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}

