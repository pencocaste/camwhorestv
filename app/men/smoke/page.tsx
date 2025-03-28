import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenSmokeDescription } from '@/components/descriptions/MenSmokeDescription';
import { MenSmokeBottomDescription } from '@/components/descriptions/MenSmokeBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Smoke Male Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Smoke Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Smoking Men. +200 Live Smoke Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/men/smoke/',
  },
};

export const dynamic = 'force-dynamic';

export default async function SmokePage() {
  const initialModels = await fetchModels('men', 1, 36, 'smoke');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenSmokeDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                tag="smoke"
              />
              <div className="mt-8">
                <MenSmokeBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}