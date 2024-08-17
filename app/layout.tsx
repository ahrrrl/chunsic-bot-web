import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.scss';
import Link from 'next/link';
import Image from 'next/image';
import Header from './components/header';

const inter = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '춘식봇 - 디스코드 봇',
  description:
    '춘식봇은 디스코드 서버를 관리하고 다양한 기능을 제공하는 봇입니다.',
  keywords: '춘식봇, 디스코드 봇, 서버 관리, 디스코드',
  authors: [{ name: 'joe hyeonjin' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={inter.className}>
        <div className='layout'>
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
