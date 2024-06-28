import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const MultiItemCarousel = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
		maxWidth: "600px",
		width: "100%",
		boxShadow: "0 4px 8px #041c94",
		borderRadius: 30,
		border: "1px solid #e0e0e0",
		marginRight: isRTL ? "0" : "30px",
		marginLeft: isRTL ? "30px" : "0",
		marginBottom: "20px",
		"&:hover": {
			transform: "scale(1.02)",
			boxShadow: "0 8px 16px #041c94",
			border: "1px solid #8AC1EE"
		}
	};

	const imgStyles = {
		width: "60%",
		height: "auto",
		objectFit: "cover"
	};

	const titleStyles = {
		fontSize: isMobile ? "1.2rem" : "1.5rem",
		marginBottom: "0.5rem",
		fontWeight: "bold"
	};

	const descriptionStyles = {
		fontSize: isMobile ? "0.9rem" : "0.8rem",
		color: "#666",
		alignContent: "center"
	};

	return (
		<Box
			style={{
				paddingRight: "50px",
				paddingleft: "50px",
				marginBottom: "20px",
				maxWidth: "2000px",
				margin: "0 auto"
			}}
			sx={{ direction: isRTL ? "rtl" : "ltr", display: "flex", justifyContent: "center" }}
		>
			{isMobile ? (
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
									<a href={item.link}>{t("Blog.ReadMore")}</a>
								</div>
							</div>
						</Carousel.Item>
					))}
				</Carousel>
			) : (
				<Box className="row">
					{items.map((item) => (
						<div className="col-lg-4" key={item.id}>
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
									<a href={item.link}>{t("Blog.ReadMore")}</a>
								</div>
							</div>
						</div>
					))}
				</Box>
			)}
		</Box>
	);
};

export default MultiItemCarousel;
