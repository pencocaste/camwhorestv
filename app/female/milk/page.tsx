import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { MilkDescription } from '@/components/descriptions/MilkDescription';
import { MilkBottomDescription } from '@/components/descriptions/MilkBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Milk Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Milk Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Lactating Women. +200 Live Milk Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/milk/',
  },
};

export const dynamic = 'force-dynamic';

export default async function MilkPage() {
  const initialModels = await fetchModels('girls', 1, 36, 'milk');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MilkDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                tag="milk"
              />
              <div className="mt-8">
                <MilkBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}