import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenBlackDescription } from '@/components/descriptions/MenBlackDescription';
import { MenBlackBottomDescription } from '@/components/descriptions/MenBlackBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Black Male Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Black Male Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Black Men. +300 Live Black Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/men/black/',
  },
};

export const dynamic = 'force-dynamic';

export default async function BlackPage() {
  const initialModels = await fetchModels('men', 1, 36, 'black');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenBlackDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                tag="black"
              />
              <div className="mt-8">
                <MenBlackBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}