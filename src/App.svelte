<script lang="ts">
	import { Button } from '@colorfuldots/svelteit';

	export let name: string;
</script>

<main>
	<h1 class="text-6xl text-center text-red-500">Hello {name}!</h1>
	<p class="text-center text-2xl">Visit the <a class="text-blue-400 underline" href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<Button title="Hello Svelteit" primary rounded />
</main>
