import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#A2242C]">
      <div className="w-[calc(100%-48px)] max-w-[1400px] mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Make Money Column */}
          <div>
            <span className="block font-bold mb-4 text-[#FBCC6A] text-lg">Make Money</span>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.camwhorestv.porn/in/?tour=NwNd&campaign=lRUVu&track=CWTVfootermodels" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  className="font-medium text-[#FBCC6A] hover:text-[#F49032]/80 w-fit"
                >
                  Become a Cam Model
                </a>
              </li>
              <li>
                <a 
                  href="https://www.camwhorestv.porn/in/?tour=07kX&campaign=lRUVu&track=CWTVfooter" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  className="font-medium text-[#FBCC6A] hover:text-[#F49032]/80 w-fit"
                >
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>

          {/* Free Sex Cams Column */}
          <div>
            <span className="block font-bold mb-4 text-white text-lg">Free Sex Cams</span>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/female"
                  className="text-white hover:text-gray-200 w-fit font-light"
                >
                  Girls Cams
                </Link>
              </li>
              <li>
                <Link 
                  href="/couples"
                  className="text-white hover:text-gray-200 w-fit font-light"
                >
                  Couple Cams
                </Link>
              </li>
              <li>
                <Link 
                  href="/men"
                  className="text-white hover:text-gray-200 w-fit font-light"
                >
                  Male Cams
                </Link>
              </li>
              <li>
                <Link 
                  href="/trans"
                  className="text-white hover:text-gray-200 w-fit font-light"
                >
                  Shemale Cams
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <span className="block font-bold mb-4 text-white text-lg">Legal</span>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.camwhorestv.porn/terms/" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  className="text-white hover:text-gray-200 w-fit font-light"
                >
                  Terms
                </a>
              </li>
              <li>
                <a 
                  href="https://www.camwhorestv.porn/privacy/" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  className="text-white hover:text-gray-200 w-fit font-light"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://www.camwhorestv.porn/2257/" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  className="text-white hover:text-gray-200 w-fit font-light"
                >
                  2257
                </a>
              </li>
              <li>
                <a 
                  href="https://www.camwhorestv.porn/law_enforcement/" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  className="text-white hover:text-gray-200 w-fit font-light"
                >
                  Law Enforcement
                </a>
              </li>
            </ul>
          </div>

          {/* Logo Column */}
          <div className="flex flex-col items-center md:items-end">
            <Link href="/" className="relative w-[197px] h-[59px] mb-4">
              <Image
                src="/camwhorestv.porn - logo.png"
                alt="Chaturbate"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Link>
            <p className="text-white text-sm mb-2">Copyright © CamWhoresTV.Porn 2025</p>
            <a 
              href="/sitemap.xml"
              className="text-white hover:text-gray-200 text-sm"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;