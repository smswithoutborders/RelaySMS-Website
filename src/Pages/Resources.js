import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import EnglishTrainingGuide from "../assets/RelaySMS Training Guide English New.pdf";
import FrenchTrainingGuide from "../assets/RelaySMS Training Guide French New.pdf";
// import RoutingNumberGuide from "../assets/Routing Number Guide.pdf";
import TrainingGuide from "../Components/TrainingGuide";

const Resources = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";

	const resources = [
		{
			title: t("Resources.Items.EnglishTrainingGuide.Title", "Training Guide (English)"),
			description: t(
				"Resources.Items.EnglishTrainingGuide.Description",
				"A complete walkthrough of RelaySMS features and setup, in English."
			),
			file: EnglishTrainingGuide,
			filename: "RelaySMS Training Guide English.pdf"
		},
		{
			title: t("Resources.Items.FrenchTrainingGuide.Title", "Training Guide (French)"),
			description: t(
				"Resources.Items.FrenchTrainingGuide.Description",
				"A complete walkthrough of RelaySMS features and setup, in French."
			),
			file: FrenchTrainingGuide,
			filename: "RelaySMS Training Guide French.pdf"
		}
		// {
		// 	title: t("Resources.Items.RoutingNumberGuide.Title", "Routing Number Guide"),
		// 	description: t(
		// 		"Resources.Items.RoutingNumberGuide.Description",
		// 		"Step-by-step instructions for setting up and sharing a routing number."
		// 	),
		// 	file: RoutingNumberGuide,
		// 	filename: "Routing Number Guide.pdf"
		// }
	];

	const RESEARCH_URL = "https://smswithoutborders.com/research";
	const SELF_HOSTING_URL = "https://docs.relaysms.smswithoutborders.afkanerd.com/";

	const downloadResource = (url, filename) => {
		const link = document.createElement("a");
		link.href = url;
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<Box
			dir={isRtl ? "rtl" : "ltr"}
			sx={{
				position: "relative",
				overflow: "hidden",
				fontFamily: "Montserrat, sans-serif",
				textAlign: "center",
				px: 2
			}}
		>
			<Box
				sx={{
					zIndex: 2,
					position: "relative",
					minHeight: "85vh",
					maxWidth: "1200px",
					mx: "auto",
					pt: { xs: "120px", md: "160px", lg: "180px" },
					pb: 8
				}}
			>
				<Typography
					variant="h2"
					sx={{
						mb: 4,
						fontSize: { md: "2rem", xs: "1.5rem" },
						color: "text.primary",
						fontWeight: 700,
						fontFamily: "'Unbounded', Ubuntu"
					}}
				>
					{t("Resources.Title", "Resources")}
				</Typography>
				<Typography
					sx={{
						mb: { xs: 6, md: 8 },
						color: "text.secondary",
						fontSize: { xs: "0.95rem", md: "1.05rem" },
						maxWidth: 640,
						mx: "auto",
						lineHeight: 1.75
					}}
				>
					{t(
						"Resources.GuidesDescription",
						"Teaching someone how to use RelaySMS? Share these guides to walk them through it step by step, or use them yourself to learn the ropes."
					)}
				</Typography>

				<TrainingGuide />

				<Typography
					variant="h5"
					sx={{
						mb: 3,
						mt: 12,
						fontSize: { xs: "1.15rem", md: "1.3rem" },
						color: "text.primary",
						fontWeight: 700,
						fontFamily: "'Unbounded', Ubuntu",
						textAlign: { xs: "center", md: "left" },
						px: { xs: 2, sm: 4 }
					}}
				>
					{t("Resources.SelfHostingHeading", "Run Your Own Instance")}
				</Typography>

				<Box sx={{ px: { xs: 2, sm: 4 }, mb: { xs: 10, md: 12 } }}>
					<Paper
						elevation={0}
						sx={{
							p: 4,
							bgcolor: "background.paper",
							border: "1px solid",
							borderColor: "divider",
							display: "flex",
							flexDirection: "column",
							textAlign: "left",
							transition: "transform 0.3s ease, box-shadow 0.3s ease",
							"&:hover": {
								transform: "translateY(-4px)",
								boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)"
							}
						}}
					>
						<Typography
							variant="body1"
							sx={{
								color: "text.secondary",
								fontFamily: "Ubuntu",
								lineHeight: 1.7,
								mb: 4
							}}
						>
							{t(
								"Resources.SelfHostingDescription",
								"RelaySMS is open source, and you don't have to depend on our servers to use it. Anyone can run their own Publisher instance — join the community keeping the network resilient and help more people stay connected during shutdowns."
							)}
						</Typography>
						<Button
							component="a"
							href={SELF_HOSTING_URL}
							target="_blank"
							rel="noopener noreferrer"
							variant="text"
							endIcon={<FaExternalLinkAlt size={12} />}
							sx={{
								color: "text.primary",
								textTransform: "none",
								fontFamily: "Ubuntu",
								fontSize: "16px",
								px: 0,
								alignSelf: "flex-start",
								"&:hover": {
									color: "secondary.main",
									backgroundColor: "transparent"
								}
							}}
						>
							{t("Resources.SeeSelfHostingGuide", "Set Up Your Own Instance")}
						</Button>
					</Paper>
				</Box>

				<Typography
					variant="h5"
					sx={{
						mb: 3,
						fontSize: { xs: "1.15rem", md: "1.3rem" },
						color: "text.primary",
						fontWeight: 700,
						fontFamily: "'Unbounded', Ubuntu",
						textAlign: { xs: "center", md: "left" },
						px: { xs: 2, sm: 4 }
					}}
				>
					{t("Resources.PapersHeading", "Research Papers")}
				</Typography>

				<Box sx={{ px: { xs: 2, sm: 4 }, mb: { xs: 10, md: 8 } }}>
					<Paper
						elevation={0}
						sx={{
							p: 4,
							bgcolor: "background.paper",
							border: "1px solid",
							borderColor: "divider",
							display: "flex",
							flexDirection: "column",
							textAlign: "left",
							transition: "transform 0.3s ease, box-shadow 0.3s ease",
							"&:hover": {
								transform: "translateY(-4px)",
								boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)"
							}
						}}
					>
						<Typography
							variant="body1"
							sx={{
								color: "text.secondary",
								fontFamily: "Ubuntu",
								lineHeight: 1.7,
								mb: 4
							}}
						>
							{t(
								"Resources.PapersDescription",
								"The RelaySMS team publishes white papers and technical write-ups on the project's architecture, protocols, and security design. Browse the latest papers on the SMSWithoutBorders research library."
							)}
						</Typography>
						<Button
							component="a"
							href={RESEARCH_URL}
							target="_blank"
							rel="noopener noreferrer"
							variant="text"
							endIcon={<FaExternalLinkAlt size={12} />}
							sx={{
								color: "text.primary",
								textTransform: "none",
								fontFamily: "Ubuntu",
								fontSize: "16px",
								px: 0,
								alignSelf: "flex-start",
								"&:hover": {
									color: "secondary.main",
									backgroundColor: "transparent"
								}
							}}
						>
							{t("Resources.SeeResearchPapers", "See Research Papers")}
						</Button>
					</Paper>
				</Box>
			</Box>
		</Box>
	);
};

export default Resources;
