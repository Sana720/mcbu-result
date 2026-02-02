import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "MCBU Result Guide 2024 | Unofficial Information Portal",
  description: "Check Latest MCBU Results, Exam Dates, and Notifications. Guide for Maharaja Chhatrasal Bundelkhand University students.",
  icons: {
    icon: '/favicon.ico', // We can generate one later
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="layout-wrapper">
          {/* Top Warning Bar */}
          <div style={{ background: '#cb2f2f', color: 'white', fontSize: '0.85rem', textAlign: 'center', padding: '0.5rem 1rem' }}>
            <strong>Disclaimer:</strong> This is a guide website and NOT the official MCBU portal.
          </div>

          {/* Header */}
          <header style={{ background: 'white', borderBottom: '1px solid #e9ecef', position: 'sticky', top: 0, zIndex: 100 }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
              <Link href="/" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)', display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
                <span>MCBU <span style={{ color: 'var(--text)' }}>Guide</span></span>
                <span style={{ fontSize: '0.75rem', color: '#666', fontWeight: '400' }}>Unofficial Result Portal</span>
              </Link>
              
              <nav style={{ display: 'flex', gap: '1.5rem', fontWeight: '500' }} className="desktop-nav">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </div>
          </header>

          <main style={{ minHeight: 'calc(100vh - 300px)', paddingBottom: '3rem' }}>
            {children}
          </main>

          {/* Footer */}
          <footer style={{ background: '#212529', color: '#f8f9fa', padding: '3rem 0', marginTop: 'auto' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div>
                  <h3 style={{ marginBottom: '1rem', color: 'white' }}>About Us</h3>
                  <p style={{ fontSize: '0.9rem', color: '#adb5bd', lineHeight: '1.6' }}>
                    We provide the latest updates on MCBU results, time tables, and syllabus. We are a student-run community portal helping students access information easily.
                  </p>
                </div>
                <div>
                  <h3 style={{ marginBottom: '1rem', color: 'white' }}>Important Links</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}><Link href="/privacy-policy">Privacy Policy</Link></li>
                    <li style={{ marginBottom: '0.5rem' }}><Link href="/disclaimer">Disclaimer</Link></li>
                    <li style={{ marginBottom: '0.5rem' }}><Link href="/terms">Terms of Service</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ marginBottom: '1rem', color: 'white' }}>Contact</h3>
                  <p style={{ fontSize: '0.9rem', color: '#adb5bd' }}>
                    Email: support@mcbuguide.com<br/>
                    (For website issues only)
                  </p>
                </div>
              </div>
              <div style={{ borderTop: '1px solid #343a40', marginTop: '2rem', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.85rem', color: '#6c757d' }}>
                © {new Date().getFullYear()} MCBU Result Guide. Not affiliated with Maharaja Chhatrasal Bundelkhand University.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
