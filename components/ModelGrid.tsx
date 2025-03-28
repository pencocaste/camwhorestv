"use client";

import { useEffect, useRef, useCallback } from 'react';
import ModelCard from './ModelCard';
import { useInfiniteModels } from '@/hooks/useInfiniteModels';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChaturbateModel } from '@/types/api';

interface ModelGridProps {
  category: string;
  initialModels: ChaturbateModel[];
  tag?: string;
  region?: string;
}

export default function ModelGrid({ category, initialModels, tag, region }: ModelGridProps) {
  const { 
    models, 
    loading, 
    hasMore, 
    loadMore,
    showButton
  } = useInfiniteModels(category, initialModels, tag, region);
  
  const observer = useRef<IntersectionObserver>();
  
  const lastModelElementRef = useCallback((node: HTMLDivElement) => {
    if (loading || showButton) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore();
      }
    });
    
    if (node) observer.current.observe(node);
  }, [loading, hasMore, loadMore, showButton]);

  return (
    <div className="flex-1">
      <div className="-mx-3 md:mx-0">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 auto-rows-fr">
          {models.map((model, index) => (
            <div
              key={model.username}
              ref={index === models.length - 1 && !showButton ? lastModelElementRef : undefined}
              className="w-full h-full"
            >
              <ModelCard {...model} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="h-20 flex items-center justify-center mt-8">
        {loading ? (
          <Loader2 className="h-8 w-8 animate-spin text-pink-500" />
        ) : (
          showButton && hasMore && (
            <Button 
              onClick={loadMore}
              className=" hover:bg-pink-600 text-white px-8 py-2 rounded-full"
            >
              More webcams
            </Button>
          )
        )}
      </div>
    </div>
  );
}