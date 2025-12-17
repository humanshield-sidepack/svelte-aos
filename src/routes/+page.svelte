<script lang="ts">
	import { aosObserver, toAosAttributes } from '$lib/aos.ts';
	import '$lib/styles/full.css';
</script>

<svelte:head>
	<title>AOS Svelte - Usage Guide</title>
</svelte:head>

<main {@attach aosObserver({ threshold: 0.1, once: true })}>
	<!-- Hero -->
	<header class="hero">
		<h1 data-aos="fade-down" data-aos-duration="600">AOS Svelte</h1>
		<p data-aos="fade-up" data-aos-delay="100">Animate On Scroll library for Svelte 5</p>
		<nav data-aos="fade-up" data-aos-delay="200">
			<a href="#installation">Installation</a>
			<a href="#quick-start">Quick Start</a>
			<a href="#animations">Animations</a>
			<a href="#options">Options</a>
			<a href="#api">API</a>
			<a
				href="https://github.com/humanshield-sidepack/svelte-aos"
				target="_blank"
				rel="noopener noreferrer"
				class="github-link"
			>
				<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
					<path
						d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
					/>
				</svg>
				GitHub
			</a>
		</nav>
	</header>

	<!-- Why Section -->
	<section class="why-section">
		<div class="container">
			<h2 data-aos="fade-up">Why AOS Svelte?</h2>
			<p class="subtitle" data-aos="fade-up" data-aos-delay="50">
				A lightweight, performant scroll animation library built specifically for Svelte
			</p>

			<div class="features-grid">
				<div class="feature" data-aos="zoom-in" data-aos-delay="100">
					<div class="feature-icon">⚡</div>
					<h3>Blazing Fast</h3>
					<p>
						<strong>&lt;1KB</strong> gzipped JavaScript<br />
						<strong>2KB</strong> gzipped CSS (full bundle)
					</p>
				</div>

				<div class="feature" data-aos="zoom-in" data-aos-delay="200">
					<div class="feature-icon">🎯</div>
					<h3>Optimized Bundle</h3>
					<p>
						Import only what you need<br />
						Selective CSS imports for minimal footprint
					</p>
				</div>

				<div class="feature" data-aos="zoom-in" data-aos-delay="300">
					<div class="feature-icon">🚀</div>
					<h3>Zero Dependencies</h3>
					<p>
						No external dependencies<br />
					</p>
				</div>

				<div class="feature" data-aos="zoom-in" data-aos-delay="400">
					<div class="feature-icon">🔧</div>
					<h3>Universal Compatibility</h3>
					<p>
						Svelte 4 & 5 support<br />
						Actions or Attachments
					</p>
				</div>

				<div class="feature" data-aos="zoom-in" data-aos-delay="500">
					<div class="feature-icon">⚙️</div>
					<h3>Highly Performant</h3>
					<p>
						Uses IntersectionObserver<br />
						Optimized for smooth animations
					</p>
				</div>

				<div class="feature" data-aos="zoom-in" data-aos-delay="600">
					<div class="feature-icon">🎨</div>
					<h3>Fully Customizable</h3>
					<p>
						30+ pre-built animations<br />
						Flexible configuration options
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Installation -->
	<section id="installation" class="section">
		<h2 data-aos="fade-up">Installation</h2>
		<div class="content" data-aos="fade-up" data-aos-delay="100">
			<pre><code>npm install svelte-aos</code></pre>
			<p>Or with pnpm/yarn:</p>
			<pre><code
					>pnpm add svelte-aos
yarn add svelte-aos</code
				></pre>
		</div>
	</section>

	<!-- Quick Start -->
	<section id="quick-start" class="section alt">
		<h2 data-aos="fade-up">Quick Start</h2>

		<div class="step" data-aos="fade-right">
			<span class="step-num">1</span>
			<div class="step-content">
				<h3>Import the styles</h3>
				<p>Import all styles or just what you need:</p>
				<pre><code
						>&lt;script&gt;
  // All animations
  import 'svelte-aos/styles/full.css';
  
  // Or selective (smaller bundle)
  import 'svelte-aos/styles/base.css';  // Required
  import 'svelte-aos/styles/fade.css';  // Only fade animations
&lt;/script&gt;</code
					></pre>
			</div>
		</div>

		<div class="step" data-aos="fade-left">
			<span class="step-num">2</span>
			<div class="step-content">
				<h3>Add the observer</h3>
				<p>Use the Svelte 5 attachment or action on a container:</p>
				<pre><code
						>&lt;script&gt;
  import &#123; aosObserver &#125; from 'svelte-aos';
&lt;/script&gt;

&lt;!-- Svelte 5 attachment syntax --&gt;
&lt;main &#123;@attach aosObserver()&#125;&gt;
  ...
&lt;/main&gt;

&lt;!-- Or use the action --&gt;
&lt;main use:aosAction&gt;
  ...
&lt;/main&gt;</code
					></pre>
			</div>
		</div>

		<div class="step" data-aos="fade-right">
			<span class="step-num">3</span>
			<div class="step-content">
				<h3>Add data-aos attributes</h3>
				<p>Add <code>data-aos</code> to any element you want to animate:</p>
				<pre><code
						>&lt;div data-aos="fade-up"&gt;I'll fade in from below&lt;/div&gt;

&lt;div data-aos="zoom-in" data-aos-delay="200"&gt;
  I'll zoom in after 200ms
&lt;/div&gt;</code
					>
				
&lt;!-- Or you can use the helper function --&gt;
&lt;div &#123;...toAosAttributes(&#123;
  animation: 'fade-up',
  delay: 150,
  duration: 400,
  once: true
&#125;)&#125;&gt;Animated&lt;/div&gt;
				</pre>
			</div>
		</div>
	</section>

	<!-- Available Animations -->
	<section id="animations" class="section">
		<h2 data-aos="fade-up">Available Animations</h2>

		<div class="anim-group" data-aos="fade-up">
			<h3>Fade</h3>
			<p class="hint">Opacity + optional translate</p>
			<div class="anim-list">
				<code>fade</code>
				<code>fade-up</code>
				<code>fade-down</code>
				<code>fade-left</code>
				<code>fade-right</code>
				<code>fade-up-left</code>
				<code>fade-up-right</code>
				<code>fade-down-left</code>
				<code>fade-down-right</code>
			</div>
		</div>

		<div class="anim-group" data-aos="fade-up" data-aos-delay="100">
			<h3>Zoom</h3>
			<p class="hint">Scale + optional translate</p>
			<div class="anim-list">
				<code>zoom-in</code>
				<code>zoom-in-up</code>
				<code>zoom-in-down</code>
				<code>zoom-in-left</code>
				<code>zoom-in-right</code>
				<code>zoom-out</code>
				<code>zoom-out-up</code>
				<code>zoom-out-down</code>
				<code>zoom-out-left</code>
				<code>zoom-out-right</code>
			</div>
		</div>

		<div class="anim-group" data-aos="fade-up" data-aos-delay="200">
			<h3>Flip</h3>
			<p class="hint">3D rotation effects</p>
			<div class="anim-list">
				<code>flip-up</code>
				<code>flip-down</code>
				<code>flip-left</code>
				<code>flip-right</code>
			</div>
		</div>

		<div class="anim-group" data-aos="fade-up" data-aos-delay="300">
			<h3>Slide</h3>
			<p class="hint">Translate from edge (no opacity)</p>
			<div class="anim-list">
				<code>slide-up</code>
				<code>slide-down</code>
				<code>slide-left</code>
				<code>slide-right</code>
			</div>
		</div>
	</section>

	<!-- Per-Element Options -->
	<section id="options" class="section alt">
		<h2 data-aos="fade-up">Per-Element Options</h2>
		<p data-aos="fade-up" data-aos-delay="50">
			Customize each element with <code>data-aos-*</code> attributes:
		</p>

		<div class="options-grid">
			<div class="option-card" data-aos="fade-up" data-aos-delay="100">
				<h4>data-aos-duration</h4>
				<p>Animation duration in ms</p>
				<pre><code>&lt;div data-aos="fade" data-aos-duration="1000"&gt;</code></pre>
			</div>

			<div class="option-card" data-aos="fade-up" data-aos-delay="150">
				<h4>data-aos-delay</h4>
				<p>Delay before animation starts</p>
				<pre><code>&lt;div data-aos="fade" data-aos-delay="300"&gt;</code></pre>
			</div>

			<div class="option-card" data-aos="fade-up" data-aos-delay="200">
				<h4>data-aos-easing</h4>
				<p>Easing function for the animation</p>
				<pre><code>&lt;div data-aos="fade" data-aos-easing="ease-out-back"&gt;</code></pre>
			</div>

			<div class="option-card" data-aos="fade-up" data-aos-delay="250">
				<h4>data-aos-once</h4>
				<p>Only animate once (won't reverse)</p>
				<pre><code>&lt;div data-aos="fade" data-aos-once&gt;</code></pre>
			</div>
		</div>

		<h3 data-aos="fade-up">Available Easings</h3>
		<div class="easing-list" data-aos="fade-up" data-aos-delay="100">
			<code>linear</code>
			<code>ease</code>
			<code>ease-in</code>
			<code>ease-out</code>
			<code>ease-in-out</code>
			<code>ease-in-back</code>
			<code>ease-out-back</code>
			<code>ease-in-out-back</code>
			<code>ease-in-sine</code>
			<code>ease-out-sine</code>
			<code>ease-in-out-sine</code>
			<code>ease-in-quad</code>
			<code>ease-out-quad</code>
			<code>ease-in-out-quad</code>
			<code>ease-in-cubic</code>
			<code>ease-out-cubic</code>
			<code>ease-in-out-cubic</code>
			<code>ease-in-quart</code>
			<code>ease-out-quart</code>
			<code>ease-in-out-quart</code>
		</div>
	</section>

	<!-- API Reference -->
	<section id="api" class="section">
		<h2 data-aos="fade-up">API Reference</h2>

		<div class="api-block" data-aos="fade-up">
			<h3>aosObserver(options?)</h3>
			<p>Svelte 5 attachment for observing elements. Attach to a container element.</p>
			<pre><code
					>&lt;main &#123;@attach aosObserver(&#123;
  threshold: 0.1,    // Visibility threshold (0-1)
  offset: 120,       // Offset from viewport edge (px)
  duration: 600,     // Default duration (ms)
  delay: 0,          // Default delay (ms)
  easing: 'ease',    // Default easing
  once: false,       // Animate only once
  disable: false,    // Disable animations
  anchorPlacement: 'top-bottom'
&#125;)&#125;&gt;</code
				></pre>
		</div>

		<div class="api-block" data-aos="fade-up" data-aos-delay="100">
			<h3>aosAction(node, options?)</h3>
			<p>Svelte action (use: directive) — same options as aosObserver.</p>
			<pre><code
					>&lt;main use:aosAction=&#123;&#123; once: true, threshold: 0.2 &#125;&#125;&gt;</code
				></pre>
		</div>

		<div class="api-block" data-aos="fade-up" data-aos-delay="200">
			<h3>toAosAttributes(options)</h3>
			<p>Two ways to configure elements — choose whichever you prefer:</p>

			<div class="approach-tabs">
				<div class="approach">
					<h4>Option A: HTML attributes (declarative)</h4>
					<p>Add <code>data-aos-*</code> attributes directly in your markup:</p>
					<pre><code
							>&lt;div 
  data-aos="fade-up"
  data-aos-delay="150"
  data-aos-duration="400"
  data-aos-once
&gt;
  Animated
&lt;/div&gt;</code
						></pre>
				</div>

				<div class="approach">
					<h4>Option B: toAosAttributes helper (programmatic)</h4>
					<p>Generate attributes with a helper and spread them:</p>
					<pre><code
							>import &#123; toAosAttributes &#125; from 'svelte-aos';


// Use with spread
&lt;div &#123;...toAosAttributes(&#123;
  animation: 'fade-up',
  delay: 150,
  duration: 400,
  once: true
&#125;)&#125;&gt;Animated&lt;/div&gt;</code
						></pre>
				</div>
			</div>

			<p class="approach-note">Both produce the same result. Use what fits your workflow!</p>
		</div>

		<div class="api-block" data-aos="fade-up" data-aos-delay="300">
			<h3>disable option</h3>
			<p>Disable animations conditionally:</p>
			<pre><code
					>// Disable on specific device
aosObserver(&#123; disable: 'mobile' &#125;)  // 'mobile' | 'tablet' | 'desktop'

// Disable entirely
aosObserver(&#123; disable: true &#125;)

// Custom function
aosObserver(&#123; disable: () => window.innerWidth &lt; 768 &#125;)</code
				></pre>
		</div>
	</section>

	<!-- Selective Imports -->
	<section class="section alt">
		<h2 data-aos="fade-up">Selective CSS Imports</h2>
		<p data-aos="fade-up" data-aos-delay="50">
			Only import the animations you use to reduce bundle size:
		</p>

		<div class="imports-table" data-aos="fade-up" data-aos-delay="100">
			<table>
				<thead>
					<tr>
						<th>File</th>
						<th>Animations</th>
						<th>Required</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>base.css</code></td>
						<td>Core setup, CSS variables, reduced motion</td>
						<td>✅ Yes</td>
					</tr>
					<tr>
						<td><code>fade.css</code></td>
						<td>fade, fade-up, fade-down, etc.</td>
						<td>Optional</td>
					</tr>
					<tr>
						<td><code>zoom.css</code></td>
						<td>zoom-in, zoom-out variants</td>
						<td>Optional</td>
					</tr>
					<tr>
						<td><code>flip.css</code></td>
						<td>flip-up, flip-down, etc.</td>
						<td>Optional</td>
					</tr>
					<tr>
						<td><code>slide.css</code></td>
						<td>slide-up, slide-down, etc.</td>
						<td>Optional</td>
					</tr>
					<tr>
						<td><code>easings.css</code></td>
						<td>Custom easing functions</td>
						<td>Optional</td>
					</tr>
					<tr>
						<td><code>full.css</code></td>
						<td>Everything bundled</td>
						<td>Convenience</td>
					</tr>
				</tbody>
			</table>
		</div>

		<pre data-aos="fade-up" data-aos-delay="150"><code
				>// Example: Only fade animations with custom easings
import 'svelte-aos/styles/base.css';
import 'svelte-aos/styles/fade.css';
import 'svelte-aos/styles/easings.css';</code
			></pre>
	</section>

	<!-- Live Examples -->
	<section class="section">
		<h2 data-aos="fade-up">Live Examples</h2>

		<div class="example-row">
			<div class="example-card" data-aos="fade-up">
				<div class="example-label">fade-up</div>
			</div>
			<div class="example-card" data-aos="fade-down">
				<div class="example-label">fade-down</div>
			</div>
			<div class="example-card" data-aos="fade-left">
				<div class="example-label">fade-left</div>
			</div>
			<div class="example-card" data-aos="fade-right">
				<div class="example-label">fade-right</div>
			</div>
		</div>

		<div class="example-row">
			<div class="example-card" data-aos="zoom-in">
				<div class="example-label">zoom-in</div>
			</div>
			<div class="example-card" data-aos="zoom-out">
				<div class="example-label">zoom-out</div>
			</div>
			<div class="example-card" data-aos="flip-left">
				<div class="example-label">flip-left</div>
			</div>
			<div class="example-card" data-aos="flip-right">
				<div class="example-label">flip-right</div>
			</div>
		</div>

		<div class="example-row">
			<div class="example-card" data-aos="fade-up" data-aos-delay="0">
				<div class="example-label">delay: 0</div>
			</div>
			<div class="example-card" data-aos="fade-up" data-aos-delay="200">
				<div class="example-label">delay: 200</div>
			</div>
			<div class="example-card" data-aos="fade-up" data-aos-delay="400">
				<div class="example-label">delay: 400</div>
			</div>
			<div class="example-card" data-aos="fade-up" data-aos-delay="600">
				<div class="example-label">delay: 600</div>
			</div>
		</div>

		<div class="example-row">
			<div class="example-card" data-aos="zoom-in" data-aos-easing="ease-in-back">
				<div class="example-label">ease-in-back</div>
			</div>
			<div class="example-card" data-aos="zoom-in" data-aos-easing="ease-out-back">
				<div class="example-label">ease-out-back</div>
			</div>
			<div class="example-card" data-aos="zoom-in" data-aos-easing="ease-out-cubic">
				<div class="example-label">ease-out-cubic</div>
			</div>
			<div class="example-card" data-aos="zoom-in" data-aos-easing="ease-in-out-quart">
				<div class="example-label">ease-in-out-quart</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer>
		<p>AOS Svelte — Scroll to reveal animations for Svelte 5</p>
		<p>
			<a href="/travel">Travel Agency</a> · <a href="/ecommerce">E-commerce SaaS</a>
		</p>
	</footer>
</main>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
	:global(body) {
		margin: 0;
		font-family:
			system-ui,
			-apple-system,
			sans-serif;
		background: #fafafa;
		color: #1a1a1a;
		line-height: 1.6;
	}

	/* Hero */
	.hero {
		text-align: center;
		padding: 6rem 2rem 4rem;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
	}

	.hero h1 {
		font-size: 3.5rem;
		margin: 0 0 0.5rem;
		font-weight: 700;
	}

	.hero p {
		font-size: 1.25rem;
		opacity: 0.9;
		margin: 0 0 2rem;
	}

	.hero nav {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.hero nav a {
		color: white;
		text-decoration: none;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		background: rgba(255, 255, 255, 0.15);
		transition: background 0.2s;
	}

	.hero nav a:hover {
		background: rgba(255, 255, 255, 0.25);
	}

	.hero nav a.github-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}

	.hero nav a.github-link svg {
		flex-shrink: 0;
	}

	/* Why Section */
	.why-section {
		padding: 6rem 2rem;
		background: white;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.why-section h2 {
		font-size: 2.5rem;
		text-align: center;
		margin: 0 0 0.5rem;
		color: #2d3436;
	}

	.subtitle {
		text-align: center;
		color: #636e72;
		font-size: 1.15rem;
		margin: 0 0 4rem;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2.5rem;
	}

	.feature {
		text-align: center;
		padding: 2rem 1.5rem;
		background: #f8f9fa;
		border-radius: 16px;
		transition:
			transform 0.3s,
			box-shadow 0.3s;
	}

	.feature:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	}

	.feature-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.feature h3 {
		font-size: 1.25rem;
		margin: 0 0 0.75rem;
		color: #2d3436;
	}

	.feature p {
		color: #636e72;
		line-height: 1.6;
		margin: 0;
	}

	.feature p strong {
		color: #667eea;
		font-weight: 600;
	}

	/* Sections */
	.section {
		padding: 5rem 2rem;
		max-width: 900px;
		margin: 0 auto;
	}

	.section.alt {
		background: #f0f0f0;
		max-width: 100%;
	}

	.section.alt > * {
		max-width: 900px;
		margin-left: auto;
		margin-right: auto;
	}

	.section h2 {
		font-size: 2rem;
		margin: 0 0 1.5rem;
		color: #333;
	}

	.section h3 {
		font-size: 1.25rem;
		margin: 2rem 0 1rem;
		color: #444;
	}

	/* Code blocks */
	pre {
		background: #1e1e1e;
		color: #d4d4d4;
		padding: 1.25rem;
		border-radius: 8px;
		overflow-x: auto;
		font-size: 0.9rem;
		line-height: 1.5;
	}

	code {
		font-family: 'SF Mono', 'Fira Code', monospace;
	}

	p code,
	td code,
	li code {
		background: #e8e8e8;
		padding: 0.15rem 0.4rem;
		border-radius: 4px;
		font-size: 0.85em;
	}

	/* Steps */
	.step {
		display: flex;
		gap: 1.5rem;
		margin: 2rem 0;
		align-items: flex-start;
	}

	.step-num {
		width: 48px;
		height: 48px;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 1.25rem;
		flex-shrink: 0;
	}

	.step-content {
		flex: 1;
	}

	.step-content h3 {
		margin: 0 0 0.5rem;
	}

	.step-content p {
		margin: 0 0 1rem;
		color: #666;
	}

	/* Animation lists */
	.anim-group {
		margin: 2rem 0;
		padding: 1.5rem;
		background: white;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
	}

	.anim-group h3 {
		margin: 0 0 0.25rem;
	}

	.hint {
		color: #888;
		font-size: 0.9rem;
		margin: 0 0 1rem;
	}

	.anim-list,
	.easing-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.anim-list code,
	.easing-list code {
		background: #f0f0f0;
		padding: 0.35rem 0.75rem;
		border-radius: 6px;
		font-size: 0.85rem;
	}

	/* Options grid */
	.options-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		margin: 1.5rem 0;
	}

	.option-card {
		background: white;
		padding: 1.5rem;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
	}

	.option-card h4 {
		margin: 0 0 0.5rem;
		color: #667eea;
	}

	.option-card p {
		margin: 0 0 1rem;
		color: #666;
		font-size: 0.95rem;
	}

	.option-card pre {
		margin: 0;
		font-size: 0.8rem;
	}

	/* API blocks */
	.api-block {
		margin: 2rem 0;
		padding: 2rem;
		background: white;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
	}

	.api-block h3 {
		margin: 0 0 0.75rem;
		color: #667eea;
		font-family: 'SF Mono', 'Fira Code', monospace;
	}

	.api-block > p {
		margin: 0 0 1rem;
		color: #666;
	}

	.api-block pre {
		margin: 0;
	}

	/* Approach tabs */
	.approach-tabs {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
		margin: 1rem 0;
	}

	.approach {
		background: #f8f8f8;
		border-radius: 8px;
		padding: 1.25rem;
		border: 1px solid #e8e8e8;
	}

	.approach h4 {
		margin: 0 0 0.5rem;
		font-size: 0.95rem;
		color: #444;
	}

	.approach > p {
		margin: 0 0 0.75rem;
		font-size: 0.9rem;
		color: #666;
	}

	.approach pre {
		margin: 0;
		font-size: 0.8rem;
	}

	.approach-note {
		margin-top: 1rem;
		padding: 0.75rem 1rem;
		background: #f0f4ff;
		border-radius: 6px;
		font-size: 0.9rem;
		color: #555;
	}

	/* Imports table */
	.imports-table {
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		background: white;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
	}

	th,
	td {
		padding: 1rem;
		text-align: left;
		border-bottom: 1px solid #eee;
	}

	th {
		background: #f8f8f8;
		font-weight: 600;
	}

	tr:last-child td {
		border-bottom: none;
	}

	/* Example cards */
	.example-row {
		display: flex;
		gap: 1rem;
		margin: 1.5rem 0;
		flex-wrap: wrap;
		justify-content: center;
	}

	.example-card {
		width: 160px;
		height: 100px;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-weight: 500;
	}

	.example-label {
		font-size: 0.85rem;
		text-align: center;
	}

	/* Footer */
	footer {
		text-align: center;
		padding: 4rem 2rem;
		background: #1a1a1a;
		color: #888;
	}

	footer a {
		color: #667eea;
		text-decoration: none;
	}

	footer a:hover {
		text-decoration: underline;
	}

	/* Responsive */
	@media (max-width: 640px) {
		.hero h1 {
			font-size: 2.5rem;
		}

		.step {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}

		.section {
			padding: 3rem 1.5rem;
		}

		.example-card {
			width: 140px;
			height: 80px;
		}
	}
</style>
