import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransFtmDescription } from '@/components/descriptions/TransFtmDescription';
import { TransFtmBottomDescription } from '@/components/descriptions/TransFtmBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'FTM Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch FTM Trans Sex Cams Shows for FREE. ⭐ Join our Adult Chat with FTM Trans Models. +200 Live FTM Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/ftm/',
  },
};

export const dynamic = 'force-dynamic';

export default async function FtmPage() {
  const initialModels = await fetchModels('trans', 1, 36, 'ftm');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransFtmDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="ftm"
              />
              <div className="mt-8">
                <TransFtmBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}