import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Landing from "./Pages/Landing";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";
import "./App.css";
import Download from "./Pages/Downlaod";
import Branding from "./Pages/Branding";
import Navbar from "./Components/Navbar";
import Overview from "./Pages/Overview";
import Contributing from "./Pages/Contributing";

const ScrollToTop = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
};

const App = () => {
	return (
		<Router
			future={{
				v7_startTransition: true,
				v7_relativeSplatPath: true
			}}
		>
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/download" element={<Download />} />
				<Route path="/android" element={<Landing />} />
				<Route path="/ios" element={<Landing />} />
				<Route path="/branding" element={<Branding />} />
				<Route path="/system-overview" element={<Overview />} />
				<Route path="/contributing" element={<Contributing />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
