import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransBlondeDescription } from '@/components/descriptions/TransBlondeDescription';
import { TransBlondeBottomDescription } from '@/components/descriptions/TransBlondeBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Blonde Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Blonde Trans Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Fair-haired Trans Models. +300 Live Blonde Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/blonde/',
  },
};

export const dynamic = 'force-dynamic';

export default async function BlondePage() {
  const initialModels = await fetchModels('trans', 1, 36, 'blonde');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransBlondeDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="blonde"
              />
              <div className="mt-8">
                <TransBlondeBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}