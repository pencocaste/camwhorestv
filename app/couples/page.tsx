import { Metadata } from 'next';
import { fetchModels } from '@/lib/api';
import ModelGrid from '@/components/ModelGrid';
import CouplesSidebar from '@/components/sidebars/CouplesSidebar';
import { CouplesDescription } from '@/components/descriptions/CouplesDescription';
import { CouplesBottomDescription } from '@/components/descriptions/CouplesBottomDescription';

export const metadata: Metadata = {
  title: 'Couples: Best Couple Cams on CamWhoresTV.porn ❤️',
  description: 'Watch Chaturbate Couples having Live Sex for FREE.⭐ +4000 Couple Cams. Join Now and Enjoy Uncensored Sex Chat with Real Partners Fucking.',
  alternates: {
    canonical: 'https://camwhorestv.porn/couples/',
  },
};

export const dynamic = 'force-dynamic';

export default async function CouplesPage() {
  const initialModels = await fetchModels('couples', 1);

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <CouplesSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <CouplesDescription />
              </div>
              <ModelGrid 
                category="couples" 
                initialModels={initialModels.results} 
              />
              <div className="mt-8">
                <CouplesBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}