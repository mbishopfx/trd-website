'use client';

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <style jsx global>{`
        .blog-content h1 {
          font-size: 2.5rem !important;
          font-weight: 800 !important;
          color: white !important;
          margin-top: 3rem !important;
          margin-bottom: 2rem !important;
          line-height: 1.2 !important;
        }
        .blog-content h2 {
          font-size: 2rem !important;
          font-weight: 700 !important;
          color: white !important;
          margin-top: 4rem !important;
          margin-bottom: 1.5rem !important;
          line-height: 1.3 !important;
        }
        .blog-content h3 {
          font-size: 1.75rem !important;
          font-weight: 700 !important;
          color: white !important;
          margin-top: 2.5rem !important;
          margin-bottom: 1.25rem !important;
          line-height: 1.4 !important;
        }
        .blog-content h4 {
          font-size: 1.5rem !important;
          font-weight: 600 !important;
          color: white !important;
          margin-top: 2rem !important;
          margin-bottom: 1rem !important;
        }
        .blog-content h5 {
          font-size: 1.25rem !important;
          font-weight: 600 !important;
          color: #e5e7eb !important;
          margin-top: 1.5rem !important;
          margin-bottom: 0.75rem !important;
        }
        .blog-content h6 {
          font-size: 1.125rem !important;
          font-weight: 600 !important;
          color: #e5e7eb !important;
          margin-top: 1.25rem !important;
          margin-bottom: 0.5rem !important;
        }
        .blog-content p {
          font-size: 1.0625rem !important;
          color: white !important;
          line-height: 1.8 !important;
          margin-bottom: 1.5rem !important;
        }
        .blog-content strong {
          font-weight: 700 !important;
          color: white !important;
        }
        .blog-content em {
          font-style: italic !important;
          color: #d1d5db !important;
        }
        .blog-content a {
          color: #60a5fa !important;
          font-weight: 600 !important;
          text-decoration: none !important;
        }
        .blog-content a:hover {
          text-decoration: underline !important;
        }
        .blog-content ul, .blog-content ol {
          margin: 1.5rem 0 !important;
          padding-left: 2rem !important;
        }
        .blog-content ul {
          list-style-type: disc !important;
        }
        .blog-content ol {
          list-style-type: decimal !important;
        }
        .blog-content li {
          font-size: 1.0625rem !important;
          color: white !important;
          margin-bottom: 0.75rem !important;
          line-height: 1.7 !important;
        }
        .blog-content blockquote {
          border-left: 4px solid #3b82f6 !important;
          padding-left: 1.5rem !important;
          padding-top: 1rem !important;
          padding-bottom: 1rem !important;
          margin: 2rem 0 !important;
          background-color: #111827 !important;
          font-style: italic !important;
          color: #d1d5db !important;
        }
        .blog-content code {
          background-color: #111827 !important;
          color: #60a5fa !important;
          padding: 0.25rem 0.5rem !important;
          border-radius: 0.25rem !important;
          font-family: 'Courier New', monospace !important;
          font-size: 0.9375rem !important;
        }
      `}</style>
    </>
  );
}

