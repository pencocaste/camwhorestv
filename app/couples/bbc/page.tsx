import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import CouplesSidebar from '@/components/sidebars/CouplesSidebar';
import { CouplesBbcDescription } from '@/components/descriptions/CouplesBbcDescription';
import { CouplesBbcBottomDescription } from '@/components/descriptions/CouplesBbcBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'BBC Couples Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch BBC Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Interracial Couples. +300 Live BBC Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/couples/bbc/',
  },
};

export const dynamic = 'force-dynamic';

export default async function BbcPage() {
  const initialModels = await fetchModels('couples', 1, 36, 'bbc');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <CouplesSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <CouplesBbcDescription />
              </div>
              <ModelGrid 
                category="couples" 
                initialModels={initialModels.results}
                tag="bbc"
              />
              <div className="mt-8">
                <CouplesBbcBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}