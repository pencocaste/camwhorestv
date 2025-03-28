import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import CouplesSidebar from '@/components/sidebars/CouplesSidebar';
import { CouplesEuroRussianDescription } from '@/components/descriptions/CouplesEuroRussianDescription';
import { CouplesEuroRussianBottomDescription } from '@/components/descriptions/CouplesEuroRussianBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'European & Russian Couples Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch European & Russian Couples Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Euro Couples. +500 Live European Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/couples/euro-russian-cams/',
  },
};

export const dynamic = 'force-dynamic';

export default async function EuroRussianPage() {
  const initialModels = await fetchModels('couples', 1, 36, undefined, 'europe_russia');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <CouplesSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <CouplesEuroRussianDescription />
              </div>
              <ModelGrid 
                category="couples" 
                initialModels={initialModels.results}
                region="europe_russia"
              />
              <div className="mt-8">
                <CouplesEuroRussianBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}