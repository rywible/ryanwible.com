<script>
	import { fade } from 'svelte/transition';
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
		<!-- Increased height to h-[26rem] and md:h-[30rem] to compensate for py-12 (6rem total) so the door remains h-80/h-96 visually -->
		<div class="group relative h-[26rem] w-56 py-12 perspective-[1000px] md:h-[30rem] md:w-64">
			<!-- The Void Behind (Background) -->
			<!-- Adjusted height to fit within the padding-less visual area -->
			<div class="absolute inset-x-0 inset-y-12 flex items-end justify-center bg-midnight overflow-hidden">
                <!-- Atmospheric Glow -->
				<div
					class="absolute bottom-0 h-full w-full bg-gradient-to-t from-moonlight/40 via-moonlight/15 to-transparent opacity-0 blur-sm transition-opacity delay-100 duration-1000 group-hover:opacity-100"
				></div>
                <!-- Core Intensity -->
                <div
					class="absolute bottom-0 h-1/2 w-3/4 bg-gradient-to-t from-parchment/10 via-moonlight/20 to-transparent opacity-0 blur-xl transition-opacity delay-100 duration-1000 group-hover:opacity-100"
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
                            origin-left group-hover:[transform:rotateY(-25deg)]">
                </div>
                
                <!-- Right Panel -->
                <div class="w-1/2 h-full bg-midnight border-y border-l border-parchment/20 
                            transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                            origin-right group-hover:[transform:rotateY(25deg)]">
                </div>
            </div>
		</div>

		<!-- Text hint removed -->
	</a>
</section>
