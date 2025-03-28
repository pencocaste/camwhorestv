import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenSelfsuckDescription } from '@/components/descriptions/MenSelfsuckDescription';
import { MenSelfsuckBottomDescription } from '@/components/descriptions/MenSelfsuckBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Selfsuck Male Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Selfsuck Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Flexible Men. +200 Live Selfsuck Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/men/selfsuck/',
  },
};

export const dynamic = 'force-dynamic';

export default async function SelfsuckPage() {
  const initialModels = await fetchModels('men', 1, 36, 'selfsuck');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenSelfsuckDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                tag="selfsuck"
              />
              <div className="mt-8">
                <MenSelfsuckBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}