<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import Icon from '../assets/Icon.svelte';

	export let title: string = 'Shooting Stars';
	export let content: string =
		'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.';
	export let icon: typeof SvelteComponent = Icon;
</script>

<div class="xl:w-1/3 md:w-1/2 p-4">
	<div class="border border-gray-200 p-6 rounded-lg">
		<div
			class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
		>
			<svelte:component this={icon} />
		</div>
		<h2 class="text-lg text-gray-900 font-medium title-font mb-2">
			{title}
		</h2>
		<p class="leading-relaxed text-base">
			{content}
		</p>
	</div>
</div>
