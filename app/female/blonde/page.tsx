import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { BlondeDescription } from '@/components/descriptions/BlondeDescription';
import { BlondeBottomDescription } from '@/components/descriptions/BlondeBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Blonde Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Blonde Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Blonde Women. +1500 Live Blonde Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/blonde/',
  },
};

export const dynamic = 'force-dynamic';

export default async function BlondePage() {
  const initialModels = await fetchModels('girls', 1, 36, 'blonde');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <BlondeDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                tag="blonde"
              />
              <div className="mt-8">
                <BlondeBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}