import React, { useState } from "react";
import { Box, Typography, Grid, Button, Chip, Divider, Link } from "@mui/material";
import {
	FaGithub,
	FaCodeBranch,
	FaBug,
	FaMobileScreen,
	FaStar,
	FaCircleDot,
	FaArrowUpRightFromSquare,
	FaBook,
	FaUsers,
	FaPenToSquare
} from "react-icons/fa6";
import { SiKotlin, SiSwift, SiPython, SiJavascript } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";

const langColor = {
	Kotlin: "#7F52FF",
	Swift: "#F05138",
	Python: "#3572A5",
	JavaScript: "#f1e05a"
};

const langIcon = {
	Kotlin: <SiKotlin size={12} />,
	Swift: <SiSwift size={12} />,
	Python: <SiPython size={12} />,
	JavaScript: <SiJavascript size={12} />
};

const FILTERS = ["All", "Kotlin", "Swift", "Python", "JavaScript"];

const Contributing = () => {
	const { t, i18n } = useTranslation();
	const theme = useTheme();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";
	const [activeFilter, setActiveFilter] = useState("All");

	const repos = [
		{
			name: "RelaySMS-Android",
			description: t("Contributing.Repos.Android.description"),
			language: "Kotlin",
			stars: 168,
			issues: 20,
			url: "https://github.com/smswithoutborders/RelaySMS-Android",
			issuesUrl: "https://github.com/smswithoutborders/RelaySMS-Android/issues",
			goodFirstIssues:
				"https://github.com/smswithoutborders/RelaySMS-Android/issues?q=label%3A%22good+first+issue%22+is%3Aopen"
		},
		{
			name: "RelaySMS-iOS",
			description: t("Contributing.Repos.iOS.description"),
			language: "Swift",
			stars: 17,
			issues: 9,
			url: "https://github.com/smswithoutborders/RelaySMS-iOS",
			issuesUrl: "https://github.com/smswithoutborders/RelaySMS-iOS/issues",
			goodFirstIssues:
				"https://github.com/smswithoutborders/RelaySMS-iOS/issues?q=label%3A%22good+first+issue%22+is%3Aopen"
		},
		{
			name: "RelaySMS-Publisher",
			description: t("Contributing.Repos.Publisher.description"),
			language: "Python",
			stars: 15,
			issues: 7,
			url: "https://github.com/smswithoutborders/RelaySMS-Publisher",
			issuesUrl: "https://github.com/smswithoutborders/RelaySMS-Publisher/issues",
			goodFirstIssues:
				"https://github.com/smswithoutborders/RelaySMS-Publisher/issues?q=label%3A%22good+first+issue%22+is%3Aissue+is%3Aopen"
		},
		{
			name: "RelaySMS-Vault",
			description: t("Contributing.Repos.Vault.description"),
			language: "Python",
			stars: 16,
			issues: 6,
			url: "https://github.com/smswithoutborders/RelaySMS-Vault",
			issuesUrl: "https://github.com/smswithoutborders/RelaySMS-Vault/issues",
			goodFirstIssues:
				"https://github.com/smswithoutborders/RelaySMS-Vault/issues?q=label%3A%22good+first+issue%22+is%3Aissue+is%3Aopen"
		},
		{
			name: "RelaySMS-Gateway-Server",
			description: t("Contributing.Repos.GatewayServer.description"),
			language: "Python",
			stars: 17,
			issues: 3,
			url: "https://github.com/smswithoutborders/RelaySMS-Gateway-Server",
			issuesUrl: "https://github.com/smswithoutborders/RelaySMS-Gateway-Server/issues",
			goodFirstIssues:
				"https://github.com/smswithoutborders/RelaySMS-Gateway-Server/issues?q=label%3A%22good+first+issue%22+is%3Aopen"
		},
		{
			name: "RelaySMS-Bridge-Server",
			description: t("Contributing.Repos.BridgeServer.description"),
			language: "Python",
			stars: 3,
			issues: 4,
			url: "https://github.com/smswithoutborders/RelaySMS-Bridge-Server",
			issuesUrl: "https://github.com/smswithoutborders/RelaySMS-Bridge-Server/issues",
			goodFirstIssues:
				"https://github.com/smswithoutborders/RelaySMS-Bridge-Server/issues?q=label%3A%22good+first+issue%22+is%3Aopen"
		},
		{
			name: "RelaySMS-Website",
			description: t("Contributing.Repos.Website.description"),
			language: "JavaScript",
			stars: 2,
			issues: 1,
			url: "https://github.com/smswithoutborders/RelaySMS-Website",
			issuesUrl: "https://github.com/smswithoutborders/RelaySMS-Website/issues",
			goodFirstIssues:
				"https://github.com/smswithoutborders/RelaySMS-Website/issues?q=label%3A%22good+first+issue%22+is%3Aopen"
		}
	];

	const steps = [
		{
			icon: <FaGithub size={22} />,
			title: t("Contributing.HowTo.Steps.Fork.title"),
			description: t("Contributing.HowTo.Steps.Fork.description")
		},
		{
			icon: <FaCodeBranch size={22} />,
			title: t("Contributing.HowTo.Steps.Branch.title"),
			description: t("Contributing.HowTo.Steps.Branch.description")
		},
		{
			icon: <FaBug size={22} />,
			title: t("Contributing.HowTo.Steps.Commit.title"),
			description: t("Contributing.HowTo.Steps.Commit.description")
		},
		{
			icon: <FaMobileScreen size={22} />,
			title: t("Contributing.HowTo.Steps.PR.title"),
			description: t("Contributing.HowTo.Steps.PR.description")
		}
	];

	const ways = [
		{
			icon: <FaBug size={20} />,
			title: t("Contributing.Ways.ReportBug.title"),
			description: t("Contributing.Ways.ReportBug.description"),
			href: "https://github.com/smswithoutborders/RelaySMS-Android/issues/new"
		},
		{
			icon: <FaCodeBranch size={20} />,
			title: t("Contributing.Ways.WriteCode.title"),
			description: t("Contributing.Ways.WriteCode.description"),
			href: "https://github.com/smswithoutborders"
		},
		{
			icon: <FaBook size={20} />,
			title: t("Contributing.Ways.ImproveDoc.title"),
			description: t("Contributing.Ways.ImproveDoc.description"),
			href: "https://github.com/smswithoutborders/RelaySMS-docs"
		},
		{
			icon: <FaUsers size={20} />,
			title: t("Contributing.Ways.HelpCommunity.title"),
			description: t("Contributing.Ways.HelpCommunity.description"),
			href: "https://github.com/smswithoutborders"
		}
	];

	const filteredRepos =
		activeFilter === "All" ? repos : repos.filter((r) => r.language === activeFilter);

	const isDark = theme.palette.mode === "dark";

	return (
		<Box
			dir={isRtl ? "rtl" : "ltr"}
			sx={{ minHeight: "100vh", fontFamily: "Montserrat, sans-serif" }}
		>
			<Box
				sx={{
					maxWidth: 860,
					mx: "auto",
					px: { xs: 3, md: 4 },
					mt: { xs: 20, md: 25 },
					pb: { xs: 6, md: 8 },
					textAlign: "center"
				}}
			>
				<Typography
					variant="h2"
					sx={{
						fontFamily: "'Unbounded', Ubuntu",
						fontWeight: 800,
						fontSize: { xs: "1.5rem", md: "1.9rem" },
						lineHeight: 1.15,
						mb: 3
					}}
				>
					{t("Contributing.Hero.title")}
				</Typography>
				<Typography
					sx={{
						color: "text.secondary",
						fontSize: { xs: "1rem", md: "1.15rem" },
						maxWidth: 620,
						mx: "auto",
						lineHeight: 1.75,
						mb: 5
					}}
				>
					{t("Contributing.Hero.subtitle")}
				</Typography>
				<Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
					<Button
						variant="contained"
						href="https://github.com/smswithoutborders"
						target="_blank"
						rel="noopener noreferrer"
						startIcon={<FaGithub />}
						sx={{
							textTransform: "none",
							borderRadius: 2
						}}
					>
						{t("Contributing.Hero.cta")}
					</Button>
					<Button
						variant="outlined"
						href="https://docs.smswithoutborders.com/"
						target="_blank"
						rel="noopener noreferrer"
						sx={{
							textTransform: "none",
							borderRadius: 2
						}}
					>
						{t("Contributing.Hero.docs")}
					</Button>
				</Box>
			</Box>

			<Box sx={{ maxWidth: 1100, mx: "auto", px: { xs: 3, md: 4 }, py: { xs: 6, md: 8 } }}>
				<Box
					sx={{
						display: "flex",
						alignItems: { xs: "flex-start", sm: "center" },
						justifyContent: "space-between",
						flexWrap: "wrap",
						gap: 2,
						mb: 4
					}}
				>
					<Box>
						<Typography
							sx={{
								fontFamily: "'Unbounded', Ubuntu",
								fontWeight: 700,
								fontSize: { xs: "1.2rem", md: "1.2rem" },
								mb: 0.5
							}}
						>
							{t("Contributing.Repos.title")}
						</Typography>
						<Typography sx={{ color: "text.secondary", fontSize: "0.9rem" }}>
							{t("Contributing.Repos.subtitle")}
						</Typography>
					</Box>
					<Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
						{FILTERS.map((f) => (
							<Box
								key={f}
								onClick={() => setActiveFilter(f)}
								sx={{
									px: 1.5,
									py: 0.5,
									borderRadius: 1,
									border: "1px solid",
									borderColor: activeFilter === f ? "primary.main" : "divider",
									bgcolor:
										activeFilter === f
											? isDark
												? "rgba(100,160,255,0.12)"
												: "rgba(21,101,192,0.08)"
											: "transparent",
									color: activeFilter === f ? "primary.main" : "text.secondary",
									fontSize: "0.8rem",
									fontWeight: 600,
									cursor: "pointer",
									display: "flex",
									alignItems: "center",
									gap: 0.8,
									transition: "all 0.15s",
									userSelect: "none"
								}}
							>
								{f !== "All" && (
									<Box
										sx={{
											width: 8,
											height: 8,
											borderRadius: "50%",
											bgcolor: langColor[f],
											flexShrink: 0
										}}
									/>
								)}
								{f}
							</Box>
						))}
					</Box>
				</Box>

				<Box
					sx={{
						border: "1px solid",
						borderColor: "divider",
						borderRadius: 2,
						overflow: "hidden"
					}}
				>
					{filteredRepos.map((repo, i) => (
						<Box
							key={repo.name}
							sx={{
								px: { xs: 2, md: 3 },
								py: 2.5,
								display: "flex",
								alignItems: { xs: "flex-start", md: "center" },
								flexDirection: { xs: "column", md: "row" },
								gap: { xs: 1.5, md: 0 },
								borderBottom: i < filteredRepos.length - 1 ? "1px solid" : "none",
								borderColor: "divider",
								bgcolor: "background.paper",
								transition: "background-color 0.15s",
								"&:hover": {
									bgcolor: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)"
								}
							}}
						>
							<Box sx={{ flexGrow: 1, minWidth: 0, mr: { md: 3 } }}>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										gap: 1.5,
										mb: 0.5,
										flexWrap: "wrap"
									}}
								>
									<FaGithub size={15} style={{ flexShrink: 0, opacity: 0.6 }} />
									<Link
										href={repo.url}
										target="_blank"
										rel="noopener noreferrer"
										sx={{
											fontWeight: 700,
											fontSize: "0.9rem",
											color: "text.primary",
											textDecoration: "none",
											fontFamily: "'Unbounded', Ubuntu",
											"&:hover": { color: "primary.main" }
										}}
									>
										{repo.name}
									</Link>
									<Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
										<Box
											sx={{
												width: 9,
												height: 9,
												borderRadius: "50%",
												bgcolor: langColor[repo.language]
											}}
										/>
										<Typography sx={{ fontSize: "0.78rem", color: "text.secondary" }}>
											{repo.language}
										</Typography>
									</Box>
								</Box>
								<Typography
									sx={{
										fontSize: "0.83rem",
										color: "text.secondary",
										lineHeight: 1.6,
										pl: { md: "2.1rem" }
									}}
								>
									{repo.description}
								</Typography>
							</Box>

							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: 2,
									flexShrink: 0,
									pl: { md: 2 }
								}}
							>
								<Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
									<FaStar size={12} style={{ opacity: 0.5 }} />
									<Typography sx={{ fontSize: "0.8rem", color: "text.secondary" }}>
										{repo.stars}
									</Typography>
								</Box>
								<Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
									<FaCircleDot size={12} style={{ color: "#3fb950", flexShrink: 0 }} />
									<Link
										href={repo.issuesUrl}
										target="_blank"
										rel="noopener noreferrer"
										sx={{
											fontSize: "0.8rem",
											color: "text.secondary",
											textDecoration: "none",
											"&:hover": { color: "primary.main" }
										}}
									>
										{repo.issues} {t("Contributing.Repos.openIssues")}
									</Link>
								</Box>
								<Link
									href={repo.goodFirstIssues}
									target="_blank"
									rel="noopener noreferrer"
									sx={{
										display: "flex",
										alignItems: "center",
										gap: 0.5,
										fontSize: "0.78rem",
										fontWeight: 600,
										color: "primary.main",
										textDecoration: "none",
										border: "1px solid",
										borderColor: "primary.main",
										borderRadius: 1,
										px: 1,
										py: 0.3,
										whiteSpace: "nowrap",
										transition: "all 0.15s",
										"&:hover": {
											bgcolor: isDark ? "rgba(100,160,255,0.1)" : "rgba(21,101,192,0.07)"
										}
									}}
								>
									<FaPenToSquare size={10} />
									{t("Contributing.Repos.goodFirstIssue")}
								</Link>
								<Link
									href={repo.url}
									target="_blank"
									rel="noopener noreferrer"
									sx={{ color: "text.disabled", display: "flex", alignItems: "center" }}
								>
									<FaArrowUpRightFromSquare size={12} />
								</Link>
							</Box>
						</Box>
					))}
				</Box>

				<Box sx={{ mt: 3, textAlign: "center" }}>
					<Link
						href="https://github.com/orgs/smswithoutborders/repositories"
						target="_blank"
						rel="noopener noreferrer"
						sx={{
							fontSize: "0.85rem",
							color: "text.secondary",
							textDecoration: "none",
							"&:hover": { color: "primary.main" }
						}}
					>
						{t("Contributing.Repos.viewAll")} →
					</Link>
				</Box>
			</Box>

			<Box sx={{ maxWidth: 1100, mx: "auto", px: { xs: 3, md: 4 }, py: { xs: 6, md: 8 } }}>
				<Typography
					sx={{
						fontFamily: "'Unbounded', Ubuntu",
						fontSize: { xs: "1.2rem", md: "1.3rem" },
						fontWeight: 700,
						mb: 1
					}}
				>
					{t("Contributing.Ways.title")}
				</Typography>
				<Typography sx={{ color: "text.secondary", mb: 5, maxWidth: 540 }}>
					{t("Contributing.Ways.subtitle")}
				</Typography>
				<Grid container spacing={2}>
					{ways.map((way, i) => (
						<Grid item xs={12} sm={6} md={3} key={i}>
							<Box
								component="a"
								href={way.href}
								target="_blank"
								rel="noopener noreferrer"
								sx={{
									display: "flex",
									flexDirection: "column",
									gap: 1.5,
									p: 3,
									height: "100%",
									borderRadius: 2,
									border: "1px solid",
									borderColor: "divider",
									bgcolor: "background.paper",
									textDecoration: "none",
									color: "inherit",
									transition: "border-color 0.2s, box-shadow 0.2s",
									"&:hover": {
										borderColor: "primary.main",
										boxShadow: `0 0 0 1px ${theme.palette.primary.main}22`
									}
								}}
							>
								<Box
									sx={{
										width: 40,
										height: 40,
										borderRadius: 1.5,
										bgcolor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										color: "primary.main"
									}}
								>
									{way.icon}
								</Box>
								<Typography sx={{ fontWeight: 700, fontSize: "0.95rem" }}>{way.title}</Typography>
								<Typography sx={{ color: "text.secondary", fontSize: "0.85rem", lineHeight: 1.65 }}>
									{way.description}
								</Typography>
							</Box>
						</Grid>
					))}
				</Grid>
			</Box>

			<Box sx={{ maxWidth: 1100, mx: "auto", px: { xs: 3, md: 4 }, py: { xs: 6, md: 8 } }}>
				<Typography
					sx={{
						fontFamily: "'Unbounded', Ubuntu",
						fontWeight: 700,
						fontSize: { xs: "1.2rem", md: "1.3rem" },
						mb: 1
					}}
				>
					{t("Contributing.HowTo.title")}
				</Typography>
				<Typography sx={{ color: "text.secondary", mb: 5, maxWidth: 540 }}>
					{t("Contributing.HowTo.subtitle")}
				</Typography>
				<Grid container spacing={2}>
					{steps.map((step, i) => (
						<Grid item xs={12} sm={6} md={3} key={i}>
							<Box
								sx={{
									p: 3,
									height: "100%",
									borderRadius: 2,
									border: "1px solid",
									borderColor: "divider",
									bgcolor: "background.paper",
									display: "flex",
									flexDirection: "column",
									gap: 1.5,
									position: "relative"
								}}
							>
								<Typography
									sx={{
										position: "absolute",
										top: 16,
										right: isRtl ? "unset" : 16,
										left: isRtl ? 16 : "unset",
										fontFamily: "'Unbounded', Ubuntu",
										fontWeight: 800,
										fontSize: "1.5rem",
										color: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
										lineHeight: 1,
										userSelect: "none"
									}}
								>
									{i + 1}
								</Typography>
								<Typography sx={{ fontWeight: 700, fontSize: "0.95rem" }}>{step.title}</Typography>
								<Typography sx={{ color: "text.secondary", fontSize: "0.85rem", lineHeight: 1.65 }}>
									{step.description}
								</Typography>
							</Box>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default Contributing;
