import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardContent, CardMedia, Typography, Box, Avatar } from "@mui/material";
import { useTranslation } from "react-i18next";

const BlogCarousel = () => {
	const { t, i18n } = useTranslation();

	const isRTL = i18n.language === "fa"; // Check if the current language is RTL

	const items = [
		{
			title: t("Blog.Reliability"),
			description: t("Blog.ReliabilityD"),
			link: "https://blog.smswithoutborders.com/posts/reliability-of-gateway-clients-in-smswithoutborders",
			image: "/composeMessage.png",
			author: "Aysha Musa",
			avatar: "V"
		},
		{
			title: t("Blog.Resilience"),
			description: t("Blog.ResilienceD"),
			link: "https://blog.smswithoutborders.com/posts/reliability-of-gateway-clients-in-smswithoutborders",
			image: "/resilience.svg",
			author: "Aysha Musa",
			avatar: "R"
		}
	];

	return (
		<Box sx={{ direction: isRTL ? "rtl" : "ltr" }}>
			{" "}
			{/* Set the direction based on isRTL */}
			<Carousel
				additionalTransfrom={0}
				arrows
				autoPlaySpeed={3000}
				centerMode={false}
				className="centered-carousel"
				containerClass="container-with-dots"
				dotListClass=""
				draggable
				focusOnSelect={false}
				infinite
				itemClass=""
				keyBoardControl
				minimumTouchDrag={80}
				pauseOnHover
				renderArrowsWhenDisabled={false}
				renderButtonGroupOutside={false}
				renderDotsOutside={false}
				responsive={{
					desktop: {
						breakpoint: {
							max: 3000,
							min: 1024
						},
						items: 3,
						partialVisibilityGutter: 40
					},
					mobile: {
						breakpoint: {
							max: 464,
							min: 0
						},
						items: 1,
						partialVisibilityGutter: 30
					},
					tablet: {
						breakpoint: {
							max: 1024,
							min: 464
						},
						items: 2,
						partialVisibilityGutter: 30
					}
				}}
				rewind={false}
				rewindWithAnimation={false}
				rtl={isRTL} // Set RTL based on the current language
				shouldResetAutoplay
				showDots={false}
				sliderClass=""
				slidesToSlide={1}
				swipeable
			>
				{items.map((item, index) => (
					<div key={index}>
						<Card
							sx={{
								maxWidth: { xs: "100%", sm: "400px" },
								mx: "auto",
								boxShadow: "0 4px 8px #041c94",
								transition: "transform 0.3s ease-in-out",
								borderRadius: 8,
								border: "1px solid #e0e0e0",
								"&:hover": {
									transform: "scale(1.02)",
									boxShadow: "0 8px 16px #041c94",
									border: "1px solid #8AC1EE"
								},
								marginRight: isRTL ? "0" : "30px", // Adjust margin based on RTL
								marginLeft: isRTL ? "30px" : "0", // Adjust margin based on RTL
								marginBottom: "20px"
							}}
						>
							<CardMedia
								component="img"
								height="200"
								image={item.image}
								alt={item.title}
								sx={{ objectFit: "cover", width: "100%" }}
							/>
							<CardContent sx={{ textAlign: isRTL ? "right" : "left" }}>
								{" "}
								{/* Adjust text alignment based on RTL */}
								<Typography
									gutterBottom
									variant="h5"
									component="div"
									sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
								>
									{item.title}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{item.description}
									<a style={{ color: "#8AC1EE" }} href={item.link} target="_blank" rel="noreferrer">
										<br />
										{t("Blog.ReadMore")}
									</a>
								</Typography>
							</CardContent>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									px: 2,
									pb: 2,
									justifyContent: isRTL ? "flex-end" : "flex-start"
								}}
							>
								{" "}
								{/* Adjust alignment based on RTL */}
								<Avatar>{item.avatar}</Avatar>
								<Typography variant="body2" sx={{ p: 1 }}>
									{item.author}
								</Typography>
							</Box>
						</Card>
					</div>
				))}
			</Carousel>
		</Box>
	);
};

export default BlogCarousel;
