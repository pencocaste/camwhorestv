"use client";

import { useMediaQuery } from '@/hooks/useMediaQuery';

export function TeenDescription() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const description = `Discover the most beautiful young female cam models (18+) on Chaturbate. Our teen performers bring fresh energy and excitement to their shows, each with their unique style and personality. Watch live teen cams, interact through chat, and enjoy authentic performances from verified models aged 18-20. All models are legally adults and verified to ensure compliance with regulations.`;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Teen Cams</h1>

      {isMobile ? (
        <details className="group">
          <summary
            className="flex items-center justify-end cursor-pointer -mt-8 mb-1"
          >
            <div className="transform transition-transform duration-200 group-open:rotate-180">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </summary>

          <div className="mt-1">
            <p
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </details>
      ) : (
        <p
          className="text-gray-600 mt-1"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
}