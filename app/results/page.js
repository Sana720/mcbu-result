import Link from "next/link";
import { results } from "@/lib/data";
import { getDynamicYear } from "@/lib/session";

export const metadata = {
    title: "MCBU Results | All Semester & Annual Exam Results",
    description: "Check all declared MCBU Results for BA, BSc, BCom, MA, MSc, and more.",
};

export default function ResultsPage() {
    const currentYear = getDynamicYear();
    const resultItems = results.filter((r) => r.category === "Result" || r.category === "Time Table");

    return (
        <div className="container" style={{ padding: '20px 10px', maxWidth: '1000px' }}>
            <h1 className="text-center" style={{
                background: 'var(--primary)', color: 'white', padding: '10px',
                marginBottom: '20px', fontSize: '24px', textTransform: 'uppercase'
            }}>
                MCBU Latest Results {currentYear}
            </h1>

            <div style={{ overflowX: 'auto' }}>
                <table className="sarkari-table">
                    <thead>
                        <tr>
                            <th style={{ width: '40%' }}>Exam Name</th>
                            <th style={{ width: '20%' }}>Category</th>
                            <th style={{ width: '20%' }}>Date</th>
                            <th style={{ width: '20%' }}>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultItems.length > 0 ? (
                            resultItems.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ fontWeight: 'bold' }}>{item.title}</td>
                                    <td className="text-center">{item.category}</td>
                                    <td className="text-center">{item.date}</td>
                                    <td className="text-center">
                                        <Link href={`/result/${item.slug}`} className="sarkari-btn-blue">
                                            View Details
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No results found for current session.</td>
                            </tr>
                        )}
                        {/* Hardcoded extras for demonstration/filling up */}
                        <tr>
                            <td style={{ fontWeight: 'bold' }}>MCBU B.Ed 1st Semester Result {currentYear}</td>
                            <td className="text-center">Result</td>
                            <td className="text-center">Last Week</td>
                            <td className="text-center">
                                <Link href="#" className="sarkari-btn-blue">View Details</Link>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ fontWeight: 'bold' }}>MCBU Revaluation Results {currentYear}</td>
                            <td className="text-center">Result</td>
                            <td className="text-center">Updated</td>
                            <td className="text-center">
                                <Link href="#" className="sarkari-btn-blue">View Details</Link>
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
