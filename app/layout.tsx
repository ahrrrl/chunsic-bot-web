import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.scss';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Providers from './lib/store/reactQuery/reactQueryProvider';

const inter = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '춘식봇 - 디스코드 봇',
  description:
    '춘식봇은 디스코드 서버를 관리하고 다양한 기능을 제공하는 봇입니다.',
  keywords: '춘식봇, 디스코드 봇, 서버 관리, 디스코드',
  authors: [{ name: 'joe hyeonjin' }],
  robots: 'index, follow',
  openGraph: {
    title: '춘식봇 - 디스코드 봇',
    description:
      '춘식봇은 디스코드 서버를 관리하고 다양한 기능을 제공하는 봇입니다.',
    url: 'https://chunsic-bot-web.vercel.app',
    siteName: '춘식봇',
    images: [
      {
        url: 'https://chunsic-bot-web.vercel.app/img/main/춘식봇메인.png',
        width: 1200,
        height: 630,
        alt: '춘식봇 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '춘식봇 - 디스코드 봇',
    description:
      '춘식봇은 디스코드 서버를 관리하고 다양한 기능을 제공하는 봇입니다.',
    images: ['https://chunsic-bot-web.vercel.app/img/main/춘식봇메인.png'], // 이미지의 절대 URL을 입력하세요
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={inter.className}>
        <Providers>
          <div className='layout'>
            <Header />
            <div className='layoutContainer'>{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
