import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransSissyDescription } from '@/components/descriptions/TransSissyDescription';
import { TransSissyBottomDescription } from '@/components/descriptions/TransSissyBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Sissy Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Sissy Trans Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Feminine Trans Models. +200 Live Sissy Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/sissy/',
  },
};

export const dynamic = 'force-dynamic';

export default async function SissyPage() {
  const initialModels = await fetchModels('trans', 1, 36, 'sissy');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransSissyDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="sissy"
              />
              <div className="mt-8">
                <TransSissyBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}