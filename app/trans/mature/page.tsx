import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransMatureDescription } from '@/components/descriptions/TransMatureDescription';
import { TransMatureBottomDescription } from '@/components/descriptions/TransMatureBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Mature Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Mature Trans Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Experienced Trans Models. +200 Live Mature Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/mature/',
  },
};

export const dynamic = 'force-dynamic';

export default async function MaturePage() {
  const initialModels = await fetchModels('trans', 1, 36, 'mature');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransMatureDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="mature"
              />
              <div className="mt-8">
                <TransMatureBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}