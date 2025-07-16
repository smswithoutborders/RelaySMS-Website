import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
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
				py: { xs: 8, md: 12 },
				px: { xs: 3, md: 8 },
				backgroundColor: "rgba(233, 235, 244, 0.44)",
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
						fontSize: "2rem",
						color: "#2D2A5A",
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
						fontFamily: "'Mona Sans', Ubuntu",
						fontStyle: "italic",
						mt: 1
					}}
				>
					{t(
						"Blog.SubHeader",
						"Stay informed with the latest updates, tips, and stories from the RelaySMS blog."
					)}
				</Typography>
			</Box>

			<Grid container spacing={6} justifyContent="center">
				<Grid item xs={12} md={6}>
					<Card
						sx={{
							display: "flex",
							flexDirection: { xs: "column", md: "row" },
							borderRadius: 3,
							boxShadow: "0 4px 15px rgba(8, 61, 147, 0.44)",
							overflow: "hidden",
							maxWidth: 700,
							mx: "auto",
							bgcolor: "#fff",
							transition: "box-shadow 0.25s ease",
							"&:hover": {
								boxShadow: "0 8px 30px rgba(5, 48, 98, 0.69)"
							}
						}}
					>
						<Box
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
						/>

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
									<SettingsSuggestIcon fontSize="large" />
									<Typography
										variant="h5"
										component="h2"
										sx={{
											fontWeight: "bold",
											color: "#23315F",
											letterSpacing: 0.5,
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

							<Button
								href={featured.link}
								target="_blank"
								rel="noopener noreferrer"
								variant="contained"
								endIcon={<FaArrowRight />}
								sx={{
									alignSelf: "flex-start",
									backgroundColor: "#FF9E43",
									color: "#1E2A78",
									fontWeight: "700",
									textTransform: "none",
									borderRadius: 2,
									px: 5,
									py: 1.4,
									boxShadow: "0 6px 15px rgba(255,158,67,0.5)",
									transition: "all 0.3s ease",
									"&:hover": {
										backgroundColor: "#e88a13",
										boxShadow: "0 8px 20px rgba(232,138,19,0.5)"
									}
								}}
							>
								{t("Howitworks.ReadMore")}
							</Button>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={12} md={5}>
					<Typography variant="h5" sx={{ fontWeight: 700, mb: 5, letterSpacing: 0.5 }}>
						{t("Blog.ReadOtherArticles")}
					</Typography>

					<Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
						{articles.map((article, idx) => (
							<Box
								key={idx}
								sx={{
									p: 3,
									bgcolor: "#f9f9fa",
									borderRadius: 3,
									boxShadow: "0 4px 15px rgba(8, 61, 147, 0.23)",
									transition: "all 0.3s ease",
									cursor: "pointer",
									display: "flex",
									alignItems: "center",
									gap: 1.5,
									"&:hover": {
										boxShadow: "0 6px 20px rgba(98, 236, 254, 0.35)",
										transform: "translateX(5px)"
									}
								}}
							>
								<LaunchIcon sx={{ color: "#FF9E43", fontSize: 20 }} />
								<Typography
									component="a"
									href={article.link}
									target="_blank"
									rel="noopener noreferrer"
									sx={{
										fontWeight: 600,
										fontSize: "1.1rem",
										color: "#1e2a78",
										textDecoration: "none",
										transition: "color 0.3s ease",
										"&:hover": { color: "#FF9E43", textDecoration: "underline" }
									}}
								>
									{article.title}
								</Typography>
							</Box>
						))}
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default BlogSectionNew;
