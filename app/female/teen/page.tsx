import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { TeenDescription } from '@/components/descriptions/TeenDescription';
import { TeenBottomDescription } from '@/components/descriptions/TeenBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Teen Cams ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Watch Teens Sex Cams Shows for FREE. ⭐ Join our Adult Chat with 18+ Girls. +3000 Live Teen Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://camwhorestv.porn/female/teen/',
  },
};

export const dynamic = 'force-dynamic';

export default async function TeenPage() {
  const initialModels = await fetchModels('teen-girls', 1, 36, 'teen');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TeenDescription />
              </div>
              <ModelGrid 
                category="teen-girls" 
                initialModels={initialModels.results}
                tag="teen"
              />
              <div className="mt-8">
                <TeenBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}