import { DESKTOP_MIN_WIDTH } from '$lib/constants';

export const appState = $state({
	isDarkMode: false,
	isDesktop: false
});

export function toggleDarkMode() {
	appState.isDarkMode = !appState.isDarkMode;
}

export function setIsDesktop(innerWidth: number) {
	appState.isDesktop = innerWidth >= DESKTOP_MIN_WIDTH;
}
