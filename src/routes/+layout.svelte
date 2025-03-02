<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import { appState, setDeviceWidth } from './state.svelte';

	let { children, data } = $props();

	let innerWidth = $state(0);
	$effect(() => setDeviceWidth(innerWidth));
	$effect(function initDarkMode() {
		if (window) {
			appState.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		}
	});

	const { categories } = $derived(data);
</script>

<div id="root" class:dark={appState.isDarkMode}>
	<Navbar {categories} />
	<div class="contents">
		{#if children}
			{@render children()}
		{:else}
			Error
		{/if}
	</div>
</div>

<svelte:window bind:innerWidth />

<style>
	:global(:root) {
		--color-bg: #f3fffa;
		--color-fg: #242625;
		--color-gray1: #d1dbd7;
		--color-gray2: #aeb7b3;
		--color-gray3: #8c9390;
		--color-gray4: #696e6c;
		--color-gray5: #474a49;
		--color-shadow: rgba(0, 0, 0, 0.4);
	}

	:global(#root.dark) {
		--color-bg: #242625;
		--color-fg: #f3fffa;
		--color-gray1: #474a49;
		--color-gray2: #696e6c;
		--color-gray3: #8c9390;
		--color-gray4: #aeb7b3;
		--color-gray5: #d1dbd7;
	}

	:global(body) {
		margin: 0;
	}

	:global(#root) {
		width: 100vw;
		height: 100vh;
		overflow-x: hidden;
		overflow-y: scroll;
		background-color: var(--color-bg);
		color: var(--color-fg);
	}

	div.contents {
		padding-top: 62px;
	}
</style>
