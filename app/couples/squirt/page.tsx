import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import CouplesSidebar from '@/components/sidebars/CouplesSidebar';
import { CouplesSquirtDescription } from '@/components/descriptions/CouplesSquirtDescription';
import { CouplesSquirtBottomDescription } from '@/components/descriptions/CouplesSquirtBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Squirt Couples Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Squirt Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Couples. +500 Live Squirt Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/couples/squirt/',
  },
};

export const dynamic = 'force-dynamic';

export default async function SquirtPage() {
  const initialModels = await fetchModels('couples', 1, 36, 'squirt');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <CouplesSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <CouplesSquirtDescription />
              </div>
              <ModelGrid 
                category="couples" 
                initialModels={initialModels.results}
                tag="squirt"
              />
              <div className="mt-8">
                <CouplesSquirtBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}