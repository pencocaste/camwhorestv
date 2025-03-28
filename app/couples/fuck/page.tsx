import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import CouplesSidebar from '@/components/sidebars/CouplesSidebar';
import { CouplesFuckDescription } from '@/components/descriptions/CouplesFuckDescription';
import { CouplesFuckBottomDescription } from '@/components/descriptions/CouplesFuckBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Fuck Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Live Sex Shows for FREE. ⭐ Join our Adult Chat with Passionate Couples. +1000 Live Sex Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/couples/fuck/',
  },
};

export const dynamic = 'force-dynamic';

export default async function FuckPage() {
  const initialModels = await fetchModels('couples', 1, 36, 'fuck');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <CouplesSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <CouplesFuckDescription />
              </div>
              <ModelGrid 
                category="couples" 
                initialModels={initialModels.results}
                tag="fuck"
              />
              <div className="mt-8">
                <CouplesFuckBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}