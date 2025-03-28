import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { BushDescription } from '@/components/descriptions/BushDescription';
import { BushBottomDescription } from '@/components/descriptions/BushBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Bush Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Bush Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Natural Women. +300 Live Bush Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/bush/',
  },
};

export const dynamic = 'force-dynamic';

export default async function BushPage() {
  const initialModels = await fetchModels('girls', 1, 36, 'bush');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <BushDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                tag="bush"
              />
              <div className="mt-8">
                <BushBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}