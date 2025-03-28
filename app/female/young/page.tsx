import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { YoungDescription } from '@/components/descriptions/YoungDescription';
import { YoungBottomDescription } from '@/components/descriptions/YoungBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Young Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Young Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Young Women. +2500 Live Young Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/young/',
  },
};

export const dynamic = 'force-dynamic';

export default async function YoungPage() {
  const initialModels = await fetchModels('girls', 1, 36, 'young');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <YoungDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                tag="young"
              />
              <div className="mt-8">
                <YoungBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}