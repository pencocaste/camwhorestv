import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransSouthAmericanDescription } from '@/components/descriptions/TransSouthAmericanDescription';
import { TransSouthAmericanBottomDescription } from '@/components/descriptions/TransSouthAmericanBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'South American Trans Cams ❤️ Live Sex Chat on Chaturbate.Lat',
  description: 'Watch South American Trans Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Latin Trans Models. +500 Live South American Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://chaturbate.lat/trans/south-american-cams/',
  },
};

export const dynamic = 'force-dynamic';

export default async function SouthAmericanPage() {
  const initialModels = await fetchModels('trans', 1, 36, undefined, 'southamerica');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransSouthAmericanDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                region="southamerica"
              />
              <div className="mt-8">
                <TransSouthAmericanBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}