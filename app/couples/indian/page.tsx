import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import CouplesSidebar from '@/components/sidebars/CouplesSidebar';
import { CouplesIndianDescription } from '@/components/descriptions/CouplesIndianDescription';
import { CouplesIndianBottomDescription } from '@/components/descriptions/CouplesIndianBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Indian Couples Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Indian Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Indian Couples. +200 Live Indian Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/couples/indian/',
  },
};

export const dynamic = 'force-dynamic';

export default async function IndianPage() {
  const initialModels = await fetchModels('couples', 1, 36, 'indian');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <CouplesSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <CouplesIndianDescription />
              </div>
              <ModelGrid 
                category="couples" 
                initialModels={initialModels.results}
                tag="indian"
              />
              <div className="mt-8">
                <CouplesIndianBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}