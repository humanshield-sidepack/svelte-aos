<script lang="ts">
	import { onMount } from 'svelte';
	import { initAOS } from './aos.ts';
	import type { AOSOptions } from '$lib/types.ts';

	export let options: AOSOptions = {};

	onMount(() => {
		initAOS(options);
	});
</script>
