import Link from "next/link";
import { results } from "@/lib/data";
import { getDynamicYear, getCurrentSession } from "@/lib/session";

export const metadata = {
    title: "MCBU Admit Card 2026-27 | Download Hall Tickets for Semester & Annual Exams",
    description: "Download Maharaja Chhatrasal Bundelkhand University (MCBU) Admit Cards for Regular, Private, ATKT, and Semester Exams. Get official direct download links.",
    keywords: ["MCBU Admit Card 2026-27", "MCBU Hall Ticket 2026-27", "MCBU Admit Card download", "Chhatarpur University Admit Card", "MCBU MPOnline"],
};

export default function AdmitCardPage() {
    const currentYear = getDynamicYear();
    const session = getCurrentSession();
    const dynamicAdmitCards = results.filter(r => r.category === "Admit Card");

    return (
        <div className="container" style={{ padding: '20px 10px', maxWidth: '1000px', margin: '0 auto' }}>
            <h1 className="text-center" style={{
                background: 'var(--primary)', color: 'white', padding: '12px',
                marginBottom: '20px', fontSize: '24px', textTransform: 'uppercase',
                fontWeight: 'bold', borderRadius: '4px'
            }}>
                MCBU Admit Cards & Hall Tickets {session}
            </h1>

            <div style={{ padding: '20px', border: '1px solid #ccc', background: '#fff', borderRadius: '8px' }}>
                <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                    Welcome to the MCBU Admit Card download center. Students appearing for Maharaja Chhatrasal Bundelkhand University (MCBU) semester and annual examinations can retrieve their official admit cards/hall tickets here. Click on any active link to proceed through our secure verification and download portal.
                </p>

                <h2 style={{ fontSize: '18px', color: 'var(--primary)', fontWeight: 'bold', marginBottom: '10px' }}>Active Admit Card Links</h2>
                <table className="sarkari-table" style={{ marginBottom: '25px' }}>
                    <thead>
                        <tr>
                            <th>Admit Card Description</th>
                            <th style={{ width: '150px' }}>Direct Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dynamicAdmitCards.map((card) => (
                            <tr key={card.slug}>
                                <td style={{ fontWeight: 'bold' }}>{card.title}</td>
                                <td className="text-center">
                                    <Link href={`/result/${card.slug}`} className="sarkari-btn-blue">View Details</Link>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td>MCBU Main Exam Admit Card {currentYear} (Regular/Private)</td>
                            <td className="text-center">
                                <Link href="https://mcbu.mponline.gov.in/" target="_blank" className="sarkari-btn-blue">Download</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>MCBU Supply/ATKT Exam Admit Card {currentYear}</td>
                            <td className="text-center">
                                <Link href="https://mcbu.mponline.gov.in/" target="_blank" className="sarkari-btn-blue">Download</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>PhD Entrance Exam Admit Card {currentYear}</td>
                            <td className="text-center">
                                <Link href="https://mcbu.mponline.gov.in/" target="_blank" className="sarkari-btn-blue">Download</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>MA/MSc/MCom Semester Exam Admit Card {session}</td>
                            <td className="text-center">
                                <Link href="https://mcbu.mponline.gov.in/" target="_blank" className="sarkari-btn-blue">Download</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>BA/BSc/BCom 1st Year (NEP) Admit Card</td>
                            <td className="text-center">
                                <Link href="https://mcbu.mponline.gov.in/" target="_blank" className="sarkari-btn-blue">Download</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div style={{ marginTop: '20px', padding: '15px', background: '#ffebee', border: '1px solid #e57373', borderRadius: '6px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#c62828' }}>How to Download MCBU Admit Card?</h3>
                    <ol style={{ marginLeft: '20px', marginTop: '10px', lineHeight: '1.6' }}>
                        <li>Click on the specific Admit Card link above or visit the official MCBU MPOnline portal.</li>
                        <li>Provide your unique <strong>Enrollment Number</strong> or Roll Number.</li>
                        <li>Select the appropriate <strong>Session</strong> (e.g. {session}) and Semester.</li>
                        <li>Verify the captcha check and click on the "Search" button.</li>
                        <li>Your admit card will print on the screen. Download and save the PDF copy for future reference.</li>
                    </ol>
                </div>
            </div>

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Link href="/" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>&larr; Back to Home</Link>
            </div>
        </div>
    );
}
