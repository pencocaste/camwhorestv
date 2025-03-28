import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { EuroRussianDescription } from '@/components/descriptions/EuroRussianDescription';
import { EuroRussianBottomDescription } from '@/components/descriptions/EuroRussianBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'European & Russian Cam Girls ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch European & Russian Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Euro Women. +2000 Live European Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/euro-russian-cams/',
  },
};

export const dynamic = 'force-dynamic';

export default async function EuroRussianPage() {
  const initialModels = await fetchModels('girls', 1, 36, undefined, 'europe_russia');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <EuroRussianDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                region="europe_russia"
              />
              <div className="mt-8">
                <EuroRussianBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}