<script context="module" lang="ts">
	export type Step = {
		stepName: string;
		iconName: string;
		active: boolean;
	};
</script>

<script lang="ts">
	import Icon from '../assets/Icon.svelte';

	export let steps: Step[] = [
		{
			stepName: 'Aanmaken',
			iconName: 'plus-circle',
			active: false,
		},
		{
			stepName: 'Samenvatting',
			iconName: 'clipboard-document-list',
			active: true,
		},
		{
			stepName: 'Afronden',
			iconName: 'check',
			active: false,
		},
	];
</script>

<div class="flex mx-auto flex-wrap mb-8">
	{#each steps as step}
		<div
			class:border-indigo-500={step.active}
			class:text-indigo-500={step.active}
			class:bg-gray-100={step.active}
			class:rounded-t={step.active}
			class:border-gray-200={!step.active}
			class="sm:px-6 py-3 w-1/2 sm:w-auto gap-3 justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider"
		>
			<Icon />
			{step.stepName}
		</div>
	{/each}
</div>
