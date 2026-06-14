import Link from "next/link";
import { getDynamicYear } from "@/lib/session";

export const metadata = {
    title: "Latest MCBU Updates & Notifications 2026-27 | Jobs & Exam Circulars",
    description: "Get all the latest notifications, admission updates, job openings, and exam circulars from Maharaja Chhatrasal Bundelkhand University (MCBU) for the 2026-27 session.",
    alternates: {
        canonical: "/latest-jobs",
    }
};

export default function LatestJobsPage() {
    const currentYear = getDynamicYear();
    const nextYear = currentYear + 1;

    return (
        <div className="container" style={{ padding: '20px 10px', maxWidth: '1000px' }}>
            <h1 className="text-center" style={{
                background: 'var(--primary)', color: 'white', padding: '10px',
                marginBottom: '20px', fontSize: '24px', textTransform: 'uppercase'
            }}>
                Latest Updates & Notifications {currentYear}
            </h1>

            <div style={{ overflowX: 'auto' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {/* Using a styled list instead of table for variety, or keep table for consistent Sarkar look? 
                 Let's use Table as it is "Sarkari Style" generic.
             */}
                </ul>

                <table className="sarkari-table">
                    <thead>
                        <tr>
                            <th>Notification Title</th>
                            <th style={{ width: '20%' }}>Date</th>
                            <th style={{ width: '15%' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ fontWeight: 'bold', color: '#d32f2f' }}>★ MCBU Admission Rule Book 2026-2027 Released (Session 2026-27)</td>
                            <td className="text-center">June {currentYear}</td>
                            <td className="text-center">
                                <Link href="/result/mcbu-admission-rule-book-2026-2027" className="sarkari-btn-blue">View</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>MCBU Exam Time Table {currentYear} Released for Annual Exams</td>
                            <td className="text-center">Jan {currentYear}</td>
                            <td className="text-center">
                                <Link href="https://mcbu.ac.in/" target="_blank" className="sarkari-btn-blue">View</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Enrollment Form Last Date Extended for 1st Year Students</td>
                            <td className="text-center">Jan {currentYear}</td>
                            <td className="text-center">
                                <Link href="https://mcbu.ac.in/" target="_blank" className="sarkari-btn-blue">View</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>PhD Admission {currentYear} Notification & Guidelines</td>
                            <td className="text-center">Dec {currentYear - 1}</td>
                            <td className="text-center">
                                <Link href="#" className="sarkari-btn-blue">View</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Guest Faculty Recruitment {currentYear}-{nextYear}</td>
                            <td className="text-center">Nov {currentYear - 1}</td>
                            <td className="text-center">
                                <Link href="#" className="sarkari-btn-blue">Apply</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Retotalling / Verification Form Open {currentYear}</td>
                            <td className="text-center">Recent</td>
                            <td className="text-center">
                                <Link href="#" className="sarkari-btn-blue">Apply</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Link href="/" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>&larr; Back to Home</Link>
            </div>
        </div>
    );
}
