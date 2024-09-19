import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";

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
			<Button
				variant="primary"
				onClick={scrollToTop}
				aria-label="Back to top"
				className="back-to-top"
			>
				<FaArrowUp />
			</Button>
		)
	);
};

export default BackToTopButton;
