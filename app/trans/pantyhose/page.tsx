import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransPantyhoseDescription } from '@/components/descriptions/TransPantyhoseDescription';
import { TransPantyhoseBottomDescription } from '@/components/descriptions/TransPantyhoseBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Pantyhose Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Pantyhose Trans Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Nylon-Loving Trans Models. +200 Live Pantyhose Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/pantyhose/',
  },
};

export const dynamic = 'force-dynamic';

export default async function PantyhosePage() {
  const initialModels = await fetchModels('trans', 1, 36, 'pantyhose');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransPantyhoseDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="pantyhose"
              />
              <div className="mt-8">
                <TransPantyhoseBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}