import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MCBU Result Guide 2026 | Sarkari Result Style",
  description: "Check Latest MCBU Results, Exam Dates, and Notifications.",
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
          </main>

          {/* Detailed Footer */}
          <footer style={{ background: '#333', color: 'white', padding: '20px', marginTop: '30px', textAlign: 'center', fontSize: '12px' }}>
            <div style={{ marginBottom: '15px' }}>
              <Link href="/about" style={{ color: '#ccc', margin: '0 10px' }}>About Us</Link> |
              <Link href="/contact" style={{ color: '#ccc', margin: '0 10px' }}>Contact Us</Link> |
              <Link href="/privacy" style={{ color: '#ccc', margin: '0 10px' }}>Privacy Policy</Link> |
              <Link href="/disclaimer" style={{ color: '#ccc', margin: '0 10px' }}>Disclaimer</Link>
            </div>
            <p>© 2026 MCBU Result Guide. All Rights Reserved.</p>
            <p style={{ color: '#777', marginTop: '5px' }}>Not affiliated with Maharaja Chhatrasal Bundelkhand University.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
