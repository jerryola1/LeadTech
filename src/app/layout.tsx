import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AdSense Optimization Masterclass',
  description: 'Learn advanced strategies to maximize your AdSense earnings',
  openGraph: {
    title: 'AdSense Optimization Masterclass',
    description: 'Master the art of AdSense optimization and skyrocket your earnings',
    url: 'https://leadtech.uk/',
    siteName: 'AdSense Optimization Masterclass',
    images: [
      {
        url: 'https://leadtech.uk/images/og-image.jpg', // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: 'AdSense Optimization Masterclass',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdSense Optimization Masterclass',
    description: 'Master the art of AdSense optimization and skyrocket your earnings',
    images: ['https://leadtech.uk/images/twitter-image.jpg'], // Replace with your actual image URL
    creator: '@leadtech_uk',
  },
  icons: {
    apple: '/images/fav/apple-touch-icon.png',
    icon: [
      { url: '/images/fav/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/fav/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
