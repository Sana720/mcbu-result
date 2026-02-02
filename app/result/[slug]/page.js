import { results } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDynamicYear, getCurrentSession } from "@/lib/session";

// Generate static params for all known results
export async function generateStaticParams() {
    return results.map((result) => ({
        slug: result.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const result = results.find((r) => r.slug === slug);
    if (!result) return { title: "Result Not Found" };

    return {
        title: `${result.title} | MCBU Result Guide`,
        description: `Check your ${result.title} here. Download MCBU Chhatarpur mark list.`,
    };
}

export default async function ResultPage({ params }) {
    const { slug } = await params;
    const result = results.find((r) => r.slug === slug);


    if (!result) {
        notFound();
    }

    // Dynamic Date Helpers
    const year = getDynamicYear();
    const nextYear = year + 1;
    const session = getCurrentSession();
    const today = new Date().toLocaleDateString('en-GB');

    return (
        <div style={{ padding: '20px 0' }}>

            {/* Title Header */}
            <h1 style={{
                fontSize: '22px',
                color: 'var(--primary)',
                fontWeight: 'bold',
                textAlign: 'center',
                borderBottom: '2px solid #ccc',
                paddingBottom: '10px',
                marginBottom: '20px'
            }}>
                {result.title}
            </h1>

            {/* Info Table */}
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', fontSize: '14px', border: '1px solid #ddd' }}>
                <tbody>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', background: '#f2f2f2', fontWeight: 'bold', width: '30%' }}>Exam Name</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{result.title}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', background: '#f2f2f2', fontWeight: 'bold' }}>University</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Maharaja Chhatrasal Bundelkhand University</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', background: '#f2f2f2', fontWeight: 'bold' }}>Session</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{session}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', background: '#f2f2f2', fontWeight: 'bold' }}>Result Status</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', color: 'green', fontWeight: 'bold' }}>Declared</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', background: '#f2f2f2', fontWeight: 'bold' }}>Date</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{result.date}</td>
                    </tr>
                </tbody>
            </table>

            {/* Info Bullets */}
            <div style={{ marginBottom: '20px', padding: '0 10px' }}>
                <ul style={{ lineHeight: '1.8' }}>
                    <li> Recruitment of {result.title} section, click on "Result".</li>
                    <li> Click on the link and a new page appears on your screen.</li>
                    <li> Enter your registration number and password.</li>
                    <li> Download your Result {year} for future reference.</li>
                </ul>
            </div>

            {/* Important Links Table - EXACT REPLICATION */}
            <table className="sarkari-table">
                <thead>
                    <tr>
                        <th colSpan="3">Important Links:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ fontWeight: 'bold' }}>{today}</td>
                        <td style={{ fontWeight: 'bold' }}>Download Result</td>
                        <td style={{ textAlign: 'center' }}>
                            <Link href={`/download/${result.slug}?step=1`} className="sarkari-btn-blue">
                                Click Here
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }}>09/01/2026</td>
                        <td style={{ fontWeight: 'bold' }}>Download Answer Key/ Objection</td>
                        <td style={{ textAlign: 'center' }}>
                            <Link href="https://mcbu.ac.in/results" target="_blank" className="sarkari-btn-blue">Click Here</Link>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }}>08/01/2026</td>
                        <td style={{ fontWeight: 'bold' }}>Download Answer Key Notice</td>
                        <td style={{ textAlign: 'center' }}>
                            <Link href="https://mcbu.ac.in/results" target="_blank" className="sarkari-btn-blue">Click Here</Link>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }}>15/12/2025</td>
                        <td style={{ fontWeight: 'bold' }}>Download Admit Card</td>
                        <td style={{ textAlign: 'center' }}>
                            <Link href="https://mcbu.mponline.gov.in/" target="_blank" className="sarkari-btn-blue">Click Here</Link>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }}>--/--/2024</td>
                        <td style={{ fontWeight: 'bold' }}>Pay Exam/College Fees</td>
                        <td style={{ textAlign: 'center' }}>
                            <Link href="https://mcbu.ac.in/fee-collections" target="_blank" className="sarkari-btn-blue">Click Here</Link>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }}>--</td>
                        <td style={{ fontWeight: 'bold' }}>Official Website</td>
                        <td style={{ textAlign: 'center' }}>
                            <a href="https://mcbu.ac.in" target="_blank" className="sarkari-btn-blue">Click Here</a>
                        </td>
                    </tr>
                    <tr style={{ background: '#ffffe0' }}>
                        <td style={{ fontWeight: 'bold' }}>=&gt;</td>
                        <td style={{ fontWeight: 'bold', color: '#ff00ff' }}>Join Result Guide Channel</td>
                        <td style={{ textAlign: 'center' }}>
                            <a href="#" style={{ color: 'green', fontWeight: 'bold' }}>Whatsapp</a> | <a href="#" style={{ color: 'blue', fontWeight: 'bold' }}>Telegram</a>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Share Buttons */}
            <div style={{ margin: '20px 0', padding: '10px', background: '#e9ecef', borderRadius: '4px' }}>
                <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Share:</span>
                <button style={{ marginRight: '5px', padding: '5px 10px', background: '#3b5998', color: 'white', border: 'none' }}>F</button>
                <button style={{ marginRight: '5px', padding: '5px 10px', background: '#00acee', color: 'white', border: 'none' }}>T</button>
                <button style={{ padding: '5px 10px', background: '#25d366', color: 'white', border: 'none' }}>W</button>
            </div>

            {/* Social Bar */}
            <div className="social-bar">
                <a href="#" className="social-btn btn-android">Android App</a>
                <a href="#" className="social-btn btn-facebook">Join Facebook</a>
                <a href="#" className="social-btn btn-whatsapp">Join Whatsapp</a>
                <a href="#" className="social-btn btn-telegram">Join Telegram</a>
            </div>

            <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Discover more</h3>
                <p style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Career counseling sessions &gt;</p>
                <p style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Highlighters and pens &gt;</p>
            </div>

        </div>
    );
}
