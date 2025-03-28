import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import CouplesSidebar from '@/components/sidebars/CouplesSidebar';
import { CouplesBlowjobDescription } from '@/components/descriptions/CouplesBlowjobDescription';
import { CouplesBlowjobBottomDescription } from '@/components/descriptions/CouplesBlowjobBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Blowjob Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Oral Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Skilled Couples. +500 Live Blowjob Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/couples/blowjob/',
  },
};

export const dynamic = 'force-dynamic';

export default async function BlowjobPage() {
  const initialModels = await fetchModels('couples', 1, 36, 'blowjob');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <CouplesSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <CouplesBlowjobDescription />
              </div>
              <ModelGrid 
                category="couples" 
                initialModels={initialModels.results}
                tag="blowjob"
              />
              <div className="mt-8">
                <CouplesBlowjobBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}