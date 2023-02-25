<script>
	import Canvas from './Canvas.svelte';
	import Sidebar from './Sidebar.svelte';
</script>

<div class="flex h-screen">
	<div class="w-1/5 shadow-lg p-6">
		<Sidebar />
	</div>

	<div class="grow p-6">
		<Canvas />
	</div>
</div>
