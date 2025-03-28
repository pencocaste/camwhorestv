import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import CouplesSidebar from '@/components/sidebars/CouplesSidebar';
import { CouplesLatinaDescription } from '@/components/descriptions/CouplesLatinaDescription';
import { CouplesLatinaBottomDescription } from '@/components/descriptions/CouplesLatinaBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Latina Couples Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Latina Couples Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Latin Couples. +500 Live Latina Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/couples/latina/',
  },
};

export const dynamic = 'force-dynamic';

export default async function LatinaPage() {
  const initialModels = await fetchModels('couples', 1, 36, 'latina');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <CouplesSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <CouplesLatinaDescription />
              </div>
              <ModelGrid 
                category="couples" 
                initialModels={initialModels.results}
                tag="latina"
              />
              <div className="mt-8">
                <CouplesLatinaBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}