"use client";

import { useState, useEffect } from 'react';
import { fetchModels } from '@/lib/api';
import { ChaturbateModel } from '@/types/api';

export const useInfiniteModels = (
  category: string, 
  initialModels: ChaturbateModel[] = [],
  tag?: string,
  region?: string
) => {
  const [models, setModels] = useState<ChaturbateModel[]>(initialModels);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);
  const [showButton, setShowButton] = useState(true);

  const loadMoreModels = async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    try {
      const response = await fetchModels(category, page, 36, tag, region);
      
      if (response.results.length > 0) {
        // Esperar un momento antes de actualizar los modelos
        await new Promise(resolve => setTimeout(resolve, 100));
        
        setModels(prev => {
          const uniqueModels = [...prev];
          response.results.forEach(newModel => {
            if (!uniqueModels.some(model => model.username === newModel.username)) {
              uniqueModels.push(newModel);
            }
          });
          return uniqueModels;
        });
        
        setHasMore(response.results.length === 36);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error('Error loading models:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (page > 2) {
      loadMoreModels();
    }
  }, [page, category, tag, region]);

  const loadMore = () => {
    setPage(prev => prev + 1);
    setShowButton(false);
  };

  return { 
    models, 
    loading, 
    hasMore, 
    loadMore,
    showButton
  };
};