<script lang="ts">
	import { chosenComponent } from '../stores';
</script>

{#if $chosenComponent}
	<svelte:component this={$chosenComponent.component} />
{/if}
