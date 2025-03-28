"use client";

export function GirlsDescription() {
  const description = `Discover the most beautiful female cam models from around the world on Chaturbate. Our female performers range from amateurs to professionals, each bringing their unique charm and personality to their shows. Whether you're into <a href="/girls/teen/" class="text-pink-500 hover:text-pink-600">petite teens</a>, <a href="/girls/milf/" class="text-pink-500 hover:text-pink-600">curvy MILFs</a>, or anything in between, you'll find exactly what you're looking for. Watch live shows, interact through chat, and show your appreciation with tips to unlock special requests and private shows.`;

  return (
    <div>
      {/* Para móviles actuará como acordeón; en desktop estará cerrado y sin clic. */}
      <details className="group">
        <summary
          className={`
            flex items-center justify-between 
            list-none mb-1
            cursor-pointer
            md:cursor-auto 
            md:pointer-events-none 
            [&::-webkit-details-marker]:hidden
          `}
        >
          <h1 className="text-2xl font-bold">Chaturbate Girls</h1>

          {/* Flecha visible solo en mobile */}
          <div className="md:hidden transform transition-transform duration-200 group-open:rotate-180">
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

        {/* Contenido desplegable SOLO en mobile */}
        <div className="mt-1 md:hidden">
          <p
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </details>

      {/* En desktop el texto se ve siempre, en mobile se oculta */}
      <div className="hidden md:block mt-1">
        <p
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}