export const metadata = {
    title: "Terms and Conditions | MCBU Result Guide",
    description: "Terms and Conditions for using MCBU Result Guide.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function TermsAndConditions() {
    return (
        <div className="container" style={{ padding: '3rem 1rem', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Terms and Conditions</h1>
            <div className="card" style={{ padding: '2rem', background: '#fff', border: '1px solid #ddd' }}>
                <p style={{ marginBottom: '1rem' }}>Last updated: February 02, 2026</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '1rem' }}>1. Introduction</h2>
                <p style={{ marginBottom: '1rem' }}>
                    Welcome to MCBU Result Guide! These terms and conditions outline the rules and regulations for the use of MCBU Result Guide's Website, located at https://www.mcburesults.in.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '1rem' }}>2. Intellectual Property Rights</h2>
                <p style={{ marginBottom: '1rem' }}>
                    Other than the content you own, under these Terms, MCBU Result Guide and/or its licensors own all the intellectual property rights and materials contained in this Website.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '1rem' }}>3. Restrictions</h2>
                <p style={{ marginBottom: '1rem' }}>
                    You are specifically restricted from all of the following:
                </p>
                <ul style={{ listStyleType: 'disc', marginLeft: '20px', marginBottom: '1rem' }}>
                    <li>publishing any Website material in any other media;</li>
                    <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
                    <li>publicly performing and/or showing any Website material;</li>
                    <li>using this Website in any way that is or may be damaging to this Website;</li>
                    <li>using this Website in any way that impacts user access to this Website;</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '1rem' }}>4. No Warranties</h2>
                <p style={{ marginBottom: '1rem' }}>
                    This Website is provided "as is," with all faults, and MCBU Result Guide express no representations or warranties, of any kind related to this Website or the materials contained on this Website.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '1rem' }}>5. Limitation of Liability</h2>
                <p style={{ marginBottom: '1rem' }}>
                    In no event shall MCBU Result Guide, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '1rem' }}>6. Variation of Terms</h2>
                <p style={{ marginBottom: '1rem' }}>
                    MCBU Result Guide is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
                </p>
            </div>
        </div>
    );
}
