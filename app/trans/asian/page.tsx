import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransAsianDescription } from '@/components/descriptions/TransAsianDescription';
import { TransAsianBottomDescription } from '@/components/descriptions/TransAsianBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Asian Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Asian Trans Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Asian Trans Models. +200 Live Asian Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/asian/',
  },
};

export const dynamic = 'force-dynamic';

export default async function AsianPage() {
  const initialModels = await fetchModels('trans', 1, 36, 'asian');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransAsianDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="asian"
              />
              <div className="mt-8">
                <TransAsianBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}