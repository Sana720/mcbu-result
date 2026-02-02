export const metadata = {
    title: "Privacy Policy | MCBU Result Guide",
    description: "Privacy Policy for MCBU Result Guide. Learn how we collect, use, and protect your data.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function PrivacyPolicy() {
    return (
        <div className="container" style={{ padding: '3rem 1rem', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Privacy Policy</h1>
            <div className="card" style={{ padding: '2rem', background: '#fff', border: '1px solid #ddd' }}>
                <p style={{ marginBottom: '1rem' }}>Last updated: February 02, 2026</p>

                <p style={{ marginBottom: '1rem' }}>
                    At MCBU Result Guide, accessible from https://www.mcburesults.in, one of our main priorities is the privacy of our visitors.
                    This Privacy Policy document contains types of information that is collected and recorded by MCBU Result Guide and how we use it.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '1rem' }}>Log Files</h2>
                <p style={{ marginBottom: '1rem' }}>
                    MCBU Result Guide follows a standard procedure of using log files. These files log visitors when they visit websites.
                    All hosting companies do this and a part of hosting services' analytics. The information collected by log files include
                    internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages,
                    and possibly the number of clicks. These are not linked to any information that is personally identifiable.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '1rem' }}>Cookies and Web Beacons</h2>
                <p style={{ marginBottom: '1rem' }}>
                    Like any other website, MCBU Result Guide uses 'cookies'. These cookies are used to store information including visitors'
                    preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the
                    users' experience by customizing our web page content based on visitors' browser type and/or other information.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '1rem' }}>Google DoubleClick DART Cookie</h2>
                <p style={{ marginBottom: '1rem' }}>
                    Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site
                    visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline
                    the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL –
                    <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>https://policies.google.com/technologies/ads</a>
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '1rem' }}>Privacy Policies</h2>
                <p style={{ marginBottom: '1rem' }}>
                    You may consult this list to find the Privacy Policy for each of the advertising partners of MCBU Result Guide.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their
                    respective advertisements and links that appear on MCBU Result Guide, which are sent directly to users' browser.
                    They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of
                    their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '1rem' }}>Third Party Privacy Policies</h2>
                <p style={{ marginBottom: '1rem' }}>
                    MCBU Result Guide's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult
                    the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their
                    practices and instructions about how to opt-out of certain options.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '1rem' }}>Consent</h2>
                <p style={{ marginBottom: '1rem' }}>
                    By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
                </p>
            </div>
        </div>
    );
}
