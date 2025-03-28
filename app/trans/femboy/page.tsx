import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransFemboyDescription } from '@/components/descriptions/TransFemboyDescription';
import { TransFemboyBottomDescription } from '@/components/descriptions/TransFemboyBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Femboy Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Femboy Trans Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Feminine Trans Models. +300 Live Femboy Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/femboy/',
  },
};

export const dynamic = 'force-dynamic';

export default async function FemboyPage() {
  const initialModels = await fetchModels('trans', 1, 36, 'femboy');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransFemboyDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="femboy"
              />
              <div className="mt-8">
                <TransFemboyBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}