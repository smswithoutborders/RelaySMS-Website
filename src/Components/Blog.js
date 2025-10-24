import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Button, Chip } from "@mui/material";
import { FaUser, FaClock, FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const BlogSectionNew = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";
	const [blogPosts, setBlogPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	const calculateReadTime = (text) => {
		const wordsPerMinute = 200;
		const wordCount = text ? text.split(" ").length : 0;
		return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
	};

	const fetchBlogPosts = async () => {
		try {
			const response = await fetch(
				"https://api.github.com/repos/smswithoutborders/SMSWithoutBorders-Blog/contents/_posts"
			);

			if (!response.ok) {
				throw new Error("Failed to fetch blog posts");
			}

			const files = await response.json();

			const posts = await Promise.all(
				files.slice(0, 3).map(async (file) => {
					const fileResponse = await fetch(file.download_url);
					const content = await fileResponse.text();

					const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
					if (frontMatterMatch) {
						const frontMatter = frontMatterMatch[1];
						const lines = frontMatter.split("\n");
						const metadata = {};

						lines.forEach((line) => {
							const [key, ...valueParts] = line.split(":");
							if (key && valueParts.length > 0) {
								const value = valueParts.join(":").trim().replace(/"/g, "");
								if (key.trim() === "author") {
									const authorMatch = content.match(/author:\s*\n\s*name:\s*"([^"]*)"/);
									metadata.author = authorMatch ? authorMatch[1] : "SMSWithoutBorders Team";
								} else {
									metadata[key.trim()] = value;
								}
							}
						});

						return {
							...metadata,
							slug: file.name.replace(".md", ""),
							url: `https://blog.smswithoutborders.com/posts/${file.name.replace(".md", "")}`
						};
					}
					return null;
				})
			);

			const validPosts = posts
				.filter((post) => post && post.title)
				.sort((a, b) => new Date(b.date) - new Date(a.date));
			setBlogPosts(validPosts);
		} catch (error) {
			console.error("Error fetching blog posts:", error);
			setBlogPosts([
				{
					title: "New Features on RelaySMS",
					excerpt:
						"At SMSWithoutBorders, we're constantly working to improve how users stay connected even without internet access.",
					author: "Aysha Musa",
					date: "2025-03-14",
					url: "https://blog.smswithoutborders.com/posts/New-Features-on-RelaySMS",
					category: "Features"
				},
				{
					title: "Resilience Of Gateway Clients In SMSWithoutBorders",
					excerpt:
						"SMSWithoutBorders is pleased to announce a significant advancement in message-forwarding functionalities for its gateway clients",
					author: "Aysha Musa",
					date: "2024-04-16",
					url: "https://blog.smswithoutborders.com/posts/resilience-of-gateway-clients-in-smswithoutborders",
					category: "Technical"
				},
				{
					title: "New Alpha Release: Vault 0.1.0",
					excerpt: "SMSWithoutBorders Vault 0.1.0 is Now Available in Alpha Release!",
					author: "Promise Fru",
					date: "2024-06-28",
					url: "https://blog.smswithoutborders.com/releases/vault-0-1-0",
					category: "Release"
				}
			]);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchBlogPosts();
	}, []);

	if (loading) {
		return (
			<Box sx={{ py: 8, textAlign: "center" }}>
				<Typography>{t("Blog.loading")}</Typography>
			</Box>
		);
	}

	const [featuredPost, ...otherPosts] = blogPosts;

	return (
		<Box
			dir={isRtl ? "rtl" : "ltr"}
			id="Blog"
			sx={{
				py: { xs: 6, md: 8 },
				px: { xs: 3, md: 6 },
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				maxWidth: "1200px",
				mx: "auto"
			}}
		>
			{featuredPost && (
				<Card
					elevation={0}
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						mb: 4,
						overflow: "hidden",
						backgroundColor: "#fff5ecff",
						border: "1px solid #e9ecef",
						width: "100%",
						borderRadius: 3,
						position: "relative",
						transition: "all 0.3s ease",
						"&:hover": {
							transform: "translateY(-3px)",
							boxShadow: "0 4px 20px rgba(0,0,0,0.12)"
						}
					}}
				>
					<Chip
						label={
							featuredPost.category
								? t(`Blog.categories.${featuredPost.category}`)
								: t("Blog.categories.Featured")
						}
						sx={{
							position: "absolute",
							top: 16,
							right: 16,
							backgroundColor: "#FF9E43",
							fontFamily: "Ubuntu",
							color: "white",
							fontWeight: 600,
							fontSize: "0.75rem",
							zIndex: 2
						}}
					/>

					<Box
						sx={{
							width: { xs: "100%", md: "35%" },
							position: "relative",
							overflow: "hidden"
						}}
					>
						<Box
							component="img"
							src="/blog.png"
							alt="Featured blog post"
							sx={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								transition: "transform 0.3s ease",
								"&:hover": { transform: "scale(1.05)" }
							}}
						/>
					</Box>

					<CardContent
						sx={{
							flex: 1,
							p: { xs: 2.5, md: 3 },
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							my: "auto"
						}}
					>
						<Box sx={{ mb: 2 }}>
							<Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
								<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
									<FaUser size={14} color="#666" />
									<Typography variant="body2" color="#666" fontFamily="Ubuntu">
										{featuredPost.author || "SMSWithoutBorders Team"}
									</Typography>
								</Box>
								<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
									<FaClock size={14} color="#666" />
									<Typography variant="body2" color="#666" fontFamily="Ubuntu">
										{calculateReadTime(featuredPost.excerpt)} {t("Blog.minRead")}
									</Typography>
								</Box>
							</Box>

							<Typography
								variant="h4"
								sx={{
									fontSize: { xs: "1.25rem", md: "1.5rem" },
									fontWeight: 700,
									color: "#2D2A5A",
									fontFamily: "'Unbounded', Ubuntu",
									mb: 2,
									lineHeight: 1.3
								}}
							>
								{featuredPost.title}
							</Typography>

							<Typography
								variant="body1"
								sx={{
									fontSize: { xs: "0.95rem", md: "1rem" },
									color: "#555",
									fontFamily: "Ubuntu",
									lineHeight: 1.5,
									mb: 2
								}}
							>
								{featuredPost.excerpt}
							</Typography>
						</Box>

						<Button
							component="a"
							href={featuredPost.url}
							target="_blank"
							rel="noopener noreferrer"
							endIcon={<FaExternalLinkAlt size={12} />}
							sx={{
								alignSelf: "flex-start",
								color: "#1d1d22ff",
								fontWeight: 400,
								textTransform: "none",
								fontSize: "1rem",
								fontFamily: "Ubuntu",
								"&:hover": {
									backgroundColor: "transparent",
									color: "#d65500"
								}
							}}
						>
							{t("Blog.ReadMore")}
						</Button>
					</CardContent>
				</Card>
			)}

			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
					gap: 3,
					width: "100%"
				}}
			>
				{otherPosts.slice(0, 2).map((post, index) => (
					<Card
						elevation={0}
						key={index}
						sx={{
							p: 2.5,
							backgroundColor: "#f8f9fa",
							border: "1px solid #e9ecef",
							borderRadius: 2,
							position: "relative",
							transition: "all 0.3s ease",
							cursor: "pointer",
							"&:hover": {
								transform: "translateY(-2px)",
								boxShadow: "0 3px 15px rgba(0,0,0,0.1)"
							}
						}}
						onClick={() => window.open(post.url, "_blank")}
					>
						<Chip
							label={
								post.category ? t(`Blog.categories.${post.category}`) : t("Blog.categories.Article")
							}
							size="small"
							sx={{
								position: "absolute",
								top: 16,
								right: 16,
								backgroundColor: "#e8f4f8",
								color: "#2D2A5A",
								fontWeight: 600,
								fontSize: "0.7rem"
							}}
						/>

						<Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
							<FaUser size={12} color="#666" />
							<Typography variant="body2" color="#666" fontFamily="Ubuntu">
								{post.author || "SMSWithoutBorders Team"}
							</Typography>
						</Box>

						<Typography
							variant="h6"
							sx={{
								fontSize: { xs: "1.1rem", md: "1.2rem" },
								fontWeight: 700,
								color: "#2D2A5A",
								fontFamily: "'Unbounded', Ubuntu",
								mb: 1.5,
								lineHeight: 1.3
							}}
						>
							{post.title}
						</Typography>

						<Typography
							variant="body2"
							sx={{
								fontSize: "0.9rem",
								color: "#666",
								fontFamily: "Ubuntu",
								lineHeight: 1.4,
								mb: 2,
								display: "-webkit-box",
								WebkitLineClamp: 3,
								WebkitBoxOrient: "vertical",
								overflow: "hidden"
							}}
						>
							{post.excerpt}
						</Typography>

						<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
							<Typography
								variant="body2"
								sx={{
									color: "#1d1d22ff",
									fontFamily: "Ubuntu",
									fontWeight: 400,
									textDecoration: "none",
									"&:hover": { color: "#d65500" }
								}}
							>
								{t("Blog.ReadMore")} <FaExternalLinkAlt size={10} style={{ marginRight: "4px" }} />
							</Typography>
							<Typography variant="body2" color="#888">
								{calculateReadTime(post.excerpt)} {t("Blog.minRead")}
							</Typography>
						</Box>
					</Card>
				))}
			</Box>
		</Box>
	);
};

export default BlogSectionNew;
