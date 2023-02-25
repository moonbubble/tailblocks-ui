<script lang="ts">
	const components: string[] = ['button', 'category', 'card'];
</script>

<h1>Sidebar</h1>
<div class="flex flex-col items-stretch gap-2">
	{#each components as component}
		<button class="hover:bg-slate-100 rounded-md py-2 pl-4 pr-2 text-left"
			>{component.charAt(0).toUpperCase() + component.slice(1)}
		</button>
	{/each}
</div>
