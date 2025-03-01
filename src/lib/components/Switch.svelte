<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';

	interface Props {
		on: boolean;
		onclick: MouseEventHandler<HTMLButtonElement>;
	}

	let { on, onclick }: Props = $props();
	let btn: HTMLDivElement | null = $state(null);

	$effect(function toggle() {
		if (btn) {
			const dx = on ? 12 : 0;
			btn.style.transform = `translateX(${dx}px)`;
		}
	});
</script>

<button class="container" aria-label="switch" {onclick}>
	<div class="switch" class:on bind:this={btn}></div>
</button>

<style>
	.container {
		width: 42px;
		height: 30px;
		border-radius: 15px;
		border: 3px solid var(--color-gray3);
		background-color: var(--color-gray1);
		cursor: pointer;
		position: relative;
	}

	.switch {
		width: 20px;
		height: 20px;
		border-radius: 10px;
		background-color: var(--color-gray3);
		position: absolute;
		top: 2px;
		left: 2px;

		transition: transform 0.2s;
	}
</style>
