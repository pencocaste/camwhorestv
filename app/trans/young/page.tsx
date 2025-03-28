import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransYoungDescription } from '@/components/descriptions/TransYoungDescription';
import { TransYoungBottomDescription } from '@/components/descriptions/TransYoungBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Young Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Young Trans Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Young Trans Models. +300 Live Young Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/young/',
  },
};

export const dynamic = 'force-dynamic';

export default async function YoungPage() {
  const initialModels = await fetchModels('trans', 1, 36, 'young');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransYoungDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="young"
              />
              <div className="mt-8">
                <TransYoungBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}