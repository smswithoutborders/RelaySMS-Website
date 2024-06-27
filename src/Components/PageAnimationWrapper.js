import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export const PageAnimationWrapper = ({ children }) => {
	const x = { target: "0%", initial: "-150%" };
	return (
		<motion.div
			className="font-display"
			initial={{ x: x.initial }}
			animate={{
				x: x.target,
				transitionEnd: {
					x: 0
				}
			}}
			transition={{ type: "spring", damping: 19 }}
		>
			{children}
		</motion.div>
	);
};

PageAnimationWrapper.propTypes = {
	children: PropTypes.node
};
