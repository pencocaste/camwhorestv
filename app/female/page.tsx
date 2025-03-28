import { Metadata } from 'next';
import { fetchModels } from '@/lib/api';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { FemaleDescription } from '@/components/descriptions/FemaleDescription';
import { FemaleBottomDescription } from '@/components/descriptions/FemaleBottomDescription';

export const metadata: Metadata = {
  title: 'Female Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Chat with +5000 Chaturbate Girls Live. ⭐ Watch Female Sex Cam Shows Now. Join Free for an Unforgettable Sex Chat Experience with Hot Women.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/',
  },
};

export const dynamic = 'force-dynamic';

export default async function FemalePage() {
  const initialModels = await fetchModels('girls', 1);

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <FemaleDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results} 
              />
              <div className="mt-8">
                <FemaleBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}