"use client";

import { useEffect, useState } from 'react';
import { ChaturbateModel } from '@/types/api';
import { fetchModels } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import RelatedModels from '@/components/RelatedModels';
import { Clock, Users } from 'lucide-react';

interface ModelPageClientProps {
  username: string;
  initialModel: ChaturbateModel | null;
}

const countryNames: { [key: string]: string } = {
  'US': 'United States',
  'CO': 'Colombia',
  'GB': 'United Kingdom',
  'CA': 'Canada',
  'ES': 'Spain',
  'FR': 'France',
  'DE': 'Germany',
  'IT': 'Italy',
  'BR': 'Brazil',
  'AR': 'Argentina',
  'MX': 'Mexico',
  'CL': 'Chile',
  'PE': 'Peru',
  'VE': 'Venezuela',
  'RU': 'Russia',
  'CN': 'China',
  'JP': 'Japan',
  'KR': 'South Korea',
  'IN': 'India',
  'AU': 'Australia',
  'NZ': 'New Zealand',
};

export default function ModelPageClient({ username, initialModel }: ModelPageClientProps) {
  const [model, setModel] = useState<ChaturbateModel | null>(initialModel);
  const [loading, setLoading] = useState(!initialModel);
  const [error, setError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Solo hacer fetch si no tenemos el modelo inicial
    if (!initialModel) {
      const fetchModelData = async () => {
        try {
          setLoading(true);
          setError(false);
          
          const categories = ['featured', 'girls', 'couples', 'men', 'trans'];
          let foundModel = null;

          for (const category of categories) {
            const data = await fetchModels(category, 1, 500);
            const modelFound = data.results.find(m => m.username.toLowerCase() === username.toLowerCase());
            if (modelFound) {
              foundModel = modelFound;
              break;
            }
          }

          if (foundModel) {
            setModel(foundModel);
          } else {
            setError(true);
          }
        } catch (error) {
          console.error('Error fetching model data:', error);
          setError(true);
        } finally {
          setLoading(false);
        }
      };

      fetchModelData();
    }
  }, [username, initialModel]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const getCountryName = (countryCode: string) => {
    return countryNames[countryCode] || countryCode;
  };

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Stream Not Found</h1>
        <p className="text-gray-600 mb-6">The stream you&apos;re looking for doesn&apos;t exist or is offline.</p>
        <Link 
          href="/"
          className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Return Home
        </Link>
      </div>
    );
  }

  if (loading || !model) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-8"></div>
          <div className="h-[480px] bg-gray-200 rounded mb-8"></div>
          <div className="h-12 bg-gray-200 rounded w-48 mb-8"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-24 bg-gray-200 rounded"></div>
            <div className="h-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const embedCode = isMobile 
    ? `<iframe src="https://www.camwhorestv.porn/in/?tour=9oGW&campaign=lRUVu&track=embedCWTVm&room=${username}&disable_sound=1&mobileRedirect=auto&embed_video_only=1" style="width:100%; aspect-ratio:16/9;" frameborder="0" class="code" scrolling="no"></iframe>`
    : `<iframe src="https://www.camwhorestv.porn/in/?tour=Limj&campaign=lRUVu&track=embedCWTVpc&signup_notice=1&b=${username}&disable_sound=1&mobileRedirect=never" height="720px" width="1280px" frameborder="0" class="code" scrolling="no"></iframe>`;

  const genderLink = {
    'f': '/female/',
    'm': '/men/',
    't': '/trans/',
    'c': '/couples/'
  }[model.gender] || '/female/';

  const genderText = {
    'f': 'Female',
    'm': 'Male',
    't': 'Trans',
    'c': 'Couple'
  }[model.gender] || 'Female';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl md:text-2xl font-bold mb-4">{username}&apos;s Live Sex Cam</h1>

      {/* Embed Container */}
      <div className="flex justify-center items-center mb-8">
        <div 
          dangerouslySetInnerHTML={{ __html: embedCode }} 
          className={`w-full flex justify-center ${isMobile ? '' : 'max-w-[1280px] rounded-lg shadow-lg'}`} 
        />
      </div>

      {/* Chat Button */}
      <div className="flex justify-center mb-8">
        <Button 
          className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 rounded-full"
          onClick={() => window.open(`https://www.camwhorestv.porn/in/?tour=dT8X&campaign=lRUVu&track=SSSbuttonCWTV&room=${username}`, '_blank')}
        >
          Start Sex Chat with {username}
        </Button>
      </div>

      {/* Model Info Card */}
      <div className="bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold p-6 border-b">{username}&apos;s Bio & Webcam Room</h2>
        
        {/* Primera sección: 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50">
          {/* Tags */}
          <div>
            <span className="font-medium mb-3">TAGS:</span>
            <div className="flex flex-wrap gap-2">
              {model.tags && model.tags.map((tag) => (
                <Link 
                  key={tag} 
                  href={`/${({
                    'f': 'female',
                    'm': 'men',
                    't': 'trans',
                    'c': 'couples'
                  })[model.gender] || 'female'}/${tag}/`}
                >
                  <Badge 
                    className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 text-sm transition-colors"
                  >
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>

          {/* Room Subject */}
          <div>
            <span className="font-medium mb-3">Room Goal:</span>
            <p className="text-gray-600">{model.room_subject}</p>
          </div>

          {/* Stats */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span>Streaming for {formatTime(model.seconds_online)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-500" />
              <span>{model.num_users.toLocaleString()} viewers</span>
            </div>
          </div>
        </div>

        {/* Segunda sección: Información personal en 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 border-t border-gray-100">
          <div className="space-y-3">
            <div>
              <span className="font-medium">Gender:</span>
              <p className="text-gray-600">
                <Link href={genderLink} className="text-pink-500 hover:text-pink-600">
                  {genderText}
                </Link>
              </p>
            </div>
            <div>
              <span className="font-medium">Languages:</span>
              <p className="text-gray-600">{model.spoken_languages}</p>
            </div>
            <div>
              <span className="font-medium">Birthday:</span>
              <p className="text-gray-600">{model.birthday}</p>
            </div>
            <div>
              <span className="font-medium">Country:</span>
              <p className="text-gray-600">{getCountryName(model.country)}</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <span className="font-medium">Age:</span>
              <p className="text-gray-600">{model.age} years</p>
            </div>
            <div>
              <span className="font-medium">Location:</span>
              <p className="text-gray-600">{model.location}</p>
            </div>
            <div>
              <span className="font-medium">Followers:</span>
              <p className="text-gray-600">{model.num_followers.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Models */}
      <RelatedModels currentUsername={username} gender={model.gender} />
    </div>
  );
}