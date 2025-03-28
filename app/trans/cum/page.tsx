import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransCumDescription } from '@/components/descriptions/TransCumDescription';
import { TransCumBottomDescription } from '@/components/descriptions/TransCumBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Cum Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Cum Trans Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Passionate Trans Models. +300 Live Cum Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/cum/',
  },
};

export const dynamic = 'force-dynamic';

export default async function CumPage() {
  const initialModels = await fetchModels('trans', 1, 36, 'cum');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransCumDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="cum"
              />
              <div className="mt-8">
                <TransCumBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}