<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Writing | Ryan Wible</title>
	<meta
		name="description"
		content="Devlog and writing on Wrela, programming languages, and game development."
	/>
	<meta property="og:title" content="Writing | Ryan Wible" />
	<meta
		property="og:description"
		content="Devlog and writing on Wrela, programming languages, and game development."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ryanwible.com/blog" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<section class="flex flex-col">
	<!-- Scrollable List Container -->
	<div class="space-y-16 pb-12">
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
