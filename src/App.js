import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./Components/Footer";
// import Nav from "./Components/Nav";
import Landing from "./Pages/Landing";
import Contact_Us from "./Pages/Contact_Us";
import PageNotFound from "./Pages/PageNotFound";
import BackToTopButton from "./Components/BackToTopButton";
import "./App.css";

const App = () => {
	return (
		<>
			<CssBaseline />

			<Router>
				{/* <Nav /> */}
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/Contact_Us" element={<Contact_Us />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
				<Footer />
				<BackToTopButton />
			</Router>
		</>
	);
};

export default App;
