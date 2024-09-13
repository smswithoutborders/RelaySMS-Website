import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../App.css";

const BackToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		isVisible && (
			<button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
				<FaArrowUp />
			</button>
		)
	);
};

export default BackToTopButton;
