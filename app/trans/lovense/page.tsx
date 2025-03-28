import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransLovenseDescription } from '@/components/descriptions/TransLovenseDescription';
import { TransLovenseBottomDescription } from '@/components/descriptions/TransLovenseBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Lovense Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Interactive Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Trans Models. +300 Live Lovense Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/lovense/',
  },
};

export const dynamic = 'force-dynamic';

export default async function LovensePage() {
  const initialModels = await fetchModels('trans', 1, 36, 'lovense');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransLovenseDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="lovense"
              />
              <div className="mt-8">
                <TransLovenseBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}