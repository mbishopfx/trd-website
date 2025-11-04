'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormField {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
  rows?: number;
  min?: number;
  max?: number;
  maxRating?: number;
  accept?: string;
  maxSize?: number;
}

const FIELD_TYPES = [
  { type: 'text', label: 'Text', icon: '📝' },
  { type: 'email', label: 'Email', icon: '📧' },
  { type: 'phone', label: 'Phone', icon: '📞' },
  { type: 'textarea', label: 'Textarea', icon: '📄' },
  { type: 'number', label: 'Number', icon: '🔢' },
  { type: 'date', label: 'Date', icon: '📅' },
  { type: 'select', label: 'Dropdown', icon: '📋' },
  { type: 'radio', label: 'Radio', icon: '🔘' },
  { type: 'checkbox', label: 'Checkbox', icon: '☑️' },
  { type: 'rating', label: 'Rating', icon: '⭐' },
  { type: 'file', label: 'File Upload', icon: '📎' },
];

export default function FormBuilder() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fields, setFields] = useState<FormField[]>([]);
  const [selectedFieldIndex, setSelectedFieldIndex] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);

  const addField = (type: string) => {
    const newField: FormField = {
      id: `field_${Date.now()}`,
      type,
      label: `New ${type} field`,
      required: false,
    };

    // Add default options for select/radio
    if (type === 'select' || type === 'radio') {
      newField.options = ['Option 1', 'Option 2', 'Option 3'];
    }

    setFields([...fields, newField]);
    setSelectedFieldIndex(fields.length);
  };

  const updateField = (index: number, updates: Partial<FormField>) => {
    const newFields = [...fields];
    newFields[index] = { ...newFields[index], ...updates };
    setFields(newFields);
  };

  const deleteField = (index: number) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
    setSelectedFieldIndex(null);
  };

  const moveField = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= fields.length) return;

    const newFields = [...fields];
    [newFields[index], newFields[newIndex]] = [newFields[newIndex], newFields[index]];
    setFields(newFields);
    setSelectedFieldIndex(newIndex);
  };

  const handleSave = async () => {
    if (!title.trim()) {
      alert('Please enter a form title');
      return;
    }

    if (fields.length === 0) {
      alert('Please add at least one field');
      return;
    }

    setSaving(true);

    try {
      const response = await fetch('/api/admin/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          fields,
          settings: {},
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert(`✅ Form created successfully!\n\nPublic URL: /forms/${data.form.slug}\nQR Code generated automatically.`);
        router.push('/admin/forms');
        router.refresh();
      } else {
        alert(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Save error:', error);
      alert('Failed to save form');
    } finally {
      setSaving(false);
    }
  };

  const selectedField = selectedFieldIndex !== null ? fields[selectedFieldIndex] : null;

  return (
    <div className="flex h-screen bg-black">
      {/* Left Sidebar - Field Palette */}
      <div className="w-64 bg-gray-900 border-r border-gray-800 p-4 overflow-y-auto">
        <h3 className="text-white font-bold mb-4 text-lg">Field Types</h3>
        <div className="space-y-2">
          {FIELD_TYPES.map(fieldType => (
            <button
              key={fieldType.type}
              onClick={() => addField(fieldType.type)}
              className="w-full flex items-center gap-3 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              <span className="text-2xl">{fieldType.icon}</span>
              <span>{fieldType.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Center - Form Preview */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-3xl mx-auto">
          {/* Form Header */}
          <div className="mb-8">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Form Title"
              className="w-full text-4xl font-bold bg-transparent text-white border-none outline-none mb-4 placeholder-gray-600"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Form description (optional)"
              rows={2}
              className="w-full text-lg bg-transparent text-gray-300 border-none outline-none resize-none placeholder-gray-600"
            />
          </div>

          {/* Form Fields */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            {fields.length === 0 ? (
              <div className="text-center py-16 text-gray-500">
                <div className="text-6xl mb-4">📝</div>
                <p className="text-xl">No fields yet</p>
                <p className="text-sm mt-2">Click a field type on the left to add fields</p>
              </div>
            ) : (
              <div className="space-y-4">
                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    onClick={() => setSelectedFieldIndex(index)}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      selectedFieldIndex === index
                        ? 'bg-blue-500/20 border-2 border-blue-500'
                        : 'bg-gray-800 border-2 border-transparent hover:border-gray-700'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg">
                            {FIELD_TYPES.find(t => t.type === field.type)?.icon}
                          </span>
                          <span className="font-semibold text-white">{field.label}</span>
                          {field.required && <span className="text-red-400">*</span>}
                          <span className="text-xs text-gray-500 uppercase">{field.type}</span>
                        </div>
                        {field.placeholder && (
                          <p className="text-sm text-gray-400">{field.placeholder}</p>
                        )}
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            moveField(index, 'up');
                          }}
                          disabled={index === 0}
                          className="px-2 py-1 text-white hover:bg-gray-700 rounded disabled:opacity-30"
                        >
                          ↑
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            moveField(index, 'down');
                          }}
                          disabled={index === fields.length - 1}
                          className="px-2 py-1 text-white hover:bg-gray-700 rounded disabled:opacity-30"
                        >
                          ↓
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteField(index);
                          }}
                          className="px-2 py-1 text-red-400 hover:bg-red-500/20 rounded"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Form'}
            </button>
            <button
              onClick={() => router.push('/admin/forms')}
              className="px-8 py-4 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Field Properties */}
      <div className="w-80 bg-gray-900 border-l border-gray-800 p-4 overflow-y-auto">
        {selectedField ? (
          <>
            <h3 className="text-white font-bold mb-4 text-lg">Field Properties</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Label</label>
                <input
                  type="text"
                  value={selectedField.label}
                  onChange={(e) => updateField(selectedFieldIndex!, { label: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700"
                />
              </div>

              {['text', 'email', 'phone', 'textarea', 'number'].includes(selectedField.type) && (
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Placeholder</label>
                  <input
                    type="text"
                    value={selectedField.placeholder || ''}
                    onChange={(e) => updateField(selectedFieldIndex!, { placeholder: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700"
                  />
                </div>
              )}

              {selectedField.type === 'textarea' && (
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Rows</label>
                  <input
                    type="number"
                    value={selectedField.rows || 4}
                    onChange={(e) => updateField(selectedFieldIndex!, { rows: parseInt(e.target.value) })}
                    min="2"
                    max="20"
                    className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700"
                  />
                </div>
              )}

              {(selectedField.type === 'select' || selectedField.type === 'radio') && (
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Options (one per line)</label>
                  <textarea
                    value={selectedField.options?.join('\n') || ''}
                    onChange={(e) => updateField(selectedFieldIndex!, { 
                      options: e.target.value.split('\n').filter(o => o.trim()) 
                    })}
                    rows={5}
                    className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 font-mono text-sm"
                  />
                </div>
              )}

              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedField.required || false}
                    onChange={(e) => updateField(selectedFieldIndex!, { required: e.target.checked })}
                    className="w-5 h-5"
                  />
                  <span className="text-white">Required field</span>
                </label>
              </div>
            </div>
          </>
        ) : (
          <div className="text-gray-500 text-center mt-16">
            <p>Select a field to edit its properties</p>
          </div>
        )}
      </div>
    </div>
  );
}

