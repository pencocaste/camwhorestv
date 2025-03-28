import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { AsianDescription } from '@/components/descriptions/AsianDescription';
import { AsianBottomDescription } from '@/components/descriptions/AsianBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Asian Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Asian Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Asian Women. +1000 Live Asian Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/asian/',
  },
};

export const dynamic = 'force-dynamic';

export default async function AsianPage() {
  const initialModels = await fetchModels('girls', 1, 36, 'asian');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <AsianDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                tag="asian"
              />
              <div className="mt-8">
                <AsianBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}