import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { MilfDescription } from '@/components/descriptions/MilfDescription';
import { MilfBottomDescription } from '@/components/descriptions/MilfBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'MILF Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Hot MILF Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Experienced Women. +2000 Live MILF Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/milf/',
  },
};

export const dynamic = 'force-dynamic';

export default async function MilfPage() {
  const initialModels = await fetchModels('girls', 1, 36, 'milf');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MilfDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                tag="milf"
              />
              <div className="mt-8">
                <MilfBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}