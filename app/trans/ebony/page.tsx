import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransEbonyDescription } from '@/components/descriptions/TransEbonyDescription';
import { TransEbonyBottomDescription } from '@/components/descriptions/TransEbonyBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Ebony Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Ebony Trans Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Black Trans Models. +200 Live Ebony Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/ebony/',
  },
};

export const dynamic = 'force-dynamic';

export default async function EbonyPage() {
  const initialModels = await fetchModels('trans', 1, 36, 'ebony');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransEbonyDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="ebony"
              />
              <div className="mt-8">
                <TransEbonyBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}