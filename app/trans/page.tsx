import { Metadata } from 'next';
import { fetchModels } from '@/lib/api';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransDescription } from '@/components/descriptions/TransDescription';
import { TransBottomDescription } from '@/components/descriptions/TransBottomDescription';

export const metadata: Metadata = {
  title: 'Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Trans Sex Cams Shows in our Adult Sex Chat Community⭐ Start chatting with Shemales! +5000 Live TS Webcams. FREE without Registration.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/',
  },
};

export const dynamic = 'force-dynamic';

export default async function TransPage() {
  const initialModels = await fetchModels('trans', 1);

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results} 
              />
              <div className="mt-8">
                <TransBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}