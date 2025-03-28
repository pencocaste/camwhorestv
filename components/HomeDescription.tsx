"use client";

import { useMediaQuery } from '@/hooks/useMediaQuery';

export function HomeDescription() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const description = `CamWhoresTV is the best site of live sex cams around the world. You will find the hottest camwhores, males and <a href="/trans/" class="text-pink-500 hover:text-pink-600">shemale cams</a> from the all internet, and dont forget watch the horny <a href="/couples/" class="text-pink-500 hover:text-pink-600">couples</a> having live sex in front of you.`;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">CamWhoresTV</h1>

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