import { Metadata } from 'next';
import { fetchModels } from '@/lib/api';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenDescription } from '@/components/descriptions/MenDescription';
import { MenBottomDescription } from '@/components/descriptions/MenBottomDescription';

export const metadata: Metadata = {
  title: 'Men ❤️ Live Sex Chat on CamWhoresTV.porn',
  description: 'Sex Chat with Hot Chaturbate Men for FREE.⭐ Watch +3000 Live Male Cams. Join Now to our Adult Men Community with Tons of Horny Guys.',
  alternates: {
    canonical: 'https://camwhorestv.porn/men/',
  },
};

export const dynamic = 'force-dynamic';

export default async function MenPage() {
  const initialModels = await fetchModels('men', 1);

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results} 
              />
              <div className="mt-8">
                <MenBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}