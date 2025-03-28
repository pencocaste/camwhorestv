import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { HairyDescription } from '@/components/descriptions/HairyDescription';
import { HairyBottomDescription } from '@/components/descriptions/HairyBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Hairy Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Hairy Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Natural Women. +500 Live Hairy Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/hairy/',
  },
};

export const dynamic = 'force-dynamic';

export default async function HairyPage() {
  const initialModels = await fetchModels('girls', 1, 36, 'hairy');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <HairyDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                tag="hairy"
              />
              <div className="mt-8">
                <HairyBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}