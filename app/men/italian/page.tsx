import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenItalianDescription } from '@/components/descriptions/MenItalianDescription';
import { MenItalianBottomDescription } from '@/components/descriptions/MenItalianBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Italian Male Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Italian Male Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Italian Men. +200 Live Italian Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/men/italian/',
  },
};

export const dynamic = 'force-dynamic';

export default async function ItalianPage() {
  const initialModels = await fetchModels('men', 1, 36, 'italian');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenItalianDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                tag="italian"
              />
              <div className="mt-8">
                <MenItalianBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}