import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import CouplesSidebar from '@/components/sidebars/CouplesSidebar';
import { CouplesAsianDescription } from '@/components/descriptions/CouplesAsianDescription';
import { CouplesAsianBottomDescription } from '@/components/descriptions/CouplesAsianBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Asian Couples Cams ❤️ Live Sex Chat on Chaturbate.Lat',
  description: 'Watch Asian Couples Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Asian Couples. +200 Live Asian Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://chaturbate.lat/couples/asian-cams/',
  },
};

export const dynamic = 'force-dynamic';

export default async function AsianPage() {
  const initialModels = await fetchModels('couples', 1, 36, undefined, 'asia');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <CouplesSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <CouplesAsianDescription />
              </div>
              <ModelGrid 
                category="couples" 
                initialModels={initialModels.results}
                region="asia"
              />
              <div className="mt-8">
                <CouplesAsianBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}