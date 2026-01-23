import { error } from '@sveltejs/kit';

export function entries() {
	const posts = import.meta.glob('/src/lib/posts/*.md', { eager: true });

	return Object.keys(posts)
		.map((path) => {
			const slug = path.split('/').pop()?.replace('.md', '');
			return slug ? { slug } : null;
		})
		.filter((entry): entry is { slug: string } => entry !== null);
}

export async function load({ params }) {
	const posts = import.meta.glob('/src/lib/posts/*.md');
	const match = posts[`/src/lib/posts/${params.slug}.md`];

	if (!match) {
		error(404, `Could not find ${params.slug}`);
	}

	const post: any = await match();

	return {
		content: post.default,
		meta: post.metadata
	};
}
