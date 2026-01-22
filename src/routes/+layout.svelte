<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div
	class="flex h-screen w-full flex-col overflow-hidden selection:bg-moonlight selection:text-midnight"
>
	<!-- Header -->
	<div class="mx-auto w-full max-w-3xl flex-none px-6 md:px-12">
		<header class="fade-in flex items-baseline justify-between py-6 md:py-12">
			<a
				href="/"
				class="font-serif text-lg tracking-wide transition-colors duration-300 hover:text-moonlight md:text-xl"
			>
				RW
			</a>
			<nav
				class="flex gap-6 text-xs font-light tracking-widest uppercase opacity-80 md:gap-8 md:text-sm"
			>
				<a
					href="/"
					class="group relative transition-colors duration-300 hover:text-moonlight {$page.url
						.pathname === '/'
						? 'text-moonlight'
						: ''}"
				>
					Home
					<span
						class="absolute -bottom-2 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-moonlight transition-all duration-300 group-hover:w-full {$page
							.url.pathname === '/'
							? 'w-full'
							: ''}"
					></span>
				</a>
				<a
					href="/blog"
					class="group relative transition-colors duration-300 hover:text-moonlight {$page.url.pathname.startsWith(
						'/blog'
					)
						? 'text-moonlight'
						: ''}"
				>
					Writing
					<span
						class="absolute -bottom-2 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-moonlight transition-all duration-300 group-hover:w-full {$page.url.pathname.startsWith(
							'/blog'
						)
							? 'w-full'
							: ''}"
					></span>
				</a>
			</nav>
		</header>
	</div>

	<main
		class="relative mx-auto flex w-full max-w-3xl flex-1 flex-col overflow-hidden px-6 pb-12 md:px-12 {$page
			.url.pathname === '/'
			? 'fade-in'
			: 'fade-in-up'}"
	>
		{@render children()}
	</main>

	<!-- Footer / External Links -->
	<div class="z-50 mx-auto w-full max-w-3xl flex-none px-6 md:px-12">
		<footer class="fade-in py-6 text-center md:py-8">
			<a
				href="https://github.com/rywible"
				target="_blank"
				rel="noreferrer"
				class="font-sans text-[10px] tracking-[0.3em] uppercase opacity-40 transition-all duration-500 hover:text-moonlight hover:opacity-100"
			>
				Github
			</a>
		</footer>
	</div>
</div>

<style>
	/* Subtle entrance animations */
	.fade-in {
		animation: fadeIn 1.2s ease-out forwards;
		opacity: 0;
	}

	.fade-in-up {
		animation: fadeInUp 1.2s ease-out forwards;
		opacity: 0;
		animation-delay: 0.2s;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
