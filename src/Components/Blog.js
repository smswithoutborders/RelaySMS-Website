import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Container, Row } from "react-bootstrap";
import "../App.css";

const MultiItemCarousel = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
	const { t, i18n } = useTranslation();

	const items = [
		{
			id: 1,
			imgSrc: "/composeMessage.png",
			imgAlt: "Waterfall",
			title: t("Blog.Reliability"),
			description: t("Blog.ReliabilityD"),
			link: "https://blog.smswithoutborders.com/posts/reliability-of-gateway-clients-in-smswithoutborders",
			author: "Aysha Musa",
			avatar: "V"
		},
		{
			id: 2,
			imgSrc: "/resilience.svg",
			title: t("Blog.Resilience"),
			description: t("Blog.ResilienceD"),
			link: "https://blog.smswithoutborders.com/posts/reliability-of-gateway-clients-in-smswithoutborders",
			author: "Aysha Musa",
			avatar: "R"
		}
	];

	const isRTL = i18n.language === "fa";

	const cardStyles = {
		maxWidth: isMobile ? "100%" : "500px",
		width: "100%",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
		borderRadius: 20,
		border: "1px solid #e0e0e0",
		margin: "10px auto",
		transition: "transform 0.2s, box-shadow 0.2s",
		"&:hover": {
			transform: "scale(1.02)",
			boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
			border: "1px solid #8AC1EE"
		}
	};

	const imgStyles = {
		width: "100%",
		height: "auto",
		objectFit: "cover",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20
	};

	const titleStyles = {
		fontSize: isMobile ? "1.2rem" : "1.5rem",
		marginBottom: "0.5rem",
		fontWeight: "bold",
		textAlign: "center"
	};

	const descriptionStyles = {
		fontSize: isMobile ? "0.9rem" : "1rem",
		color: "#666",
		textAlign: "center"
	};

	const linkStyles = {
		display: "block",
		textAlign: "center",
		marginTop: "1rem",
		color: "#007bff",
		textDecoration: "none"
	};

	return (
		<Container
			style={{
				padding: "0 20px",
				marginBottom: "20px",
				maxWidth: "1500px",
				margin: "0 auto"
			}}
			sx={{
				direction: isRTL ? "rtl" : "ltr",
				display: "flex",
				justifyContent: "center"
			}}
		>
			<Row>
				{isMobile || isTablet ? (
					<Carousel variant="dark" style={{ maxWidth: "100%", margin: "auto" }}>
						{items.map((item) => (
							<Carousel.Item key={item.id}>
								<div className="card" style={cardStyles}>
									<img
										src={item.imgSrc}
										className="card-img-top"
										alt={item.imgAlt}
										style={imgStyles}
									/>
									<div className="card-body">
										<h5 className="card-title" style={titleStyles}>
											{item.title}
										</h5>
										<p className="card-text" style={descriptionStyles}>
											{item.description}
										</p>
										<a href={item.link} style={linkStyles}>
											{t("Blog.ReadMore")}
										</a>
									</div>
								</div>
							</Carousel.Item>
						))}
					</Carousel>
				) : (
					<Box className="row" sx={{ display: "flex", justifyContent: "center" }}>
						{items.map((item) => (
							<Box key={item.id} sx={{ maxWidth: "33.33%", flex: "1 1 33.33%", padding: "10px" }}>
								<div className="card" style={cardStyles}>
									<img
										src={item.imgSrc}
										className="card-img-top"
										alt={item.imgAlt}
										style={imgStyles}
									/>
									<div className="card-body">
										<h5 className="card-title" style={titleStyles}>
											{item.title}
										</h5>
										<p className="card-text" style={descriptionStyles}>
											{item.description}
										</p>
										<a href={item.link} style={linkStyles}>
											{t("Blog.ReadMore")}
										</a>
									</div>
								</div>
							</Box>
						))}
					</Box>
				)}
			</Row>
		</Container>
	);
};

export default MultiItemCarousel;
