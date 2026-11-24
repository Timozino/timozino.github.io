import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Folorunso Timson | Software Engineer',
  description: 'Full-stack software engineer building products, backend systems, cloud infrastructure and mobile applications.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Folorunso Timson | Software Engineer',
    description: 'I build software products and the systems behind them.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
