<script lang="ts">
	import Arrow from '../assets/Arrow.svelte';
	import Icon from '../assets/Icon.svelte';

	export let title: string = 'Shooting stars';
	export let content: string =
		'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.';
	export let moreLink: string = 'Learn More';
</script>

<div class="p-4 md:w-1/3">
	<div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
		<div class="flex items-center mb-3">
			<div
				class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"
			>
				<Icon />
			</div>
			<h2 class="text-gray-900 text-lg title-font font-medium">
				{title}
			</h2>
		</div>
		<div class="flex-grow">
			<p class="leading-relaxed text-base">
				{content}
			</p>
			{#if moreLink}
				<div class="mt-3 text-indigo-500 inline-flex items-center">
					{moreLink}
					<Arrow />
				</div>
			{/if}
		</div>
	</div>
</div>
