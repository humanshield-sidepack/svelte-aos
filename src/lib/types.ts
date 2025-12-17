export type AnchorPlacement =
	| 'top-bottom'
	| 'top-center'
	| 'top-top'
	| 'center-bottom'
	| 'center-center'
	| 'center-top'
	| 'bottom-bottom'
	| 'bottom-center'
	| 'bottom-top';

export type AnimationType =
	| 'fade'
	| 'fade-up'
	| 'fade-down'
	| 'fade-left'
	| 'fade-right'
	| 'fade-up-left'
	| 'fade-up-right'
	| 'fade-down-left'
	| 'fade-down-right'
	| 'zoom-in'
	| 'zoom-in-up'
	| 'zoom-in-down'
	| 'zoom-in-left'
	| 'zoom-in-right'
	| 'zoom-out'
	| 'zoom-out-up'
	| 'zoom-out-down'
	| 'zoom-out-left'
	| 'zoom-out-right'
	| 'flip-up'
	| 'flip-down'
	| 'flip-left'
	| 'flip-right'
	| 'slide-up'
	| 'slide-down'
	| 'slide-left'
	| 'slide-right';

export type EasingType =
	| 'linear'
	| 'ease'
	| 'ease-in'
	| 'ease-out'
	| 'ease-in-out'
	| 'ease-in-back'
	| 'ease-out-back'
	| 'ease-in-out-back'
	| 'ease-in-sine'
	| 'ease-out-sine'
	| 'ease-in-out-sine'
	| 'ease-in-quad'
	| 'ease-out-quad'
	| 'ease-in-out-quad'
	| 'ease-in-cubic'
	| 'ease-out-cubic'
	| 'ease-in-out-cubic'
	| 'ease-in-quart'
	| 'ease-out-quart'
	| 'ease-in-out-quart';

export type DisableOption = boolean | 'mobile' | 'phone' | 'tablet' | (() => boolean);

export interface AOSOptions {
	/** Offset (in px) from the original trigger point */
	offset?: number;
	/** Values from 0 to 3000, with step 50ms */
	delay?: number;
	/** Duration of animation (accepts values from 0 to 3000, with step 50ms) */
	duration?: number;
	/** Easing for AOS animations */
	easing?: EasingType;
	/** Whether animation should happen only once - while scrolling down */
	once?: boolean;
	/** Defines which position of the element regarding to window should trigger the animation */
	anchorPlacement?: AnchorPlacement;
	/** Condition when AOS should be disabled */
	disable?: DisableOption;

	/* for the intersection observer */
	threshold?: number;
}
