import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransAnalDescription } from '@/components/descriptions/TransAnalDescription';
import { TransAnalBottomDescription } from '@/components/descriptions/TransAnalBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Anal Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Anal Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Trans Models. +300 Live Anal Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/anal/',
  },
};

export const dynamic = 'force-dynamic';

export default async function AnalPage() {
  const initialModels = await fetchModels('trans', 1, 36, 'anal');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransAnalDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="anal"
              />
              <div className="mt-8">
                <TransAnalBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}