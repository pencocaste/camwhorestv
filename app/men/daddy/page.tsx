import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenDaddyDescription } from '@/components/descriptions/MenDaddyDescription';
import { MenDaddyBottomDescription } from '@/components/descriptions/MenDaddyBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Daddy Male Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Daddy Male Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Mature Men. +200 Live Daddy Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/men/daddy/',
  },
};

export const dynamic = 'force-dynamic';

export default async function DaddyPage() {
  const initialModels = await fetchModels('men', 1, 36, 'daddy');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenDaddyDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                tag="daddy"
              />
              <div className="mt-8">
                <MenDaddyBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}