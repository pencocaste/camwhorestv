import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { BrunetteDescription } from '@/components/descriptions/BrunetteDescription';
import { BrunetteBottomDescription } from '@/components/descriptions/BrunetteBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Brunette Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Brunette Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Brunette Women. +2000 Live Brunette Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/brunette/',
  },
};

export const dynamic = 'force-dynamic';

export default async function BrunettePage() {
  const initialModels = await fetchModels('girls', 1, 36, 'brunette');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <BrunetteDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                tag="brunette"
              />
              <div className="mt-8">
                <BrunetteBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}