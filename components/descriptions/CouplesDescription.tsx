"use client";

import { useMediaQuery } from '@/hooks/useMediaQuery';

export function CouplesDescription() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const description = `Experience the passion and chemistry of real couples performing live on Chaturbate. Our <a href="/couples/" class="text-pink-500 hover:text-pink-600">couples section</a> features duos from all walks of life, sharing their intimate moments with you. From <a href="/couples/lesbian/" class="text-pink-500 hover:text-pink-600">lesbian</a> to <a href="/couples/threesome/" class="text-pink-500 hover:text-pink-600">threesome</a> shows, these couples know how to put on a show. Join their rooms to interact, make requests, and enjoy authentic couple dynamics in real-time streaming.`;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Chaturbate Couples</h1>

      {isMobile ? (
        <details className="group">
          <summary
            className="flex items-center justify-end cursor-pointer -mt-8 mb-1 [&::-webkit-details-marker]:hidden"
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