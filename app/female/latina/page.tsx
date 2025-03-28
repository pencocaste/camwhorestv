import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { LatinaDescription } from '@/components/descriptions/LatinaDescription';
import { LatinaBottomDescription } from '@/components/descriptions/LatinaBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Latina Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Latina Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Latin Women. +2000 Live Latina Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/latina/',
  },
};

export const dynamic = 'force-dynamic';

export default async function LatinaPage() {
  const initialModels = await fetchModels('girls', 1, 36, 'latina');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <LatinaDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                tag="latina"
              />
              <div className="mt-8">
                <LatinaBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}