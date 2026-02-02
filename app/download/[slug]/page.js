"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { useSearchParams, useParams } from "next/navigation";

// Mock data fetcher (in real app, simpler to pass data via props if this was a server component, 
// but for this interactive flow, we just use the ID)
import { results } from "@/lib/data";

export default function DownloadProcess() {
    const [timeLeft, setTimeLeft] = useState(10);
    const searchParams = useSearchParams();
    const params = useParams(); // Use hook for params in client component
    const step = parseInt(searchParams.get("step") || "1");

    // Handle case where params might not be ready
    if (!params?.slug) return <div>Loading...</div>;

    const result = results.find((r) => r.slug === params.slug);

    // Auto-redirect or timer logic
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    if (!result) return <div>Result Not Found</div>;

    return (
        <div className="container" style={{ padding: '40px 20px', maxWidth: '800px', textAlign: 'center' }}>

            <div style={{ marginBottom: '30px' }}>
                <h1 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '10px' }}>
                    {timeLeft > 0 ? "Please Wait..." : "Download Link Generated"}
                </h1>
                <p style={{ fontSize: '16px', color: '#555' }}>
                    {timeLeft > 0
                        ? "We are verifying the server status..."
                        : "Your secure link is ready. Click below to proceed."}
                </p>
            </div>

            {/* Ad Placeholder Box */}
            <div style={{
                width: '100%', height: '250px', background: '#eee',
                border: '1px dashed #ccc', margin: '20px 0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#999'
            }}>
                [ Ad Space - Responsive ]
            </div>

            {/* Action Area */}
            <div style={{ padding: '20px', background: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}>

                {timeLeft > 0 ? (
                    <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#d9534f' }}>
                        Please Wait {timeLeft} Seconds...
                    </div>
                ) : (
                    <div>
                        <div style={{ marginBottom: '15px', color: 'green', fontWeight: 'bold' }}>
                            Link Ready!
                        </div>

                        <a
                            href={result.officialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                            style={{
                                background: '#28a745', color: 'white', padding: '15px 30px',
                                fontSize: '18px', borderRadius: '4px', textDecoration: 'none',
                                display: 'inline-block', fontWeight: 'bold'
                            }}
                        >
                            Download Result Now
                        </a>
                    </div>
                )}
            </div>

            <div style={{ marginTop: '30px', fontSize: '12px', color: '#777' }}>
                Disclaimer: This process helps us maintain the server. Thank you for your patience.
            </div>
        </div>
    );
}
