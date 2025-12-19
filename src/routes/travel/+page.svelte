<script lang="ts">
	import AOS from '$lib/AOS.svelte';
	import { aosAttachment } from '$lib/index.ts';

	const destinations = [
		{
			name: 'Santorini, Greece',
			image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&h=400&fit=crop',
			price: '$1,299',
			duration: '7 Days',
			rating: 4.9
		},
		{
			name: 'Bali, Indonesia',
			image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop',
			price: '$1,499',
			duration: '10 Days',
			rating: 4.8
		},
		{
			name: 'Machu Picchu, Peru',
			image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&h=400&fit=crop',
			price: '$1,899',
			duration: '8 Days',
			rating: 4.9
		},
		{
			name: 'Maldives',
			image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop',
			price: '$2,499',
			duration: '6 Days',
			rating: 5.0
		},
		{
			name: 'Tokyo, Japan',
			image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop',
			price: '$1,799',
			duration: '9 Days',
			rating: 4.7
		},
		{
			name: 'Swiss Alps',
			image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop',
			price: '$2,199',
			duration: '7 Days',
			rating: 4.8
		}
	];

	const features = [
		{
			icon: '✈️',
			title: 'Flight Booking',
			description: 'Best deals on flights worldwide with flexible booking options'
		},
		{
			icon: '🏨',
			title: 'Luxury Hotels',
			description: 'Handpicked accommodations from boutique to 5-star resorts'
		},
		{
			icon: '🗺️',
			title: 'Guided Tours',
			description: 'Expert local guides for authentic cultural experiences'
		},
		{
			icon: '🛡️',
			title: 'Travel Insurance',
			description: 'Comprehensive coverage for worry-free adventures'
		}
	];

	const testimonials = [
		{
			name: 'Sarah Mitchell',
			location: 'New York, USA',
			text: 'Wanderlust made our honeymoon absolutely perfect. Every detail was taken care of!',
			avatar: 'https://i.pravatar.cc/100?img=1'
		},
		{
			name: 'James Chen',
			location: 'London, UK',
			text: 'The Bali trip exceeded all expectations. The local guides were incredible.',
			avatar: 'https://i.pravatar.cc/100?img=3'
		},
		{
			name: 'Maria Garcia',
			location: 'Madrid, Spain',
			text: 'Best travel agency I have ever used. Already planning my next adventure!',
			avatar: 'https://i.pravatar.cc/100?img=5'
		}
	];

	const stats = [
		{ value: '50K+', label: 'Happy Travelers' },
		{ value: '120+', label: 'Destinations' },
		{ value: '15+', label: 'Years Experience' },
		{ value: '24/7', label: 'Support' }
	];
</script>

<svelte:head>
	<title>Wanderlust Travel Agency - Explore the World</title>
</svelte:head>

<AOS />

<div class="page">
	<!-- Navigation -->
	<nav class="navbar">
		<div class="nav-container">
			<a href="/travel" class="logo" data-aos="fade-right" {@attach aosAttachment()}>
				<span class="logo-icon">🌍</span>
				<span class="logo-text">Wanderlust</span>
			</a>
			<div class="nav-links" data-aos="fade-left" {@attach aosAttachment()}>
				<a href="#destinations">Destinations</a>
				<a href="#services">Services</a>
				<a href="#testimonials">Reviews</a>
				<a href="#contact" class="btn-nav">Book Now</a>
			</div>
		</div>
	</nav>

	<!-- Hero Section -->
	<header class="hero">
		<div class="hero-bg"></div>
		<div class="hero-content">
			<h1 data-aos="fade-down" {@attach aosAttachment({ duration: 800 })}>
				Discover Your Next<br /><span class="highlight">Adventure</span>
			</h1>
			<p data-aos="fade-up" {@attach aosAttachment({ delay: 200 })}>
				Curated travel experiences to the world's most breathtaking destinations.<br />
				Your journey of a lifetime starts here.
			</p>
			<div class="hero-actions" data-aos="fade-up" {@attach aosAttachment({ delay: 400 })}>
				<a href="#destinations" class="btn btn-primary">Explore Destinations</a>
				<a href="#contact" class="btn btn-outline">Plan Your Trip</a>
			</div>
			<div class="hero-stats" data-aos="fade-up" {@attach aosAttachment({ delay: 600 })}>
				{#each stats as stat, i}
					<div class="stat" data-aos="zoom-in" {@attach aosAttachment({ delay: 700 + i * 100 })}>
						<span class="stat-value">{stat.value}</span>
						<span class="stat-label">{stat.label}</span>
					</div>
				{/each}
			</div>
		</div>
		<div class="scroll-indicator" data-aos="fade-up" {@attach aosAttachment({ delay: 1000 })}>
			<span>Scroll to explore</span>
			<div class="scroll-arrow">↓</div>
		</div>
	</header>

	<!-- Features Section -->
	<section id="services" class="features-section">
		<div class="container">
			<h2 data-aos="fade-up" {@attach aosAttachment()}>Why Travel With Us</h2>
			<p class="section-subtitle" data-aos="fade-up" {@attach aosAttachment({ delay: 100 })}>
				We handle every detail so you can focus on making memories
			</p>
			<div class="features-grid">
				{#each features as feature, i}
					<div class="feature-card" data-aos="flip-up" {@attach aosAttachment({ delay: i * 100 })}>
						<div class="feature-icon">{feature.icon}</div>
						<h3>{feature.title}</h3>
						<p>{feature.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Destinations Section -->
	<section id="destinations" class="destinations-section">
		<div class="container">
			<h2 data-aos="fade-up">Popular Destinations</h2>
			<p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
				Handpicked locations for unforgettable experiences
			</p>
			<div class="destinations-grid">
				{#each destinations as dest, i}
					<article
						class="destination-card"
						data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
						data-aos-delay={i * 100}
						{@attach aosAttachment({ delay: i * 100 })}
					>
						<div class="card-image">
							<img src={dest.image} alt={dest.name} loading="lazy" />
							<div class="card-badge">{dest.duration}</div>
						</div>
						<div class="card-content">
							<div class="card-rating">
								{'★'.repeat(Math.floor(dest.rating))}
								<span>{dest.rating}</span>
							</div>
							<h3>{dest.name}</h3>
							<div class="card-footer">
								<span class="price">From {dest.price}</span>
								<button class="btn-book">Book Now</button>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Banner -->
	<section class="cta-banner">
		<div class="cta-content" data-aos="zoom-in" {@attach aosAttachment()}>
			<h2>Ready for Your Dream Vacation?</h2>
			<p>Get 20% off your first booking when you sign up today</p>
			<form class="cta-form" data-aos="fade-up" {@attach aosAttachment({ delay: 200 })}>
				<input type="email" placeholder="Enter your email" />
				<button type="submit" class="btn btn-primary">Get Started</button>
			</form>
		</div>
	</section>

	<!-- Testimonials Section -->
	<section id="testimonials" class="testimonials-section">
		<div class="container">
			<h2 data-aos="fade-up" {@attach aosAttachment()}>What Our Travelers Say</h2>
			<p class="section-subtitle" data-aos="fade-up" {@attach aosAttachment({ delay: 100 })}>
				Real stories from real adventurers
			</p>
			<div class="testimonials-grid">
				{#each testimonials as testimonial, i}
					<div
						class="testimonial-card"
						data-aos="fade-up"
						{@attach aosAttachment({ delay: i * 150, easing: 'ease-out-back' })}
					>
						<div class="quote-icon">"</div>
						<p class="testimonial-text">{testimonial.text}</p>
						<div class="testimonial-author">
							<img src={testimonial.avatar} alt={testimonial.name} />
							<div>
								<strong>{testimonial.name}</strong>
								<span>{testimonial.location}</span>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Gallery Section -->
	<section class="gallery-section">
		<h2 data-aos="fade-up" {@attach aosAttachment()}>Travel Moments</h2>
		<div class="gallery-grid">
			<div class="gallery-item large" data-aos="zoom-in" {@attach aosAttachment({ delay: 0 })}>
				<img
					src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=600&fit=crop"
					alt="Beach sunset"
					loading="lazy"
				/>
			</div>
			<div class="gallery-item" data-aos="zoom-in" {@attach aosAttachment({ delay: 100 })}>
				<img
					src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=300&fit=crop"
					alt="Mountain lake"
					loading="lazy"
				/>
			</div>
			<div class="gallery-item" data-aos="zoom-in" {@attach aosAttachment({ delay: 200 })}>
				<img
					src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400&h=300&fit=crop"
					alt="Ancient temple"
					loading="lazy"
				/>
			</div>
			<div class="gallery-item" data-aos="zoom-in" {@attach aosAttachment({ delay: 300 })}>
				<img
					src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
					alt="Forest path"
					loading="lazy"
				/>
			</div>
			<div class="gallery-item large" data-aos="zoom-in" {@attach aosAttachment({ delay: 400 })}>
				<img
					src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?w=800&h=600&fit=crop"
					alt="Desert adventure"
					loading="lazy"
				/>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="contact-section">
		<div class="container">
			<div class="contact-grid">
				<div class="contact-info" data-aos="fade-right" {@attach aosAttachment()}>
					<h2>Let's Plan Your Trip</h2>
					<p>
						Our travel experts are ready to create your perfect itinerary. Reach out and let's start
						planning!
					</p>
					<div class="contact-details">
						<div class="contact-item">
							<span class="contact-icon">📍</span>
							<span>123 Travel Street, Adventure City</span>
						</div>
						<div class="contact-item">
							<span class="contact-icon">📞</span>
							<span>+1 (555) 123-4567</span>
						</div>
						<div class="contact-item">
							<span class="contact-icon">✉️</span>
							<span>hello@wanderlust.travel</span>
						</div>
					</div>
					<div class="social-links">
						<a href="#!" aria-label="Instagram">📷</a>
						<a href="#!" aria-label="Facebook">👥</a>
						<a href="#!" aria-label="Twitter">🐦</a>
						<a href="#!" aria-label="YouTube">▶️</a>
					</div>
				</div>
				<form class="contact-form" data-aos="fade-left" {@attach aosAttachment()}>
					<div class="form-group">
						<input type="text" placeholder="Your Name" required />
					</div>
					<div class="form-group">
						<input type="email" placeholder="Your Email" required />
					</div>
					<div class="form-group">
						<select>
							<option value="">Select Destination</option>
							{#each destinations as dest}
								<option value={dest.name}>{dest.name}</option>
							{/each}
						</select>
					</div>
					<div class="form-group">
						<textarea placeholder="Tell us about your dream trip..." rows="4"></textarea>
					</div>
					<button type="submit" class="btn btn-primary btn-full">Send Inquiry</button>
				</form>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="footer">
		<div class="container">
			<div class="footer-grid">
				<div class="footer-brand" data-aos="fade-up" {@attach aosAttachment()}>
					<div class="logo">
						<span class="logo-icon">🌍</span>
						<span class="logo-text">Wanderlust</span>
					</div>
					<p>Making travel dreams come true since 2010.</p>
				</div>
				<div class="footer-links" data-aos="fade-up" {@attach aosAttachment({ delay: 100 })}>
					<h4>Quick Links</h4>
					<a href="#destinations">Destinations</a>
					<a href="#services">Services</a>
					<a href="#testimonials">Reviews</a>
					<a href="#contact">Contact</a>
				</div>
				<div class="footer-links" data-aos="fade-up" {@attach aosAttachment({ delay: 200 })}>
					<h4>Support</h4>
					<a href="#!">FAQ</a>
					<a href="#!">Terms & Conditions</a>
					<a href="#!">Privacy Policy</a>
					<a href="#!">Cancellation Policy</a>
				</div>
				<div class="footer-newsletter" data-aos="fade-up" {@attach aosAttachment({ delay: 300 })}>
					<h4>Newsletter</h4>
					<p>Subscribe for travel tips and exclusive deals</p>
					<form class="newsletter-form">
						<input type="email" placeholder="Your email" />
						<button type="submit">→</button>
					</form>
				</div>
			</div>
			<div class="footer-bottom">
				<p>© 2025 Wanderlust Travel Agency. All rights reserved.</p>
				<p>
					<a href="/">← Back to AOS Guide</a> · <a href="/travel">Action Example</a>
				</p>
			</div>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family:
			'Segoe UI',
			system-ui,
			-apple-system,
			sans-serif;
		background: #fafafa;
		color: #2d3436;
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
		box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
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
		color: #2d3436;
	}

	.logo-icon {
		font-size: 1.75rem;
	}

	.logo-text {
		font-size: 1.5rem;
		font-weight: 700;
		background: linear-gradient(135deg, #0984e3 0%, #00b894 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.nav-links a {
		text-decoration: none;
		color: #636e72;
		font-weight: 500;
		transition: color 0.3s;
	}

	.nav-links a:hover {
		color: #0984e3;
	}

	.btn-nav {
		background: linear-gradient(135deg, #0984e3 0%, #00b894 100%);
		color: white !important;
		padding: 0.6rem 1.5rem;
		border-radius: 50px;
	}

	/* Buttons */
	.btn {
		display: inline-block;
		padding: 1rem 2rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: 600;
		transition: all 0.3s;
		border: none;
		cursor: pointer;
		font-size: 1rem;
	}

	.btn-primary {
		background: linear-gradient(135deg, #0984e3 0%, #00b894 100%);
		color: white;
	}

	.btn-primary:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 30px rgba(9, 132, 227, 0.3);
	}

	.btn-outline {
		background: transparent;
		color: white;
		border: 2px solid white;
	}

	.btn-outline:hover {
		background: white;
		color: #0984e3;
	}

	.btn-full {
		width: 100%;
	}

	/* Hero Section */
	.hero {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		text-align: center;
		padding: 6rem 2rem 4rem;
		overflow: hidden;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(135deg, rgba(9, 132, 227, 0.9) 0%, rgba(0, 184, 148, 0.9) 100%),
			url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop');
		background-size: cover;
		background-position: center;
		z-index: -1;
	}

	.hero-content {
		max-width: 800px;
		color: white;
	}

	.hero h1 {
		font-size: 4rem;
		font-weight: 800;
		margin: 0 0 1.5rem;
		line-height: 1.1;
	}

	.highlight {
		background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero p {
		font-size: 1.25rem;
		opacity: 0.95;
		margin: 0 0 2.5rem;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 4rem;
	}

	.hero-stats {
		display: flex;
		gap: 3rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.stat {
		text-align: center;
	}

	.stat-value {
		display: block;
		font-size: 2.5rem;
		font-weight: 800;
	}

	.stat-label {
		font-size: 0.9rem;
		opacity: 0.9;
	}

	.scroll-indicator {
		position: absolute;
		bottom: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		color: white;
		opacity: 0.8;
		font-size: 0.9rem;
	}

	.scroll-arrow {
		animation: bounce 2s infinite;
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(10px);
		}
	}

	/* Section Styles */
	section {
		padding: 6rem 0;
	}

	section h2 {
		font-size: 2.5rem;
		text-align: center;
		margin: 0 0 0.5rem;
		color: #2d3436;
	}

	.section-subtitle {
		text-align: center;
		color: #636e72;
		font-size: 1.1rem;
		margin: 0 0 3rem;
	}

	/* Features Section */
	.features-section {
		background: #f8f9fa;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.feature-card {
		background: white;
		padding: 2.5rem 2rem;
		border-radius: 20px;
		text-align: center;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
		transition: transform 0.3s;
	}

	.feature-card:hover {
		transform: translateY(-10px);
	}

	.feature-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.feature-card h3 {
		margin: 0 0 0.75rem;
		color: #2d3436;
	}

	.feature-card p {
		margin: 0;
		color: #636e72;
		font-size: 0.95rem;
	}

	/* Destinations Section */
	.destinations-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
	}

	.destination-card {
		background: white;
		border-radius: 20px;
		overflow: hidden;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s;
	}

	.destination-card:hover {
		transform: translateY(-10px);
	}

	.card-image {
		position: relative;
		height: 220px;
		overflow: hidden;
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s;
	}

	.destination-card:hover .card-image img {
		transform: scale(1.1);
	}

	.card-badge {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: white;
		padding: 0.4rem 1rem;
		border-radius: 50px;
		font-size: 0.85rem;
		font-weight: 600;
		color: #0984e3;
	}

	.card-content {
		padding: 1.5rem;
	}

	.card-rating {
		color: #fdcb6e;
		font-size: 0.9rem;
		margin-bottom: 0.5rem;
	}

	.card-rating span {
		color: #636e72;
		margin-left: 0.5rem;
	}

	.card-content h3 {
		margin: 0 0 1rem;
		color: #2d3436;
	}

	.card-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.price {
		font-size: 1.25rem;
		font-weight: 700;
		color: #00b894;
	}

	.btn-book {
		background: linear-gradient(135deg, #0984e3 0%, #00b894 100%);
		color: white;
		border: none;
		padding: 0.6rem 1.2rem;
		border-radius: 50px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s;
	}

	.btn-book:hover {
		transform: scale(1.05);
		box-shadow: 0 5px 20px rgba(9, 132, 227, 0.3);
	}

	/* CTA Banner */
	.cta-banner {
		background: linear-gradient(135deg, #0984e3 0%, #00b894 100%);
		padding: 5rem 2rem;
		text-align: center;
	}

	.cta-content h2 {
		color: white;
		font-size: 2.5rem;
		margin: 0 0 1rem;
	}

	.cta-content p {
		color: rgba(255, 255, 255, 0.9);
		font-size: 1.2rem;
		margin: 0 0 2rem;
	}

	.cta-form {
		display: flex;
		max-width: 500px;
		margin: 0 auto;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.cta-form input {
		flex: 1;
		min-width: 250px;
		padding: 1rem 1.5rem;
		border: none;
		border-radius: 50px;
		font-size: 1rem;
	}

	.cta-form .btn {
		white-space: nowrap;
	}

	/* Testimonials */
	.testimonials-section {
		background: #f8f9fa;
	}

	.testimonials-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 2rem;
	}

	.testimonial-card {
		background: white;
		padding: 2.5rem;
		border-radius: 20px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
		position: relative;
	}

	.quote-icon {
		position: absolute;
		top: 1rem;
		left: 1.5rem;
		font-size: 4rem;
		color: #0984e3;
		opacity: 0.1;
		font-family: Georgia, serif;
		line-height: 1;
	}

	.testimonial-text {
		font-size: 1.1rem;
		color: #2d3436;
		margin: 0 0 1.5rem;
		font-style: italic;
	}

	.testimonial-author {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.testimonial-author img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		object-fit: cover;
	}

	.testimonial-author strong {
		display: block;
		color: #2d3436;
	}

	.testimonial-author span {
		font-size: 0.9rem;
		color: #636e72;
	}

	/* Gallery */
	.gallery-section {
		padding: 6rem 0;
	}

	.gallery-section h2 {
		margin-bottom: 3rem;
	}

	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: 200px;
		gap: 1rem;
		padding: 0 2rem;
	}

	.gallery-item {
		border-radius: 15px;
		overflow: hidden;
	}

	.gallery-item.large {
		grid-column: span 2;
		grid-row: span 2;
	}

	.gallery-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s;
	}

	.gallery-item:hover img {
		transform: scale(1.1);
	}

	/* Contact */
	.contact-section {
		background: #f8f9fa;
	}

	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: start;
	}

	.contact-info h2 {
		text-align: left;
		margin-bottom: 1rem;
	}

	.contact-info > p {
		color: #636e72;
		margin: 0 0 2rem;
	}

	.contact-details {
		margin-bottom: 2rem;
	}

	.contact-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
		color: #2d3436;
	}

	.contact-icon {
		font-size: 1.25rem;
	}

	.social-links {
		display: flex;
		gap: 1rem;
	}

	.social-links a {
		width: 45px;
		height: 45px;
		background: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.25rem;
		text-decoration: none;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s;
	}

	.social-links a:hover {
		transform: translateY(-3px);
	}

	.contact-form {
		background: white;
		padding: 2.5rem;
		border-radius: 20px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
	}

	.form-group {
		margin-bottom: 1.25rem;
	}

	.contact-form input,
	.contact-form select,
	.contact-form textarea {
		width: 100%;
		padding: 1rem;
		border: 2px solid #e8e8e8;
		border-radius: 10px;
		font-size: 1rem;
		transition: border-color 0.3s;
		font-family: inherit;
		box-sizing: border-box;
	}

	.contact-form input:focus,
	.contact-form select:focus,
	.contact-form textarea:focus {
		outline: none;
		border-color: #0984e3;
	}

	/* Footer */
	.footer {
		background: #2d3436;
		color: white;
		padding: 5rem 0 2rem;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 2fr;
		gap: 3rem;
		margin-bottom: 3rem;
	}

	.footer-brand p {
		color: #b2bec3;
		margin: 1rem 0 0;
	}

	.footer-brand .logo {
		color: white;
	}

	.footer-links h4,
	.footer-newsletter h4 {
		margin: 0 0 1.25rem;
		font-size: 1.1rem;
	}

	.footer-links a {
		display: block;
		color: #b2bec3;
		text-decoration: none;
		margin-bottom: 0.75rem;
		transition: color 0.3s;
	}

	.footer-links a:hover {
		color: #00b894;
	}

	.footer-newsletter p {
		color: #b2bec3;
		margin: 0 0 1rem;
		font-size: 0.95rem;
	}

	.newsletter-form {
		display: flex;
		gap: 0.5rem;
	}

	.newsletter-form input {
		flex: 1;
		padding: 0.75rem 1rem;
		border: none;
		border-radius: 8px;
		font-size: 0.95rem;
	}

	.newsletter-form button {
		background: linear-gradient(135deg, #0984e3 0%, #00b894 100%);
		color: white;
		border: none;
		padding: 0.75rem 1.25rem;
		border-radius: 8px;
		cursor: pointer;
		font-size: 1.1rem;
		transition: transform 0.3s;
	}

	.newsletter-form button:hover {
		transform: scale(1.05);
	}

	.footer-bottom {
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		padding-top: 2rem;
		text-align: center;
		color: #b2bec3;
	}

	.footer-bottom a {
		color: #00b894;
		text-decoration: none;
	}

	.footer-bottom a:hover {
		text-decoration: underline;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.gallery-grid {
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

		.hero-stats {
			gap: 1.5rem;
		}

		.stat-value {
			font-size: 1.75rem;
		}

		section h2 {
			font-size: 2rem;
		}

		.destinations-grid {
			grid-template-columns: 1fr;
		}

		.contact-grid {
			grid-template-columns: 1fr;
		}

		.gallery-grid {
			grid-template-columns: 1fr;
		}

		.gallery-item.large {
			grid-column: span 1;
			grid-row: span 1;
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

		.newsletter-form {
			flex-direction: column;
		}
	}
</style>
