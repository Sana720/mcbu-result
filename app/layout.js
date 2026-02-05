import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import JsonLd from "./components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: "#800000",
};

export const metadata = {
  metadataBase: new URL("https://www.mcburesults.in"),
  title: {
    default: "MCBU Result 2026 | Latest MCBU Results, Exam Dates, Syllabus, Admit Cards and Notifications",
    template: "%s | MCBU Result 2026",
  },
  description: "Check Latest MCBU Results, Exam Dates, Syllabus, Admit Cards and Notifications for Maharaja Chhatrasal Bundelkhand University. Unofficial Guide.",
  keywords: ["MCBU Result 2026", "MCBU Admit Card", "Maharaja Chhatrasal Bundelkhand University", "MCBU Time Table", "MCBU Exam Date", "Sarkari Result", "MP Online"],
  authors: [{ name: "MCBU Result Guide Team" }],
  creator: "MCBU Result ",
  publisher: "MCBU Result ",
  openGraph: {
    title: "MCBU Result 2026 | Latest Updates",
    description: "Your one-stop destination for all MCBU University updates, results, and exam news.",
    url: "https://www.mcburesults.in",
    siteName: "MCBU Result",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: '/icon.png',
  },
  twitter: {
    card: "summary_large_image",
    title: "MCBU Result 2026",
    description: "Check Latest MCBU Results and Updates instantly.",
  },
  verification: {
    google: "google-site-verification-code",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: '#e0e0e0' }} suppressHydrationWarning> {/* Grey bg for outer body */}
        <div className="layout-wrapper" style={{ background: 'white', maxWidth: '1100px', margin: '0 auto', minHeight: '100vh', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}>

          {/* Top Warning/Disclaimer Strip */}
          <div style={{ background: '#333', color: 'white', fontSize: '11px', textAlign: 'center', padding: '4px' }}>
            Disclaimer: This is an Unofficial Guide for MCBU University Results.
          </div>

          {/* Main Large Header */}
          <header style={{ background: 'var(--primary)', color: 'white', padding: '20px 10px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>
              MCBU RESULT GUIDE
            </h1>
            <p style={{ fontSize: '14px', marginTop: '5px', opacity: 0.9 }}>
              www.mcburesults.in
            </p>
          </header>

          {/* Black Navigation Bar */}
          <nav style={{ background: 'black', color: 'white', borderTop: '2px solid #555' }}>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'white', padding: '10px 15px', fontWeight: 'bold', fontSize: '14px', textDecoration: 'none' }}>HOME</Link>
              <Link href="/latest-jobs" style={{ color: 'white', padding: '10px 15px', fontWeight: 'bold', fontSize: '14px', textDecoration: 'none' }}>LATEST UPDATES</Link>
              <Link href="/results" style={{ color: 'white', padding: '10px 15px', fontWeight: 'bold', fontSize: '14px', textDecoration: 'none' }}>RESULTS</Link>
              <Link href="/admit-card" style={{ color: 'white', padding: '10px 15px', fontWeight: 'bold', fontSize: '14px', textDecoration: 'none' }}>ADMIT CARD</Link>
              <Link href="/about" style={{ color: 'white', padding: '10px 15px', fontWeight: 'bold', fontSize: '14px', textDecoration: 'none' }}>ABOUT US</Link>
            </div>
          </nav>

          <main style={{ padding: '10px' }}>
            {children}
            <Analytics />
          </main>

          {/* Detailed Footer */}
          <footer style={{ background: '#333', color: 'white', padding: '20px', marginTop: '30px', textAlign: 'center', fontSize: '12px' }}>
            <div style={{ marginBottom: '15px' }}>
              <Link href="/about" style={{ color: '#ccc', margin: '0 10px' }}>About Us</Link> |
              <Link href="/contact" style={{ color: '#ccc', margin: '0 10px' }}>Contact Us</Link> |
              <Link href="/privacy" style={{ color: '#ccc', margin: '0 10px' }}>Privacy Policy</Link> |
              <Link href="/terms" style={{ color: '#ccc', margin: '0 10px' }}>Terms</Link> |
              <Link href="/disclaimer" style={{ color: '#ccc', margin: '0 10px' }}>Disclaimer</Link>
            </div>
            <p>© 2026 MCBU Result Guide. All Rights Reserved.</p>
            <p style={{ color: '#777', marginTop: '5px' }}>Not affiliated with Maharaja Chhatrasal Bundelkhand University.</p>
          </footer>
        </div>
        <GoogleAnalytics gaId="G-XYZ1234567" /> {/* Replace with your actual GA ID */}
        <Script src="https://pl28654044.effectivegatecpm.com/d7/d4/af/d7d4af03aa797aa465ed34f08b94c815.js" />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "MCBU Result Guide",
            "url": "https://www.mcburesults.in",
            "logo": "https://www.mcburesults.in/icon.png",
            "sameAs": [
              "https://facebook.com/mcburesultguide",
              "https://twitter.com/mcburesults"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "support@mcburesults.in",
              "contactType": "customer service"
            }
          }}
        />
      </body>
    </html>
  );
}
