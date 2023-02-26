<script lang="ts">
	import Button from '../components/Button.svelte';
	import CallToAction from '../components/CallToAction.svelte';
	import Card from '../components/Card.svelte';
	import Category from '../components/Category.svelte';
	import Heading from '../components/Heading.svelte';
	import Stepper from '../components/Stepper.svelte';
	import { chosenComponent, type ComponentOption } from '../stores';

	const components: ComponentOption[] = [
		{ name: 'button', component: Button },
		{ name: 'category', component: Category },
		{ name: 'card', component: Card },
		{ name: 'heading', component: Heading },
		{ name: 'stepper', component: Stepper },
		{ name: 'call to action', component: CallToAction },
	];

	function setChosenComponent(component: ComponentOption) {
		$chosenComponent = component;
	}
</script>

<h1>Sidebar</h1>
<div class="flex flex-col items-stretch gap-2">
	{#each components as component}
		<button
			on:click={() => setChosenComponent(component)}
			class:bg-slate-100={$chosenComponent === component}
			class="hover:bg-slate-100 active:bg-slate-200 rounded-md py-2 pl-4 pr-2 text-left"
			>{component.name.charAt(0).toUpperCase() + component.name.slice(1)}
		</button>
	{/each}
</div>
