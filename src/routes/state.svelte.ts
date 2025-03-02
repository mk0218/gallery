interface AppState {
	deviceWidth: number;
	isDarkMode: boolean;
}

export const appState: AppState = $state({
	deviceWidth: 0,
	isDarkMode: false,
	isDesktop: false,
});

export function setDeviceWidth(innerWidth: number) {
	appState.deviceWidth = innerWidth;
}

export function toggleDarkMode() {
	appState.isDarkMode = !appState.isDarkMode;
}
