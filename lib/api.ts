import { ChaturbateModel, ChaturbateResponse } from '@/types/api';

const API_BASE_URL = 'https://www.camwhorestv.porn/api/public/affiliates/onlinerooms/';
const CAMPAIGN_SLUG = 'lRUVu';

export const fetchModels = async (
  category: string,
  page: number = 1,
  limit: number = 36,
  tag?: string,
  region?: string
): Promise<ChaturbateResponse> => {
  try {
    const params = new URLSearchParams({
      wm: CAMPAIGN_SLUG,
      client_ip: 'request_ip',
      format: 'json',
      limit: limit.toString(),
      offset: ((page - 1) * limit).toString(),
      online_only: 'true'
    });

    // Si se proporciona un tag, lo añadimos a los parámetros
    if (tag) {
      params.append('tag', tag);
    }

    // Si se proporciona una región, la añadimos a los parámetros
    if (region) {
      params.append('region', region);
    }

    // Para la página featured, hacemos una llamada por cada género y combinamos los resultados
    if (category === 'featured') {
      const genders = ['f', 'c']; // Mujeres y parejas
      const perGenderLimit = Math.ceil(limit / genders.length);
      
      const promises = genders.map(gender => 
        fetch(`${API_BASE_URL}?${new URLSearchParams({
          ...Object.fromEntries(params),
          gender,
          limit: perGenderLimit.toString(),
          offset: ((page - 1) * perGenderLimit).toString()
        })}`).then(res => res.json())
      );

      const responses = await Promise.all(promises);
      const allResults = responses.flatMap(response => response.results || []);
      
      // Mezclamos los resultados aleatoriamente
      const shuffledResults = allResults.sort(() => Math.random() - 0.5);

      return {
        count: shuffledResults.length,
        results: shuffledResults.slice(0, limit)
      };
    }
    
    // Para las demás categorías, aplicamos el filtro correspondiente
    switch (category) {
      case 'girls':
      case 'teen-girls':
        params.append('gender', 'f');
        break;
      case 'couples':
        params.append('gender', 'c');
        break;
      case 'trans':
        params.append('gender', 't');
        break;
      case 'men':
        params.append('gender', 'm');
        break;
    }

    const response = await fetch(`${API_BASE_URL}?${params.toString()}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching models:', error);
    return {
      count: 0,
      results: []
    };
  }
};