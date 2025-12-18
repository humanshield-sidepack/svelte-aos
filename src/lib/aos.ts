import type {
	AOSOptions,
	AnimationType,
	DisableOption,
	EasingType,
	AnchorPlacement
} from './types.ts';
import { detectDeviceType } from './utils.ts';
// import './styles.css';

const computeRootMargin = (anchorPlacement: AnchorPlacement, offset = 0) => {
	// simple handling for common placements; expand if needed
	if (anchorPlacement === 'top-bottom') {
		return `0px 0px -${offset}px 0px`; // trigger when element top hits viewport bottom - offset
	}
	if (anchorPlacement === 'bottom-top') {
		return `-${offset}px 0px 0px 0px`;
	}
	if (anchorPlacement === 'center-center') {
		return `-50% 0px -50% 0px`;
	}
	return `0px 0px 0px 0px`;
};

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

function initializeIntersectionObserver(params: AOSOptions, node: HTMLElement) {
	if (params?.duration) {
		node.style.setProperty('--aos-duration', `${params.duration}ms`);
	}

	// handle disable option
	if (typeof params?.disable === 'boolean' && params.disable) {
		node.classList.add('aos-disabled');
	} else if (typeof params?.disable === 'string') {
		const deviceType = detectDeviceType();
		if (params.disable === deviceType) {
			node.classList.add('aos-disabled');
		}
	} else if (typeof params?.disable === 'function') {
		if (params.disable()) {
			node.classList.add('aos-disabled');
		}
	}

	if (params?.delay) {
		node.style.setProperty('--aos-delay', `${params.delay}ms`);
	}

	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && entry.intersectionRatio > 0.05) {
					// handle intersection
					entry.target.classList.add('aos-animate');
					if (params?.once) {
						// why keep observing if we only want once?
						io.unobserve(entry.target);
					}
				} else {
					const once = entry.target.hasAttribute('data-aos-once') || params?.once;
					if (!once) {
						entry.target.classList.remove('aos-animate');
					}
				}
			});
		},
		{
			threshold: params?.threshold ?? 0.1,
			rootMargin: computeRootMargin(params?.anchorPlacement ?? 'top-bottom', params?.offset ?? 0)
		}
	);

	const observeNode = (el: HTMLElement) => {
		if (!el.classList.contains('aos-animate')) {
			// set al lthe custom css variable and values here we do not to do that on intersection
			const dataDuration = el.getAttribute('data-aos-duration') || params?.duration;
			if (dataDuration) {
				el.style.setProperty('--aos-duration', `${dataDuration}ms`);
			}
			const dataDelay = el.getAttribute('data-aos-delay') || params?.delay;
			if (dataDelay) {
				el.style.setProperty('--aos-delay', `${dataDelay}ms`);
			}

			const easing = el.getAttribute('data-aos-easing');

			if (!easing && params?.easing) {
				el.setAttribute('data-aos-easing', params.easing);
			}

			io.observe(el);
		}
	};

	// Observe all existing [data-aos] elements
	node.querySelectorAll<HTMLElement>('[data-aos]').forEach(observeNode);

	// Watch for new elements or attribute changes
	const mo = new MutationObserver((mutations) => {
		mutations.forEach((m) => {
			// New nodes
			m.addedNodes.forEach((n) => {
				if (n.nodeType === 1) {
					const el = n as HTMLElement;
					if (el.matches('[data-aos]')) observeNode(el);
					el.querySelectorAll<HTMLElement>('[data-aos]').forEach(observeNode);
				}
			});

			// Attribute changes
			if (m.type === 'attributes' && m.attributeName === 'data-aos') {
				const target = m.target as HTMLElement;
				observeNode(target);
			}
		});
	});

	mo.observe(node, {
		childList: true,
		subtree: true,
		// attributes: true,
		attributeFilter: ['data-aos']
	});

	return { io, mo };
}

/**
 * Create a Svelte attachment that observes elements with `data-aos` and toggles
 * animation classes when they intersect the viewport.
 *
 * The attachment will:
 * - Apply per-element CSS variables (duration/delay) from `data-aos-*` attributes
 *   or from the `params` defaults.
 * - Add the `.aos-animate` class when the element meets the `threshold`/`rootMargin` criteria.
 * - Remove `.aos-animate` on exit unless `once` is true (or element has `data-aos-once="true").
 * - If `once` is true, the element will be unobserved after its first entry.
 * - Applies `params.easing` to elements that do not have `data-aos-easing` set.
 *
 * @param {Object} [params] - Global observer and animation options.
 */
export function aosObserver(params?: {
	duration?: number;
	threshold?: number;
	delay?: number;
	once?: boolean;
	disable?: DisableOption;
	anchorPlacement?: AnchorPlacement;
	offset?: number;
	easing?: EasingType;
}) {
	params = { ...defaultOptions, ...params };

	return function (node: HTMLElement) {
		const { io, mo } = initializeIntersectionObserver(params!, node);
		return () => {
			io.disconnect();
			mo.disconnect();
		};
	};
}

/**
 * This is to use if attachements are not available in your svelte setup.
 * @param node - HTML element to attach AOS behavior to
 *
 * @param params - AOS options
 * @returns
 */
export function aosAction(
	node: HTMLElement,
	params?: {
		duration?: number;
		threshold?: number;
		delay?: number;
		once?: boolean;
		disable?: DisableOption;
		anchorPlacement?: AnchorPlacement;
		offset?: number;
		easing?: EasingType;
	}
) {
	params = { ...defaultOptions, ...params };

	const { io, mo } = initializeIntersectionObserver(params!, node);

	return {
		update: () => {
			// NOTHING
		},
		destroy() {
			console.log('AOS Action destroyed for	 node:', node);
			io.disconnect();
			mo.disconnect();
		}
	};
}

/**
 * Convert a small configuration object into a map of `data-aos-*` attributes.
 *
 * Useful for demos or programmatically attaching attributes to an element (e.g. in Svelte
 * you can spread the returned object with `{...toAosAttributes({...})}`).
 *
 * @param {Object} options - Per-element options
 * @param {number} [options.delay] - Delay in ms
 * @param {number} [options.duration] - Duration in ms
 * @param {EasingType} [options.easing] - Easing name
 * @param {AnimationType} [options.animation] - Animation name
 * @param {boolean} [options.once] - If true, set `data-aos-once` on the element
 * @returns {Record<string,string>} Map of attributes (keys are attribute names, values are strings)
 *
 * @example
 * const attrs = toAosAttributes({ animation: 'fade-up', delay: 150, duration: 400 });
 * // => { 'data-aos': 'fade-up', 'data-aos-delay': '150', 'data-aos-duration': '400' }
 */
export function toAosAttributes(options: {
	delay?: number;
	duration?: number;
	easing?: EasingType;
	animation?: AnimationType;
	once?: boolean;
}): Record<string, string> {
	const attrs: Record<string, string> = {};
	if (options.delay !== undefined) {
		attrs['data-aos-delay'] = options.delay.toString();
	}
	if (options.duration !== undefined) {
		attrs['data-aos-duration'] = options.duration.toString();
	}
	if (options.easing !== undefined) {
		attrs['data-aos-easing'] = options.easing;
	}

	if (options.once) {
		attrs['data-aos-once'] = '';
	}

	attrs['data-aos'] = options.animation ?? 'fade';

	return attrs;
}
