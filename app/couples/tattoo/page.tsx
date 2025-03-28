import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import CouplesSidebar from '@/components/sidebars/CouplesSidebar';
import { CouplesTattooDescription } from '@/components/descriptions/CouplesTattooDescription';
import { CouplesTattooBottomDescription } from '@/components/descriptions/CouplesTattooBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Tattoo Couples Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Tattoo Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Inked Couples. +500 Live Tattoo Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/couples/tattoo/',
  },
};

export const dynamic = 'force-dynamic';

export default async function TattooPage() {
  const initialModels = await fetchModels('couples', 1, 36, 'tattoo');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <CouplesSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <CouplesTattooDescription />
              </div>
              <ModelGrid 
                category="couples" 
                initialModels={initialModels.results}
                tag="tattoo"
              />
              <div className="mt-8">
                <CouplesTattooBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}