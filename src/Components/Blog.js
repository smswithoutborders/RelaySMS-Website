import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button, Divider } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LaunchIcon from "@mui/icons-material/Launch";

const BlogSectionNew = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";

	const featured = {
		title: t("Blog.IDHeader"),
		description: t("Blog.IDD"),
		link: "https://blog.smswithoutborders.com/posts/New-Features-on-RelaySMS",
		image: "/Relaysms.png"
	};

	const articles = [
		{
			title: t("Blog.articles1"),
			link: "https://blog.smswithoutborders.com/posts/resilience-of-gateway-clients-in-smswithoutborders"
		},
		{
			title: t("Blog.articles2"),
			link: "https://blog.smswithoutborders.com/posts/reliability-of-gateway-clients-in-smswithoutborders"
		},
		{
			title: t("Blog.articles3"),
			link: "https://blog.smswithoutborders.com/releases/vault-0-1-0"
		}
	];

	return (
		<Box
			dir={isRtl ? "rtl" : "ltr"}
			id="Blog"
			sx={{
				py: { xs: 8, md: 12, xl: 16 },
				px: { xs: 3, md: 8 },
				backgroundColor: "#f9f9f9",
				fontFamily: "'Unbounded', sans-serif",
				color: "#23315f"
			}}
		>
			<Box
				sx={{
					textAlign: "center",
					mb: 8
				}}
			>
				<Typography
					variant="h3"
					sx={{
						fontSize: {md: "2rem", xs: "1.5rem"},
						color: "#2D2A5A",
						fontWeight: 700,
						fontFamily: "'Unbounded', Ubuntu"
					}}
				>
					{t("Blog.Header", "Blog Posts")}
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
						"Blog.SubHeader",
						"Stay informed with the latest updates, tips, and stories from the RelaySMS blog."
					)}
				</Typography>
			</Box>

			<Grid container spacing={6} justifyContent="center" sx={{ mt: 5 }}>
				<Grid item xs={12} md={6}>
					<Card
						sx={{
							display: "flex",
							flexDirection: { xs: "column", md: "row" },
							overflow: "hidden",
							maxWidth: 700,
							mx: "auto",
							bgcolor: "#fff",
							transition: "all 0.25s ease",
							"&:hover": {
								transform: "translateY(-2px)"
							},
							py: 2
						}}
					>
						{/* <Box
							component="img"
							src={featured.image}
							alt={`Featured blog image: ${featured.title}`}
							sx={{
								width: { xs: "80%", md: "30%" },
								height: { xs: 200, md: "auto" },
								objectFit: "contain",
								flexShrink: 0,
								transition: "transform 0.3s ease",
								"&:hover": { transform: "scale(1.05)" },
								mx: { xs: "auto", md: 0 },
								my: { xs: 2, md: 0 }
							}}
						/> */}

						<CardContent
							sx={{
								flex: 1,
								p: 5,
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								gap: 3
							}}
						>
							<Box>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										gap: 1.5,
										color: "#FF9E43",
										mb: 2
									}}
								>
									<Typography
										variant="h6"
										sx={{
											fontWeight: "bold",
											fontFamily: "Unbounded",
											color: "#23315F",
											userSelect: "none"
										}}
									>
										{featured.title}
									</Typography>
								</Box>

								<Typography
									variant="body1"
									color="text.secondary"
									sx={{
										fontSize: "1rem",
										lineHeight: 1.6,
										letterSpacing: 0.3,
										color: "#4a4a6a",
										userSelect: "text"
									}}
								>
									{featured.description}
								</Typography>
							</Box>

							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									mt: 2
								}}
							>
								<Typography
									component="a"
									href={featured.link}
									target="_blank"
									rel="noopener noreferrer"
									sx={{
										fontSize: "1rem",
										color: "#FF9E43",
										textDecoration: "none",
										fontWeight: "600",
										transition: "all 0.3s ease",
										"&:hover": {
											color: "#d65500",
											textDecoration: "underline"
										}
									}}
								>
									{t("Howitworks.ReadMore")}
								</Typography>
								
								<Typography
									variant="body2"
									sx={{
										fontSize: "0.9rem",
										color: "#888",
										fontStyle: "italic"
									}}
								>
									{t("Blog.ReadTime", "2 mins read")}
								</Typography>
							</Box>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={12} md={5}>
					<Typography variant="h6" sx={{ mb: 5, letterSpacing: 0.5, fontFamily: "Unbounded" }}>
						{t("Blog.ReadOtherArticles")}
					</Typography>

					<Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
						{articles.map((article, idx) => (
							<Box
								key={idx}
								sx={{
									pb: 2.5,
									transition: "all 0.3s ease",
									cursor: "pointer"
								}}
							>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										gap: 1.5
									}}
								>
									<LaunchIcon sx={{ color: "#FF9E43", fontSize: 20 }} />
									<Typography
										component="a"
										href={article.link}
										target="_blank"
										rel="noopener noreferrer"
										sx={{
											fontSize: "1.1rem",
											color: "#1e2a78",
											textDecoration: "underline",
											textDecorationColor: "#b5b9c0ff",
											textUnderlineOffset: "4px",
											transition: "all 0.3s ease",
											"&:hover": { 
												color: "#FF9E43", 
												textDecorationColor: "#FF9E43"
											}
										}}
									>
										{article.title}
									</Typography>
								</Box>
							</Box>
						))}
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default BlogSectionNew;
