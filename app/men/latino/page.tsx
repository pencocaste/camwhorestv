import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenLatinoDescription } from '@/components/descriptions/MenLatinoDescription';
import { MenLatinoBottomDescription } from '@/components/descriptions/MenLatinoBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Latino Male Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Latino Male Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Latin Men. +300 Live Latino Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/men/latino/',
  },
};

export const dynamic = 'force-dynamic';

export default async function LatinoPage() {
  const initialModels = await fetchModels('men', 1, 36, 'latino');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenLatinoDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                tag="latino"
              />
              <div className="mt-8">
                <MenLatinoBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}