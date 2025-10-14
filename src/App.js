import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Landing from "./Pages/Landing";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";
import "./App.css";
import Download from "./Pages/Downlaod";
import Branding from "./Pages/Branding";
import Navbar from "./Components/Navbar";
import Overview from "./Pages/Overview";
import LanguageRouter from "./Components/LanguageRouter";
import LanguageRedirect from "./Components/LanguageRedirect";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LanguageRedirect />} />
				<Route path="/contact" element={<LanguageRedirect />} />
				<Route path="/download" element={<LanguageRedirect />} />
				<Route path="/branding" element={<LanguageRedirect />} />
				<Route path="/system-overview" element={<LanguageRedirect />} />
				
				<Route path="/:lang/*" element={
					<LanguageRouter>
						<Navbar />
						<Routes>
							<Route path="/" element={<Landing />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/download" element={<Download />} />
							<Route path="/branding" element={<Branding />} />
							<Route path="/system-overview" element={<Overview />} />
							<Route path="*" element={<PageNotFound />} />
						</Routes>
						<Footer />
					</LanguageRouter>
				} />
				
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</Router>
	);
};

export default App;
