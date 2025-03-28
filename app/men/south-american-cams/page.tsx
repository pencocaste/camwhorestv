import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenSouthAmericanDescription } from '@/components/descriptions/MenSouthAmericanDescription';
import { MenSouthAmericanBottomDescription } from '@/components/descriptions/MenSouthAmericanBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'South American Male Cams ❤️ Live Sex Chat on Chaturbate.Lat',
  description: 'Watch South American Male Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Latin Men. +300 Live South American Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://chaturbate.lat/men/south-american-cams/',
  },
};

export const dynamic = 'force-dynamic';

export default async function SouthAmericanPage() {
  const initialModels = await fetchModels('men', 1, 36, undefined, 'southamerica');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenSouthAmericanDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                region="southamerica"
              />
              <div className="mt-8">
                <MenSouthAmericanBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}