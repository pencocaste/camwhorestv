import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenIndianDescription } from '@/components/descriptions/MenIndianDescription';
import { MenIndianBottomDescription } from '@/components/descriptions/MenIndianBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Indian Male Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Indian Male Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Indian Men. +200 Live Indian Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/men/indian/',
  },
};

export const dynamic = 'force-dynamic';

export default async function IndianPage() {
  const initialModels = await fetchModels('men', 1, 36, 'indian');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenIndianDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                tag="indian"
              />
              <div className="mt-8">
                <MenIndianBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}