<script lang="ts">
	const { data } = $props();

	const categories = $derived(data.categories);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<p style="color: var(--color-gray1)">gray1</p>
<p style="color: var(--color-gray2)">gray2</p>
<p style="color: var(--color-gray3)">gray3</p>
<p style="color: var(--color-gray4)">gray4</p>
<p style="color: var(--color-gray5)">gray5</p>

{#each categories as category}
	<p>{category}</p>
{/each}
