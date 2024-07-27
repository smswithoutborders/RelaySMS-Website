import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Image } from "react-bootstrap";
import { PageAnimationWrapper } from "../Components/PageAnimationWrapper.js";
import Blog from "../Components/Blog.js";
import Faqs from "../Components/FAQs.js";
import Nav from "../Components/Nav.js";
import HowItWorks from "../Components/Howitworks.js";
import Hero from "../Components/Hero.js";
import "../i18n.js";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";

export default function Landing() {
	const { t } = useTranslation();

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<PageAnimationWrapper>
			<Container fluid data-aos="zoom-out">
				<Nav />
				<Hero />
				<HowItWorks />
				<Blog />

				<div
					style={{
						padding: "20px",
						maxWidth: "1500px",
						margin: "0 auto",
						color: "#f5f5f5",
						borderRadius: 8
					}}
				>
					<Row className="align-items-center my-4 py-4 px-3" style={{ margin: 0 }}>
						<Col md={5} className="text-md-start text-center">
							<h3
								data-aos="zoom-out-right"
								className="fw-bold section-title"
								style={{ fontSize: "33px", color: "black" }}
							>
								{t("Map.RelaySMSMap")}
							</h3>
						</Col>
						<Col md={7} className="text-center" data-aos="zoom-in">
							<Image src="/map.png" alt={t("Map.ImageAltText")} fluid rounded />
						</Col>
					</Row>
				</div>
				<Faqs />
			</Container>
		</PageAnimationWrapper>
	);
}
