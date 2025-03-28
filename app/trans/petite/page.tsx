import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransPetiteDescription } from '@/components/descriptions/TransPetiteDescription';
import { TransPetiteBottomDescription } from '@/components/descriptions/TransPetiteBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Petite Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Petite Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Slender Trans Models. +200 Live Petite Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/petite/',
  },
};

export const dynamic = 'force-dynamic';

export default async function PetitePage() {
  const initialModels = await fetchModels('trans', 1, 36, 'petite');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransPetiteDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="petite"
              />
              <div className="mt-8">
                <TransPetiteBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}