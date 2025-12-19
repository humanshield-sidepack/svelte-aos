# AOS Svelte

Animate On Scroll library for Svelte 5. Trigger CSS animations when elements scroll into view.

This package will give you an easy way to bring scroll-based animations to your Svelte applications using a simple and flexible API.

## ✨ Why AOS Svelte?

- ⚡ **Tiny** — <1KB gzipped JavaScript + <1kb modular CSS
- 🎯 **Optimized Bundle** — Import only what you need for minimal footprint
- 🚀 **Zero Dependencies** — No external dependencies
- 🔧 **Universal Compatibility** — Svelte 4 & 5 support (Actions or Attachments)
- ⚙️ **Highly Performant** — Only tracks and animates elements explicitly marked for animation
- 🎨 **Fully Customizable** — 30+ pre-built animations with flexible configuration

## Installation

```bash
npm install svelte-aos
# or
pnpm add svelte-aos
# or
yarn add svelte-aos
```

## Quick Start

### 1. Import the styles

```js
// Import all animations
import 'svelte-aos/styles/full.css';

// Or import only what you need for smaller bundle
import 'svelte-aos/styles/base.css'; // Required
import 'svelte-aos/styles/fade.css'; // Only fade animations
```

Or in CSS:

```css
/* Import all animations */
@import 'svelte-aos/styles/full.css';

/* Or import only what you need */
@import 'svelte-aos/styles/base.css'; /* Required */
@import 'svelte-aos/styles/fade.css'; /* Only fade animations */
```

### 2. Add the AOS component to your page or layout

```html
<script>
  import { aosAttachment, aosAction, AOS } from 'svelte-aos';
</script>

<AOS options={{ /* options */ }} />

<!-- Rest of your page or layout -->
```

### 3. Add animations to elements

**Svelte 5.29+ (attachment):**

```html
<script>
  import { aosAttachment } from 'svelte-aos';
</script>

<!-- Add data-aos only if you want the element to animate on first load when in viewport -->
<h2 data-aos="fade-up" {@attach aosAttachment({ animation: 'fade-up' })}>
  AOS The Svelte Way
</h2>
```

**Svelte 4.x to 5.28 (action):**

```html
<script>
  import { aosAction } from 'svelte-aos';
</script>

<h2 data-aos="fade" use:aosAction={{ animation: 'fade' }}>
  AOS The Svelte Way
</h2>
```

## Available Animations

### Fade

Opacity + optional translate

```
fade  fade-up  fade-down  fade-left  fade-right
fade-up-left  fade-up-right  fade-down-left  fade-down-right
```

### Zoom

Scale + optional translate

```
zoom-in  zoom-in-up  zoom-in-down  zoom-in-left  zoom-in-right
zoom-out  zoom-out-up  zoom-out-down  zoom-out-left  zoom-out-right
```

### Flip

3D rotation effects

```
flip-up  flip-down  flip-left  flip-right
```

### Slide

Translate from edge (no opacity)

```
slide-up  slide-down  slide-left  slide-right
```

## Per-Element Options

Customize each element with attachment or action parameters:

### Duration

```svelte
<!-- Svelte 5.29+ -->
<div data-aos="fade" {@attach aosAttachment({ animation: 'fade', duration: 1000 })}>

<!-- Svelte 4.x to 5.28 -->
<div data-aos="fade" use:aosAction={{ animation: 'fade', duration: 1000 }}>
```

### Delay

```svelte
<!-- Svelte 5.29+ -->
<div data-aos="fade" {@attach aosAttachment({ animation: 'fade', delay: 300 })}>

<!-- Svelte 4.x to 5.28 -->
<div data-aos="fade" use:aosAction={{ animation: 'fade', delay: 300 }}>
```

### Easing

```svelte
<!-- Svelte 5.29+ -->
<div data-aos="fade" {@attach aosAttachment({ animation: 'fade', easing: 'ease-out-back' })}>

<!-- Svelte 4.x to 5.28 -->
<div data-aos="fade" use:aosAction={{ animation: 'fade', easing: 'ease-out-back' }}>
```

### Animate Once

```svelte
<!-- Svelte 5.29+ -->
<div data-aos="fade" {@attach aosAttachment({ animation: 'fade', once: true })}>

<!-- Svelte 4.x to 5.28 -->
<div data-aos="fade" use:aosAction={{ animation: 'fade', once: true }}>
```

### Staggered Animation

```svelte
<div data-aos="fade-up" {@attach aosAttachment({ animation: 'fade-up', delay: 0 })}>First</div>
<div data-aos="fade-up" {@attach aosAttachment({ animation: 'fade-up', delay: 100 })}>Second</div>
<div data-aos="fade-up" {@attach aosAttachment({ animation: 'fade-up', delay: 200 })}>Third</div>
```

## Available Easings

```
linear    ease    ease-in   ease-out    ease-in-out
ease-in-back    ease-out-back    ease-in-out-back
ease-in-sine     ease-out-sine    ease-in-out-sine
ease-in-quad    ease-out-quad   ease-in-out-quad
ease-in-cubic   ease-out-cubic    ease-in-out-cubic
ease-in-quart   ease-out-quart     ease-in-out-quart
```

## API Reference

### `<AOS />` Component

Add once at the top level of your page or layout. Configures global defaults.

```svelte
<AOS
	options={{
		offset: 120, // Offset from viewport edge (px)
		delay: 0, // Default delay before animation (ms)
		duration: 400, // Default animation duration (ms)
		easing: 'ease', // Default easing function
		once: false, // Animate only once per element
		anchorPlacement: 'top-bottom', // Which position triggers animation
		disable: false, // Disable all animations
		threshold: 0.1 // IntersectionObserver visibility threshold (0-1)
	}}
/>
```

### `aosAttachment` (Svelte 5.29+)

Svelte 5 attachment for individual elements.

```svelte
<div
	data-aos="fade-up"
	{@attach aosAttachment({
		animation: 'fade-up',
		delay: 150,
		duration: 400,
		once: true
	})}
>
	Animated
</div>
```

### `aosAction` (Svelte 4.x to 5.28)

Svelte action for individual elements.

```svelte
<div
	data-aos="fade-up"
	use:aosAction={{
		animation: 'fade-up',
		delay: 150,
		duration: 400,
		once: true
	}}
>
	Animated
</div>
```

> 💡 **Note:** The `data-aos` attribute is only needed if you want the element to animate on first page load when already visible in the viewport.

### Disable Option

Disable all animations globally via the `<AOS />` component:

```svelte
<AOS
  options={{
    // Disable on specific device type
    disable: 'mobile'    // 'mobile' | 'phone' | 'tablet'

    // Or disable entirely
    disable: true

    // Or use a custom function
    disable: () => window.innerWidth < 768
  }}
/>
```

## Selective CSS Imports

Only import the animations you use to reduce bundle size:

| File          | Animations                                | Required    |
| ------------- | ----------------------------------------- | ----------- |
| `base.css`    | Core setup, CSS variables, reduced motion | ✅ Yes      |
| `fade.css`    | fade, fade-up, fade-down, etc.            | Optional    |
| `zoom.css`    | zoom-in, zoom-out variants                | Optional    |
| `flip.css`    | flip-up, flip-down, etc.                  | Optional    |
| `slide.css`   | slide-up, slide-down, etc.                | Optional    |
| `easings.css` | Custom easing functions                   | Optional    |
| `full.css`    | Everything bundled                        | Convenience |

**Example: Only fade animations with custom easings**

```js
import 'svelte-aos/styles/base.css';
import 'svelte-aos/styles/fade.css';
import 'svelte-aos/styles/easings.css';
```

## Examples

### Basic Page

```svelte
<script>
	import { aosAttachment, AOS } from 'svelte-aos';
	import 'svelte-aos/styles/full.css';
</script>

<AOS config={{ once: true, disable: 'mobile' }} />

<main>
	<section>
		<h1 data-aos="fade-down" {@attach aosAttachment({ animation: 'fade-down' })}>Welcome</h1>
		<p data-aos="fade-up" {@attach aosAttachment({ animation: 'fade-up', delay: 100 })}>
			Scroll to see more
		</p>
	</section>

	<section>
		<div data-aos="fade-right" {@attach aosAttachment({ animation: 'fade-right' })}>Card 1</div>
		<div data-aos="fade-right" {@attach aosAttachment({ animation: 'fade-right', delay: 100 })}>
			Card 2
		</div>
		<div data-aos="fade-right" {@attach aosAttachment({ animation: 'fade-right', delay: 200 })}>
			Card 3
		</div>
	</section>
</main>
```

### With Custom Easing

```svelte
<div data-aos="zoom-in" {@attach aosAttachment({ animation: 'zoom-in', easing: 'ease-out-back' })}>
	Bouncy zoom effect
</div>
```

### Contributing

Contributions, issues, and feature requests are welcome! No formal contribution process is set up yet, but feel free to open issues or submit pull requests.

## License

MIT
