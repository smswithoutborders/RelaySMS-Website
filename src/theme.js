import { createTheme } from "@mui/material/styles";

const baseTypography = {
	fontFamily: "Ubuntu, sans-serif",
	h1: { fontFamily: "'Unbounded', Ubuntu, sans-serif" },
	h2: { fontFamily: "'Unbounded', Ubuntu, sans-serif" },
	h3: { fontFamily: "'Unbounded', Ubuntu, sans-serif" },
	h4: { fontFamily: "'Unbounded', Ubuntu, sans-serif" },
	h5: { fontFamily: "'Unbounded', Ubuntu, sans-serif" },
	h6: { fontFamily: "'Unbounded', Ubuntu, sans-serif" }
};

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#001871",
			light: "#4285F4",
			dark: "#00104f",
			contrastText: "#ffffff"
		},
		secondary: {
			main: "#FF8614",
			contrastText: "#001871"
		},
		background: {
			default: "#ffffff",
			paper: "#f8f9fa"
		},
		text: {
			primary: "#10151d",
			secondary: "#555555"
		},
		divider: "#e9ecef"
	},
	typography: baseTypography
});

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#3f75c0",
			light: "#6a96d4",
			dark: "#3460a0",
			contrastText: "#ffffff"
		},
		secondary: {
			main: "#FF8614",
			contrastText: "#0e1117"
		},
		background: {
			default: "#0e1117",
			paper: "#161b22"
		},
		text: {
			primary: "#e6e8ed",
			secondary: "#8b95a8"
		},

		divider: "rgba(255, 255, 255, 0.1)"
	},
	typography: baseTypography
});
