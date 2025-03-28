import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import CouplesSidebar from '@/components/sidebars/CouplesSidebar';
import { CouplesYoungDescription } from '@/components/descriptions/CouplesYoungDescription';
import { CouplesYoungBottomDescription } from '@/components/descriptions/CouplesYoungBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Young Couples Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Young Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Young Couples. +500 Live Young Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/couples/young/',
  },
};

export const dynamic = 'force-dynamic';

export default async function YoungPage() {
  const initialModels = await fetchModels('couples', 1, 36, 'young');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <CouplesSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <CouplesYoungDescription />
              </div>
              <ModelGrid 
                category="couples" 
                initialModels={initialModels.results}
                tag="young"
              />
              <div className="mt-8">
                <CouplesYoungBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}