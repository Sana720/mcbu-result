"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { useSearchParams, useParams, useRouter } from "next/navigation";
import { results } from "@/lib/data";

export default function DownloadProcess() {
    const searchParams = useSearchParams();
    const params = useParams();
    const router = useRouter();
    const step = parseInt(searchParams.get("step") || "1");
    const [timeLeft, setTimeLeft] = useState(5); // 5 seconds per step to keep it quick but engaging

    // Reset timer when step changes
    useEffect(() => {
        setTimeLeft(5);
    }, [step]);

    // Handle case where params might not be ready
    if (!params?.slug) return <div style={{ padding: '20px', textLight: 'center' }}>Loading...</div>;

    const result = results.find((r) => r.slug === params.slug);

    // Timer logic
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    if (!result) return <div style={{ padding: '20px', textAlign: 'center', color: 'red', fontWeight: 'bold' }}>Resource Not Found</div>;

    // Details for each step
    const stepDetails = {
        1: {
            title: "Step 1 of 3: Server Verification",
            description: "Checking server response and establishing secure connection to database...",
            status: timeLeft > 0 ? `Verifying server status... Please wait ${timeLeft}s` : "Server verification completed successfully!",
            nextLink: `/download/${params.slug}?step=2`,
            btnText: "Proceed to Step 2 &rarr;"
        },
        2: {
            title: "Step 2 of 3: Session Authentication",
            description: "Confirming session 2026-27 credentials and bypass tokens...",
            status: timeLeft > 0 ? `Authenticating session details... Please wait ${timeLeft}s` : "Session credentials confirmed!",
            nextLink: `/download/${params.slug}?step=3`,
            btnText: "Proceed to Final Step &rarr;"
        },
        3: {
            title: "Step 3 of 3: Generating Link",
            description: "Finalizing your secure direct download link...",
            status: timeLeft > 0 ? `Generating link... Please wait ${timeLeft}s` : "Link ready! Click below to download.",
            nextLink: result.officialLink,
            btnText: result.category === "Admission" ? "Open Official Admission Portal Now" : "Download Result Now"
        }
    };

    const currentStepDetail = stepDetails[step] || stepDetails[1];

    return (
        <div className="container" style={{ padding: '40px 20px', maxWidth: '800px', textAlign: 'center', margin: '0 auto' }}>
            <div style={{ marginBottom: '30px' }}>
                <h1 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '10px', fontWeight: 'bold' }}>
                    {currentStepDetail.title}
                </h1>
                <p style={{ fontSize: '15px', color: '#555' }}>
                    {currentStepDetail.description}
                </p>
            </div>

            {/* Step Progress Visual Indicator */}
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '300px', margin: '20px auto', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '15px', left: 0, right: 0, height: '4px', background: '#ccc', zIndex: 1 }}></div>
                <div style={{ position: 'absolute', top: '15px', left: 0, width: `${((step - 1) / 2) * 100}%`, height: '4px', background: 'var(--primary)', zIndex: 2, transition: 'width 0.3s ease' }}></div>
                
                {[1, 2, 3].map((s) => (
                    <div key={s} style={{
                        width: '32px', height: '32px', borderRadius: '50%',
                        background: step >= s ? 'var(--primary)' : '#ccc',
                        color: 'white', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', fontWeight: 'bold', zIndex: 3,
                        border: '2px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        {s}
                    </div>
                ))}
            </div>

            {/* Ad Placeholder Box */}
            <div style={{
                width: '100%', height: '250px', background: '#f8f9fa',
                border: '1px dashed #ccc', margin: '25px 0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#666', borderRadius: '8px'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '12px', display: 'block', color: '#aaa', textTransform: 'uppercase', marginBottom: '5px' }}>Advertisement</span>
                    <strong style={{ fontSize: '18px', color: 'var(--primary)' }}>Special Admission Offer & Study Materials 2026-27</strong>
                    <p style={{ fontSize: '12px', color: '#555', marginTop: '5px' }}>Click here to view high quality model papers and guides.</p>
                </div>
            </div>

            {/* Action Area */}
            <div style={{ padding: '30px 20px', background: '#fff', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <div style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 'bold', color: timeLeft > 0 ? '#d9534f' : 'green' }}>
                    {currentStepDetail.status}
                </div>

                {timeLeft > 0 ? (
                    <button disabled style={{
                        background: '#ccc', color: '#888', padding: '12px 24px',
                        fontSize: '16px', borderRadius: '4px', border: 'none',
                        cursor: 'not-allowed', fontWeight: 'bold'
                    }}>
                        Please wait...
                    </button>
                ) : (
                    <div>
                        {step < 3 ? (
                            <Link href={currentStepDetail.nextLink} style={{
                                background: 'var(--primary)', color: 'white', padding: '14px 28px',
                                fontSize: '16px', borderRadius: '4px', textDecoration: 'none',
                                display: 'inline-block', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}>
                                {currentStepDetail.btnText}
                            </Link>
                        ) : (
                            <a href={currentStepDetail.nextLink} target="_blank" rel="noopener noreferrer" style={{
                                background: '#28a745', color: 'white', padding: '16px 32px',
                                fontSize: '18px', borderRadius: '4px', textDecoration: 'none',
                                display: 'inline-block', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }}>
                                {currentStepDetail.btnText}
                            </a>
                        )}
                    </div>
                )}
            </div>

            <div style={{ marginTop: '30px', fontSize: '12px', color: '#777' }}>
                Disclaimer: The download/redirection portal uses verified security steps to prevent bot spam.
            </div>
        </div>
    );
}
