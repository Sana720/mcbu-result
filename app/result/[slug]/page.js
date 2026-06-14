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
        description: `Get direct access to ${result.title} for the 2026-2027 session. Read guides, guidelines, and access official download links here.`,
        alternates: {
            canonical: `/result/${slug}`,
        }
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

    const jsonLdData = [
        {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": result.title,
            "description": `Check details for ${result.title} for academic session ${session}. Access secure guides and official portal links.`,
            "image": "https://www.mcburesults.in/icon.png",
            "datePublished": "2026-06-14T09:00:00Z",
            "dateModified": new Date().toISOString(),
            "author": {
                "@type": "Organization",
                "name": "MCBU Result Guide"
            },
            "publisher": {
                "@type": "Organization",
                "name": "MCBU Result Guide",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.mcburesults.in/icon.png"
                }
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": `How to download or check ${result.title}?`,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": `To check and download ${result.title}, visit our portal page and follow the multi-step verification process to access the direct download link. You will need your Roll Number and Enrollment ID.`
                    }
                },
                {
                    "@type": "Question",
                    "name": `Is the ${result.title} official?`,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": `This guide provides unofficial guidelines, direct portal shortcuts, and instructions. The official scores are published directly on the Maharaja Chhatrasal Bundelkhand University (MCBU) web portal.`
                    }
                }
            ]
        }
    ];

    return (
        <div style={{ padding: '20px 0' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
            />

            {/* Breadcrumb Navigation */}
            <nav style={{ fontSize: '12px', marginBottom: '15px', color: '#666' }}>
                <Link href="/" style={{ color: '#007bff', textDecoration: 'none' }}>Home</Link> &gt;
                <span style={{ margin: '0 5px' }}>Resource Details</span> &gt;
                <span style={{ color: '#333' }}>{result.title}</span>
            </nav>

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
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Maharaja Chhatrasal Bundelkhand University (MCBU)</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', background: '#f2f2f2', fontWeight: 'bold' }}>Session</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{session}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', background: '#f2f2f2', fontWeight: 'bold' }}>Status</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', color: 'green', fontWeight: 'bold' }}>Active / Declared</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', background: '#f2f2f2', fontWeight: 'bold' }}>Last Updated</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{result.date}</td>
                    </tr>
                </tbody>
            </table>

            {/* Info Bullets */}
            <div style={{ marginBottom: '20px', padding: '0 10px' }}>
                <ul style={{ lineHeight: '1.8' }}>
                    <li>Select the section for {result.title} and choose "Verify Credentials".</li>
                    <li>Click on the direct action link to begin the secure server check.</li>
                    <li>Enter your examination Roll Number and secure session token code.</li>
                    <li>Download your document and verify the details printed on the official scorecard.</li>
                </ul>
            </div>

            {/* Important Links Table - OPTIMIZED FOR SEO */}
            <table className="sarkari-table">
                <thead>
                    <tr>
                        <th colSpan="3">Important Action Links:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ fontWeight: 'bold' }}>{today}</td>
                        <td style={{ fontWeight: 'bold' }}>{result.category === "Admission" ? "Access Admission Rule Book PDF" : "Download Official Result Card"}</td>
                        <td style={{ textAlign: 'center' }}>
                            <Link href={`/download/${result.slug}?step=1`} className="sarkari-btn-blue">
                                {result.category === "Admission" ? "Download Rule Book Now" : "Verify Result Online"}
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }}>09/01/2026</td>
                        <td style={{ fontWeight: 'bold' }}>Obtain Answer Key Objection Portal</td>
                        <td style={{ textAlign: 'center' }}>
                            <Link href="https://mcbu.ac.in/results" target="_blank" className="sarkari-btn-blue">Objection Portal Link</Link>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }}>08/01/2026</td>
                        <td style={{ fontWeight: 'bold' }}>View Official Notification Circular</td>
                        <td style={{ textAlign: 'center' }}>
                            <Link href="https://mcbu.ac.in/results" target="_blank" className="sarkari-btn-blue">Open Notification PDF</Link>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }}>15/12/2025</td>
                        <td style={{ fontWeight: 'bold' }}>Download Admit Card / Hall Ticket</td>
                        <td style={{ textAlign: 'center' }}>
                            <Link href="https://mcbu.mponline.gov.in/" target="_blank" className="sarkari-btn-blue">Acquire Admit Card</Link>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }}>--/--/2024</td>
                        <td style={{ fontWeight: 'bold' }}>Pay College/University Fees</td>
                        <td style={{ textAlign: 'center' }}>
                            <Link href="https://mcbu.ac.in/fee-collections" target="_blank" className="sarkari-btn-blue">Submit Fees Portal</Link>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }}>--</td>
                        <td style={{ fontWeight: 'bold' }}>Official University Homepage</td>
                        <td style={{ textAlign: 'center' }}>
                            <a href="https://mcbu.ac.in" target="_blank" className="sarkari-btn-blue">Visit mcbu.ac.in</a>
                        </td>
                    </tr>
                    <tr style={{ background: '#ffffe0' }}>
                        <td style={{ fontWeight: 'bold' }}>=&gt;</td>
                        <td style={{ fontWeight: 'bold', color: '#ff00ff' }}>Join Result Guide Community Group</td>
                        <td style={{ textAlign: 'center' }}>
                            <a href="#" style={{ color: 'green', fontWeight: 'bold' }}>WhatsApp Group</a> | <a href="#" style={{ color: 'blue', fontWeight: 'bold' }}>Telegram Channel</a>
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
