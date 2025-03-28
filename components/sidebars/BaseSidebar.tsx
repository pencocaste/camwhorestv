"use client";

import Link from 'next/link';
import { SidebarSection } from '@/lib/sidebarConfig';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import MobileMenu from '@/components/MobileMenu';

interface BaseSidebarProps {
  sections: SidebarSection[];
  className?: string;
}

export default function BaseSidebar({ sections, className = "" }: BaseSidebarProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const SidebarContent = () => (
    <aside className={`w-48 pr-4 ${className}`}>
      <div className={`custom-sidebar-menu text-sm bg-[#FFFFFF] p-4 rounded-lg ${!isMobile ? 'h-[calc(100vh-92px)] overflow-y-auto custom-scrollbar' : ''}`}>
        {sections.map((section) => (
          <div key={section.title} className="mb-6">
            <p className="menu-subtitle font-medium text-gray-900 mb-2">
              {section.title}
            </p>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );

  if (isMobile) {
    return (
      <MobileMenu>
        <SidebarContent />
      </MobileMenu>
    );
  }

  return (
    <div className="hidden md:block">
      <div className="sticky top-[92px]">
        <SidebarContent />
      </div>
    </div>
  );
}