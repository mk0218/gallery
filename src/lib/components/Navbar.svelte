<script lang="ts">
	import { DESKTOP_MIN_WIDTH } from '$lib/constants';
	import { slide } from 'svelte/transition';
	import NavbarButton from './navbar/NavbarButton.svelte';
	import Switch from './Switch.svelte';
	import { appState, toggleDarkMode } from '../../routes/state.svelte';

	let innerWidth = $state(0);

	let showMenu = $state(false);
	let menu: HTMLDivElement | null = $state(null);

	function toggleMenu() {
		showMenu = !showMenu;
	}

	$effect(function slideMenu() {
		if (menu) {
			console.log('azSL:d');
			const dx = showMenu ? 100 : 0;
			menu.style.transform = `translateX(${dx}vw)`;
		}
	});
</script>

{#if appState.isDesktop}
	<nav>
		<span class="left">
			<NavbarButton icon="home" />
		</span>
		<span class="right">
			<NavbarButton icon="person" />
		</span>
	</nav>
{:else}
	<nav>
		<NavbarButton icon="menu" onclick={toggleMenu} />
		<NavbarButton icon="home" />
		<NavbarButton icon="tune" />
	</nav>
	{#if showMenu}
		<!-- <div class="menu" in:slide={{ axis: 'x', duration: 2000 }}> -->
		<div class="menu" bind:this={menu}>
			<span class="close">
				<NavbarButton icon="close" onclick={toggleMenu} />
			</span>
			<span class="toggle-mode">
				랄랄라울랄라
				<Switch on={appState.isDarkMode} onclick={toggleDarkMode} />
			</span>
		</div>
	{/if}
{/if}

<svelte:window bind:innerWidth />

<style>
	nav {
		box-sizing: border-box;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 62px;
		background-color: var(--color-bg);
		box-shadow: 0 0.5px 0.5px var(--color-shadow);
		padding: 0 4px;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	div.menu {
		position: fixed;
		box-sizing: border-box;
		top: 0;
		left: -100vw;
		width: 100vw;
		height: 100vh;
		background-color: var(--color-bg);
		box-shadow: 0.5px 0 0.5px var(--color-shadow);
		padding: 120px 40px;
		overflow: hidden;

		/* transform: translateX(-100vw); */
		transition: transform 1s;
	}

	span.close {
		position: absolute;
		top: 12px;
		right: 12px;
	}
</style>
