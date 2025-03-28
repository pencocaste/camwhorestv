import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenMatureDescription } from '@/components/descriptions/MenMatureDescription';
import { MenMatureBottomDescription } from '@/components/descriptions/MenMatureBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Mature Male Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Mature Male Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Experienced Men. +200 Live Mature Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/men/mature/',
  },
};

export const dynamic = 'force-dynamic';

export default async function MaturePage() {
  const initialModels = await fetchModels('men', 1, 36, 'mature');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenMatureDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                tag="mature"
              />
              <div className="mt-8">
                <MenMatureBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}