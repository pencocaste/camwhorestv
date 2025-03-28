import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import CouplesSidebar from '@/components/sidebars/CouplesSidebar';
import { CouplesPregnantDescription } from '@/components/descriptions/CouplesPregnantDescription';
import { CouplesPregnantBottomDescription } from '@/components/descriptions/CouplesPregnantBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Pregnant Couples Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Pregnant Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Pregnant Couples. +100 Live Pregnant Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/couples/pregnant/',
  },
};

export const dynamic = 'force-dynamic';

export default async function PregnantPage() {
  const initialModels = await fetchModels('couples', 1, 36, 'pregnant');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <CouplesSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <CouplesPregnantDescription />
              </div>
              <ModelGrid 
                category="couples" 
                initialModels={initialModels.results}
                tag="pregnant"
              />
              <div className="mt-8">
                <CouplesPregnantBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}