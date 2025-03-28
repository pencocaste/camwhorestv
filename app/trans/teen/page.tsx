import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransTeenDescription } from '@/components/descriptions/TransTeenDescription';
import { TransTeenBottomDescription } from '@/components/descriptions/TransTeenBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Teen Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Teen Trans Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Young Trans Models. +300 Live Teen Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/teen/',
  },
};

export const dynamic = 'force-dynamic';

export default async function TeenPage() {
  const initialModels = await fetchModels('trans', 1, 36, 'teen');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransTeenDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="teen"
              />
              <div className="mt-8">
                <TransTeenBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}