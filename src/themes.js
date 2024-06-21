import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#1976d2"
		},
		secondary: {
			main: "#63430b"
		},
		background: {
			default: "#f5f5f5",
			paper: "#ffffff"
		},
		text: {
			primary: "#000000",
			secondary: "#555555"
		}
	}
});

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#90caf9"
		},
		secondary: {
			main: "#2b3343"
		},
		background: {
			default: "#121212",
			paper: "#394459"
		},
		text: {
			primary: "#7189b1",
			secondary: "#8eabde"
		}
	}
});
