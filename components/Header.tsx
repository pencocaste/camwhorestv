"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [scrollPosition, setScrollPosition] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }

    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getActiveSection = () => {
    if (pathname === '/') return 'featured';
    const section = pathname.split('/')[1];
    return section;
  };

  const activeSection = getActiveSection();

  const navLinks = [
    { href: '/female', label: 'Female', id: 'female' },
    { href: '/couples', label: 'Couples', id: 'couples' },
    { href: '/trans', label: 'Trans', id: 'trans' },
    { href: '/men', label: 'Men', id: 'men' }
  ];

  return (
    <header className="relative">
      {/* Contenedor fijo que ocupa el espacio del header cuando está fixed */}
      <div style={{ height: scrollPosition > 0 ? headerHeight : 'auto' }} />

      {/* Header principal */}
      <div 
        ref={headerRef}
        className="w-full bg-white"
        style={{
          position: scrollPosition > 0 ? 'fixed' : 'relative',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transform: `translateY(${Math.max(0, -scrollPosition)}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div className="w-full px-4 md:w-[calc(100%-25px)] md:max-w-[2400px] mx-auto">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/camwhorestv.porn - logo.png"
                alt="CamwhoresTV"
                width={197}
                height={59}
                priority
              />
            </Link>
            <div className="flex items-center gap-3">
              <Link 
                href={isMobile 
                  ? "https://www.camwhorestv.porn/accounts/register/?tour=NwNd&campaign=lRUVu&track=CWTVjoinfree"
                  : "https://www.camwhorestv.porn/accounts/register/?tour=07kX&campaign=lRUVu&track=CWTVcreatefa"
                }
                rel="nofollow noreferrer noopener"
              >
                <Button className="bg-orange-500 hover:bg-orange-600 rounded-full">
                  {isMobile ? "Join Free" : "Create Free Account"}
                </Button>
              </Link>
              {!isMobile && (
                <Link 
                  href="https://www.camwhorestv.porn/auth/login/"
                  rel="nofollow noreferrer noopener"
                >
                  <Button 
                    variant="outline" 
                    className="bg-white text-orange-500 border-orange-500 hover:bg-orange-50 rounded-full"
                  >
                    Log In
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation - Siempre fijo en la parte superior */}
      <div 
        className="w-full bg-[#A2242C] sticky top-0"
        style={{
          zIndex: 40,
        }}
      >
        <div className="w-full md:w-[calc(100%-35px)] md:max-w-[2400px] mx-auto overflow-x-hidden">
          <nav className="flex justify-between md:justify-start md:space-x-2 whitespace-nowrap">
            {navLinks.map(link => (
              <Link 
                key={link.id}
                href={link.href}
                className={`flex-1 md:flex-none text-center md:text-left px-2 md:px-4 transition-colors relative ${
                  activeSection === link.id 
                    ? 'text-orange-500 font-medium' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <div className="py-2 md:py-3 text-sm md:text-base">
                  {link.label}
                </div>
                {activeSection === link.id && (
                  <div className="absolute inset-x-0 bottom-0 top-2 -z-10 bg-white rounded-t-lg" />
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;