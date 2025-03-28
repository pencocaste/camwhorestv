import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransCoupleDescription } from '@/components/descriptions/TransCoupleDescription';
import { TransCoupleBottomDescription } from '@/components/descriptions/TransCoupleBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Trans Couples Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Trans Couples Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Trans Couples. +300 Live Couple Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/couple/',
  },
};

export const dynamic = 'force-dynamic';

export default async function CouplePage() {
  const initialModels = await fetchModels('trans', 1, 36, 'couple');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransCoupleDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="couple"
              />
              <div className="mt-8">
                <TransCoupleBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}