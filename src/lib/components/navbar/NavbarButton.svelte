<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import Icon from '../Icon.svelte';

	interface Props {
		icon?: string;
		text?: string;
		large?: boolean;
		onclick?: MouseEventHandler<HTMLButtonElement>;
	}

	let { icon, text, large = false, onclick }: Props = $props();
</script>

<button {onclick} class:large>
	{#if icon}<Icon {icon} />{/if}&nbsp;
	{#if text}<span>{text} </span>{/if}
</button>

<style>
	button {
		background: none;
		border: none;
		min-width: 46px;
		height: 46px;
		padding: 0;
		cursor: pointer;
		color: inherit;
		font-size: 1.2em;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	button.large {
		min-width: 54px;
		height: 54px;
		font-size: 1.4em;
	}
</style>
