import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { RedheadDescription } from '@/components/descriptions/RedheadDescription';
import { RedheadBottomDescription } from '@/components/descriptions/RedheadBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Redhead Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Redhead Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Redhead Women. +500 Live Redhead Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/redhead/',
  },
};

export const dynamic = 'force-dynamic';

export default async function RedheadPage() {
  const initialModels = await fetchModels('girls', 1, 36, 'redhead');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <RedheadDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                tag="redhead"
              />
              <div className="mt-8">
                <RedheadBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}