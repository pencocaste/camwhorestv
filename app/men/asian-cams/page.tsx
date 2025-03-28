import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenAsianDescription } from '@/components/descriptions/MenAsianDescription';
import { MenAsianBottomDescription } from '@/components/descriptions/MenAsianBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Asian Male Cams ❤️ Live Sex Chat on Chaturbate.Lat',
  description: 'Watch Asian Male Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Asian Men. +200 Live Asian Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://chaturbate.lat/men/asian-cams/',
  },
};

export const dynamic = 'force-dynamic';

export default async function AsianPage() {
  const initialModels = await fetchModels('men', 1, 36, undefined, 'asia');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenAsianDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                region="asia"
              />
              <div className="mt-8">
                <MenAsianBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}