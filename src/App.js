import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Landing from "./Pages/Landing";
import Help from "./Pages/Help";
import Contact_Us from "./Pages/Contact_Us";
import PageNotFound from "./Pages/PageNotFound";
import Download from "./Pages/Download";
import Loader from "./Components/Loader";
import BackToTopButton from "./Components/BackToTopButton";
import "./App.css";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<CssBaseline />
			{isLoading ? (
				<Loader />
			) : (
				<Router>
					<Nav />
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="/help" element={<Help />} />
						<Route path="/Contact_Us" element={<Contact_Us />} />
						<Route path="/download" element={<Download />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
					<Footer />
					<BackToTopButton />
				</Router>
			)}
		</>
	);
};

export default App;
