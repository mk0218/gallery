<script lang="ts">
	import NavbarButton from './navbar/NavbarButton.svelte';
	import { appState, toggleDarkMode } from '../../routes/state.svelte';
	import { Breakpoint } from '$lib/constants';

	interface Props {
		categories?: string[];
	}

	const { categories = [] }: Props = $props();

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

{#if appState.deviceWidth < Breakpoint.MD}
	<!-- Mobile -->
	<nav>
		<NavbarButton icon="menu" onclick={toggleMenu} />
		<NavbarButton icon="home" />
		<NavbarButton icon="tune" />
	</nav>
	{#if showMenu}
		<!-- <div class="menu" in:slide={{ axis: 'x', duration: 2000 }}> -->
		<div class="menu" class:xs={appState.deviceWidth < Breakpoint.SM} bind:this={menu}>
			<span class="close">
				<NavbarButton icon="close" onclick={toggleMenu} />
			</span>
			<div class="controls">
				{#if appState.isDarkMode}
					<NavbarButton icon="light_mode" text="Light Mode" />
				{:else}
					<NavbarButton icon="dark_mode" text="Dark Mode" />
				{/if}
				<NavbarButton icon="person" text="Log in" />
			</div>
			<!-- <label class="toggle-mode">
				<span>Dark Mode</span>
				<Switch on={appState.isDarkMode} onclick={toggleDarkMode} />
			</label> -->
			<div class="categories">
				<NavbarButton large text="Home" />
				{#each categories as category}
					<NavbarButton large text={category} />
				{/each}
			</div>
		</div>
	{/if}
{:else}
	<!-- Desktop -->
	<nav>
		<span class="left">
			<NavbarButton icon="home" />
		</span>
		<span class="right">
			<NavbarButton icon="person" />
		</span>
	</nav>
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
		padding-top: 140px;
		overflow: hidden;

		display: flex;
		flex-direction: column;
		align-items: center;

		/* transform: translateX(-100vw); */
		/* transition: transform 1s; */

		&.xs {
			padding-top: 100px;
		}
	}

	span.close {
		position: absolute;
		top: 12px;
		right: 12px;
	}

	.controls {
		margin-bottom: 26px;
	}

	.controls,
	.categories {
		width: 60%;
		/* max-width: 320px; */
		/* flex: 0 1 280px; */
		display: flex;
		align-items: baseline;
		flex-direction: column;
	}

	.xs > .categories,
	.xs > .controls {
		width: 70%;
	}

	/* .toggle-mode {
		display: flex;
		align-items: center;

		& > *:first-child {
			margin-right: 10px;
		}
	} */
</style>
