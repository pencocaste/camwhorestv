import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenBigAssDescription } from '@/components/descriptions/MenBigAssDescription';
import { MenBigAssBottomDescription } from '@/components/descriptions/MenBigAssBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Big Ass Male Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Big Ass Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Curvy Men. +200 Live Big Ass Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/men/bigass/',
  },
};

export const dynamic = 'force-dynamic';

export default async function BigAssPage() {
  const initialModels = await fetchModels('men', 1, 36, 'bigass');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenBigAssDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                tag="bigass"
              />
              <div className="mt-8">
                <MenBigAssBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}