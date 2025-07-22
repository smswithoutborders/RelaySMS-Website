import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Landing from "./Pages/Landing";
import Contact_Us from "./Pages/Contact_Us";
import PageNotFound from "./Pages/PageNotFound";
import "./App.css";
import Download from "./Pages/Downlaod";
import Navbar from "./Components/Navbar";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/Contact_Us" element={<Contact_Us />} />
				<Route path="/Download" element={<Download />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
