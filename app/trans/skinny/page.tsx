import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransSkinnyDescription } from '@/components/descriptions/TransSkinnyDescription';
import { TransSkinnyBottomDescription } from '@/components/descriptions/TransSkinnyBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Skinny Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Skinny Trans Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Petite Trans Models. +300 Live Skinny Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/skinny/',
  },
};

export const dynamic = 'force-dynamic';

export default async function SkinnyPage() {
  const initialModels = await fetchModels('trans', 1, 36, 'skinny');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransSkinnyDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="skinny"
              />
              <div className="mt-8">
                <TransSkinnyBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}