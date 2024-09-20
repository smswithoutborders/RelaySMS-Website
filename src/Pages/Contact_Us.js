import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar"; // Correct path to Navbar component
import Footer from "../Components/Footer"; // Correct path to Footer component
import Landing from "./Landing"; // Correct path to Landing page
import Contact_Us from "./Contact_Us"; // Correct path to Contact Us page

function App() {
	// ... RTL/LTR code from earlier

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/contact" element={<Contact_Us />} />
				{/* Add other routes as needed */}
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
