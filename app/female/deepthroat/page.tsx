import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { DeepthroatDescription } from '@/components/descriptions/DeepthroatDescription';
import { DeepthroatBottomDescription } from '@/components/descriptions/DeepthroatBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Deepthroat Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Deepthroat Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Skilled Women. +500 Live Deepthroat Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/deepthroat/',
  },
};

export const dynamic = 'force-dynamic';

export default async function DeepthroatPage() {
  const initialModels = await fetchModels('girls', 1, 36, 'deepthroat');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <DeepthroatDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                tag="deepthroat"
              />
              <div className="mt-8">
                <DeepthroatBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}