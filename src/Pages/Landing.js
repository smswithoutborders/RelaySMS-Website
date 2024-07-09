import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Image } from "react-bootstrap";
import { PageAnimationWrapper } from "../Components/PageAnimationWrapper.js"; // Corrected import
import Blog from "../Components/Blog.js";
import Faqs from "../Components/FAQs.js";
import HowItWorks from "../Components/Howitworks.js";
import Hero from "../Components/Hero.js";
import "../i18n.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Landing() {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	return (
		<PageAnimationWrapper>
			<Container fluid>
				{/* ============================  Hero section ==================================== */}
				<Row className="hero-section align-items-center">
					<Hero />
				</Row>
				{/* ========================= how it works ========================================= */}
				<Row
					className="howitworks-section align-items-center"
					style={{
						backgroundColor: "#f0f0f0",
						padding: "20px",
						margin: 0,
						direction: isRTL ? "rtl" : "ltr"
					}}
				>
					<HowItWorks />
				</Row>

				{/*==================================== Relay Map =========================================*/}
				<Row
					className="align-items-center justify-content-center my-4 py-4 px-3"
					style={{
						marginLeft: 30,
						marginRight: 30
					}}
				>
					<Col md={5} className="text-md-start text-center">
						<h3 className="fw-bold" style={{ fontSize: "33px", color: "black" }}>
							{t("Map.RelaySMSMap")}
						</h3>
					</Col>
					<Col md={7} className="text-center">
						<Image src="/map.png" fluid rounded />
					</Col>
				</Row>

				{/* Blog section */}
				<Row
					className="blog-section align-items-center"
					style={{
						backgroundColor: "#f0f0f0",
						padding: "20px",
						margin: 0,
						direction: isRTL ? "rtl" : "ltr"
					}}
				>
					<Col xs={12}>
						<h2 className="text-center fw-bold" style={{ fontSize: "33px", marginTop: "40px" }}>
							{t("Blog.BlogHeader")}
						</h2>
						<p
							className={`text-center section-subheader ${isRTL ? "text-end" : "text-start"}`}
							style={{ fontSize: "calc(1rem + 0.5vw)" }}
						>
							{t("Blog.BlogSubHeader")}
						</p>
					</Col>
					<Col xs={12}>
						<Blog />
					</Col>
				</Row>

				{/* FAQ section */}
				<Row
					className="faq-section align-items-center"
					style={{
						marginTop: "40px",
						margin: 0,
						direction: isRTL ? "rtl" : "ltr"
					}}
				>
					<Col xs={12}>
						<h2 className="text-center fw-bold" style={{ fontSize: "33px", marginTop: "40px" }}>
							{t("FAQ.FAQ")}
						</h2>
						<p
							className={`text-center section-subheader ${isRTL ? "text-end" : "text-start"}`}
							style={{ fontSize: "calc(1.10rem + 0.5vw)" }}
						>
							{t("FAQ.FAQSubheader")}
						</p>
					</Col>
					<Col xs={12}>
						<Faqs />
					</Col>
				</Row>
			</Container>
		</PageAnimationWrapper>
	);
}
