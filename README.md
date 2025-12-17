# AOS Svelte

Animate On Scroll library for Svelte 5. Trigger CSS animations when elements scroll into view.

## Quick Start

```svelte
<script>
	import { aosObserver } from 'svelte-aos';
	import 'svelte-aos/styles/full.css';
</script>

<main {@attach aosObserver()}>
	<div data-aos="fade-up">I animate when scrolled into view</div>
</main>
```

## Installation

```bash
npm install svelte-aos
```

## Usage

### 1. Import Styles

```js
// All animations
import 'svelte-aos/styles/full.css';

// Or selective (smaller bundle)
import 'svelte-aos/styles/base.css'; // Required
import 'svelte-aos/styles/fade.css'; // Optional
import 'svelte-aos/styles/zoom.css'; // Optional
import 'svelte-aos/styles/flip.css'; // Optional
import 'svelte-aos/styles/slide.css'; // Optional
import 'svelte-aos/styles/easings.css'; // Optional
```

### 2. Add Observer

**Svelte 5 attachment:**

```svelte
<main {@attach aosObserver()}>
	<!-- elements with data-aos will animate -->
</main>
```

**Svelte action:**

```svelte
<main use:aosAction>
	<!-- elements with data-aos will animate -->
</main>
```

### 3. Add Animations

```svelte
<div data-aos="fade-up">Fade up</div>
<div data-aos="zoom-in">Zoom in</div>
<div data-aos="flip-left">Flip left</div>
```

Or use the `toAosAttributes` helper to generate attributes programmatically.

```svelte
<script>
	import { toAosAttributes } from 'svelte-aos';
	const attrs = toAosAttributes({
		animation: 'fade-up',
		delay: 150,
		duration: 400,
		once: true
	});
</script>

<div {...attrs}>Animated</div>
<!-- or inline -->
<div data-aos="fade-up" {...toAosAttributes({ delay: 150, duration: 400, once: true })}>
	Animated
</div>
```

## Animations

### Fade

```text
fade  fade-up  fade-down  fade-left  fade-right
fade-up-left  fade-up-right  fade-down-left  fade-down-right
```

### Zoom

```text
zoom-in  zoom-in-up  zoom-in-down  zoom-in-left  zoom-in-right
zoom-out  zoom-out-up  zoom-out-down  zoom-out-left  zoom-out-right
```

### Flip

```text
flip-up  flip-down  flip-left  flip-right
```

### Slide

```text
slide-up  slide-down  slide-left  slide-right
```

## Per-Element Options

```svelte
<!-- Duration (ms) -->
<div data-aos="fade" data-aos-duration="1000">Slow fade</div>

<!-- Delay (ms) -->
<div data-aos="fade" data-aos-delay="300">Delayed</div>

<!-- Easing -->
<div data-aos="fade" data-aos-easing="ease-out-back">Bouncy</div>

<!-- Animate only once -->
<div data-aos="fade" data-aos-once>Once only</div>
```

### Staggered Animation

```svelte
<div data-aos="fade-up" data-aos-delay="0">First</div>
<div data-aos="fade-up" data-aos-delay="100">Second</div>
<div data-aos="fade-up" data-aos-delay="200">Third</div>
```

## Easings

```text
linear  ease  ease-in  ease-out  ease-in-out
ease-in-back  ease-out-back  ease-in-out-back
ease-in-sine  ease-out-sine  ease-in-out-sine
ease-in-quad  ease-out-quad  ease-in-out-quad
ease-in-cubic  ease-out-cubic  ease-in-out-cubic
ease-in-quart  ease-out-quart  ease-in-out-quart
```

## Global Options

```svelte
<main {@attach aosObserver({
  threshold: 0.1,         // 0-1, visibility ratio to trigger
  offset: 120,            // px from viewport edge
  duration: 600,          // default duration (ms)
  delay: 0,               // default delay (ms)
  easing: 'ease',         // default easing
  once: false,            // animate only once
  disable: false,         // disable all animations
  anchorPlacement: 'top-bottom'
})}>
```

### Disable Option

```js
// Disable on device type
aosObserver({ disable: 'mobile' }); // 'mobile' | 'tablet' | 'desktop'

// Disable entirely
aosObserver({ disable: true });

// Custom condition
aosObserver({ disable: () => window.innerWidth < 768 });
```

## API

### aosObserver(options?)

Svelte 5 attachment. Observes all `[data-aos]` elements inside the container, this is where all the magic happens, it uses a mutation observer and an intersection observer under the hood.

```svelte
<main {@attach aosObserver({ once: true })}>
	<div data-aos="fade">...</div>
</main>
```

### aosAction

Svelte action (use: directive). Same options as `aosObserver`.

```svelte
<main use:aosAction={{ threshold: 0.2 }}>
	<div data-aos="fade">...</div>
</main>
```

### toAosAttributes(options)

Generate attributes programmatically:

```svelte
<script>
  import { toAosAttributes } from 'svelte-aos';

  const attrs = toAosAttributes({
    animation: 'fade-up',
    delay: 150,
    duration: 400,
    once: true
  });
</script>

<div {...attrs}>Animated</div>

<!-- Equivalent to: -->
<div data-aos="fade-up" data-aos-delay="150" data-aos-duration="400" data-aos-once>
```

## CSS Files

| File          | Contents                                 |
| ------------- | ---------------------------------------- |
| `base.css`    | Core setup, CSS variables (**required**) |
| `fade.css`    | Fade animations                          |
| `zoom.css`    | Zoom animations                          |
| `flip.css`    | Flip animations                          |
| `slide.css`   | Slide animations                         |
| `easings.css` | Custom easing functions                  |
| `full.css`    | All of the above                         |

## Examples

### Basic Page

```svelte
<script>
	import { aosObserver } from 'svelte-aos';
	import 'svelte-aos/styles/full.css';
</script>

<main {@attach aosObserver()}>
	<section>
		<h1 data-aos="fade-down">Welcome</h1>
		<p data-aos="fade-up" data-aos-delay="100">Scroll to see more</p>
	</section>

	<section>
		<div data-aos="fade-right">Card 1</div>
		<div data-aos="fade-right" data-aos-delay="100">Card 2</div>
		<div data-aos="fade-right" data-aos-delay="200">Card 3</div>
	</section>
</main>
```

### Animate Once

```svelte
<main {@attach aosObserver({ once: true })}>
	<div data-aos="zoom-in">Animates once, stays visible</div>
</main>
```

### With Dynamic Content

```svelte
<script>
	import { aosObserver } from 'svelte-aos';
	import 'svelte-aos/styles/full.css';

	let items = $state([]);

	async function loadMore() {
		items = [...items, ...(await fetchItems())];
	}
</script>

<!-- MutationObserver auto-detects new [data-aos] elements -->
<main {@attach aosObserver()}>
	{#each items as item, i}
		<div data-aos="fade-up" data-aos-delay={i * 50}>{item.name}</div>
	{/each}
	<button onclick={loadMore}>Load More</button>
</main>
```

### Minimal Bundle (Fade Only)

```svelte
<script>
	import { aosObserver } from 'svelte-aos';
	import 'svelte-aos/styles/base.css';
	import 'svelte-aos/styles/fade.css';
</script>

<main {@attach aosObserver()}>
	<div data-aos="fade-up">Only fade animations available</div>
</main>
```

## License

MIT
