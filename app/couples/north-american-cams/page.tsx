import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import CouplesSidebar from '@/components/sidebars/CouplesSidebar';
import { CouplesNorthAmericanDescription } from '@/components/descriptions/CouplesNorthAmericanDescription';
import { CouplesNorthAmericanBottomDescription } from '@/components/descriptions/CouplesNorthAmericanBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'North American Couples Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch North American Couples Sex Cams Shows for FREE. ⭐ Join our Adult Chat with American & Canadian Couples. +500 Live North American Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/couples/north-american-cams/',
  },
};

export const dynamic = 'force-dynamic';

export default async function NorthAmericanPage() {
  const initialModels = await fetchModels('couples', 1, 36, undefined, 'northamerica');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <CouplesSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <CouplesNorthAmericanDescription />
              </div>
              <ModelGrid 
                category="couples" 
                initialModels={initialModels.results}
                region="northamerica"
              />
              <div className="mt-8">
                <CouplesNorthAmericanBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}