import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";

export const PageAnimationWrapper = ({ children }) => {
	const x = { target: "0%", initial: "-150%" };

	return (
		<Container fluid>
			<motion.div
				className="font-display"
				initial={{ x: x.initial }}
				animate={{ x: x.target }}
				transition={{ type: "spring", damping: 19 }}
			>
				{children}
			</motion.div>
		</Container>
	);
};

PageAnimationWrapper.propTypes = {
	children: PropTypes.node.isRequired
};
