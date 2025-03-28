import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenSlaveDescription } from '@/components/descriptions/MenSlaveDescription';
import { MenSlaveBottomDescription } from '@/components/descriptions/MenSlaveBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Slave Male Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Slave Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Submissive Men. +200 Live Slave Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/men/slave/',
  },
};

export const dynamic = 'force-dynamic';

export default async function SlavePage() {
  const initialModels = await fetchModels('men', 1, 36, 'slave');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenSlaveDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                tag="slave"
              />
              <div className="mt-8">
                <MenSlaveBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}