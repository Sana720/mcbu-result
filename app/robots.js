export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/download/'],
        },
        sitemap: 'https://www.mcburesults.in/sitemap.xml',
    }
}
