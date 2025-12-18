import type { AnimationType, AOSOptions, EasingType } from '$lib/types.ts';
import { detectDeviceType } from '$lib/utils.ts';

const defaultOptions: Required<AOSOptions> = {
	delay: 0,
	easing: 'ease',
	duration: 600,
	disable: 'mobile',
	once: false,
	anchorPlacement: 'top-bottom',
	offset: 120,
	threshold: 0.1

	// TODO: implement these later
	// animatedClassName: 'aos-animate',
	// initClassName?: 'aos-init',
	// useClassNames: false,
	// disableMutationObserver: false
};

function isValidDistance(value: string): boolean {
	const el = document.createElement('div');
	el.style.width = '';
	el.style.width = value;
	return el.style.width !== '';
}

class IntersectionObserverManager {
	private observer: IntersectionObserver;
	private options: Required<AOSOptions>;
	private elements: Map<HTMLElement, Required<AOSOptions>> = new Map();

	constructor(options: Required<AOSOptions>) {
		this.options = options;
		this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
			threshold: options.threshold,
			rootMargin: `0px 0px -${options.offset}px 0px`
		});
		console.log('disabled options:', options);
		// handle disable option
		if (typeof options?.disable === 'boolean' && options.disable) {
			document.body.classList.add('aos-disabled');
		} else if (typeof options?.disable === 'string') {
			const deviceType = detectDeviceType();
			if (options.disable === deviceType) {
				document.body.classList.add('aos-disabled');
			}
		} else if (typeof options?.disable === 'function') {
			if (options.disable()) {
				document.body.classList.add('aos-disabled');
			}
		}
	}

	handleIntersect(entries: IntersectionObserverEntry[]) {
		console.log('Handling intersections with options:', this.options);
		entries.forEach((entry) => {
			if (entry.isIntersecting && entry.intersectionRatio > 0.05) {
				if (this.elements.has(entry.target as HTMLElement)) {
					entry.target.classList.add('aos-animate');
					const elementOptions = this.elements.get(entry.target as HTMLElement);
					if (elementOptions?.once) {
						// if only once why keep observing
						this.observer.unobserve(entry.target);
					}
				} else {
					// this should never happen if it does don't observe the element
					console.warn('No options found for element:', entry.target);
					this.observer.unobserve(entry.target);
				}
			} else {
				const once = entry.target.hasAttribute('data-aos-once') || this.options.once;
				if (!once) {
					entry.target.classList.remove('aos-animate');
				}
			}
		});
	}

	observe(element: HTMLElement, options: AOSElementOptions) {
		console.log('Before Observing element with options:', element, options);
		this.elements.set(element, this.options);

		if (options.animation) {
			element.setAttribute('data-aos', options.animation);
		}

		if (options.duration) {
			element.style.setProperty('--aos-duration', `${options.duration}ms`);
		}
		if (options.delay) {
			element.style.setProperty('--aos-delay', `${options.delay}ms`);
		}

		if (options.easing) {
			element.style.setProperty('--aos-easing', options.easing);
		}

		if (options.distance && isValidDistance(options.distance)) {
			element.style.setProperty('--aos-distance', options.distance);
		}

		this.observer.observe(element);
	}

	unobserve(element: HTMLElement) {
		this.observer.unobserve(element);
		this.elements.delete(element);
	}
}

let observerManager: IntersectionObserverManager | null = null;

export function initAOS(options: AOSOptions = {}) {
	console.log('Initializing AOS with options:', options);
	if (typeof window === 'undefined') {
		console.warn('AOS can only be initialized in a browser environment.');
		return;
	}
	const requiredOptions: Required<AOSOptions> = { ...defaultOptions, ...options };
	if (!observerManager) {
		observerManager = new IntersectionObserverManager(requiredOptions);
	} else {
		console.warn('AOS already initialzed, ');
	}
}

export type AOSElementOptions = {
	animation?: AnimationType;
	duration?: number;
	delay?: number;
	easing?: EasingType;
	once?: boolean;
	distance?: string;
};

function observe(node: HTMLElement, options: AOSElementOptions) {
	if (observerManager) {
		observerManager.observe(node, options);
	} else {
		console.warn('AOS not initialized. Please call initialize it first.');
	}

	return () => observerManager?.unobserve(node);
}

export function aos(
	options: AOSElementOptions = {
		animation: 'fade'
	}
) {
	return (node: HTMLElement) => {
		const unobserve = observe(node, options);
		return unobserve;
	};
}

export function aosAction(
	node: HTMLElement,
	options: AOSElementOptions = {
		animation: 'fade'
	}
) {
	const unobserve = observe(node, options);
	return {
		update: () => {},
		destroy() {
			unobserve();
		}
	};
}
