import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransBigCockDescription } from '@/components/descriptions/TransBigCockDescription';
import { TransBigCockBottomDescription } from '@/components/descriptions/TransBigCockBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Big Cock Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Big Cock Trans Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Well-Endowed Trans Models. +300 Live Big Cock Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/bigcock/',
  },
};

export const dynamic = 'force-dynamic';

export default async function BigCockPage() {
  const initialModels = await fetchModels('trans', 1, 36, 'bigcock');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransBigCockDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="bigcock"
              />
              <div className="mt-8">
                <TransBigCockBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}