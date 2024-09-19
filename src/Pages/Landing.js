import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { PageAnimationWrapper } from "../Components/PageAnimationWrapper.js";
import Blog from "../Components/Blog.js";
import Faqs from "../Components/FAQs.js";
import Hero from "../Components/Hero.js";
import "../i18n.js";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";

export default function Landing() {
	useEffect(() => {
		AOS.init({});
	}, []);

	return (
		<PageAnimationWrapper>
			<Container fluid>
				<Hero />
				<Blog />
				<Faqs />
			</Container>
		</PageAnimationWrapper>
	);
}
