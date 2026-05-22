import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { lightTheme, darkTheme } from "./theme";

const ThemeContext = createContext({
	mode: "system",
	setMode: () => {},
	resolvedMode: "light"
});

export const useThemeMode = () => useContext(ThemeContext);

export const AppThemeProvider = ({ children }) => {
	const [mode, setMode] = useState(() => localStorage.getItem("themeMode") || "system");
	const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

	const resolvedMode = mode === "system" ? (prefersDark ? "dark" : "light") : mode;
	const theme = resolvedMode === "dark" ? darkTheme : lightTheme;

	const handleSetMode = (newMode) => {
		setMode(newMode);
		localStorage.setItem("themeMode", newMode);
	};

	return (
		<ThemeContext.Provider value={{ mode, setMode: handleSetMode, resolvedMode }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};
