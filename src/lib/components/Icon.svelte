<script lang="ts">
	interface Props {
		icon: string;
		size?: number;
	}

	let { icon, size }: Props = $props();

	let opsz = $derived(size ?? 32);
	let fontSize = $derived(`${opsz}px`);
	let fontVariationSettings = $derived(`
        'FILL' 0,
        'wght' 200,
        'GRAD' 0,
        'opsz' ${opsz}
    `);
</script>

<span
	style:display="contents"
	style:--font-size={fontSize}
	style:--font-variation-settings={fontVariationSettings}
>
	<span class="material-symbols-rounded">{icon}</span>
</span>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<style>
	.material-symbols-rounded {
		color: var(--color-fg);
		font-size: var(--font-size);
		font-variation-settings: var(--font-variation-settings);
	}
</style>
