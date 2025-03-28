import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransSmallCockDescription } from '@/components/descriptions/TransSmallCockDescription';
import { TransSmallCockBottomDescription } from '@/components/descriptions/TransSmallCockBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Small Cock Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Small Cock Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Trans Models. +200 Live Small Cock Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/smallcock/',
  },
};

export const dynamic = 'force-dynamic';

export default async function SmallCockPage() {
  const initialModels = await fetchModels('trans', 1, 36, 'smallcock');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransSmallCockDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="smallcock"
              />
              <div className="mt-8">
                <TransSmallCockBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}