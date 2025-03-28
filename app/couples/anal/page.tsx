import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import CouplesSidebar from '@/components/sidebars/CouplesSidebar';
import { CouplesAnalDescription } from '@/components/descriptions/CouplesAnalDescription';
import { CouplesAnalBottomDescription } from '@/components/descriptions/CouplesAnalBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Anal Couples Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Anal Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Couples. +500 Live Anal Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/couples/anal/',
  },
};

export const dynamic = 'force-dynamic';

export default async function AnalPage() {
  const initialModels = await fetchModels('couples', 1, 36, 'anal');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <CouplesSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <CouplesAnalDescription />
              </div>
              <ModelGrid 
                category="couples" 
                initialModels={initialModels.results}
                tag="anal"
              />
              <div className="mt-8">
                <CouplesAnalBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}