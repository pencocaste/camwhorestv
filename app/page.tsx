import { Metadata } from 'next';
import { fetchModels } from '@/lib/api';
import ModelGrid from '@/components/ModelGrid';
import GirlsSidebar from '@/components/sidebars/GirlsSidebar';
import { HomeDescription } from '@/components/HomeDescription';
import { BottomDescription } from '@/components/BottomDescription';

export const metadata: Metadata = {
  title: 'Chaturbate.Lat ❤️ Free Live Sex Cams & Adult Sex Chat',
  description: 'Watch Chaturbate Live Sex Cams Shows in our Adult Sex Chat Community⭐ Start chatting with Camgirls! +5000 Live Porn Webcams. FREE without Registration',
  alternates: {
    canonical: 'https://chaturbate.lat/',
  },
};

export const dynamic = 'force-dynamic';

export default async function Home() {
  const initialModels = await fetchModels('featured', 1);

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <GirlsSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <HomeDescription />
              </div>
              <ModelGrid 
                category="featured" 
                initialModels={initialModels.results} 
              />
              <div className="mt-8">
                <BottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}