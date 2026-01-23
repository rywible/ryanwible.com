<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Writing | Ryan Wible</title>
</svelte:head>

<section class="flex h-full flex-col">
	<!-- Scrollable List Container -->
	<!-- 
        flex-1: takes remaining height
        overflow-y-auto: allows scrolling
        scrollbar-hide: (Tailwind plugin needed or custom css) 
    -->
	<div class="mask-fade-bottom -mr-4 flex-1 space-y-16 overflow-y-auto pr-4 pb-12">
		{#each data.posts as post}
			<article class="group relative">
				<a href="/blog/{post.slug}" class="block">
					<div class="mb-2 flex flex-col md:flex-row md:items-baseline md:gap-8">
						<h2
							class="font-serif text-2xl text-parchment transition-colors duration-300 group-hover:text-moonlight md:text-3xl"
						>
							{post.title}
						</h2>
						<time
							class="mt-1 shrink-0 font-sans text-[10px] tracking-widest uppercase opacity-40 md:mt-0 md:text-xs"
						>
							{post.date}
						</time>
					</div>
					<p
						class="max-w-lg font-sans text-sm leading-relaxed font-light opacity-60 transition-opacity duration-300 group-hover:opacity-80"
					>
						{post.excerpt}
					</p>
				</a>
				<!-- Decorative line that appears on hover -->
				<div
					class="absolute top-2 bottom-2 -left-6 w-[1px] origin-top scale-y-0 bg-moonlight opacity-0 transition-all duration-500 group-hover:scale-y-100 group-hover:opacity-40"
				></div>
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
