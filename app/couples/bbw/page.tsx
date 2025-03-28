import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import CouplesSidebar from '@/components/sidebars/CouplesSidebar';
import { CouplesBbwDescription } from '@/components/descriptions/CouplesBbwDescription';
import { CouplesBbwBottomDescription } from '@/components/descriptions/CouplesBbwBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'BBW Couples Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch BBW Sex Cams Shows for FREE. ⭐ Join our Adult Chat with BBW Couples. +300 Live BBW Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/couples/bbw/',
  },
};

export const dynamic = 'force-dynamic';

export default async function BbwPage() {
  const initialModels = await fetchModels('couples', 1, 36, 'bbw');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <CouplesSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <CouplesBbwDescription />
              </div>
              <ModelGrid 
                category="couples" 
                initialModels={initialModels.results}
                tag="bbw"
              />
              <div className="mt-8">
                <CouplesBbwBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}