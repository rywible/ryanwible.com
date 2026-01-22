<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} | Ryan Wible</title>
</svelte:head>

<!-- Wrapper to handle scrolling within the fixed layout -->
<div class="h-full overflow-y-auto pr-2 -mr-2 pb-20 fade-in-up">
    <article class="mt-8 md:mt-12 mb-24">
        <!-- Header -->
        <header class="mb-16 md:mb-20 text-center">
            <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight leading-tight text-parchment opacity-95">
                {data.meta.title}
            </h1>
            <time class="font-sans text-xs tracking-[0.2em] uppercase opacity-40">
                {new Date(data.meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
        </header>

        <!-- Content -->
        <div class="prose prose-invert prose-lg max-w-xl mx-auto 
            prose-headings:font-serif prose-headings:font-light prose-headings:tracking-tight prose-headings:text-parchment
            prose-p:font-sans prose-p:font-light prose-p:leading-loose prose-p:opacity-80 prose-p:text-parchment
            prose-a:text-moonlight prose-a:no-underline prose-a:transition-colors hover:prose-a:text-parchment
            prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:border-moonlight prose-blockquote:text-moonlight prose-blockquote:opacity-80
            prose-strong:font-normal prose-strong:text-parchment prose-strong:opacity-100
            prose-code:text-moonlight prose-code:bg-midnight/50 prose-code:px-1 prose-code:rounded prose-code:font-light
            prose-li:opacity-80 prose-li:font-sans
        ">
            <data.content />
        </div>

        <!-- Footer / Signature -->
        <div class="mt-24 flex justify-center opacity-20">
            <span class="font-serif text-2xl">~</span>
        </div>
    </article>
</div>

<style>
    .fade-in-up {
		animation: fadeInUp 1.2s ease-out forwards;
		opacity: 0;
	}

    @keyframes fadeInUp {
		from { opacity: 0; transform: translateY(10px); }
		to { opacity: 1; transform: translateY(0); }
	}

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
