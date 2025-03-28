import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { BigBoobsDescription } from '@/components/descriptions/BigBoobsDescription';
import { BigBoobsBottomDescription } from '@/components/descriptions/BigBoobsBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Big Boobs Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Big Boobs Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Busty Women. +1500 Live Big Tits Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/bigboobs/',
  },
};

export const dynamic = 'force-dynamic';

export default async function BigBoobsPage() {
  const initialModels = await fetchModels('girls', 1, 36, 'bigboobs');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <BigBoobsDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                tag="bigboobs"
              />
              <div className="mt-8">
                <BigBoobsBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}