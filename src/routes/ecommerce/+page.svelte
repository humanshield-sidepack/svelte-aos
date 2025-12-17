<script lang="ts">
	import { aosObserver } from '$lib/aos.ts';
	import '$lib/styles/full.css';

	const features = [
		{
			icon: '🛒',
			title: 'Online Store Builder',
			description: 'Drag-and-drop editor to create stunning storefronts in minutes'
		},
		{
			icon: '💳',
			title: 'Secure Payments',
			description: 'Accept credit cards, PayPal, and 100+ payment methods worldwide'
		},
		{
			icon: '📦',
			title: 'Inventory Management',
			description: 'Track stock, set alerts, and manage products effortlessly'
		},
		{
			icon: '📊',
			title: 'Analytics Dashboard',
			description: 'Real-time insights into sales, traffic, and customer behavior'
		},
		{
			icon: '🌍',
			title: 'Global Selling',
			description: 'Multi-currency, multi-language support for worldwide reach'
		},
		{
			icon: '📱',
			title: 'Mobile Commerce',
			description: 'Responsive themes and native mobile app for on-the-go management'
		}
	];

	const plans = [
		{
			name: 'Starter',
			price: '$29',
			period: '/month',
			description: 'Perfect for new businesses',
			features: [
				'Up to 100 products',
				'2% transaction fee',
				'Basic analytics',
				'Email support',
				'SSL certificate'
			],
			highlighted: false
		},
		{
			name: 'Professional',
			price: '$79',
			period: '/month',
			description: 'For growing businesses',
			features: [
				'Unlimited products',
				'1% transaction fee',
				'Advanced analytics',
				'Priority support',
				'Abandoned cart recovery',
				'Gift cards'
			],
			highlighted: true
		},
		{
			name: 'Enterprise',
			price: '$299',
			period: '/month',
			description: 'For high-volume sellers',
			features: [
				'Everything in Pro',
				'0.5% transaction fee',
				'Custom integrations',
				'Dedicated account manager',
				'Advanced API access',
				'Custom checkout'
			],
			highlighted: false
		}
	];

	const testimonials = [
		{
			quote:
				'We went from zero to $100K in monthly revenue within 6 months. The platform made scaling effortless.',
			author: 'Jessica Chen',
			role: 'Founder, Luxe Botanics',
			avatar: 'https://i.pravatar.cc/100?img=5',
			revenue: '$1.2M ARR'
		},
		{
			quote:
				'The best decision we made was switching to StoreCraft. Our conversion rate jumped 40% overnight.',
			author: 'Marcus Johnson',
			role: 'CEO, Urban Threads',
			avatar: 'https://i.pravatar.cc/100?img=12',
			revenue: '$3.5M ARR'
		},
		{
			quote:
				'Finally, an e-commerce platform that understands what sellers need. Support team is incredible.',
			author: 'Sarah Williams',
			role: 'Owner, Artisan Home',
			avatar: 'https://i.pravatar.cc/100?img=9',
			revenue: '$850K ARR'
		}
	];

	const stats = [
		{ value: '50K+', label: 'Active Stores' },
		{ value: '$2B+', label: 'GMV Processed' },
		{ value: '99.9%', label: 'Uptime' },
		{ value: '150+', label: 'Countries' }
	];

	const integrations = [
		'Stripe',
		'PayPal',
		'Shopify',
		'Amazon',
		'Instagram',
		'Facebook',
		'Google',
		'TikTok',
		'Mailchimp',
		'Klaviyo',
		'Zapier',
		'QuickBooks'
	];
</script>

<svelte:head>
	<title>StoreCraft - Build Your Online Empire</title>
</svelte:head>

<div class="page" {@attach aosObserver({ threshold: 0.1, once: false })}>
	<!-- Navigation -->
	<nav class="navbar">
		<div class="nav-container">
			<a href="/ecommerce" class="logo" data-aos="fade-right">
				<span class="logo-icon">🏪</span>
				<span class="logo-text">StoreCraft</span>
			</a>
			<div class="nav-links" data-aos="fade-left">
				<a href="#features">Features</a>
				<a href="#pricing">Pricing</a>
				<a href="#testimonials">Stories</a>
				<a href="#start" class="btn-nav">Start Free Trial</a>
			</div>
		</div>
	</nav>

	<!-- Hero Section -->
	<header class="hero">
		<div class="hero-content">
			<div class="hero-badge" data-aos="fade-down">
				<span>🎉</span> Trusted by 50,000+ merchants worldwide
			</div>
			<h1 data-aos="fade-up" data-aos-delay="100">
				Launch Your<br /><span class="gradient-text">Online Store</span><br />in Minutes
			</h1>
			<p data-aos="fade-up" data-aos-delay="200">
				The all-in-one commerce platform to start, run, and grow your business.<br />
				No coding required. Start selling today.
			</p>
			<div class="hero-cta" data-aos="fade-up" data-aos-delay="300">
				<a href="#start" class="btn btn-primary btn-large">
					Start Free Trial
					<span class="btn-arrow">→</span>
				</a>
				<a href="#demo" class="btn btn-ghost">
					<span class="play-icon">▶</span>
					Watch Demo
				</a>
			</div>
			<p class="hero-note" data-aos="fade-up" data-aos-delay="400">
				✓ 14-day free trial &nbsp; ✓ No credit card required &nbsp; ✓ Cancel anytime
			</p>
		</div>
		<div class="hero-visual" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800">
			<div class="dashboard-preview">
				<div class="preview-header">
					<div class="preview-dots">
						<span></span><span></span><span></span>
					</div>
					<span class="preview-title">Dashboard</span>
				</div>
				<div class="preview-content">
					<div class="preview-stat">
						<span class="stat-label">Today's Revenue</span>
						<span class="stat-value">$12,847</span>
						<span class="stat-change positive">+23.5%</span>
					</div>
					<div class="preview-chart">
						<div class="chart-bar" style="height: 40%"></div>
						<div class="chart-bar" style="height: 65%"></div>
						<div class="chart-bar" style="height: 45%"></div>
						<div class="chart-bar" style="height: 80%"></div>
						<div class="chart-bar" style="height: 60%"></div>
						<div class="chart-bar" style="height: 90%"></div>
						<div class="chart-bar active" style="height: 75%"></div>
					</div>
					<div class="preview-orders">
						<div class="order-item">
							<span class="order-status success"></span>
							<span>Order #4521 completed</span>
						</div>
						<div class="order-item">
							<span class="order-status pending"></span>
							<span>Order #4520 processing</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>

	<!-- Stats Bar -->
	<section class="stats-bar">
		<div class="stats-container">
			{#each stats as stat, i}
				<div class="stat-item" data-aos="fade-up" data-aos-delay={i * 100}>
					<span class="stat-value">{stat.value}</span>
					<span class="stat-label">{stat.label}</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- Features Section -->
	<section id="features" class="features-section">
		<div class="container">
			<div class="section-header">
				<span class="section-tag" data-aos="fade-up">FEATURES</span>
				<h2 data-aos="fade-up" data-aos-delay="50">Everything You Need to Sell Online</h2>
				<p data-aos="fade-up" data-aos-delay="100">
					Powerful tools designed to help you build, manage, and scale your e-commerce business
				</p>
			</div>

			<div class="features-grid">
				{#each features as feature, i}
					<div
						class="feature-card"
						data-aos="fade-up"
						data-aos-delay={100 + i * 75}
						data-aos-easing="ease-out-back"
					>
						<div class="feature-icon">{feature.icon}</div>
						<h3>{feature.title}</h3>
						<p>{feature.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- How It Works -->
	<section class="how-section">
		<div class="container">
			<div class="section-header">
				<span class="section-tag" data-aos="fade-up">HOW IT WORKS</span>
				<h2 data-aos="fade-up" data-aos-delay="50">Launch in 3 Simple Steps</h2>
			</div>

			<div class="steps-container">
				<div class="step-card" data-aos="fade-right" data-aos-delay="100">
					<div class="step-number">01</div>
					<h3>Choose Your Theme</h3>
					<p>Pick from 100+ professionally designed templates optimized for conversion</p>
					<div class="step-visual themes">
						<div class="theme-preview"></div>
						<div class="theme-preview"></div>
						<div class="theme-preview"></div>
					</div>
				</div>

				<div class="step-connector" data-aos="fade-up" data-aos-delay="200">
					<div class="connector-line"></div>
					<div class="connector-arrow">→</div>
				</div>

				<div class="step-card" data-aos="fade-up" data-aos-delay="200">
					<div class="step-number">02</div>
					<h3>Add Your Products</h3>
					<p>Upload products in bulk or one by one with our intuitive product manager</p>
					<div class="step-visual products">
						<div class="product-card-mini">
							<div class="product-img"></div>
							<span>$49.99</span>
						</div>
						<div class="product-card-mini">
							<div class="product-img"></div>
							<span>$79.99</span>
						</div>
					</div>
				</div>

				<div class="step-connector" data-aos="fade-up" data-aos-delay="300">
					<div class="connector-line"></div>
					<div class="connector-arrow">→</div>
				</div>

				<div class="step-card" data-aos="fade-left" data-aos-delay="300">
					<div class="step-number">03</div>
					<h3>Start Selling</h3>
					<p>Go live and start accepting orders from customers around the world</p>
					<div class="step-visual launch">
						<div class="launch-icon">🚀</div>
						<span>You're Live!</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Pricing Section -->
	<section id="pricing" class="pricing-section">
		<div class="container">
			<div class="section-header">
				<span class="section-tag" data-aos="fade-up">PRICING</span>
				<h2 data-aos="fade-up" data-aos-delay="50">Simple, Transparent Pricing</h2>
				<p data-aos="fade-up" data-aos-delay="100">
					No hidden fees. No surprises. Choose the plan that fits your business.
				</p>
			</div>

			<div class="pricing-grid">
				{#each plans as plan, i}
					<div
						class="pricing-card"
						class:highlighted={plan.highlighted}
						data-aos="fade-up"
						data-aos-delay={i * 100}
					>
						{#if plan.highlighted}
							<div class="popular-badge">Most Popular</div>
						{/if}
						<h3>{plan.name}</h3>
						<p class="plan-description">{plan.description}</p>
						<div class="plan-price">
							<span class="price">{plan.price}</span>
							<span class="period">{plan.period}</span>
						</div>
						<ul class="plan-features">
							{#each plan.features as feature}
								<li>✓ {feature}</li>
							{/each}
						</ul>
						<button class="btn {plan.highlighted ? 'btn-primary' : 'btn-outline'} btn-full">
							Start Free Trial
						</button>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Testimonials Section -->
	<section id="testimonials" class="testimonials-section">
		<div class="container">
			<div class="section-header">
				<span class="section-tag" data-aos="fade-up">SUCCESS STORIES</span>
				<h2 data-aos="fade-up" data-aos-delay="50">Merchants Love StoreCraft</h2>
			</div>

			<div class="testimonials-grid">
				{#each testimonials as testimonial, i}
					<div
						class="testimonial-card"
						data-aos="flip-up"
						data-aos-delay={i * 150}
						data-aos-easing="ease-out-back"
					>
						<div class="testimonial-revenue">{testimonial.revenue}</div>
						<blockquote>"{testimonial.quote}"</blockquote>
						<div class="testimonial-author">
							<img src={testimonial.avatar} alt={testimonial.author} />
							<div>
								<strong>{testimonial.author}</strong>
								<span>{testimonial.role}</span>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Integrations Section -->
	<section class="integrations-section">
		<div class="container">
			<h2 data-aos="fade-up">Connects With Your Favorite Tools</h2>
			<p data-aos="fade-up" data-aos-delay="50">Seamlessly integrate with 200+ apps and services</p>

			<div class="integrations-grid" data-aos="fade-up" data-aos-delay="100">
				{#each integrations as integration, i}
					<div class="integration-badge" data-aos="zoom-in" data-aos-delay={100 + i * 50}>
						{integration}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section id="start" class="cta-section">
		<div class="cta-content" data-aos="zoom-in">
			<h2>Ready to Build Your Online Empire?</h2>
			<p>Join 50,000+ merchants who chose StoreCraft to power their business</p>
			<form class="cta-form" data-aos="fade-up" data-aos-delay="200">
				<input type="email" placeholder="Enter your email" />
				<button type="submit" class="btn btn-white">Start Free Trial</button>
			</form>
			<p class="cta-note">No credit card required • 14-day free trial • Full access</p>
		</div>
	</section>

	<!-- Footer -->
	<footer class="footer">
		<div class="container">
			<div class="footer-grid">
				<div class="footer-brand" data-aos="fade-up">
					<div class="logo">
						<span class="logo-icon">🏪</span>
						<span class="logo-text">StoreCraft</span>
					</div>
					<p>The all-in-one platform to launch and grow your online business.</p>
					<div class="social-links">
						<a href="#!" aria-label="Twitter">𝕏</a>
						<a href="#!" aria-label="LinkedIn">in</a>
						<a href="#!" aria-label="YouTube">▶</a>
						<a href="#!" aria-label="Instagram">📷</a>
					</div>
				</div>
				<div class="footer-links" data-aos="fade-up" data-aos-delay="100">
					<h4>Product</h4>
					<a href="#features">Features</a>
					<a href="#pricing">Pricing</a>
					<a href="#!">Templates</a>
					<a href="#!">Integrations</a>
				</div>
				<div class="footer-links" data-aos="fade-up" data-aos-delay="200">
					<h4>Resources</h4>
					<a href="#!">Help Center</a>
					<a href="#!">Blog</a>
					<a href="#!">API Docs</a>
					<a href="#!">Community</a>
				</div>
				<div class="footer-links" data-aos="fade-up" data-aos-delay="300">
					<h4>Company</h4>
					<a href="#!">About</a>
					<a href="#!">Careers</a>
					<a href="#!">Contact</a>
					<a href="#!">Press</a>
				</div>
			</div>
			<div class="footer-bottom">
				<p>© 2025 StoreCraft. All rights reserved.</p>
				<p>
					<a href="/">← Back to AOS Guide</a> · <a href="/travel">Travel Example</a>
				</p>
			</div>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family:
			'Inter',
			system-ui,
			-apple-system,
			sans-serif;
		background: #fafafa;
		color: #1a1a2e;
		line-height: 1.6;
	}

	.page {
		overflow-x: hidden;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Navigation */
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid rgba(0, 0, 0, 0.05);
	}

	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		color: #1a1a2e;
	}

	.logo-icon {
		font-size: 1.75rem;
	}

	.logo-text {
		font-size: 1.5rem;
		font-weight: 700;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.nav-links a {
		text-decoration: none;
		color: #64748b;
		font-weight: 500;
		transition: color 0.3s;
	}

	.nav-links a:hover {
		color: #6366f1;
	}

	.btn-nav {
		background: #6366f1;
		color: white !important;
		padding: 0.6rem 1.5rem;
		border-radius: 8px;
	}

	/* Buttons */
	.btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.875rem 1.5rem;
		border-radius: 10px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		transition: all 0.3s;
		border: 2px solid transparent;
		cursor: pointer;
	}

	.btn-primary {
		background: #6366f1;
		color: white;
	}

	.btn-primary:hover {
		background: #4f46e5;
		transform: translateY(-2px);
		box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
	}

	.btn-outline {
		background: transparent;
		color: #1a1a2e;
		border-color: #e2e8f0;
	}

	.btn-outline:hover {
		border-color: #6366f1;
		color: #6366f1;
	}

	.btn-ghost {
		background: transparent;
		color: #64748b;
	}

	.btn-ghost:hover {
		color: #6366f1;
	}

	.btn-white {
		background: white;
		color: #6366f1;
	}

	.btn-white:hover {
		background: #f8fafc;
		transform: translateY(-2px);
	}

	.btn-large {
		padding: 1rem 2rem;
		font-size: 1.1rem;
	}

	.btn-full {
		width: 100%;
		justify-content: center;
	}

	.btn-arrow {
		transition: transform 0.3s;
	}

	.btn:hover .btn-arrow {
		transform: translateX(4px);
	}

	.play-icon {
		width: 32px;
		height: 32px;
		background: #f1f5f9;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.75rem;
	}

	/* Hero Section */
	.hero {
		padding: 10rem 2rem 6rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
		max-width: 1400px;
		margin: 0 auto;
	}

	.hero-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: #f0fdf4;
		color: #16a34a;
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-size: 0.9rem;
		font-weight: 500;
		margin-bottom: 1.5rem;
	}

	.hero h1 {
		font-size: 3.75rem;
		font-weight: 800;
		line-height: 1.1;
		margin: 0 0 1.5rem;
		color: #1a1a2e;
	}

	.gradient-text {
		background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero p {
		font-size: 1.2rem;
		color: #64748b;
		margin: 0 0 2rem;
	}

	.hero-cta {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin-bottom: 1.5rem;
	}

	.hero-note {
		font-size: 0.9rem;
		color: #94a3b8;
	}

	/* Dashboard Preview */
	.hero-visual {
		position: relative;
	}

	.dashboard-preview {
		background: white;
		border-radius: 16px;
		box-shadow:
			0 25px 50px -12px rgba(0, 0, 0, 0.15),
			0 0 0 1px rgba(0, 0, 0, 0.05);
		overflow: hidden;
	}

	.preview-header {
		background: #f8fafc;
		padding: 0.75rem 1rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		border-bottom: 1px solid #e2e8f0;
	}

	.preview-dots {
		display: flex;
		gap: 0.375rem;
	}

	.preview-dots span {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #e2e8f0;
	}

	.preview-dots span:first-child {
		background: #fca5a5;
	}
	.preview-dots span:nth-child(2) {
		background: #fcd34d;
	}
	.preview-dots span:nth-child(3) {
		background: #86efac;
	}

	.preview-title {
		color: #64748b;
		font-size: 0.85rem;
	}

	.preview-content {
		padding: 1.5rem;
	}

	.preview-stat {
		margin-bottom: 1.5rem;
	}

	.preview-stat .stat-label {
		display: block;
		font-size: 0.85rem;
		color: #64748b;
		margin-bottom: 0.25rem;
	}

	.preview-stat .stat-value {
		font-size: 2rem;
		font-weight: 700;
		color: #1a1a2e;
	}

	.preview-stat .stat-change {
		font-size: 0.85rem;
		margin-left: 0.5rem;
	}

	.preview-stat .stat-change.positive {
		color: #16a34a;
	}

	.preview-chart {
		display: flex;
		align-items: flex-end;
		gap: 0.5rem;
		height: 80px;
		margin-bottom: 1.5rem;
	}

	.chart-bar {
		flex: 1;
		background: #e2e8f0;
		border-radius: 4px;
		transition: background 0.3s;
	}

	.chart-bar.active {
		background: #6366f1;
	}

	.preview-orders {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.order-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.85rem;
		color: #64748b;
		padding: 0.5rem;
		background: #f8fafc;
		border-radius: 6px;
	}

	.order-status {
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}

	.order-status.success {
		background: #16a34a;
	}
	.order-status.pending {
		background: #eab308;
	}

	/* Stats Bar */
	.stats-bar {
		background: #1a1a2e;
		padding: 3rem 2rem;
	}

	.stats-container {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
		text-align: center;
	}

	.stat-item .stat-value {
		display: block;
		font-size: 2.5rem;
		font-weight: 800;
		color: white;
		margin-bottom: 0.25rem;
	}

	.stat-item .stat-label {
		color: #94a3b8;
		font-size: 0.95rem;
	}

	/* Section Styles */
	section {
		padding: 6rem 0;
	}

	.section-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.section-tag {
		display: inline-block;
		background: #f0f0ff;
		color: #6366f1;
		padding: 0.375rem 1rem;
		border-radius: 50px;
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		margin-bottom: 1rem;
	}

	.section-header h2 {
		font-size: 2.5rem;
		font-weight: 800;
		margin: 0 0 1rem;
		color: #1a1a2e;
	}

	.section-header p {
		font-size: 1.15rem;
		color: #64748b;
		max-width: 600px;
		margin: 0 auto;
	}

	/* Features Section */
	.features-section {
		background: #f8fafc;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 2rem;
	}

	.feature-card {
		background: white;
		padding: 2rem;
		border-radius: 16px;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
		transition:
			transform 0.3s,
			box-shadow 0.3s;
	}

	.feature-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.1);
	}

	.feature-card .feature-icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.feature-card h3 {
		font-size: 1.25rem;
		margin: 0 0 0.75rem;
		color: #1a1a2e;
	}

	.feature-card p {
		color: #64748b;
		margin: 0;
		line-height: 1.6;
	}

	/* How It Works Section */
	.how-section {
		background: white;
	}

	.steps-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.step-card {
		background: #f8fafc;
		padding: 2rem;
		border-radius: 16px;
		width: 280px;
		text-align: center;
	}

	.step-number {
		font-size: 3rem;
		font-weight: 800;
		color: #e2e8f0;
		line-height: 1;
		margin-bottom: 1rem;
	}

	.step-card h3 {
		font-size: 1.25rem;
		margin: 0 0 0.5rem;
		color: #1a1a2e;
	}

	.step-card p {
		color: #64748b;
		font-size: 0.95rem;
		margin: 0 0 1.5rem;
	}

	.step-visual {
		min-height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.theme-preview {
		width: 60px;
		height: 70px;
		background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
		border-radius: 6px;
		opacity: 0.7;
	}

	.theme-preview:first-child {
		opacity: 1;
		transform: scale(1.1);
	}

	.product-card-mini {
		background: white;
		padding: 0.75rem;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.product-img {
		width: 50px;
		height: 50px;
		background: #e2e8f0;
		border-radius: 6px;
		margin-bottom: 0.5rem;
	}

	.product-card-mini span {
		font-size: 0.85rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	.step-visual.launch {
		flex-direction: column;
	}

	.launch-icon {
		font-size: 2.5rem;
	}

	.step-visual.launch span {
		color: #16a34a;
		font-weight: 600;
	}

	.step-connector {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #cbd5e1;
	}

	.connector-line {
		width: 40px;
		height: 2px;
		background: #e2e8f0;
	}

	.connector-arrow {
		font-size: 1.5rem;
	}

	/* Pricing Section */
	.pricing-section {
		background: #f8fafc;
	}

	.pricing-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		max-width: 1000px;
		margin: 0 auto;
	}

	.pricing-card {
		background: white;
		padding: 2.5rem;
		border-radius: 20px;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
		position: relative;
		transition:
			transform 0.3s,
			box-shadow 0.3s;
	}

	.pricing-card:hover {
		transform: translateY(-5px);
	}

	.pricing-card.highlighted {
		border: 2px solid #6366f1;
		box-shadow: 0 25px 50px -12px rgba(99, 102, 241, 0.2);
	}

	.popular-badge {
		position: absolute;
		top: -12px;
		left: 50%;
		transform: translateX(-50%);
		background: #6366f1;
		color: white;
		padding: 0.375rem 1rem;
		border-radius: 50px;
		font-size: 0.8rem;
		font-weight: 600;
	}

	.pricing-card h3 {
		font-size: 1.5rem;
		margin: 0 0 0.25rem;
		color: #1a1a2e;
	}

	.plan-description {
		color: #64748b;
		margin: 0 0 1.5rem;
	}

	.plan-price {
		margin-bottom: 2rem;
	}

	.plan-price .price {
		font-size: 3rem;
		font-weight: 800;
		color: #1a1a2e;
	}

	.plan-price .period {
		color: #64748b;
	}

	.plan-features {
		list-style: none;
		padding: 0;
		margin: 0 0 2rem;
	}

	.plan-features li {
		padding: 0.75rem 0;
		border-bottom: 1px solid #f1f5f9;
		color: #475569;
	}

	.plan-features li:last-child {
		border-bottom: none;
	}

	/* Testimonials */
	.testimonials-section {
		background: white;
	}

	.testimonials-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
		gap: 2rem;
	}

	.testimonial-card {
		background: #f8fafc;
		padding: 2rem;
		border-radius: 20px;
		position: relative;
	}

	.testimonial-revenue {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: #dcfce7;
		color: #16a34a;
		padding: 0.25rem 0.75rem;
		border-radius: 50px;
		font-size: 0.8rem;
		font-weight: 600;
	}

	.testimonial-card blockquote {
		font-size: 1.1rem;
		color: #1a1a2e;
		margin: 0 0 1.5rem;
		line-height: 1.6;
	}

	.testimonial-author {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.testimonial-author img {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		object-fit: cover;
	}

	.testimonial-author strong {
		display: block;
		color: #1a1a2e;
	}

	.testimonial-author span {
		font-size: 0.9rem;
		color: #64748b;
	}

	/* Integrations */
	.integrations-section {
		background: #f8fafc;
		text-align: center;
	}

	.integrations-section h2 {
		font-size: 2rem;
		margin: 0 0 0.5rem;
		color: #1a1a2e;
	}

	.integrations-section > .container > p {
		color: #64748b;
		margin: 0 0 3rem;
	}

	.integrations-grid {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
		max-width: 800px;
		margin: 0 auto;
	}

	.integration-badge {
		background: white;
		padding: 0.75rem 1.5rem;
		border-radius: 50px;
		font-weight: 500;
		color: #475569;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
		transition: all 0.3s;
	}

	.integration-badge:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
	}

	/* CTA Section */
	.cta-section {
		background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
		padding: 6rem 2rem;
		text-align: center;
	}

	.cta-content h2 {
		font-size: 2.5rem;
		color: white;
		margin: 0 0 1rem;
	}

	.cta-content > p {
		color: rgba(255, 255, 255, 0.9);
		font-size: 1.2rem;
		margin: 0 0 2rem;
	}

	.cta-form {
		display: flex;
		max-width: 500px;
		margin: 0 auto 1.5rem;
		gap: 0.75rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.cta-form input {
		flex: 1;
		min-width: 250px;
		padding: 1rem 1.5rem;
		border: none;
		border-radius: 10px;
		font-size: 1rem;
	}

	.cta-note {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.7);
	}

	/* Footer */
	.footer {
		background: #1a1a2e;
		color: white;
		padding: 5rem 0 2rem;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr;
		gap: 3rem;
		margin-bottom: 3rem;
	}

	.footer-brand p {
		color: #94a3b8;
		margin: 1rem 0;
	}

	.footer-brand .logo {
		color: white;
	}

	.social-links {
		display: flex;
		gap: 1rem;
	}

	.social-links a {
		width: 40px;
		height: 40px;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		text-decoration: none;
		transition: background 0.3s;
	}

	.social-links a:hover {
		background: #6366f1;
	}

	.footer-links h4 {
		margin: 0 0 1.25rem;
		font-size: 1rem;
	}

	.footer-links a {
		display: block;
		color: #94a3b8;
		text-decoration: none;
		margin-bottom: 0.75rem;
		transition: color 0.3s;
	}

	.footer-links a:hover {
		color: #6366f1;
	}

	.footer-bottom {
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		padding-top: 2rem;
		text-align: center;
		color: #64748b;
	}

	.footer-bottom a {
		color: #6366f1;
		text-decoration: none;
	}

	.footer-bottom a:hover {
		text-decoration: underline;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.hero {
			grid-template-columns: 1fr;
			text-align: center;
			padding-top: 8rem;
		}

		.hero-visual {
			display: none;
		}

		.stats-container {
			grid-template-columns: repeat(2, 1fr);
		}

		.footer-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.nav-links {
			display: none;
		}

		.hero h1 {
			font-size: 2.5rem;
		}

		.section-header h2 {
			font-size: 2rem;
		}

		.steps-container {
			flex-direction: column;
		}

		.step-connector {
			transform: rotate(90deg);
		}

		.stats-container {
			grid-template-columns: 1fr 1fr;
			gap: 1.5rem;
		}

		.stat-item .stat-value {
			font-size: 2rem;
		}

		.pricing-grid {
			grid-template-columns: 1fr;
		}

		.footer-grid {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.footer-brand .logo {
			justify-content: center;
		}

		.social-links {
			justify-content: center;
		}
	}
</style>
