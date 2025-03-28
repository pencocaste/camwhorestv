import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chaturbate.Lat ❤️ Free Live Sex Cams & Adult Sex Chat',
  description: 'Watch Chaturbate Live Sex Cams Shows in our Adult Sex Chat Community⭐ Start chatting with Camgirls! +5000 Live Porn Webcams. FREE without Registration',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white`} suppressHydrationWarning>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 bg-white w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}