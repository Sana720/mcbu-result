import Link from "next/link";
import { results, getArchiveYears } from "@/lib/data";
import { getDynamicYear, getCurrentSession } from "@/lib/session";

export default function Home() {
  const currentYear = getDynamicYear(); // 2026
  const nextYear = currentYear + 1;     // 2027
  const session = getCurrentSession();  // 2026-27
  const archiveYears = getArchiveYears(); // [2025, 2024, 2023]

  return (
    <div>
      {/* 1. Marquee Section */}
      <div className="marquee-container">
        <marquee behavior="scroll" direction="left" scrollamount="5">
          MCBU Result {currentYear} Declared • BA 1st Year Result {currentYear} • BSc Final Year Marksheet {currentYear} • Check Now
        </marquee>
      </div>

      {/* 2. Headline / Intro */}
      <div className="text-center" style={{ margin: '20px 0' }}>
        <h2 style={{ fontSize: '24px', color: 'var(--primary)', fontWeight: 'bold' }}>
          Maharaja Chhatrasal Bundelkhand University (MCBU)
        </h2>
        <p style={{ fontSize: '13px', color: '#666' }}>
          Welcome to the No. 1 Unofficial Guide for MCBU Results {currentYear}, {nextYear} Upcoming Exams, and Time Tables.
        </p>
      </div>

      {/* 3. Social Media Buttons */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
        <a href="#" style={{
          background: '#25D366', color: 'white', padding: '10px 20px',
          borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none',
          display: 'flex', alignItems: 'center'
        }}>
          Join WhatsApp Group
        </a>
        <a href="#" style={{
          background: '#0088cc', color: 'white', padding: '10px 20px',
          borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none',
          display: 'flex', alignItems: 'center'
        }}>
          Join Telegram Channel
        </a>
      </div>

      {/* 4. Color Box Grid (Quick Links) */}
      <div className="quick-links-grid">
        <Link href={`/result/mcbu-ba-1st-year-result-upcoming`} className="color-box bg-maroon">
          MCBU BA 1st Year Result {currentYear}
        </Link>
        <Link href={`/result/mcbu-bsc-3rd-year-result-latest`} className="color-box bg-blue">
          MCBU BSc 3rd Year Result {currentYear}
        </Link>
        <Link href={`/result/mcbu-bcom-2nd-year-result-new`} className="color-box bg-green">
          B.Com 2nd Year Result {currentYear}
        </Link>
        <Link href={`/result/mcbu-ma-msc-semester-result-live`} className="color-box bg-orange">
          MA/MSc 2nd Sem Result {currentYear}
        </Link>
        <Link href="https://mcbu.mponline.gov.in/" target="_blank" className="color-box bg-teal">
          Download Admit Card {currentYear}
        </Link>
        <Link href="https://mcbu.ac.in/" target="_blank" className="color-box bg-purple">
          Time Table {currentYear}-{nextYear}
        </Link>
        <Link href="https://mcbu.ac.in/" target="_blank" className="color-box bg-pink">
          Previous Papers {currentYear}
        </Link>
        <Link href="https://mcbu.ac.in/fee-collections" target="_blank" className="color-box bg-black">
          Pay Exam Fees {currentYear}
        </Link>
      </div>

      {/* 5. Main 3-Column Layout */}
      <div className="portal-grid">

        {/* Column 1: Result */}
        <div className="column-box">
          <div className="column-header">Result {currentYear}</div>
          <div className="column-content">
            <ul>
              {results.filter(r => r.category === "Result").map((r) => (
                <li key={r.slug}>
                  <Link href={`/result/${r.slug}`}>{r.title}</Link>
                </li>
              ))}
              <li><Link href="#">MCBU Revaluation Result {currentYear}</Link></li>
              <li><Link href="#">BEd 1st Sem Result {currentYear}</Link></li>
            </ul>
            <div style={{ textAlign: 'right', marginTop: '10px' }}>
              <Link href="/results" style={{ fontWeight: 'bold', fontSize: '12px' }}>View More...</Link>
            </div>
          </div>
        </div>

        {/* Column 2: Admit Card */}
        <div className="column-box">
          <div className="column-header">Admit Card {currentYear}</div>
          <div className="column-content">
            <ul>
              <li><Link href="https://mcbu.mponline.gov.in/">MCBU Main Exam Admit Card {currentYear}</Link></li>
              <li><Link href="https://mcbu.mponline.gov.in/">Private Student Admit Card {currentYear}</Link></li>
              <li><Link href="https://mcbu.mponline.gov.in/">Supply Exam Admit Card {currentYear}</Link></li>
              <li><Link href="https://mcbu.mponline.gov.in/">PhD Entrance Admit Card {currentYear}</Link></li>
              <li><Link href="https://mcbu.mponline.gov.in/">Semester Exam Hall Ticket {session}</Link></li>
            </ul>
            <div style={{ textAlign: 'right', marginTop: '10px' }}>
              <Link href="/admit-cards" style={{ fontWeight: 'bold', fontSize: '12px' }}>View More...</Link>
            </div>
          </div>
        </div>

        {/* Column 3: Latest Updates */}
        <div className="column-box">
          <div className="column-header">Latest Updates</div>
          <div className="column-content">
            <ul>
              <li><Link href="#">MCBU Exam Time Table {currentYear} Released</Link></li>
              <li><Link href="#">Enrollment Form Last Date Extended</Link></li>
              <li><Link href="#">Exam Form Regular/Private {currentYear}</Link></li>
              <li><Link href="#">PhD Admission Notification {currentYear}</Link></li>
              <li><Link href="#">Guest Faculty Recruitment {nextYear}</Link></li>
            </ul>
            <div style={{ textAlign: 'right', marginTop: '10px' }}>
              <Link href="/updates" style={{ fontWeight: 'bold', fontSize: '12px' }}>View More...</Link>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Archives / Earlier Years Section */}
      <div style={{ marginTop: '30px', border: '1px solid #ccc', background: '#f9f9f9', padding: '15px' }}>
        <h3 style={{ fontSize: '18px', color: 'var(--primary)', borderBottom: '2px solid #ddd', paddingBottom: '10px', marginBottom: '15px' }}>
          Browse Earlier Years (Archives)
        </h3>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          {archiveYears.map(year => (
            <Link key={year} href={`/archive/${year}`} style={{
              background: '#eee', padding: '8px 15px', borderRadius: '4px',
              color: '#333', border: '1px solid #ccc', fontWeight: 'bold'
            }}>
              MCBU Result {year}
            </Link>
          ))}
          <Link href="/archive/old" style={{
            background: '#eee', padding: '8px 15px', borderRadius: '4px',
            color: '#333', border: '1px solid #ccc', fontWeight: 'bold'
          }}>
            Older Results...
          </Link>
        </div>
      </div>

    </div>
  );
}
