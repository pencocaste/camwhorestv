import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransSelfsuckDescription } from '@/components/descriptions/TransSelfsuckDescription';
import { TransSelfsuckBottomDescription } from '@/components/descriptions/TransSelfsuckBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Selfsuck Trans Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Selfsuck Trans Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Flexible Trans Models. +200 Live Selfsuck Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/trans/selfsuck/',
  },
};

export const dynamic = 'force-dynamic';

export default async function SelfsuckPage() {
  const initialModels = await fetchModels('trans', 1, 36, 'selfsuck');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransSelfsuckDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="selfsuck"
              />
              <div className="mt-8">
                <TransSelfsuckBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}