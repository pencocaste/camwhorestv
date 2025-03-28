import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { MatureDescription } from '@/components/descriptions/MatureDescription';
import { MatureBottomDescription } from '@/components/descriptions/MatureBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Mature Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Mature Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Experienced Women. +1000 Live Mature Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/mature/',
  },
};

export const dynamic = 'force-dynamic';

export default async function MaturePage() {
  const initialModels = await fetchModels('girls', 1, 36, 'mature');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MatureDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                tag="mature"
              />
              <div className="mt-8">
                <MatureBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}