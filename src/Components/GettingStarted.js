import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button, Container, Grid, IconButton } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const GettingStarted = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";

	const CustomPrevArrow = ({ className, style, onClick }) => (
		<IconButton
			className={className}
			style={{
				...style,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#EBF0FF",
				color: "#202020ff",
				width: "50px",
				height: "50px",
				borderRadius: "50%",
				position: "absolute",
				left: "-25px",
				top: "50%",
				transform: "translateY(-50%)",
				zIndex: 2,
				transition: "all 0.3s ease"
			}}
			onClick={onClick}
			sx={{
				"&:hover": {
					backgroundColor: "#00013b",
					transform: "translateY(-50%) scale(1.1)",
					boxShadow: "0 6px 16px rgba(0, 1, 88, 0.4)"
				}
			}}
		>
			<FiChevronLeft size={20} strokeWidth={2} />
		</IconButton>
	);

	const CustomNextArrow = ({ className, style, onClick }) => (
		<IconButton
			className={className}
			style={{
				...style,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#EBF0FF",
				color: "#202020ff",
				width: "50px",
				height: "50px",
				borderRadius: "50%",
				position: "absolute",
				right: { md: "-65px", sm: "-25px" },
				top: "50%",
				transform: "translateY(-50%)",
				zIndex: 2,
				transition: "all 0.3s ease"
			}}
			onClick={onClick}
			sx={{
				"&:hover": {
					backgroundColor: "#00013b",
					transform: "translateY(-50%) scale(1.1)",
					boxShadow: "0 6px 16px rgba(0, 1, 88, 0.4)"
				}
			}}
		>
			<FiChevronRight size={20} strokeWidth={2} />
		</IconButton>
	);

	const settings = {
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		arrows: true,
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />
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
			image: "/Download-copy.png",
			buttonText: t("Howitworks.Step1Button", "Download"),
			link: "/download",
			bgColor: " #EBF5FB"
		},
		{
			number: 2,
			title: t("Howitworks.Step2Title"),
			description: t("Howitworks.Step2Desc"),
			image: "/Login-copy.png",
			buttonText: t("Howitworks.Step2Button", "Learn More"),
			link: "https://docs.smswithoutborders.com/docs/Android%20Tutorial/Getting-Started-With-Android#step-2-create-an-account",
			bgColor: "rgb(249, 225, 248)"
		},
		{
			number: 3,
			title: t("Howitworks.Step3Title"),
			description: t("Howitworks.Step3Desc"),
			image: "/saveplatform-copy.png",
			buttonText: t("Howitworks.Step3Button", "Set Up Now"),
			link: "https://docs.smswithoutborders.com/docs/Android%20Tutorial/Getting-Started-With-Android#step-5-save-access-to-platforms",
			bgColor: "rgb(246, 234, 191)"
		},
		{
			number: 4,
			title: t("Howitworks.Step4Title"),
			description: t("Howitworks.Step4Desc"),
			image: "/Gateway-copy.png",
			buttonText: t("Howitworks.Step4Button", "Configure Gateway"),
			link: "https://docs.smswithoutborders.com/docs/Android%20Tutorial/Getting-Started-With-Android#step-6-choose-a-gateway-client",
			bgColor: "rgb(183, 243, 232)"
		},
		{
			number: 5,
			title: t("Howitworks.Step5Title"),
			description: t("Howitworks.Step5Desc"),
			image: "/text-copy.png",
			buttonText: t("Howitworks.Step5Button", "Start Messaging"),
			link: "https://docs.smswithoutborders.com/docs/Android%20Tutorial/Getting-Started-With-Android#step-3-compose-your-message-and-send-as-sms",
			bgColor: "rgb(176, 218, 248)"
		}
	];

	return (
		<Box
			dir={isRtl ? "rtl" : "ltr"}
			sx={{
				py: { xs: 6, md: 12 },
				px: { xs: 3, md: 6 }
			}}
		>
			<Box
				sx={{
					textAlign: "center"
				}}
			>
				<Typography
					variant="h3"
					sx={{
						fontSize: { md: "2rem", xs: "1.5rem" },
						color: "#2D2A5A",
						fontWeight: 700,
						fontFamily: "'Unbounded', Ubuntu"
					}}
				>
					{t("Howitworks.Header", "Getting Started with RelaySMS")}
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontSize: "1.2rem",
						color: "#555555",
						fontFamily: "Ubuntu",
						mt: 1
					}}
				>
					{t(
						"Howitworks.SubHeader",
						"Learn how to set up and use RelaySMS for seamless offline communication."
					)}
				</Typography>
			</Box>
			<Container sx={{ py: 4 }}>
				<Box
					sx={{
						".slick-dots li button:before": {
							color: " #8b8b8bff",
							fontSize: "18px"
						},
						".slick-dots li.slick-active button:before": {
							color: " #000158"
						},
						".slick-prev, .slick-next": {
							"&:before": {
								display: "none"
							}
						}
					}}
				>
					<Slider {...settings}>
						{slides.map((slide, index) => (
							<Box
								key={index}
								sx={{
									flexGrow: 1,
									width: { xs: "100%", sm: "90%", md: "80%", lg: "70%", xl: "65%" },
									maxWidth: 1200,
									marginX: "auto",
									p: { xs: 4, sm: 5, md: 6, lg: 4 },
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
												textAlign: "center",
												px: { xs: 2, sm: 4, md: 6 },
												py: { xs: 2, md: 4 },
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												justifyContent: "center",
												height: "100%"
											}}
										>
											<Box
												sx={{
													width: { md: 60, xs: 40 },
													height: { md: 60, xs: 40 },
													borderRadius: "50%",
													backgroundColor: "#EBF0FF",
													color: "#000000db",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													fontSize: {md: "1.5rem", xs: "1.2rem"},
													fontWeight: "bold",
													fontFamily: "'Unbounded', Ubuntu",
													mb: 3,
													transition: "all 0.3s ease",
													"&:hover": {
														transform: "scale(1.1)",
														boxShadow: "0 6px 15px rgba(255, 158, 67, 0.4)"
													}
												}}
											>
												{slide.number}
											</Box>

											<Typography
												variant="h5"
												fontWeight="600"
												color="#2D2A5A"
												sx={{
													fontFamily: "'Unbounded', Ubuntu",
													letterSpacing: "0.05em",
													mb: 2,
													fontSize: { md: "1.5rem", xs: "1.25rem" }
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
													fontSize: { xs: "0.9rem", md: "1.125rem" },
													lineHeight: 1.7,
													mb: 4,
													mx: "auto"
												}}
												dangerouslySetInnerHTML={{
													__html: slide.description.replace(
														/<a /g,
														"<a style='text-decoration: none; color: #000158;' "
													)
												}}
											/>

											<Button
												variant="contained"
												href={slide.link}
												target="_blank"
												rel="noopener noreferrer"
												sx={{
													backgroundColor: "#001871",
													textTransform: "none",
													py: 1.2,
													px: 5,
													fontSize: { xs: "12px", md: "18px" },
													transition: "all 0.3s ease-in-out",
													"&:hover": {
														transform: "translateY(-3px)",
														boxShadow: "0 12px 30px rgba(209, 218, 252, 1)"
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
												pt: { xs: 2, md: 1 },
												bgcolor: "#FFF1E4",
												borderRadius: { md: 4, xs: 2 },
												border: "1px solid #e9ecef"
											}}
										>
											<Box
												component="img"
												src={slide.image}
												alt={slide.title}
												sx={{
													width: { xs: "100%", sm: "70%", md: "100%" },
													height: "auto",
													maxHeight: 500,
													objectFit: "contain"
												}}
											/>
										</Item>
									</Grid>
								</Grid>
							</Box>
						))}
					</Slider>
				</Box>
			</Container>
		</Box>
	);
};

export default GettingStarted;
