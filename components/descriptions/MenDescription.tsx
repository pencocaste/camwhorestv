"use client";

import { useMediaQuery } from '@/hooks/useMediaQuery';

export function MenDescription() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const description = `Explore our selection of male performers on Chaturbate, featuring hunks, athletes, and charming personalities from around the globe. From <a href="/men/muscle/" class="text-pink-500 hover:text-pink-600">muscle</a> men to <a href="/men/daddy/" class="text-pink-500 hover:text-pink-600">daddy</a> types, our male models offer a variety of shows catering to different preferences and interests. Join their rooms to chat, make requests, and enjoy live male entertainment at its finest.`;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Chaturbate Men</h1>

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