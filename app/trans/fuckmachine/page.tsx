import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransFuckMachineDescription } from '@/components/descriptions/TransFuckMachineDescription';
import { TransFuckMachineBottomDescription } from '@/components/descriptions/TransFuckMachineBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Fuck Machine Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Fuck Machine Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Trans Models. +200 Live Fuck Machine Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/fuckmachine/',
  },
};

export const dynamic = 'force-dynamic';

export default async function FuckMachinePage() {
  const initialModels = await fetchModels('trans', 1, 36, 'fuckmachine');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransFuckMachineDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="fuckmachine"
              />
              <div className="mt-8">
                <TransFuckMachineBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}