import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import CouplesSidebar from '@/components/sidebars/CouplesSidebar';
import { CouplesThreesomeDescription } from '@/components/descriptions/CouplesThreesomeDescription';
import { CouplesThreesomeBottomDescription } from '@/components/descriptions/CouplesThreesomeBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Threesome Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Threesome Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Groups. +300 Live Threesome Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/couples/threesome/',
  },
};

export const dynamic = 'force-dynamic';

export default async function ThreesomePage() {
  const initialModels = await fetchModels('couples', 1, 36, 'threesome');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <CouplesSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <CouplesThreesomeDescription />
              </div>
              <ModelGrid 
                category="couples" 
                initialModels={initialModels.results}
                tag="threesome"
              />
              <div className="mt-8">
                <CouplesThreesomeBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}