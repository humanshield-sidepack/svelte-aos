<script>
	import AOS from '$lib/no-mutation/AOS.svelte';
	import { aos, aosAction } from '$lib/no-mutation/aos.ts';
	import '$lib/styles/full.css';
</script>

<AOS
	options={{
		disable: false
	}}
/>

<div class="full-screen">
	<h2 data-aos="fade-up" {@attach aos({ animation: 'fade-up' })}>AOS The svelte way</h2>
	<p
		data-aos="zoom-in-up"
		{@attach aos({
			animation: 'zoom-in-up',
			duration: 1000,
			easing: 'ease-in-sine'
		})}
	>
		This is a simple example of using AOS in Svelte with custom animation.
	</p>
</div>

<div class="full-screen">
	<h2 {@attach aos({ animation: 'fade-up' })}>AOS The svelte way</h2>
	<p {@attach aos({ animation: 'zoom-in-up', duration: 1000, easing: 'ease-in-sine' })}>
		This is a simple example of using AOS in Svelte with custom animation.
	</p>
</div>
<div class="full-screen">
	<h2 {@attach aos({ animation: 'fade-up' })}>AOS The svelte way</h2>
	<p {@attach aos({ animation: 'zoom-in-up', duration: 1000, easing: 'ease-in-sine' })}>
		This is a simple example of using AOS in Svelte with custom animation.
	</p>
</div>
<div class="full-screen">
	<h2 {@attach aos({ animation: 'fade-up' })}>AOS The svelte way</h2>
	<p {@attach aos({ animation: 'zoom-in-up', duration: 1000, easing: 'ease-in-sine' })}>
		This is a simple example of using AOS in Svelte with custom animation.
	</p>
</div>
<div class="full-screen">
	<h2 {@attach aos({ animation: 'fade-up' })}>AOS The svelte way</h2>
	<p {@attach aos({ animation: 'zoom-in-up', duration: 1000, easing: 'ease-in-sine' })}>
		This is a simple example of using AOS in Svelte with custom animation.
	</p>
</div>
<div class="full-screen">
	<h2 data-aos="slide-left" {@attach aos({ animation: 'slide-left' })}>AOS The svelte way</h2>
	<p
		use:aosAction={{
			duration: 1000,
			easing: 'ease-in-sine',
			animation: 'slide-right',
			distance: '50%'
		}}
	>
		This is a simple example of using AOS in Svelte with custom animation.
	</p>
</div>

<style>
	.full-screen {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		margin: 0;
	}

	.full-screen:nth-child(odd) {
		background-color: #f9f9f9;
	}

	h2 {
		margin-bottom: 1rem;
		font-size: 2.5rem;
	}
</style>
