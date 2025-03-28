import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenTurkishDescription } from '@/components/descriptions/MenTurkishDescription';
import { MenTurkishBottomDescription } from '@/components/descriptions/MenTurkishBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Turkish Male Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Turkish Male Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Turkish Men. +200 Live Turkish Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/men/turkish/',
  },
};

export const dynamic = 'force-dynamic';

export default async function TurkishPage() {
  const initialModels = await fetchModels('men', 1, 36, 'turkish');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenTurkishDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                tag="turkish"
              />
              <div className="mt-8">
                <MenTurkishBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}