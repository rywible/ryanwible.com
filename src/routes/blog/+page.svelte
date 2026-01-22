<script lang="ts">
    let { data } = $props();
</script>

<svelte:head>
	<title>Writing | Ryan Wible</title>
</svelte:head>

<section class="h-full flex flex-col">
    <!-- Scrollable List Container -->
    <!-- 
        flex-1: takes remaining height
        overflow-y-auto: allows scrolling
        scrollbar-hide: (Tailwind plugin needed or custom css) 
    -->
    <div class="flex-1 overflow-y-auto pr-4 -mr-4 pb-12 space-y-16 mask-fade-bottom">
        {#each data.posts as post}
            <article class="group relative">
                <a href="/blog/{post.slug}" class="block">
                    <div class="flex flex-col md:flex-row md:items-baseline md:gap-8 mb-2">
                        <h2 class="font-serif text-xl md:text-2xl text-parchment group-hover:text-moonlight transition-colors duration-300">
                            {post.title}
                        </h2>
                        <time class="font-sans text-[10px] md:text-xs tracking-widest opacity-40 uppercase shrink-0 mt-1 md:mt-0">
                            {post.date}
                        </time>
                    </div>
                    <p class="font-sans text-sm opacity-60 font-light max-w-lg leading-relaxed group-hover:opacity-80 transition-opacity duration-300">
                        {post.excerpt}
                    </p>
                </a>
                <!-- Decorative line that appears on hover -->
                <div class="absolute -left-6 top-2 bottom-2 w-[1px] bg-moonlight opacity-0 scale-y-0 group-hover:opacity-40 group-hover:scale-y-100 transition-all duration-500 origin-top"></div>
            </article>
        {/each}
    </div>
</section>

<style>
    /* Custom scrollbar styling for Webkit */
    div::-webkit-scrollbar {
        width: 4px;
    }
    div::-webkit-scrollbar-track {
        background: transparent;
    }
    div::-webkit-scrollbar-thumb {
        background-color: rgba(229, 229, 229, 0.1);
        border-radius: 4px;
    }
    div::-webkit-scrollbar-thumb:hover {
        background-color: rgba(122, 140, 158, 0.3);
    }
</style>
