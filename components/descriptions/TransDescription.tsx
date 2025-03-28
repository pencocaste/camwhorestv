"use client";

import { useMediaQuery } from '@/hooks/useMediaQuery';

export function TransDescription() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const description = `Welcome to Chaturbate's <a href="/trans/" class="text-pink-500 hover:text-pink-600">trans section</a>, where our diverse and talented trans performers showcase their beauty and charm. Our trans models come from various backgrounds and express themselves in unique ways. From <a href="/trans/asian/" class="text-pink-500 hover:text-pink-600">Asian</a> to <a href="/trans/latina/" class="text-pink-500 hover:text-pink-600">Latina</a> performers, enjoy live shows, engage in meaningful conversations, and celebrate diversity in our welcoming community.`;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Chaturbate Trans</h1>

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