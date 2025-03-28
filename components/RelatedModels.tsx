"use client";

import { useEffect, useState } from 'react';
import { ChaturbateModel, fetchModels } from '@/lib/api';
import ModelCard from './ModelCard';

interface RelatedModelsProps {
  currentUsername: string;
  gender: 'f' | 'm' | 't' | 'c';
}

export const dynamic = 'force-dynamic';

export default function RelatedModels({ currentUsername, gender }: RelatedModelsProps) {
  const [models, setModels] = useState<ChaturbateModel[]>([]);
  const [loading, setLoading] = useState(true);

  // Función para obtener el título según el género
  const getTitle = (gender: string) => {
    switch (gender) {
      case 'f':
        return 'Related Sex Cams';
      case 'c':
        return 'Related Couple Cams';
      case 't':
        return 'Related Trans Cams';
      case 'm':
        return 'Related Male Cams';
      default:
        return 'Related Cams';
    }
  };

  useEffect(() => {
    const loadModels = async () => {
      try {
        setLoading(true);
        const category = {
          'f': 'girls',
          'm': 'men',
          't': 'trans',
          'c': 'couples'
        }[gender] || 'girls';

        const response = await fetchModels(category, 1, 100);
        
        // Filtrar el modelo actual y tomar 18 modelos aleatorios
        const filteredModels = response.results
          .filter(model => model.username.toLowerCase() !== currentUsername.toLowerCase())
          .sort(() => Math.random() - 0.5)
          .slice(0, 18);

        setModels(filteredModels);
      } catch (error) {
        console.error('Error loading related models:', error);
      } finally {
        setLoading(false);
      }
    };

    loadModels();
  }, [currentUsername, gender]);

  if (loading || models.length === 0) return null;

  return (
    <div className="mt-8">
      <p className="text-xl font-semibold mb-4">{getTitle(gender)}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1.5">
        {models.map((model) => (
          <ModelCard key={model.username} {...model} />
        ))}
      </div>
    </div>
  );
}