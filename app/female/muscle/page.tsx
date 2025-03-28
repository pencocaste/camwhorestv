import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { MuscleDescription } from '@/components/descriptions/MuscleDescription';
import { MuscleBottomDescription } from '@/components/descriptions/MuscleBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Muscle Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Muscle Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Fit Women. +200 Live Muscle Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/muscle/',
  },
};

export const dynamic = 'force-dynamic';

export default async function MusclePage() {
  const initialModels = await fetchModels('girls', 1, 36, 'muscle');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MuscleDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                tag="muscle"
              />
              <div className="mt-8">
                <MuscleBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}