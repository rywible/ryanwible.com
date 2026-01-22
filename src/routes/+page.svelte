<script>
	import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let isOpen = $state(false);

    onMount(() => {
        // If device has no hover capability (mobile/tablet), open automatically
        if (window.matchMedia('(hover: none)').matches) {
            setTimeout(() => {
                isOpen = true;
            }, 1000);
        }
    });
</script>

<svelte:head>
	<title>Ryan Wible</title>
	<meta name="description" content="Personal website and development blog of Ryan Wible." />
</svelte:head>

<section class="flex h-full flex-col items-center justify-center pb-9">
	<!-- The Temple Gate -->
	<a href="/blog" class="group relative cursor-pointer" aria-label="Enter Archive">
		<!-- Door Container with Perspective -->
		<!-- Added py-12 to ensure 3D elements don't get clipped vertically -->
		<!-- Used viewport-relative height (h-[60vh]) with max-heights to ensure responsiveness on small screens -->
		<!-- Used aspect-ratio to maintain the gate proportions without fixed widths -->
		<div class="group relative h-[60vh] max-h-[26rem] w-auto aspect-[7/13] py-12 perspective-[1000px] md:max-h-[30rem]">
			<!-- The Void Behind (Background) -->
			<!-- Adjusted height to fit within the padding-less visual area -->
			<div class="absolute inset-x-0 inset-y-12 flex items-end justify-center bg-midnight overflow-hidden">
                <!-- Atmospheric Glow -->
				<div
					class="absolute bottom-0 h-full w-full bg-gradient-to-t from-moonlight/40 via-moonlight/15 to-transparent blur-sm transition-opacity delay-100 duration-1000 {isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}"
				></div>
                <!-- Core Intensity -->
                <div
					class="absolute bottom-0 h-1/2 w-3/4 bg-gradient-to-t from-parchment/10 via-moonlight/20 to-transparent blur-xl transition-opacity delay-100 duration-1000 {isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}"
				></div>
			</div>

			<!-- The Door Posts (Static Sides Only) -->
			<!-- Removed top/bottom borders so the opening is clear -->
			<div
				class="pointer-events-none absolute inset-x-0 inset-y-12 z-20 border-r border-l border-parchment/20"
			></div>

            <!-- The Panels (3D Objects) -->
            <div class="absolute inset-y-12 inset-x-0 flex [transform-style:preserve-3d] z-10 perspective-origin-center">
                <!-- Left Panel -->
                <!-- Increased border opacity to match the frame so it looks solid when closed -->
                <div class="w-1/2 h-full bg-midnight border-y border-r border-parchment/20 
                            transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                            origin-left {isOpen ? '[transform:rotateY(-25deg)]' : 'group-hover:[transform:rotateY(-25deg)]'}">
                </div>
                
                <!-- Right Panel -->
                <div class="w-1/2 h-full bg-midnight border-y border-l border-parchment/20 
                            transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                            origin-right {isOpen ? '[transform:rotateY(25deg)]' : 'group-hover:[transform:rotateY(25deg)]'}">
                </div>
            </div>
		</div>

		<!-- Text hint removed -->
	</a>
</section>
