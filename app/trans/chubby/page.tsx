import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransChubbyDescription } from '@/components/descriptions/TransChubbyDescription';
import { TransChubbyBottomDescription } from '@/components/descriptions/TransChubbyBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Chubby Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Chubby Trans Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Curvy Trans Models. +300 Live Chubby Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/chubby/',
  },
};

export const dynamic = 'force-dynamic';

export default async function ChubbyPage() {
  const initialModels = await fetchModels('trans', 1, 36, 'chubby');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransChubbyDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="chubby"
              />
              <div className="mt-8">
                <TransChubbyBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}