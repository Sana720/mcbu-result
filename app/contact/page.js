export const metadata = {
    title: "Contact Us | MCBU Result",
    description: "Contact MCBU Result team for support, feedback, or to report issues. Note: We are not the official university helpdesk.",
};

export default function Contact() {
    return (
        <div className="container" style={{ padding: '3rem 1rem', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Contact Us</h1>
            <div className="card" style={{ padding: '2rem' }}>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    If you have any queries regarding the content on this website, or if you find any broken links/errors, please feel free to contact us.
                </p>

                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text)' }}>Email</h3>
                    <p style={{ fontSize: '1.1rem', color: 'var(--secondary)' }}>support@mcbuguide.com</p>
                </div>

                <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '6px' }}>
                    <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Note regarding University Inquiries:</h3>
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>
                        We cannot help with mark corrections, re-evaluation forms, or degree certificates. For such official matters, please contact the MCBU University administration directly or visit their campus in Chhatarpur.
                    </p>
                </div>
            </div>
        </div>
    );
}
