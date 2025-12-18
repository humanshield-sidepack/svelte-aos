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
