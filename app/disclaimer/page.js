export const metadata = {
    title: "Disclaimer | MCBU Result Guide",
};

export default function Disclaimer() {
    return (
        <div className="container" style={{ padding: '3rem 1rem', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Disclaimer</h1>
            <div className="card" style={{ padding: '2rem' }}>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    <strong>MCBU Result Guide</strong> is an informational blog/portal and is <strong>NOT</strong> the official website of Maharaja Chhatrasal Bundelkhand University (MCBU), Chhatarpur.
                </p>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    We do not claim to be associated with the University or any Government body. The information provided here (results, time tables, notifications) is gathered from the public domain and official sources for the convenience of students.
                </p>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Accuracy of Information</h2>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    While we strive to keep the information accurate and up-to-date, we cannot guarantee its absolute correctness. Students are strictly advised to cross-check all information, including results and dates, with the official website <strong>mcbu.ac.in</strong>.
                </p>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>External Links</h2>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    This website contains links to external websites (such as the official result portal). We have no control over the content and nature of these sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                </p>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Limitation of Liability</h2>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    Under no circumstances shall MCBU Result Guide be liable for any potential loss or damage incurred by the use of information on this website. All actions taken by the user based on the information on this website are strictly at their own risk.
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                    For any official queries, please visit <a href="https://mcbu.ac.in" target="_blank" style={{ color: 'blue' }}>mcbu.ac.in</a>.
                </p>
            </div>
        </div>
    );
}
