import type { SvelteComponent } from 'svelte';
import { writable } from 'svelte/store';

export type ComponentOption = {
	name: string;
	component: typeof SvelteComponent;
};

export const chosenComponent = writable<ComponentOption>(null);
