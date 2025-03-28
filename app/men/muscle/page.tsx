import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenMuscleDescription } from '@/components/descriptions/MenMuscleDescription';
import { MenMuscleBottomDescription } from '@/components/descriptions/MenMuscleBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Muscle Male Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Muscle Male Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Fit Men. +300 Live Muscle Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/men/muscle/',
  },
};

export const dynamic = 'force-dynamic';

export default async function MusclePage() {
  const initialModels = await fetchModels('men', 1, 36, 'muscle');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenMuscleDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                tag="muscle"
              />
              <div className="mt-8">
                <MenMuscleBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}