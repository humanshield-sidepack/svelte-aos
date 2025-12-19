<script lang="ts">
	import { aosAttachment, aosAction, AOS } from '../lib/index.ts';

	let copied = $state('');

	function copyToClipboard(text: string, id: string) {
		navigator.clipboard.writeText(text);
		copied = id;
		setTimeout(() => (copied = ''), 2000);
	}

	const installCommands = {
		npm: 'npm install svelte-aos',
		pnpm: 'pnpm add svelte-aos',
		yarn: 'yarn add svelte-aos',
		bun: 'bun add svelte-aos'
	};

	let selectedPM = $state<keyof typeof installCommands>('npm');
</script>

<svelte:head>
	<title>AOS Svelte — Animate On Scroll for Svelte</title>
	<meta
		name="description"
		content="A lightweight, performant scroll animation library for Svelte 5"
	/>
</svelte:head>

<AOS options={{ disable: false }} />

<div class="page">
	<!-- Navigation -->
	<nav class="topnav">
		<a href="/" class="logo">
			<span class="logo-icon">◈</span>
			AOS Svelte
		</a>
		<div class="nav-links">
			<a href="#install">Install</a>
			<a href="#usage">Usage</a>
			<a href="#animations">Animations</a>
			<a href="#api">API</a>
			<a
				title="go to github repo"
				href="https://github.com/humanshield-sidepack/svelte-aos"
				target="_blank"
				rel="noopener noreferrer"
				class="github"
			>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
					<path
						d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
					/>
				</svg>
			</a>
		</div>
	</nav>

	<!-- Hero -->
	<header class="hero">
		<div class="hero-content">
			<div class="badge" data-aos="fade-down" use:aosAction={{ animation: 'fade-down' }}>
				Svelte on scroll animation
			</div>
			<h1 data-aos="fade-up" use:aosAction={{ animation: 'fade-up', delay: 100 }}>
				Animate elements<br />
				<span class="gradient-text">on scroll</span>
			</h1>
			<p class="tagline" data-aos="fade-up" use:aosAction={{ animation: 'fade-up', delay: 200 }}>
				A tiny, performant scroll animation library for Svelte.<br />
				Zero dependencies. Under 1KB gzipped.
			</p>
			<div
				class="hero-actions"
				data-aos="fade-up"
				use:aosAction={{ animation: 'fade-up', delay: 300 }}
			>
				<a href="#install" class="btn-primary">Get Started</a>
				<a href="#animations" class="btn-secondary">See Animations</a>
			</div>
		</div>

		<div class="hero-demo">
			<div
				class="demo-card"
				data-aos="zoom-in"
				{@attach aosAttachment({ animation: 'zoom-in', delay: 400 })}
			>
				<div class="demo-icon">✨</div>
				<span>zoom-in</span>
			</div>
			<div
				class="demo-card"
				data-aos="fade-left"
				{@attach aosAttachment({ animation: 'fade-left', delay: 500 })}
			>
				<div class="demo-icon">←</div>
				<span>fade-left</span>
			</div>
			<div
				class="demo-card"
				data-aos="flip-up"
				{@attach aosAttachment({ animation: 'flip-up', delay: 600 })}
			>
				<div class="demo-icon">↻</div>
				<span>flip-up</span>
			</div>
		</div>
	</header>

	<!-- Stats -->
	<section class="stats">
		<div class="stat" data-aos="fade-up" {@attach aosAttachment({ animation: 'fade-up' })}>
			<span class="stat-value">&lt;1KB</span>
			<span class="stat-label">JavaScript (gzip)</span>
		</div>
		<div
			class="stat"
			data-aos="fade-up"
			{@attach aosAttachment({ animation: 'fade-up', delay: 100 })}
		>
			<span class="stat-value">~2KB</span>
			<span class="stat-label">CSS (full bundle)</span>
		</div>
		<div
			class="stat"
			data-aos="fade-up"
			{@attach aosAttachment({ animation: 'fade-up', delay: 200 })}
		>
			<span class="stat-value">30+</span>
			<span class="stat-label">Animations</span>
		</div>
		<div
			class="stat"
			data-aos="fade-up"
			{@attach aosAttachment({ animation: 'fade-up', delay: 300 })}
		>
			<span class="stat-value">0</span>
			<span class="stat-label">Dependencies</span>
		</div>
	</section>

	<!-- Install -->
	<section id="install" class="section">
		<div class="section-header">
			<span class="section-tag">01</span>
			<h2 data-aos="fade-up" {@attach aosAttachment({ animation: 'fade-up' })}>Installation</h2>
		</div>

		<div
			class="install-box"
			data-aos="fade-up"
			{@attach aosAttachment({ animation: 'fade-up', delay: 100 })}
		>
			<div class="pm-tabs">
				{#each Object.keys(installCommands) as pm}
					<button
						class="pm-tab"
						class:active={selectedPM === pm}
						onclick={() => (selectedPM = pm as keyof typeof installCommands)}
					>
						{pm}
					</button>
				{/each}
			</div>
			<div class="install-command">
				<code>{installCommands[selectedPM]}</code>
				<button
					class="copy-btn"
					onclick={() => copyToClipboard(installCommands[selectedPM], 'install')}
				>
					{copied === 'install' ? '✓' : '⧉'}
				</button>
			</div>
		</div>
	</section>

	<!-- Usage -->
	<section id="usage" class="section dark">
		<div class="section-header">
			<span class="section-tag">02</span>
			<h2 data-aos="fade-up" {@attach aosAttachment({ animation: 'fade-up' })}>Quick Start</h2>
		</div>

		<div class="steps">
			<div
				class="step-card"
				data-aos="fade-right"
				{@attach aosAttachment({ animation: 'fade-right' })}
			>
				<div class="step-number">1</div>
				<h3>Import Styles</h3>
				<p>Add the CSS to your app. Import all or just what you need.</p>
				<div class="code-block">
					<pre><code
							><span class="c">// Import everything</span>
<span class="k">import</span> <span class="s">'svelte-aos/styles/full.css'</span>;

<span class="c">// Or selectively</span>
<span class="k">import</span> <span class="s">'svelte-aos/styles/base.css'</span>; <span class="c"
								>// Required</span
							>
<span class="k">import</span> <span class="s">'svelte-aos/styles/fade.css'</span>; <span class="c"
								>// Optional</span
							></code
						></pre>
				</div>
			</div>

			<div
				class="step-card"
				data-aos="fade-right"
				{@attach aosAttachment({ animation: 'fade-right', delay: 150 })}
			>
				<div class="step-number">2</div>
				<h3>Add AOS Component</h3>
				<p>Place at the top of your layout or page for global configuration.</p>
				<div class="code-block">
					<pre><code
							><span class="t">&lt;script&gt;</span>
  <span class="k">import</span> {'{ AOS }'} <span class="k">from</span> <span class="s"
								>'svelte-aos'</span
							>;
<span class="t">&lt;/script&gt;</span>

<span class="t">&lt;AOS</span> <span class="a">options</span>={'{{'} <span class="c"
								>/* config */</span
							> {'}'}} <span class="t">/&gt;</span></code
						></pre>
				</div>
			</div>

			<div
				class="step-card"
				data-aos="fade-right"
				{@attach aosAttachment({ animation: 'fade-right', delay: 300 })}
			>
				<div class="step-number">3</div>
				<h3>Animate Elements</h3>
				<p>Use attachments (Svelte 5.29+) or actions (Svelte 4+).</p>
				<div class="code-block">
					<pre><code
							><span class="c">&lt;!-- Svelte 5.29+ --&gt;</span>
<span class="t">&lt;div</span>
  <span class="a">data-aos</span>=<span class="s">"fade-up"</span>
  {'{'}<span class="a">@attach</span> aosAttachment({'{'} animation: <span class="s">'fade-up'</span
							> {'}'}){'}'}<span class="t">&gt;</span>
  Hello
<span class="t">&lt;/div&gt;</span>

<span class="c">&lt;!-- Svelte 4 to 5.28 --&gt;</span>
<span class="t">&lt;div</span> <span class="a">data-aos</span>=<span class="s">"fade-up"</span
							> <span class="a">use:</span>aosAction<span class="t">&gt;</span>
  Hello
<span class="t">&lt;/div&gt;</span></code
						></pre>
				</div>
			</div>
		</div>

		<div
			class="info-callout"
			data-aos="fade-up"
			{@attach aosAttachment({ animation: 'fade-up', delay: 100 })}
		>
			<span class="callout-icon">💡</span>
			<p>
				The <code>data-aos</code> attribute enables animation on first page load when the element is already
				visible. Without it, elements only animate when scrolled into view.
			</p>
		</div>
	</section>

	<!-- Animations -->
	<section id="animations" class="section">
		<div class="section-header">
			<span class="section-tag">03</span>
			<h2 data-aos="fade-up" {@attach aosAttachment({ animation: 'fade-up' })}>Animations</h2>
		</div>

		<div class="animation-groups">
			<div class="anim-group" data-aos="fade-up" {@attach aosAttachment({ animation: 'fade-up' })}>
				<h3>
					<span class="group-icon">◐</span>
					Fade
				</h3>
				<p>Opacity transitions with optional movement</p>
				<div class="anim-tags">
					<span class="anim-tag">fade</span>
					<span class="anim-tag">fade-up</span>
					<span class="anim-tag">fade-down</span>
					<span class="anim-tag">fade-left</span>
					<span class="anim-tag">fade-right</span>
					<span class="anim-tag">fade-up-left</span>
					<span class="anim-tag">fade-up-right</span>
					<span class="anim-tag">fade-down-left</span>
					<span class="anim-tag">fade-down-right</span>
				</div>
			</div>

			<div
				class="anim-group"
				data-aos="fade-up"
				{@attach aosAttachment({ animation: 'fade-up', delay: 100 })}
			>
				<h3>
					<span class="group-icon">◎</span>
					Zoom
				</h3>
				<p>Scale transformations</p>
				<div class="anim-tags">
					<span class="anim-tag">zoom-in</span>
					<span class="anim-tag">zoom-in-up</span>
					<span class="anim-tag">zoom-in-down</span>
					<span class="anim-tag">zoom-in-left</span>
					<span class="anim-tag">zoom-in-right</span>
					<span class="anim-tag">zoom-out</span>
					<span class="anim-tag">zoom-out-up</span>
					<span class="anim-tag">zoom-out-down</span>
					<span class="anim-tag">zoom-out-left</span>
					<span class="anim-tag">zoom-out-right</span>
				</div>
			</div>

			<div
				class="anim-group"
				data-aos="fade-up"
				{@attach aosAttachment({ animation: 'fade-up', delay: 200 })}
			>
				<h3>
					<span class="group-icon">◇</span>
					Flip
				</h3>
				<p>3D rotation effects</p>
				<div class="anim-tags">
					<span class="anim-tag">flip-up</span>
					<span class="anim-tag">flip-down</span>
					<span class="anim-tag">flip-left</span>
					<span class="anim-tag">flip-right</span>
				</div>
			</div>

			<div
				class="anim-group"
				data-aos="fade-up"
				{@attach aosAttachment({ animation: 'fade-up', delay: 300 })}
			>
				<h3>
					<span class="group-icon">▷</span>
					Slide
				</h3>
				<p>Pure translation without opacity</p>
				<div class="anim-tags">
					<span class="anim-tag">slide-up</span>
					<span class="anim-tag">slide-down</span>
					<span class="anim-tag">slide-left</span>
					<span class="anim-tag">slide-right</span>
				</div>
			</div>
		</div>

		<!-- Live Preview -->
		<h3 class="preview-title" data-aos="fade-up" {@attach aosAttachment({ animation: 'fade-up' })}>
			Live Preview
		</h3>
		<div class="preview-grid">
			<div
				class="preview-item"
				data-aos="fade-up"
				{@attach aosAttachment({ animation: 'fade-up' })}
			>
				<span>fade-up</span>
			</div>
			<div
				class="preview-item"
				data-aos="fade-down"
				{@attach aosAttachment({ animation: 'fade-down' })}
			>
				<span>fade-down</span>
			</div>
			<div
				class="preview-item"
				data-aos="zoom-in"
				{@attach aosAttachment({ animation: 'zoom-in' })}
			>
				<span>zoom-in</span>
			</div>
			<div
				class="preview-item"
				data-aos="flip-left"
				{@attach aosAttachment({ animation: 'flip-left' })}
			>
				<span>flip-left</span>
			</div>
			<div
				class="preview-item"
				data-aos="slide-right"
				{@attach aosAttachment({ animation: 'slide-right' })}
			>
				<span>slide-right</span>
			</div>
			<div
				class="preview-item"
				data-aos="zoom-out"
				{@attach aosAttachment({ animation: 'zoom-out' })}
			>
				<span>zoom-out</span>
			</div>
		</div>

		<!-- Staggered -->
		<h3 class="preview-title" data-aos="fade-up" {@attach aosAttachment({ animation: 'fade-up' })}>
			Staggered Delays
		</h3>
		<div class="stagger-row">
			{#each [0, 100, 200, 300, 400] as delay, i}
				<div
					class="stagger-item"
					data-aos="fade-up"
					{@attach aosAttachment({ animation: 'fade-up', delay })}
				>
					{delay}ms
				</div>
			{/each}
		</div>
	</section>

	<!-- Options -->
	<section class="section dark">
		<div class="section-header">
			<span class="section-tag">04</span>
			<h2 data-aos="fade-up" {@attach aosAttachment({ animation: 'fade-up' })}>Options</h2>
		</div>

		<div class="options-grid">
			<div class="option-item" data-aos="fade-up" {@attach aosAttachment({ animation: 'fade-up' })}>
				<code class="option-name">duration</code>
				<span class="option-type">number</span>
				<p>Animation duration in milliseconds</p>
				<span class="option-default">Default: 400</span>
			</div>

			<div
				class="option-item"
				data-aos="fade-up"
				{@attach aosAttachment({ animation: 'fade-up', delay: 50 })}
			>
				<code class="option-name">delay</code>
				<span class="option-type">number</span>
				<p>Delay before animation starts</p>
				<span class="option-default">Default: 0</span>
			</div>

			<div
				class="option-item"
				data-aos="fade-up"
				{@attach aosAttachment({ animation: 'fade-up', delay: 100 })}
			>
				<code class="option-name">easing</code>
				<span class="option-type">string</span>
				<p>CSS easing function</p>
				<span class="option-default">Default: 'ease'</span>
			</div>

			<div
				class="option-item"
				data-aos="fade-up"
				{@attach aosAttachment({ animation: 'fade-up', delay: 150 })}
			>
				<code class="option-name">once</code>
				<span class="option-type">boolean</span>
				<p>Animate only once (no reverse)</p>
				<span class="option-default">Default: false</span>
			</div>

			<div
				class="option-item"
				data-aos="fade-up"
				{@attach aosAttachment({ animation: 'fade-up', delay: 200 })}
			>
				<code class="option-name">offset</code>
				<span class="option-type">number</span>
				<p>Offset from viewport edge (px)</p>
				<span class="option-default">Default: 120</span>
			</div>

			<div
				class="option-item"
				data-aos="fade-up"
				{@attach aosAttachment({ animation: 'fade-up', delay: 250 })}
			>
				<code class="option-name">threshold</code>
				<span class="option-type">number</span>
				<p>Visibility ratio to trigger (0-1)</p>
				<span class="option-default">Default: 0.1</span>
			</div>
		</div>

		<h3 class="easing-title" data-aos="fade-up" {@attach aosAttachment({ animation: 'fade-up' })}>
			Available Easings
		</h3>
		<div
			class="easing-grid"
			data-aos="fade-up"
			{@attach aosAttachment({ animation: 'fade-up', delay: 100 })}
		>
			{#each ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'ease-in-back', 'ease-out-back', 'ease-in-out-back', 'ease-in-sine', 'ease-out-sine', 'ease-in-out-sine', 'ease-in-quad', 'ease-out-quad', 'ease-in-out-quad', 'ease-in-cubic', 'ease-out-cubic', 'ease-in-out-cubic', 'ease-in-quart', 'ease-out-quart', 'ease-in-out-quart'] as easing}
				<code class="easing-tag">{easing}</code>
			{/each}
		</div>
	</section>

	<!-- API -->
	<section id="api" class="section">
		<div class="section-header">
			<span class="section-tag">05</span>
			<h2 data-aos="fade-up" {@attach aosAttachment({ animation: 'fade-up' })}>API Reference</h2>
		</div>

		<div class="api-cards">
			<div class="api-card" data-aos="fade-up" {@attach aosAttachment({ animation: 'fade-up' })}>
				<h3>&lt;AOS /&gt;</h3>
				<p>Global configuration component. Place at root level.</p>
				<div class="code-block">
					<pre><code
							><span class="t">&lt;AOS</span>
  <span class="a">options</span>={'{{'}{`
    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false,
    disable: false,
    threshold: 0.1,
    anchorPlacement: 'top-bottom'
  `}{'}'}}
<span class="t">/&gt;</span></code
						></pre>
				</div>
			</div>

			<div
				class="api-card"
				data-aos="fade-up"
				{@attach aosAttachment({ animation: 'fade-up', delay: 100 })}
			>
				<h3>aosAttachment</h3>
				<span class="api-badge">Svelte 5.29+</span>
				<p>Svelte 5 attachment for individual elements.</p>
				<div class="code-block">
					<pre><code
							><span class="t">&lt;div</span>
  {'{'}<span class="a">@attach</span> aosAttachment({'{'}
    animation: <span class="s">'fade-up'</span>,
    delay: 150,
    duration: 400,
    once: true
  {'}'}){'}'}
<span class="t">&gt;</span></code
						></pre>
				</div>
			</div>

			<div
				class="api-card"
				data-aos="fade-up"
				{@attach aosAttachment({ animation: 'fade-up', delay: 200 })}
			>
				<h3>aosAction</h3>
				<span class="api-badge secondary">Svelte 4 - 5.28</span>
				<p>Svelte action for individual elements.</p>
				<div class="code-block">
					<pre><code
							><span class="t">&lt;div</span>
  <span class="a">use:</span>aosAction={'{{'}{`
    animation: 'fade-up',
    delay: 150,
    duration: 400,
    once: true
  `}{'}'}}
<span class="t">&gt;</span></code
						></pre>
				</div>
			</div>

			<div
				class="api-card"
				data-aos="fade-up"
				{@attach aosAttachment({ animation: 'fade-up', delay: 300 })}
			>
				<h3>disable</h3>
				<p>Disable animations globally or conditionally.</p>
				<div class="code-block">
					<pre><code
							><span class="t">&lt;AOS</span> <span class="a">options</span>={'{{'}{`
  // Device type
  disable: 'mobile'  // 'phone' | 'tablet'

  // Boolean
  disable: true

  // Function
  disable: () => window.innerWidth < 768
`}{'}'}} <span class="t">/&gt;</span></code
						></pre>
				</div>
			</div>
		</div>
	</section>

	<!-- CSS Imports -->
	<section class="section dark">
		<div class="section-header">
			<span class="section-tag">06</span>
			<h2 data-aos="fade-up" {@attach aosAttachment({ animation: 'fade-up' })}>
				Selective Imports
			</h2>
		</div>

		<p
			class="section-desc"
			data-aos="fade-up"
			{@attach aosAttachment({ animation: 'fade-up', delay: 50 })}
		>
			Only import the animations you need to minimize bundle size.
		</p>

		<div
			class="imports-table"
			data-aos="fade-up"
			{@attach aosAttachment({ animation: 'fade-up', delay: 100 })}
		>
			<div class="table-row header">
				<span>File</span>
				<span>Contents</span>
				<span>Required</span>
			</div>
			<div class="table-row">
				<code>base.css</code>
				<span>Core setup, CSS variables, reduced motion</span>
				<span class="required">✓ Required</span>
			</div>
			<div class="table-row">
				<code>fade.css</code>
				<span>fade, fade-up, fade-down, etc.</span>
				<span class="optional">Optional</span>
			</div>
			<div class="table-row">
				<code>zoom.css</code>
				<span>zoom-in, zoom-out variants</span>
				<span class="optional">Optional</span>
			</div>
			<div class="table-row">
				<code>flip.css</code>
				<span>flip-up, flip-down, etc.</span>
				<span class="optional">Optional</span>
			</div>
			<div class="table-row">
				<code>slide.css</code>
				<span>slide-up, slide-down, etc.</span>
				<span class="optional">Optional</span>
			</div>
			<div class="table-row">
				<code>easings.css</code>
				<span>Custom easing functions</span>
				<span class="optional">Optional</span>
			</div>
			<div class="table-row">
				<code>full.css</code>
				<span>Everything bundled</span>
				<span class="convenience">Convenience</span>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer>
		<div class="footer-content">
			<div class="footer-brand">
				<span class="logo-icon">◈</span>
				<span>AOS Svelte</span>
			</div>
			<p>Scroll animations for Svelte 5</p>
			<div class="footer-links">
				<a href="/">Main Guide</a>
				<span>·</span>
				<a href="/travel">Travel Demo</a>
				<span>·</span>
				<a href="/ecommerce">E-commerce Demo</a>
				<span>·</span>
				<a
					href="https://github.com/humanshield-sidepack/svelte-aos"
					target="_blank"
					rel="noopener noreferrer">GitHub</a
				>
			</div>
		</div>
	</footer>
</div>

<style>
	* {
		box-sizing: border-box;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
		font-family:
			'Inter',
			system-ui,
			-apple-system,
			sans-serif;
		background: #0a0a0f;
		color: #e4e4e7;
		line-height: 1.6;
		overflow-x: hidden;
	}

	.page {
		min-height: 100vh;
	}

	/* Navigation */
	.topnav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		background: rgba(10, 10, 15, 0.8);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.06);
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 600;
		font-size: 1.1rem;
		color: #fff;
		text-decoration: none;
	}

	.logo-icon {
		color: #8b5cf6;
		font-size: 1.4rem;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.nav-links a {
		color: #a1a1aa;
		text-decoration: none;
		font-size: 0.9rem;
		transition: color 0.2s;
	}

	.nav-links a:hover {
		color: #fff;
	}

	.nav-links .github {
		display: flex;
		color: #71717a;
	}

	.nav-links .github:hover {
		color: #fff;
	}

	/* Hero */
	.hero {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 8rem 2rem 4rem;
		background: radial-gradient(ellipse at top, #1a1a2e 0%, #0a0a0f 70%);
		text-align: center;
		gap: 4rem;
	}

	.hero-content {
		max-width: 700px;
	}

	.badge {
		display: inline-block;
		padding: 0.4rem 1rem;
		background: rgba(139, 92, 246, 0.15);
		border: 1px solid rgba(139, 92, 246, 0.3);
		border-radius: 100px;
		font-size: 0.8rem;
		color: #a78bfa;
		margin-bottom: 1.5rem;
	}

	.hero h1 {
		font-size: 4rem;
		font-weight: 700;
		line-height: 1.1;
		margin: 0 0 1.5rem;
		letter-spacing: -0.02em;
	}

	.gradient-text {
		background: linear-gradient(135deg, #8b5cf6, #ec4899);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.tagline {
		font-size: 1.2rem;
		color: #a1a1aa;
		margin: 0 0 2.5rem;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn-primary {
		padding: 0.85rem 2rem;
		background: linear-gradient(135deg, #8b5cf6, #7c3aed);
		color: #fff;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 500;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(139, 92, 246, 0.4);
	}

	.btn-secondary {
		padding: 0.85rem 2rem;
		background: transparent;
		color: #fff;
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 8px;
		text-decoration: none;
		font-weight: 500;
		transition:
			border-color 0.2s,
			background 0.2s;
	}

	.btn-secondary:hover {
		border-color: rgba(255, 255, 255, 0.4);
		background: rgba(255, 255, 255, 0.05);
	}

	.hero-demo {
		display: flex;
		gap: 1.5rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.demo-card {
		width: 120px;
		height: 120px;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.demo-icon {
		font-size: 2rem;
	}

	.demo-card span {
		font-size: 0.75rem;
		color: #71717a;
	}

	/* Stats */
	.stats {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1px;
		background: rgba(255, 255, 255, 0.06);
	}

	.stat {
		padding: 3rem 2rem;
		background: #0a0a0f;
		text-align: center;
	}

	.stat-value {
		display: block;
		font-size: 2.5rem;
		font-weight: 700;
		color: #fff;
		margin-bottom: 0.25rem;
	}

	.stat-label {
		font-size: 0.9rem;
		color: #71717a;
	}

	/* Sections */
	.section {
		padding: 6rem 2rem;
		max-width: 1100px;
		margin: 0 auto;
	}

	.section.dark {
		background: #111118;
		max-width: 100%;
	}

	.section.dark > * {
		max-width: 1100px;
		margin-left: auto;
		margin-right: auto;
	}

	.section-header {
		margin-bottom: 3rem;
	}

	.section-tag {
		display: inline-block;
		font-size: 0.75rem;
		color: #8b5cf6;
		font-weight: 600;
		letter-spacing: 0.1em;
		margin-bottom: 0.75rem;
	}

	.section h2 {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0;
		color: #fff;
	}

	.section-desc {
		color: #a1a1aa;
		font-size: 1.1rem;
		margin: 0 0 2rem;
	}

	/* Install */
	.install-box {
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 12px;
		overflow: hidden;
		max-width: 500px;
	}

	.pm-tabs {
		display: flex;
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	}

	.pm-tab {
		flex: 1;
		padding: 0.75rem;
		background: transparent;
		border: none;
		color: #71717a;
		font-size: 0.85rem;
		cursor: pointer;
		transition:
			color 0.2s,
			background 0.2s;
	}

	.pm-tab:hover {
		color: #a1a1aa;
	}

	.pm-tab.active {
		color: #fff;
		background: rgba(139, 92, 246, 0.1);
	}

	.install-command {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.25rem;
	}

	.install-command code {
		font-family: 'JetBrains Mono', 'Fira Code', monospace;
		font-size: 0.95rem;
		color: #e4e4e7;
	}

	.copy-btn {
		width: 36px;
		height: 36px;
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		color: #a1a1aa;
		cursor: pointer;
		transition:
			background 0.2s,
			color 0.2s;
	}

	.copy-btn:hover {
		background: rgba(255, 255, 255, 0.1);
		color: #fff;
	}

	/* Steps */
	.steps {
		display: grid;
		gap: 1.5rem;
	}

	.step-card {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 16px;
		padding: 0.75rem;
		@media (min-width: 600px) {
			padding: 2.5rem;
		}
	}

	.step-number {
		width: 32px;
		height: 32px;
		background: linear-gradient(135deg, #8b5cf6, #7c3aed);
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		font-size: 0.9rem;
		margin-bottom: 1rem;
	}

	.step-card h3 {
		font-size: 1.25rem;
		margin: 0 0 0.5rem;
		color: #fff;
	}

	.step-card > p {
		color: #a1a1aa;
		margin: 0 0 1.5rem;
		font-size: 0.95rem;
	}

	/* Code blocks */
	.code-block {
		background: #0a0a0f;
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 10px;
		padding: 1.25rem;
		overflow-x: auto;
		max-width: 80vw;
	}

	.code-block pre {
		margin: 0;
	}

	.code-block code {
		font-family: 'JetBrains Mono', 'Fira Code', monospace;
		font-size: 0.85rem;
		line-height: 1.7;
	}

	.code-block .c {
		color: #6b7280;
	}
	.code-block .k {
		color: #c084fc;
	}
	.code-block .s {
		color: #34d399;
	}
	.code-block .t {
		color: #f472b6;
	}
	.code-block .a {
		color: #60a5fa;
	}

	/* Info callout */
	.info-callout {
		display: flex;
		gap: 1rem;
		padding: 1.25rem 1.5rem;
		background: rgba(139, 92, 246, 0.08);
		border: 1px solid rgba(139, 92, 246, 0.2);
		border-radius: 12px;
		margin-top: 2rem;
	}

	.callout-icon {
		font-size: 1.25rem;
		flex-shrink: 0;
	}

	.info-callout p {
		margin: 0;
		color: #c4b5fd;
		font-size: 0.95rem;
	}

	.info-callout code {
		background: rgba(139, 92, 246, 0.2);
		padding: 0.15rem 0.4rem;
		border-radius: 4px;
		font-size: 0.85em;
	}

	/* Animation groups */
	.animation-groups {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		margin-bottom: 4rem;
	}

	.anim-group {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 16px;
		padding: 1.75rem;
		@media (max-width: 765px) {
			padding: 1rem;
		}
	}

	.anim-group h3 {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 1.1rem;
		margin: 0 0 0.5rem;
		color: #fff;
	}

	.group-icon {
		color: #8b5cf6;
	}

	.anim-group > p {
		color: #71717a;
		font-size: 0.9rem;
		margin: 0 0 1rem;
	}

	.anim-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.anim-tag {
		padding: 0.35rem 0.75rem;
		background: rgba(255, 255, 255, 0.04);
		border-radius: 6px;
		font-size: 0.8rem;
		color: #a1a1aa;
		font-family: 'JetBrains Mono', monospace;
	}

	/* Preview */
	.preview-title {
		font-size: 1.25rem;
		color: #fff;
		margin: 0 0 1.5rem;
	}

	.preview-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: 1rem;
		margin-bottom: 4rem;
	}

	.preview-item {
		height: 100px;
		background: linear-gradient(135deg, #8b5cf6, #7c3aed);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.85rem;
		font-weight: 500;
	}

	.stagger-row {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.stagger-item {
		width: 80px;
		height: 80px;
		background: linear-gradient(135deg, #ec4899, #f472b6);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.85rem;
		font-weight: 500;
	}

	/* Options */
	.options-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
		margin-bottom: 3rem;
	}

	.option-item {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 12px;
		padding: 1.5rem;
		@media (max-width: 765px) {
			padding: 2rem;
		}
	}

	.option-name {
		font-family: 'JetBrains Mono', monospace;
		color: #8b5cf6;
		font-size: 1rem;
	}

	.option-type {
		display: inline-block;
		margin-left: 0.75rem;
		padding: 0.2rem 0.5rem;
		background: rgba(255, 255, 255, 0.06);
		border-radius: 4px;
		font-size: 0.75rem;
		color: #71717a;
	}

	.option-item p {
		color: #a1a1aa;
		margin: 0.75rem 0 0.5rem;
		font-size: 0.9rem;
	}

	.option-default {
		font-size: 0.8rem;
		color: #52525b;
	}

	.easing-title {
		font-size: 1.25rem;
		color: #fff;
		margin: 0 0 1.5rem;
	}

	.easing-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.easing-tag {
		padding: 0.4rem 0.75rem;
		background: rgba(255, 255, 255, 0.04);
		border-radius: 6px;
		font-size: 0.8rem;
		color: #a1a1aa;
		font-family: 'JetBrains Mono', monospace;
	}

	/* API */
	.api-cards {
		display: block;
		& * {
			margin-bottom: 2rem;
		}
	}

	.api-card {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 16px;
		padding: 0.75rem;
		@media (min-width: 600px) {
			padding: 2.5rem;
		}
	}

	.api-card h3 {
		font-family: 'JetBrains Mono', monospace;
		font-size: 1.15rem;
		color: #fff;
		margin: 0 0 0.5rem;
	}

	.api-badge {
		display: inline-block;
		padding: 0.2rem 0.6rem;
		background: rgba(139, 92, 246, 0.15);
		border-radius: 4px;
		font-size: 0.7rem;
		color: #a78bfa;
		margin-bottom: 0.75rem;
	}

	.api-badge.secondary {
		background: rgba(236, 72, 153, 0.15);
		color: #f472b6;
	}

	.api-card > p {
		color: #a1a1aa;
		font-size: 0.95rem;
		margin: 0 0 1.5rem;
	}

	/* Imports table */
	.imports-table {
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 12px;
		overflow: hidden;
	}

	.table-row {
		display: grid;
		grid-template-columns: 150px 1fr 120px;
		gap: 1rem;
		padding: 1rem 1.5rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.06);
		align-items: center;
	}

	.table-row:last-child {
		border-bottom: none;
	}

	.table-row.header {
		background: rgba(255, 255, 255, 0.03);
		font-weight: 600;
		font-size: 0.85rem;
		color: #71717a;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.table-row code {
		font-family: 'JetBrains Mono', monospace;
		color: #8b5cf6;
		font-size: 0.9rem;
	}

	.required {
		color: #34d399;
		font-size: 0.85rem;
	}

	.optional {
		color: #71717a;
		font-size: 0.85rem;
	}

	.convenience {
		color: #f472b6;
		font-size: 0.85rem;
	}

	/* Footer */
	footer {
		padding: 4rem 2rem;
		background: #0a0a0f;
		border-top: 1px solid rgba(255, 255, 255, 0.06);
		text-align: center;
	}

	.footer-content {
		max-width: 600px;
		margin: 0 auto;
	}

	.footer-brand {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		font-weight: 600;
		font-size: 1.1rem;
		color: #fff;
		margin-bottom: 0.5rem;
	}

	footer p {
		color: #52525b;
		margin: 0 0 1.5rem;
	}

	.footer-links {
		display: flex;
		gap: 0.75rem;
		justify-content: center;
		flex-wrap: wrap;
		color: #3f3f46;
	}

	.footer-links a {
		color: #71717a;
		text-decoration: none;
		transition: color 0.2s;
	}

	.footer-links a:hover {
		color: #8b5cf6;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.topnav {
			padding: 1rem;
		}

		.nav-links {
			gap: 1rem;
		}

		.nav-links a:not(.github) {
			display: none;
		}

		.hero {
			padding: 6rem 1rem 3rem;
		}

		.hero h1 {
			font-size: 2.5rem;
		}

		.tagline {
			font-size: 1rem;
		}

		.stats {
			grid-template-columns: repeat(2, 1fr);
		}

		.stat {
			padding: 2rem 1rem;
		}

		.stat-value {
			font-size: 2rem;
		}

		.section {
			padding: 4rem 1rem;
		}

		.section h2 {
			font-size: 2rem;
		}

		.table-row {
			grid-template-columns: 1fr;
			gap: 0.5rem;
		}

		.table-row.header {
			display: none;
		}
	}

	@media (max-width: 480px) {
		.hero h1 {
			font-size: 2rem;
		}

		.demo-card {
			width: 100px;
			height: 100px;
		}

		.preview-item,
		.stagger-item {
			height: 70px;
		}
	}
</style>
