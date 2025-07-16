import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const HowItWorks = () => {
	const { t } = useTranslation();

	const settings = {
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true
	};

	const Item = styled(Paper)(({ theme }) => ({
		padding: theme.spacing(1),
		textAlign: "center",
		backgroundColor: "transparent",
		boxShadow: "none"
	}));

	const slides = [
		{
			number: 1,
			title: t("Howitworks.Step1Title"),
			description: t("Howitworks.Step1Desc"),
			image: "/Download.png",
			buttonText: t("Howitworks.Step1Button", "Get Started"),
			link: "https://play.google.com/store/apps/details?id=com.afkanerd.sw0b",
			bgColor: "#EBF5FB"
		},
		{
			number: 2,
			title: t("Howitworks.Step2Title"),
			description: t("Howitworks.Step2Desc"),
			image: "/Login.png",
			buttonText: t("Howitworks.Step2Button", "Learn More"),
			link: "https://docs.smswithoutborders.com/docs/Android%20Tutorial/Getting-Started-With-Android#step-2-create-an-account",
			bgColor: "#E8DAEF"
		},
		{
			number: 3,
			title: t("Howitworks.Step3Title"),
			description: t("Howitworks.Step3Desc"),
			image: "/saveplatform.png",
			buttonText: t("Howitworks.Step3Button", "Set Up Now"),
			link: "https://docs.smswithoutborders.com/docs/Android%20Tutorial/Getting-Started-With-Android#step-5-save-access-to-platforms",
			bgColor: "#FEF9E7"
		},
		{
			number: 4,
			title: t("Howitworks.Step4Title"),
			description: t("Howitworks.Step4Desc"),
			image: "/Gateway.png",
			buttonText: t("Howitworks.Step4Button", "Configure Gateway"),
			link: "https://docs.smswithoutborders.com/docs/Android%20Tutorial/Getting-Started-With-Android#step-6-choose-a-gateway-client",
			bgColor: "#E8F8F5"
		},
		{
			number: 5,
			title: t("Howitworks.Step5Title"),
			description: t("Howitworks.Step5Desc"),
			image: "/text.png",
			buttonText: t("Howitworks.Step5Button", "Start Messaging"),
			link: "https://docs.smswithoutborders.com/docs/Android%20Tutorial/Getting-Started-With-Android#step-3-compose-your-message-and-send-as-sms",
			bgColor: "#FDEDEC"
		}
	];

	return (
		<Box
			sx={{
				backgroundColor: "#EBE4D8",
				py: { xs: 6, md: 12 },
				px: { xs: 3, md: 6 }
			}}
		>
			<div className="text-center mb-5">
				<h1
					style={{
						fontSize: "2.5rem",
						fontWeight: "bold",
						color: "#2D2A5A",
						fontFamily: "'Unbounded', ubuntu"
					}}
				>
					{t("Howitworks.Header", "Getting Started with RelaySMS")}
				</h1>
				<p style={{ fontSize: "1.2rem", color: "#555555", fontFamily: "'Mona Sans', ubuntu" }}>
					{t(
						"Howitworks.SubHeader",
						"Learn how to set up and use RelaySMS for seamless offline communication."
					)}
				</p>
			</div>
			<Container sx={{ py: 4, backgroundColor: "#EBE4D8" }}>
				<Slider {...settings}>
					{slides.map((slide, index) => (
						<Box
							key={index}
							sx={{
								flexGrow: 1,
								width: { xs: "100%", sm: "90%", md: "80%", lg: "70%", xl: "65%" },
								maxWidth: 1200,
								marginX: "auto",
								background: `linear-gradient(135deg, ${slide.bgColor} 0%, #ffffff 100%)`,
								p: { xs: 4, sm: 5, md: 6, lg: 8 },
								borderRadius: 4,
								minHeight: 360,
								display: "flex",
								flexDirection: { xs: "column", md: "row" },
								alignItems: "center",
								justifyContent: "space-between",
								gap: { xs: 3, md: 4 },
								transition: "transform 0.3s ease, box-shadow 0.3s ease"
							}}
						>
							<Grid container spacing={2}>
								<Grid item xs={12} md={6}>
									<Item
										sx={{
											textAlign: { xs: "center", md: "left" },
											px: { xs: 2, sm: 4, md: 6 },
											py: { xs: 2, md: 4 }
										}}
									>
										<Typography
											variant="h4"
											fontWeight="700"
											color="#2D2A5A"
											sx={{
												fontFamily: "'Unbounded', Ubuntu",
												letterSpacing: "0.05em",
												mb: 2,
												textShadow: "1px 1px 3px rgba(45, 42, 90, 0.2)",
												fontSize: { xs: "1.75rem", md: "2rem" }
											}}
										>
											{slide.title}
										</Typography>

										<Typography
											variant="body1"
											color="#555"
											sx={{
												fontFamily: "'Mona Sans', Ubuntu",
												maxWidth: 500,
												fontSize: { xs: "1rem", md: "1.125rem" },
												lineHeight: 1.7,
												mb: 4,
												mx: { xs: "auto", md: 0 }
											}}
											dangerouslySetInnerHTML={{
												__html: slide.description.replace(
													/<a /g,
													"<a style='text-decoration: none; color: #007bff;' "
												)
											}}
										/>

										<Button
											variant="contained"
											href={slide.link}
											target="_blank"
											rel="noopener noreferrer"
											sx={{
												backgroundColor: "#FF9E43",
												color: "rgba(1, 64, 136, 0.86)",
												textTransform: "none",
												fontWeight: 500,
												py: 1.2,
												px: 5,
												fontSize: { xs: "12px", md: "15px" },
												borderRadius: 3,
												border: "1px solid rgba(240, 135, 37, 0.41)",
												boxShadow: "0 2px 6px rgba(1, 64, 136, 0.86)",
												transition: "all 0.3s ease-in-out",
												"&:hover": {
													backgroundColor: "rgba(1, 64, 136, 0.86)",
													color: "white",
													boxShadow: "0 6px 18px #FF9E43"
												}
											}}
										>
											{slide.buttonText}
										</Button>
									</Item>
								</Grid>

								<Grid item xs={12} md={6}>
									<Item
										sx={{
											display: "flex",
											justifyContent: { xs: "center", md: "flex-end" },
											alignItems: "center",
											px: { xs: 2, sm: 4, md: 6 },
											py: { xs: 2, md: 4 }
										}}
									>
										<Box
											component="img"
											src={slide.image}
											alt={slide.title}
											sx={{
												width: { xs: "80%", sm: "70%", md: "100%" },
												maxWidth: 350,
												height: "auto",
												maxHeight: 280,
												objectFit: "contain"
											}}
										/>
									</Item>
								</Grid>
							</Grid>
						</Box>
					))}
				</Slider>
			</Container>
		</Box>
	);
};

export default HowItWorks;
