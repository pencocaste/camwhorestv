import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import CouplesSidebar from '@/components/sidebars/CouplesSidebar';
import { CouplesMatureDescription } from '@/components/descriptions/CouplesMatureDescription';
import { CouplesMatureBottomDescription } from '@/components/descriptions/CouplesMatureBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Mature Couples Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Mature Couples Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Experienced Couples. +500 Live Mature Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/couples/mature/',
  },
};

export const dynamic = 'force-dynamic';

export default async function MaturePage() {
  const initialModels = await fetchModels('couples', 1, 36, 'mature');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <CouplesSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <CouplesMatureDescription />
              </div>
              <ModelGrid 
                category="couples" 
                initialModels={initialModels.results}
                tag="mature"
              />
              <div className="mt-8">
                <CouplesMatureBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}