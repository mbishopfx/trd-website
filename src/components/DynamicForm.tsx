'use client';

import { useState } from 'react';
import TextField from './form-fields/TextField';
import EmailField from './form-fields/EmailField';
import PhoneField from './form-fields/PhoneField';
import TextareaField from './form-fields/TextareaField';
import CheckboxField from './form-fields/CheckboxField';
import RadioField from './form-fields/RadioField';
import SelectField from './form-fields/SelectField';
import DateField from './form-fields/DateField';
import NumberField from './form-fields/NumberField';
import RatingField from './form-fields/RatingField';
import FileUploadField from './form-fields/FileUploadField';

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

interface DynamicFormProps {
  form: {
    id: string;
    title: string;
    description?: string;
    fields: FormField[];
    slug: string;
  };
  onSuccess?: () => void;
}

export default function DynamicForm({ form, onSuccess }: DynamicFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (fieldId: string, value: any) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
    // Clear error when user starts typing
    if (errors[fieldId]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldId];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    form.fields.forEach(field => {
      const value = formData[field.id];

      // Required field validation
      if (field.required) {
        if (value === undefined || value === null || value === '') {
          newErrors[field.id] = `${field.label} is required`;
        }
      }

      // Email validation
      if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors[field.id] = 'Please enter a valid email address';
        }
      }

      // Phone validation
      if (field.type === 'phone' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value)) {
          newErrors[field.id] = 'Please enter a valid phone number';
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(`/api/forms/${form.slug}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({});
        if (onSuccess) {
          onSuccess();
        }
      } else {
        alert(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const renderField = (field: FormField) => {
    const commonProps = {
      field,
      value: formData[field.id],
      onChange: (value: any) => updateField(field.id, value),
      error: errors[field.id],
    };

    switch (field.type) {
      case 'text':
        return <TextField key={field.id} {...commonProps} />;
      case 'email':
        return <EmailField key={field.id} {...commonProps} />;
      case 'phone':
        return <PhoneField key={field.id} {...commonProps} />;
      case 'textarea':
        return <TextareaField key={field.id} {...commonProps} />;
      case 'checkbox':
        return <CheckboxField key={field.id} {...commonProps} />;
      case 'radio':
        return <RadioField key={field.id} {...commonProps} />;
      case 'select':
        return <SelectField key={field.id} {...commonProps} />;
      case 'date':
        return <DateField key={field.id} {...commonProps} />;
      case 'number':
        return <NumberField key={field.id} {...commonProps} />;
      case 'rating':
        return <RatingField key={field.id} {...commonProps} />;
      case 'file':
        return <FileUploadField key={field.id} {...commonProps} />;
      default:
        return null;
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300 mb-6">
          Your submission has been received successfully.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit Another Response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-1">
      {form.fields.map(field => renderField(field))}

      <div className="pt-6">
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? 'Submitting...' : 'Submit Form'}
        </button>
      </div>

      <p className="text-sm text-gray-400 text-center mt-4">
        <span className="text-red-400">*</span> Required fields
      </p>
    </form>
  );
}

