'use client';

interface ImagePlaceholderProps {
  title: string;
  className?: string;
}

export default function ImagePlaceholder({ title, className = '' }: ImagePlaceholderProps) {
  return (
    <div className={`w-full h-full bg-gray-200 flex items-center justify-center ${className}`}>
      <div className="text-gray-400 text-center p-4">
        <svg
          className="w-12 h-12 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
} 