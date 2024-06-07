import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Landing from "./Pages/Landing";
import Help from "./Pages/Help";
import PageNotFound from "./Pages/PageNotFound";
import Download from "./Pages/Download";
import MobileNav from "./Components/MobileNav";
import Loader from "./Components/Loader";

const App = () => {
	const [darkMode, setDarkMode] = useState(true);
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

	const theme = createTheme({
		palette: {
			mode: darkMode ? "dark" : "light"
		}
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{isLoading ? (
				<Loader />
			) : (
				<Router>
					<Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
					<MobileNav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
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
