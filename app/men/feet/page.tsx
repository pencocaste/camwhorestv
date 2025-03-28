import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenFeetDescription } from '@/components/descriptions/MenFeetDescription';
import { MenFeetBottomDescription } from '@/components/descriptions/MenFeetBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Feet Male Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Feet Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Male Models. +200 Live Feet Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/men/feet/',
  },
};

export const dynamic = 'force-dynamic';

export default async function FeetPage() {
  const initialModels = await fetchModels('men', 1, 36, 'feet');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenFeetDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                tag="feet"
              />
              <div className="mt-8">
                <MenFeetBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}