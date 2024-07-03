import React from "react";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import {
	AppStoreButton as OriginalAppStoreButton,
	GooglePlayButton as OriginalGooglePlayButton
} from "react-mobile-app-button";
import Box from "@mui/material/Box";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";

const CustomAppStoreButton = ({ url, theme, className }) => {
	const appliedTheme = useTheme();

	return (
		<ThemeProvider theme={appliedTheme}>
			<Box className={`custom-button ${className}`}>
				<DesktopWindowsIcon className="desktop-favicon" />
				<OriginalAppStoreButton url={url} theme={theme} />
			</Box>
		</ThemeProvider>
	);
};

const CustomGooglePlayButton = ({ url, height, theme, width, className }) => {
	const appliedTheme = useTheme();

	return (
		<ThemeProvider theme={appliedTheme}>
			<Box className={`custom-button ${className}`}>
				<OriginalGooglePlayButton url={url} height={height} theme={theme} width={width} />
			</Box>
		</ThemeProvider>
	);
};

export { CustomAppStoreButton, CustomGooglePlayButton };
