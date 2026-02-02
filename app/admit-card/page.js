import Link from "next/link";
import { getDynamicYear, getCurrentSession } from "@/lib/session";

export const metadata = {
    title: "MCBU Admit Card | Download Hall Tickets",
    description: "Download MCBU Admit Cards for Regular, Private, and ATKT Exams.",
};

export default function AdmitCardPage() {
    const currentYear = getDynamicYear();
    const session = getCurrentSession();

    return (
        <div className="container" style={{ padding: '20px 10px', maxWidth: '1000px' }}>
            <h1 className="text-center" style={{
                background: 'var(--primary)', color: 'white', padding: '10px',
                marginBottom: '20px', fontSize: '24px', textTransform: 'uppercase'
            }}>
                MCBU Admit Cards {currentYear}
            </h1>

            <div style={{ padding: '20px', border: '1px solid #ccc', background: '#fff' }}>
                <p style={{ marginBottom: '15px' }}>
                    Download your admit card for Maharaja Chhatrasal Bundelkhand University (MCBU) semester and annual examinations.
                    Click on the links below to visit the official MPOnline portal.
                </p>

                <table className="sarkari-table">
                    <thead>
                        <tr>
                            <th>Admit Card Description</th>
                            <th style={{ width: '150px' }}>Direct Link</th>
                        </tr>
                    </thead>
                    <tbody>
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

                <div style={{ marginTop: '20px', padding: '10px', background: '#ffebee', border: '1px solid #e57373' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>How to Download MCBU Admit Card?</h3>
                    <ol style={{ marginLeft: '20px', marginTop: '10px' }}>
                        <li>Click on the "Download" link above.</li>
                        <li>You will be redirected to the MCBU MPOnline Portal.</li>
                        <li>Enter your Enrollment Number or Roll Number.</li>
                        <li>Select the Session and Semester.</li>
                        <li>Click on "Search" to view and print your admit card.</li>
                    </ol>
                </div>
            </div>

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Link href="/" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>&larr; Back to Home</Link>
            </div>
        </div>
    );
}
