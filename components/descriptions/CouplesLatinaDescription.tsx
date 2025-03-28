"use client";

import { useMediaQuery } from '@/hooks/useMediaQuery';

export function CouplesLatinaDescription() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const description = `Experience the passion and energy of our Latin couples on Chaturbate. Watch live shows featuring fiery duos from South and Central America who bring their natural chemistry and vibrant personalities to every performance. Join their rooms to enjoy authentic Latin charm and unforgettable moments.`;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Latina Couples Cams</h1>

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