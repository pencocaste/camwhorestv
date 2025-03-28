import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenExhibitionistDescription } from '@/components/descriptions/MenExhibitionistDescription';
import { MenExhibitionistBottomDescription } from '@/components/descriptions/MenExhibitionistBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Exhibitionist Male Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Exhibitionist Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Daring Men. +200 Live Exhibitionist Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/men/exhibitionist/',
  },
};

export const dynamic = 'force-dynamic';

export default async function ExhibitionistPage() {
  const initialModels = await fetchModels('men', 1, 36, 'exhibitionist');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenExhibitionistDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                tag="exhibitionist"
              />
              <div className="mt-8">
                <MenExhibitionistBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}