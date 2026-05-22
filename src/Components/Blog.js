import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import { FaUser, FaClock } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { keyframes } from "@emotion/react";
import { useTranslation } from "react-i18next";

const DISCORD_URL = "https://discord.gg/smswithoutborders";

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const BlogCard = ({ post, calculateReadTime }) => (
	<Paper
		elevation={0}
		component="a"
		href={post.url}
		target="_blank"
		rel="noopener noreferrer"
		sx={{
			width: { xs: 280, md: 340 },
			minWidth: { xs: 280, md: 340 },
			mx: 1.5,
			p: 2.5,
			py: 3,
			bgcolor: "background.paper",
			border: "0.5px solid",
			borderColor: "divider",
			textDecoration: "none",
			display: "flex",
			flexDirection: "column",
			transition: "box-shadow 0.3s ease, transform 0.3s ease",
			cursor: "pointer",
			"&:hover": {
				transform: "translateY(-3px)",
				boxShadow: "0 6px 24px rgba(0,0,0,0.12)"
			}
		}}
	>
		{/* Author row */}
		<Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.75 }}>
			<Box
				sx={{
					width: 32,
					height: 32,
					borderRadius: "50%",
					bgcolor: "divider",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexShrink: 0
				}}
			>
				<FaUser size={14} color="text.secondary" />
			</Box>
			<Typography
				variant="caption"
				sx={{ color: "text.secondary", fontFamily: "Ubuntu", fontWeight: 600, fontSize: "0.8rem" }}
			>
				{post.author || "SMSWithoutBorders Team"}
			</Typography>
		</Box>

		{/* Title */}
		<Typography
			sx={{
				fontSize: { xs: "1rem", md: "1rem" },
				fontWeight: 700,
				color: "text.primary",
				mb: 1.5,
				lineHeight: 1.5,
				display: "-webkit-box",
				WebkitLineClamp: 2,
				WebkitBoxOrient: "vertical",
				overflow: "hidden"
			}}
		>
			{post.title}
		</Typography>

		{/* Excerpt */}
		<Typography
			sx={{
				fontSize: "0.875rem",
				color: "text.secondary",
				fontFamily: "Ubuntu",
				lineHeight: 1.6,
				mb: 2,
				flexGrow: 1,
				display: "-webkit-box",
				WebkitLineClamp: 3,
				WebkitBoxOrient: "vertical",
				overflow: "hidden"
			}}
		>
			{post.excerpt}
		</Typography>

		{/* Read time */}
		<Box sx={{ display: "flex", alignItems: "center", gap: 0.75, mt: "auto" }}>
			<FaClock size={11} color="#888" />
			<Typography variant="caption" sx={{ color: "#888", fontFamily: "Ubuntu" }}>
				{calculateReadTime(post.excerpt)} min read
			</Typography>
		</Box>
	</Paper>
);

const MarqueeRow = ({ posts, direction, calculateReadTime }) => {
	const duplicated = [...posts, ...posts];
	return (
		<Box
			sx={{
				display: "flex",
				overflow: "hidden",
				width: "100%",
				mb: 2.5,
				maskImage:
					"linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
				WebkitMaskImage:
					"linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
				"&:hover > div": { animationPlayState: "paused" }
			}}
		>
			<Box
				sx={{
					display: "flex",
					animation: `${direction === "left" ? scrollLeft : scrollRight} 35s linear infinite`,
					willChange: "transform"
				}}
			>
				{duplicated.map((post, i) => (
					<BlogCard key={i} post={post} calculateReadTime={calculateReadTime} />
				))}
			</Box>
		</Box>
	);
};

const FALLBACK_POSTS = [
	{
		title: "Sending Images Without Internet? Yeah, That's a Thing Now.",
		excerpt:
			"Internet down? Doesn't matter. RelaySMS just leveled up. You can now send images over SMS fully encrypted, no Wi-Fi, no internet connection necessary",
		author: "Aysha Musa",
		date: "2025-10-31",
		url: "https://blog.smswithoutborders.com/posts/sending-images-with-relay",
		category: "Features"
	},
	{
		title: "RelaySMS Can Now Be Your Default SMS App",
		excerpt:
			"When you set RelaySMS as your default SMS app, all your regular SMS messages move right into your RelaySMS app. You'll see every text, every conversation, all inside one familiar inbox.",
		author: "Vanessa Christopher",
		date: "2025-10-30",
		url: "https://blog.smswithoutborders.com/posts/default-app",
		category: "Features"
	},
	{
		title: "Local Storage for Your Access Tokens",
		excerpt:
			"Storing your tokens locally means reducing your reliance on our servers and giving you total control of your stored tokens. This is especially valuable for users who value privacy and control over their data.",
		author: "Aysha Musa",
		date: "2025-06-05",
		url: "https://blog.smswithoutborders.com/posts/Local-Storage-for-Your-Access-Tokens",
		category: "Features"
	}
];

const BlogSectionNew = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";
	const [blogPosts, setBlogPosts] = useState(FALLBACK_POSTS);

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
				files.map(async (file) => {
					try {
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
					} catch (error) {
						console.error(`Error fetching ${file.name}:`, error);
						return null;
					}
				})
			);

			const validPosts = posts
				.filter((post) => post && post.title && post.date)
				.sort((a, b) => new Date(b.date) - new Date(a.date))
				.slice(0, 8);

			setBlogPosts(validPosts);
		} catch (error) {
			console.error("Error fetching blog posts:", error);
		}
	};

	useEffect(() => {
		fetchBlogPosts();
	}, []);

	const half = Math.ceil(blogPosts.length / 2);
	const row1 = blogPosts.slice(0, half);
	const row2 = blogPosts.slice(half);

	return (
		<Box dir={isRtl ? "rtl" : "ltr"} id="Blog" sx={{ width: "100%", overflow: "hidden" }}>
			<Box
				sx={{
					textAlign: "center",
					px: { xs: 3, md: 6 },
					pt: { xs: 6, md: 12 },
					pb: { xs: 4, md: 5 }
				}}
			>
				<Typography
					variant="h3"
					sx={{
						fontSize: { xs: "1.5rem", md: "1.9rem" },
						fontWeight: 800,
						fontFamily: "'Unbounded', Ubuntu",
						color: "text.primary",
						mb: 2,
						lineHeight: 1.2
					}}
				>
					Blogs &amp; Documentation
				</Typography>
			</Box>

			{/* ── Marquee Rows ── */}
			{row1.length > 0 && (
				<MarqueeRow posts={row1} direction="left" calculateReadTime={calculateReadTime} />
			)}
			{/* {row2.length > 0 && (
				<MarqueeRow posts={row2} direction="right" calculateReadTime={calculateReadTime} />
			)} */}

			{/* ── Join the Community ── */}
			{/* <Box
				sx={{
					mt: { xs: 6, md: 12 },
					mx: { xs: 3, md: 6 },
					mb: { xs: 6, md: 8 },
					borderRadius: 4,
					py: { xs: 6, md: 8 },
					px: { xs: 3, md: 8 },
					textAlign: "center",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 3
				}}
			>
				<Typography
					variant="h4"
					sx={{
						fontSize: { xs: "1.5rem", md: "1.9rem" },
						fontWeight: 800,
						fontFamily: "'Unbounded', Ubuntu",
						color: "text.primary",
						lineHeight: 1.25
					}}
				>
					Join the community
				</Typography>
				<Typography
					sx={{
						fontSize: { xs: "0.95rem", md: "1.05rem" },
						color: "text.secondary",
						fontFamily: "Ubuntu",
						maxWidth: 520,
						lineHeight: 1.75
					}}
				>
					RelaySMS is built for everyone. Connect with users and developers who believe in open,
					accessible communication — even without the internet.
				</Typography>
				<Button
					component="a"
					href={DISCORD_URL}
					target="_blank"
					rel="noopener noreferrer"
					variant="contained"
					startIcon={<FaDiscord size={18} />}
					sx={{
						bgcolor: "primary.main",
						color: "#ffffff",
						fontFamily: "Ubuntu",
						fontWeight: 600,
						fontSize: "1rem",
						textTransform: "none",
						borderRadius: 2,
						px: 4,
						py: 1.5,
						"&:hover": { bgcolor: "primary.dark" }
					}}
				>
					Join Discord
				</Button>
			</Box> */}
		</Box>
	);
};

export default BlogSectionNew;
