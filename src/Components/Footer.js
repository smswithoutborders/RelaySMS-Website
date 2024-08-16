import React from "react";
import { Box, Typography, Grid, ListItem, List } from "@mui/material";
import { FaEnvelope, FaGithub, FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function Footer() {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: "#0e1116",
				backgroundImage: "url('/world-map.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				color: "#f5f5f5",
				p: 3,
				px: { xs: 3, md: 10 },
				position: "relative",
				bottom: 0,
				direction: isRTL ? "rtl" : "ltr",
				textAlign: "center"
			}}
		>
			<Grid container spacing={3} justifyContent="space-between">
				<Grid item md={4} xs={12}>
					<Box sx={{ display: "flex", alignItems: "center", pt: 3 }}>
						<Box
							component="img"
							src="/logo.png"
							sx={{ width: "40px", mx: 2 }}
							alt="smswithoutborders logo"
						/>
						<Typography variant="h5" sx={{ fontWeight: 600, color: "white" }}>
							{t("Footer.RelaySMS")}
						</Typography>
					</Box>
					<Typography variant="body2" sx={{ px: { md: 4, xs: 2 }, py: 2, color: "white" }}>
						{t("Footer.footerbody2")}
					</Typography>
				</Grid>
				<Grid item md={2} xs={12}>
					<List>
						<ListItem sx={{ fontWeight: 600, color: "#ffcc00" }}>
							{t("Footer.footerHeader1")}
						</ListItem>
						<ListItem>
							<Box
								component="a"
								href="https://blog.smswithoutborders.com/"
								sx={{
									color: "inherit",
									textDecoration: "none",
									"&:hover": {
										color: "#ffcc00",
										backgroundColor: "#444"
									},
									transition: "background-color 0.3s ease, color 0.3s ease"
								}}
							>
								{t("Footer.footerquick1")}
							</Box>
						</ListItem>
						<ListItem>
							<Box
								component="a"
								href="/documentation"
								sx={{
									color: "inherit",
									textDecoration: "none",
									"&:hover": {
										color: "#ffcc00",
										backgroundColor: "#444"
									},
									transition: "background-color 0.3s ease, color 0.3s ease"
								}}
							>
								{t("Footer.footerquick3")}
							</Box>
						</ListItem>
						<ListItem>
							<Box
								component="a"
								href="/privacy-policy"
								sx={{
									color: "inherit",
									textDecoration: "none",
									"&:hover": {
										color: "#ffcc00",
										backgroundColor: "#444"
									},
									transition: "background-color 0.3s ease, color 0.3s ease"
								}}
							>
								{t("Footer.footerquick4")}
							</Box>
						</ListItem>
					</List>
				</Grid>
				<Grid item md={2} xs={12}>
					<List>
						<ListItem sx={{ fontWeight: 600, color: "#ffcc00" }}>
							{t("Footer.footerHeader2")}
						</ListItem>
						<ListItem>
							<FaGithub style={{ marginInlineEnd: 15 }} />
							<Box
								component="a"
								href="https://github.com/smswithoutborders"
								sx={{
									color: "inherit",
									textDecoration: "none",
									"&:hover": {
										color: "#ffcc00",
										backgroundColor: "#444"
									},
									transition: "background-color 0.3s ease, color 0.3s ease"
								}}
							>
								{t("Footer.footersocial1")}
							</Box>
						</ListItem>
						<ListItem>
							<FaXTwitter style={{ marginInlineEnd: 15 }} />
							<Box
								component="a"
								href="https://x.com/RelaySMS"
								sx={{
									color: "inherit",
									textDecoration: "none",
									"&:hover": {
										color: "#ffcc00",
										backgroundColor: "#444"
									},
									transition: "background-color 0.3s ease, color 0.3s ease"
								}}
							>
								{t("Footer.footersocial3")}
							</Box>
						</ListItem>
						<ListItem>
							<FaEnvelope style={{ marginInlineEnd: 15 }} />
							<Box
								component="a"
								href="mailto:support@smswithoutborders.com"
								sx={{
									color: "inherit",
									textDecoration: "none",
									"&:hover": {
										color: "#ffcc00",
										backgroundColor: "#444"
									},
									transition: "background-color 0.3s ease, color 0.3s ease"
								}}
							>
								{t("Footer.footersocial4")}
							</Box>
						</ListItem>
					</List>
				</Grid>
				<Grid item md={2} xs={12}>
					<List>
						<ListItem sx={{ fontWeight: 800, color: "#ffcc00" }}>
							{t("Footer.footerHeader3")}
						</ListItem>
						<ListItem>
							<Box
								component="a"
								href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
								sx={{
									color: "inherit",
									textDecoration: "none",
									"&:hover": {
										color: "#ffcc00",
										backgroundColor: "#444"
									},
									transition: "background-color 0.3s ease, color 0.3s ease"
								}}
							>
								{t("Footer.footerdownload1")}
							</Box>
						</ListItem>
						<ListItem>
							<Box
								component="a"
								href="https://apps.apple.com/us/app/relaysms/id6630382970"
								sx={{
									color: "inherit",
									textDecoration: "none",
									"&:hover": {
										color: "#ffcc00",
										backgroundColor: "#444"
									},
									transition: "background-color 0.3s ease, color 0.3s ease"
								}}
							>
								{t("Footer.footerdownload2")}
							</Box>
						</ListItem>
						<ListItem>
							<Box
								component="a"
								href="https://github.com/smswithoutborders/relaysms-desktop/tags"
								sx={{
									color: "inherit",
									textDecoration: "none",
									"&:hover": {
										color: "#ffcc00",
										backgroundColor: "#444"
									},
									transition: "background-color 0.3s ease, color 0.3s ease"
								}}
							>
								{t("Footer.footerdownload4")}
							</Box>
						</ListItem>
					</List>
				</Grid>
			</Grid>
			<Box
				component="footer"
				sx={{
					color: "#f5f5f5",
					p: 3,
					px: { xs: 3, md: 10 },
					position: "relative",
					width: "100%",
					bottom: 0,
					direction: isRTL ? "rtl" : "ltr",
					textAlign: "center"
				}}
			>
				<Typography
					variant="body1"
					sx={{
						color: "white",
						mt: 2,
						textAlign: "center",
						width: "100%"
					}}
				>
					© 2024 SMSWithoutBorders
				</Typography>
			</Box>
		</Box>
	);
}
