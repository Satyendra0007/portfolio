import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://portfolio-satyendra.vercel.app'),
  title: {
    default: 'Satyendra Kumar | MERN Developer Portfolio',
    template: '%s | Satyendra Kumar',
  },
  description:
    'Portfolio of Satyendra Kumar, a MERN developer and MCA student building full-stack web applications with modern UI and practical user-focused features.',
  keywords: [
    'Satyendra Kumar',
    'portfolio',
    'MERN developer',
    'Next.js portfolio',
    'full-stack developer',
    'web developer',
  ],
  openGraph: {
    title: 'Satyendra Kumar | MERN Developer Portfolio',
    description:
      'Explore projects, skills, certifications, and background of Satyendra Kumar, a MERN developer and MCA student.',
    url: 'https://portfolio-satyendra.vercel.app',
    siteName: 'Satyendra Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Satyendra Kumar | MERN Developer Portfolio',
    description:
      'Projects, skills, certifications, and background of Satyendra Kumar.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
