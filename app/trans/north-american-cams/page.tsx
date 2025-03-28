import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransNorthAmericanDescription } from '@/components/descriptions/TransNorthAmericanDescription';
import { TransNorthAmericanBottomDescription } from '@/components/descriptions/TransNorthAmericanBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'North American Trans Cams ❤️ Live Sex Chat on Chaturbate.Lat',
  description: 'Watch North American Trans Sex Cams Shows for FREE. ⭐ Join our Adult Chat with American & Canadian Trans Models. +300 Live North American Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://chaturbate.lat/trans/north-american-cams/',
  },
};

export const dynamic = 'force-dynamic';

export default async function NorthAmericanPage() {
  const initialModels = await fetchModels('trans', 1, 36, undefined, 'northamerica');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransNorthAmericanDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                region="northamerica"
              />
              <div className="mt-8">
                <TransNorthAmericanBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}