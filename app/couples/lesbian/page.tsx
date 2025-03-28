import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import CouplesSidebar from '@/components/sidebars/CouplesSidebar';
import { CouplesLesbianDescription } from '@/components/descriptions/CouplesLesbianDescription';
import { CouplesLesbianBottomDescription } from '@/components/descriptions/CouplesLesbianBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Lesbian Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Lesbian Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Female Couples. +500 Live Lesbian Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/couples/lesbian/',
  },
};

export const dynamic = 'force-dynamic';

export default async function LesbianPage() {
  const initialModels = await fetchModels('couples', 1, 36, 'lesbian');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <CouplesSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <CouplesLesbianDescription />
              </div>
              <ModelGrid 
                category="couples" 
                initialModels={initialModels.results}
                tag="lesbian"
              />
              <div className="mt-8">
                <CouplesLesbianBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}