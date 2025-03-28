import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransLatinaDescription } from '@/components/descriptions/TransLatinaDescription';
import { TransLatinaBottomDescription } from '@/components/descriptions/TransLatinaBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Latina Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Latina Trans Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Latin Trans Models. +300 Live Latina Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/latina/',
  },
};

export const dynamic = 'force-dynamic';

export default async function LatinaPage() {
  const initialModels = await fetchModels('trans', 1, 36, 'latina');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransLatinaDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="latina"
              />
              <div className="mt-8">
                <TransLatinaBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}