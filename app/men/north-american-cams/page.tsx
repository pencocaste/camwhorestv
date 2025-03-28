import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenNorthAmericanDescription } from '@/components/descriptions/MenNorthAmericanDescription';
import { MenNorthAmericanBottomDescription } from '@/components/descriptions/MenNorthAmericanBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'North American Male Cams ❤️ Live Sex Chat on Chaturbate.Lat',
  description: 'Watch North American Male Sex Cams Shows for FREE. ⭐ Join our Adult Chat with American & Canadian Men. +500 Live North American Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://chaturbate.lat/men/north-american-cams/',
  },
};

export const dynamic = 'force-dynamic';

export default async function NorthAmericanPage() {
  const initialModels = await fetchModels('men', 1, 36, undefined, 'northamerica');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenNorthAmericanDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                region="northamerica"
              />
              <div className="mt-8">
                <MenNorthAmericanBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}