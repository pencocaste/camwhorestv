import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenGingerDescription } from '@/components/descriptions/MenGingerDescription';
import { MenGingerBottomDescription } from '@/components/descriptions/MenGingerBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Ginger Male Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Ginger Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Redhead Men. +200 Live Ginger Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/men/ginger/',
  },
};

export const dynamic = 'force-dynamic';

export default async function GingerPage() {
  const initialModels = await fetchModels('men', 1, 36, 'ginger');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenGingerDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                tag="ginger"
              />
              <div className="mt-8">
                <MenGingerBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}