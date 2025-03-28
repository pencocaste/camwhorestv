import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import CouplesSidebar from '@/components/sidebars/CouplesSidebar';
import { CouplesEbonyDescription } from '@/components/descriptions/CouplesEbonyDescription';
import { CouplesEbonyBottomDescription } from '@/components/descriptions/CouplesEbonyBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Ebony Couples Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Ebony Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Black Couples. +500 Live Ebony Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/couples/ebony/',
  },
};

export const dynamic = 'force-dynamic';

export default async function EbonyPage() {
  const initialModels = await fetchModels('couples', 1, 36, 'ebony');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <CouplesSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <CouplesEbonyDescription />
              </div>
              <ModelGrid 
                category="couples" 
                initialModels={initialModels.results}
                tag="ebony"
              />
              <div className="mt-8">
                <CouplesEbonyBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}