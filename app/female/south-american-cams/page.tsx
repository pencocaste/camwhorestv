import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { SouthAmericanDescription } from '@/components/descriptions/SouthAmericanDescription';
import { SouthAmericanBottomDescription } from '@/components/descriptions/SouthAmericanBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'South American Cam Girls ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch South American Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Latin Women. +2000 Live South American Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/south-american-cams/',
  },
};

export const dynamic = 'force-dynamic';

export default async function SouthAmericanPage() {
  const initialModels = await fetchModels('girls', 1, 36, undefined, 'southamerica');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <SouthAmericanDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                region="southamerica"
              />
              <div className="mt-8">
                <SouthAmericanBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}