import type { AnchorPlacement } from './types.ts';

// TODO: Improve this device detection logic
export function detectDeviceType(): 'mobile' | 'tablet' | 'desktop' {
	if (typeof navigator === 'undefined') return 'desktop';

	const ua = navigator.userAgent;

	if (/Mobi|Android/i.test(ua)) {
		return 'mobile';
	} else if (/Tablet|iPad/i.test(ua)) {
		return 'tablet';
	} else {
		return 'desktop';
	}
}

export const computeRootMargin = (anchorPlacement: AnchorPlacement, offset = 0) => {
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
