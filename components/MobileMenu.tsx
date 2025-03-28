"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  children: React.ReactNode;
}

export default function MobileMenu({ children }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed right-0 top-0 h-full w-52 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto mobile-scrollbar",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="p-4 pb-20">
          {children}
        </div>
      </div>

      {/* Toggle Button */}
      <Button
        className="fixed bottom-6 right-4 w-16 h-16 rounded-full shadow-lg bg-[#A2242C] hover:bg-[#8B1E26] md:hidden z-50 p-0 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-10 w-10" />
        ) : (
          <Menu className="h-10 w-10" />
        )}
      </Button>
    </>
  );
}