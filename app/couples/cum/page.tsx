import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import CouplesSidebar from '@/components/sidebars/CouplesSidebar';
import { CouplesCumDescription } from '@/components/descriptions/CouplesCumDescription';
import { CouplesCumBottomDescription } from '@/components/descriptions/CouplesCumBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Cum Couples Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Cum Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Passionate Couples. +500 Live Cum Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/couples/cum/',
  },
};

export const dynamic = 'force-dynamic';

export default async function CumPage() {
  const initialModels = await fetchModels('couples', 1, 36, 'cum');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <CouplesSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <CouplesCumDescription />
              </div>
              <ModelGrid 
                category="couples" 
                initialModels={initialModels.results}
                tag="cum"
              />
              <div className="mt-8">
                <CouplesCumBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}