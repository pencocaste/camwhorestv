"use client";

import { useMediaQuery } from '@/hooks/useMediaQuery';

export function FemaleDescription() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const description = `Discover the most beautiful female cam models from around the world on Chaturbate. Our female performers range from amateurs to professionals, each bringing their unique charm and personality to their shows. Whether you're into <a href="/female/teen/" class="text-pink-500 hover:text-pink-600">petite teens</a>, <a href="/female/milf/" class="text-pink-500 hover:text-pink-600">curvy MILFs</a>, or anything in between, you'll find exactly what you're looking for. Watch live shows, interact through chat, and show your appreciation with tips to unlock special requests and private shows.`;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Female Cams</h1>

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