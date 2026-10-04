import * as config from '$lib/config';

export const prerender = true;

export async function GET() {
	const paths = import.meta.glob('/src/lib/posts/*.md', { eager: true });

	const slugs = Object.keys(paths)
		.map((path) => path.split('/').pop()?.replace('.md', ''))
		.filter((slug): slug is string => !!slug);

	const urls = ['', 'blog', ...slugs.map((slug) => `blog/${slug}`)];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `	<url><loc>${config.url}/${url}</loc></url>`).join('\n')}
</urlset>`.trim();

	return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
