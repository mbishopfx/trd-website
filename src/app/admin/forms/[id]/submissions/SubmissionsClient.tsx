'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Submission {
  id: string;
  data: Record<string, any>;
  ip_address?: string;
  user_agent?: string;
  created_at: string;
}

interface Field {
  id: string;
  label: string;
  type: string;
}

export default function SubmissionsClient({
  formId,
  formFields,
  initialSubmissions,
}: {
  formId: string;
  formFields: Field[];
  initialSubmissions: Submission[];
}) {
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const router = useRouter();

  const deleteSubmission = async (submissionId: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) {
      return;
    }

    try {
      const response = await fetch(
        `/api/admin/forms/${formId}/submissions?submissionId=${submissionId}`,
        { method: 'DELETE' }
      );

      const data = await response.json();

      if (data.success) {
        setSubmissions(submissions.filter(s => s.id !== submissionId));
        setSelectedSubmission(null);
        alert('✅ Submission deleted');
        router.refresh();
      } else {
        alert(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete submission');
    }
  };

  const exportToCSV = () => {
    if (submissions.length === 0) {
      alert('No submissions to export');
      return;
    }

    // Create CSV headers
    const headers = ['Submission Date', ...formFields.map(f => f.label), 'IP Address'];
    const csvRows = [headers.join(',')];

    // Add data rows
    submissions.forEach(submission => {
      const row = [
        new Date(submission.created_at).toLocaleString(),
        ...formFields.map(field => {
          const value = submission.data[field.id];
          // Handle different value types
          if (value === undefined || value === null) return '';
          if (typeof value === 'boolean') return value ? 'Yes' : 'No';
          if (Array.isArray(value)) return value.join('; ');
          // Escape commas and quotes
          const stringValue = String(value);
          if (stringValue.includes(',') || stringValue.includes('"')) {
            return `"${stringValue.replace(/"/g, '""')}"`;
          }
          return stringValue;
        }),
        submission.ip_address || '',
      ];
      csvRows.push(row.join(','));
    });

    // Create and download file
    const csv = csvRows.join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `form-submissions-${Date.now()}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (submissions.length === 0) {
    return (
      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-16 text-center">
        <div className="text-6xl mb-4">📭</div>
        <h3 className="text-2xl font-bold text-white mb-2">No Submissions Yet</h3>
        <p className="text-gray-400">
          Submissions will appear here once users fill out your form
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Export Button */}
      <div className="mb-6 flex justify-end">
        <button
          onClick={exportToCSV}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
        >
          📥 Export to CSV
        </button>
      </div>

      {/* Submissions Table */}
      <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Date
                </th>
                {formFields.slice(0, 3).map(field => (
                  <th
                    key={field.id}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-300"
                  >
                    {field.label}
                  </th>
                ))}
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {submissions.map(submission => (
                <tr
                  key={submission.id}
                  className="hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-white whitespace-nowrap">
                    {new Date(submission.created_at).toLocaleDateString()}{' '}
                    <span className="text-gray-400">
                      {new Date(submission.created_at).toLocaleTimeString()}
                    </span>
                  </td>
                  {formFields.slice(0, 3).map(field => (
                    <td key={field.id} className="px-6 py-4 text-sm text-gray-300">
                      {(() => {
                        const value = submission.data[field.id];
                        if (value === undefined || value === null) return '-';
                        if (typeof value === 'boolean') return value ? '✓ Yes' : '✗ No';
                        if (Array.isArray(value)) return value.join(', ');
                        const str = String(value);
                        return str.length > 50 ? str.substring(0, 50) + '...' : str;
                      })()}
                    </td>
                  ))}
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedSubmission(submission)}
                        className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded hover:bg-blue-700 transition-colors"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => deleteSubmission(submission.id)}
                        className="px-3 py-1 bg-red-600/20 text-red-400 text-xs font-semibold rounded hover:bg-red-600/30 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Details Modal */}
      {selectedSubmission && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedSubmission(null)}
        >
          <div
            className="bg-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gray-900 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Submission Details</h3>
              <button
                onClick={() => setSelectedSubmission(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Meta Info */}
              <div className="mb-6 pb-6 border-b border-gray-700">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400 mb-1">Submitted</div>
                    <div className="text-white">
                      {new Date(selectedSubmission.created_at).toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 mb-1">IP Address</div>
                    <div className="text-white">
                      {selectedSubmission.ip_address || 'Unknown'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Data */}
              <div className="space-y-4">
                {formFields.map(field => {
                  const value = selectedSubmission.data[field.id];
                  return (
                    <div key={field.id}>
                      <div className="text-sm font-semibold text-gray-400 mb-1">
                        {field.label}
                      </div>
                      <div className="text-white bg-gray-800 px-4 py-3 rounded-lg">
                        {(() => {
                          if (value === undefined || value === null) return '-';
                          if (typeof value === 'boolean') return value ? '✓ Yes' : '✗ No';
                          if (Array.isArray(value)) return value.join(', ');
                          if (field.type === 'file' && typeof value === 'string') {
                            return (
                              <a
                                href={value}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline"
                              >
                                View uploaded file →
                              </a>
                            );
                          }
                          return String(value);
                        })()}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Actions */}
              <div className="mt-6 pt-6 border-t border-gray-700 flex gap-3">
                <button
                  onClick={() => deleteSubmission(selectedSubmission.id)}
                  className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  🗑️ Delete Submission
                </button>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors ml-auto"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

