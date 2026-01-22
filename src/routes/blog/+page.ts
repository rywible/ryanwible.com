export async function load() {
    // Import all .md files from src/lib/posts
    const paths = import.meta.glob('/src/lib/posts/*.md', { eager: true });
    
    // Transform the imported modules into a sorted array of post objects
    const posts = Object.entries(paths).map(([path, file]: [string, any]) => {
        // Extract slug from filename: /src/lib/posts/my-post.md -> my-post
        const slug = path.split('/').pop()?.replace('.md', '');
        
        return {
            slug,
            ...file.metadata // Frontmatter: title, date, excerpt
        };
    })
    // Sort by date descending
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return { posts };
}
