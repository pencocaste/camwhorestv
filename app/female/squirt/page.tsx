import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { SquirtDescription } from '@/components/descriptions/SquirtDescription';
import { SquirtBottomDescription } from '@/components/descriptions/SquirtBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Squirt Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Squirt Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Squirting Women. +1000 Live Squirt Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/squirt/',
  },
};

export const dynamic = 'force-dynamic';

export default async function SquirtPage() {
  const initialModels = await fetchModels('girls', 1, 36, 'squirt');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <SquirtDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                tag="squirt"
              />
              <div className="mt-8">
                <SquirtBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}