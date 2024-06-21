import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Landing from "./Pages/Landing";
import Help from "./Pages/Help";
import PageNotFound from "./Pages/PageNotFound";
import Download from "./Pages/Download";
import Loader from "./Components/Loader";

const lightTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#2434a4"
		},
		secondary: {
			main: "#dc004e"
		},
		background: {
			default: "#d2e1fa",
			paper: "#f4f6f8"
		},
		text: {
			primary: "#000000",
			secondary: "#555555"
		}
	}
});

const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#90caf9"
		},
		secondary: {
			main: "#f48fb1"
		},
		background: {
			default: "#1c222c",
			paper: "#1e1e1e"
		},
		text: {
			primary: "#ffffff",
			secondary: "#bbbbbb"
		}
	}
});

const App = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 3000); // Change the duration as needed

		return () => clearTimeout(timer);
	}, []);

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
	};

	const theme = darkMode ? darkTheme : lightTheme;

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{isLoading ? (
				<Loader />
			) : (
				<Router>
					<Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="/help" element={<Help />} />
						<Route path="/download" element={<Download />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
					<Footer />
				</Router>
			)}
		</ThemeProvider>
	);
};

export default App;
