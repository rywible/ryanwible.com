import * as config from '$lib/config';

export const prerender = true;

export async function GET() {
	const paths = import.meta.glob('/src/lib/posts/*.md', { eager: true });

	const posts = Object.entries(paths)
		.map(([path, file]: [string, any]) => {
			const slug = path.split('/').pop()?.replace('.md', '');
			return {
				slug,
				...file.metadata
			};
		})
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${config.title}</title>
				<description>${config.description}</description>
				<link>${config.url}</link>
				<atom:link href="${config.url}/rss.xml" rel="self" type="application/xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.excerpt}</description>
							<link>${config.url}/blog/${post.slug}</link>
							<guid isPermaLink="true">${config.url}/blog/${post.slug}</guid>
							<pubDate>${new Date(post.date).toUTCString()}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
}
