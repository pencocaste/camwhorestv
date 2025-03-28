import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenChubbyDescription } from '@/components/descriptions/MenChubbyDescription';
import { MenChubbyBottomDescription } from '@/components/descriptions/MenChubbyBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Chubby Male Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Chubby Male Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Curvy Men. +200 Live Chubby Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/men/chubby/',
  },
};

export const dynamic = 'force-dynamic';

export default async function ChubbyPage() {
  const initialModels = await fetchModels('men', 1, 36, 'chubby');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenChubbyDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                tag="chubby"
              />
              <div className="mt-8">
                <MenChubbyBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}