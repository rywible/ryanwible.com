import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
        // Use glob to import the specific file dynamically but safely
        const posts = import.meta.glob('/src/lib/posts/*.md');
        const match = posts[`/src/lib/posts/${params.slug}.md`];

        if (!match) {
            throw new Error('Post not found');
        }

        const post: any = await match();

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
