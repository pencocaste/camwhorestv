import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransUncutDescription } from '@/components/descriptions/TransUncutDescription';
import { TransUncutBottomDescription } from '@/components/descriptions/TransUncutBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Uncut Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Uncut Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Natural Trans Models. +200 Live Uncut Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/uncut/',
  },
};

export const dynamic = 'force-dynamic';

export default async function UncutPage() {
  const initialModels = await fetchModels('trans', 1, 36, 'uncut');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransUncutDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="uncut"
              />
              <div className="mt-8">
                <TransUncutBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}