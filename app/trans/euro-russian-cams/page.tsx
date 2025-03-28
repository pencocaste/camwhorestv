import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransEuroRussianDescription } from '@/components/descriptions/TransEuroRussianDescription';
import { TransEuroRussianBottomDescription } from '@/components/descriptions/TransEuroRussianBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'European & Russian Trans Cams ❤️ Live Sex Chat on Chaturbate.Lat',
  description: 'Watch European & Russian Trans Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Euro Trans Models. +300 Live European Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://chaturbate.lat/trans/euro-russian-cams/',
  },
};

export const dynamic = 'force-dynamic';

export default async function EuroRussianPage() {
  const initialModels = await fetchModels('trans', 1, 36, undefined, 'europe_russia');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransEuroRussianDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                region="europe_russia"
              />
              <div className="mt-8">
                <TransEuroRussianBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}