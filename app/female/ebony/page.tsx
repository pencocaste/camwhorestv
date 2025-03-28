import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { EbonyDescription } from '@/components/descriptions/EbonyDescription';
import { EbonyBottomDescription } from '@/components/descriptions/EbonyBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Ebony Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Ebony Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Ebony Women. +1000 Live Ebony Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/ebony/',
  },
};

export const dynamic = 'force-dynamic';

export default async function EbonyPage() {
  const initialModels = await fetchModels('girls', 1, 36, 'ebony');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <EbonyDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                tag="ebony"
              />
              <div className="mt-8">
                <EbonyBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}