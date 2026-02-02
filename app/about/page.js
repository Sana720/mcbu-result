export const metadata = {
    title: "About Us | MCBU Result Guide",
};

export default function About() {
    return (
        <div className="container" style={{ padding: '3rem 1rem', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>About Us</h1>
            <div className="card" style={{ padding: '2rem' }}>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    Welcome to <strong>MCBU Result Guide</strong>. We are a dedicated platform designed to provide students of Maharaja Chhatrasal Bundelkhand University (Chhatarpur) with timely updates regarding their examination results, time tables, and other important notifications.
                </p>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    Our mission is to simplify the process of checking results. The official website can sometimes be difficult to navigate for new students. We bridge that gap by providing direct links and easy-to-understand guides on how to access your academic records.
                </p>
                <p style={{ lineHeight: '1.6', fontStyle: 'italic', borderLeft: '3px solid var(--secondary)', paddingLeft: '1rem' }}>
                    We are not affiliated with the university. We are an independent educational news blog.
                </p>
            </div>
        </div>
    );
}
