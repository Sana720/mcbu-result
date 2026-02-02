import { results } from '@/lib/data'

export default function sitemap() {
    const baseUrl = 'https://www.mcburesults.in'

    // Static routes
    const routes = [
        '',
        '/latest-jobs',
        '/results',
        '/admit-card',
        '/about',
        '/contact',
        '/privacy',
        '/disclaimer',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic routes from results data
    const resultRoutes = results.map((result) => ({
        url: `${baseUrl}/result/${result.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
    }))

    return [...routes, ...resultRoutes]
}
