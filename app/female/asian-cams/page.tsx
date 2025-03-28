import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { AsianCamsDescription } from '@/components/descriptions/AsianCamsDescription';
import { AsianCamsBottomDescription } from '@/components/descriptions/AsianCamsBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Asian Cam Girls ❤️ Live Sex Chat on Chaturbate.Lat',
  description: 'Watch Asian Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Asian Women. +1000 Live Asian Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://chaturbate.lat/female/asian-cams/',
  },
};

export const dynamic = 'force-dynamic';

export default async function AsianCamsPage() {
  const initialModels = await fetchModels('girls', 1, 36, undefined, 'asia');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <AsianCamsDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                region="asia"
              />
              <div className="mt-8">
                <AsianCamsBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}