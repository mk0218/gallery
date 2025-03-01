<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import Icon from '../Icon.svelte';

	interface Props {
		icon: string;
		onclick?: MouseEventHandler<HTMLButtonElement>;
	}

	let { icon, onclick }: Props = $props();
</script>

<button {onclick}>
	<Icon {icon} />
</button>

<style>
	button {
		background: none;
		border: none;
		width: 46px;
		height: 46px;
		padding: 0;
	}
</style>
