import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { HairyArmpitsDescription } from '@/components/descriptions/HairyArmpitsDescription';
import { HairyArmpitsBottomDescription } from '@/components/descriptions/HairyArmpitsBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Hairy Armpits Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Hairy Armpits Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Natural Women. +100 Live Natural Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/hairyarmpits/',
  },
};

export const dynamic = 'force-dynamic';

export default async function HairyArmpitsPage() {
  const initialModels = await fetchModels('girls', 1, 36, 'hairyarmpits');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <HairyArmpitsDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                tag="hairyarmpits"
              />
              <div className="mt-8">
                <HairyArmpitsBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}