'use client';

import { useState } from 'react';

interface RatingFieldProps {
  field: {
    id: string;
    label: string;
    required?: boolean;
    maxRating?: number;
  };
  value: number;
  onChange: (value: number) => void;
  error?: string;
}

export default function RatingField({ field, value, onChange, error }: RatingFieldProps) {
  const [hover, setHover] = useState(0);
  const maxRating = field.maxRating || 5;

  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-white mb-2">
        {field.label}
        {field.required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <div className="flex gap-2">
        {[...Array(maxRating)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <button
              key={index}
              type="button"
              onClick={() => onChange(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
              className="text-3xl transition-all hover:scale-110"
            >
              <span
                className={
                  ratingValue <= (hover || value)
                    ? 'text-yellow-400'
                    : 'text-gray-600'
                }
              >
                ★
              </span>
            </button>
          );
        })}
      </div>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}

