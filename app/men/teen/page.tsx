import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenTeenDescription } from '@/components/descriptions/MenTeenDescription';
import { MenTeenBottomDescription } from '@/components/descriptions/MenTeenBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Teen Male Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Teen Male Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Young Men. +300 Live Teen Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/men/teen/',
  },
};

export const dynamic = 'force-dynamic';

export default async function TeenPage() {
  const initialModels = await fetchModels('men', 1, 36, 'teen');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenTeenDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                tag="teen"
              />
              <div className="mt-8">
                <MenTeenBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}