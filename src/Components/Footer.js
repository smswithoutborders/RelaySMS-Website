import React from "react";
import { Box, Typography, Grid, ListItem, List } from "@mui/material";
import { FaEnvelope, FaFacebook, FaGithub, FaXTwitter } from "react-icons/fa6";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function Footer() {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	const linkStyle = {
		color: "inherit",
		textDecoration: "none",
		"&:hover": {
			color: "#ffcc00",
			textDecoration: "none",
			backgroundColor: "#444"
		},
		transition: "background-color 0.3s ease, color 0.3s ease"
	};

	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: "#0e1116",
				color: "#f5f5f5",
				p: 3,
				px: { xs: 3, md: 10 },
				position: "static",
				bottom: 0,
				direction: isRTL ? "rtl" : "ltr"
			}}
		>
			<Row>
				<Grid container justifyContent="space-between">
					<Grid item md={4} xs={12}>
						<Box sx={{ display: "flex", pt: 3 }}>
							<Box
								component="img"
								src="/logo.png"
								sx={{ width: "40px", mx: 2 }}
								alt="smswithoutborders logo"
							/>
							<Typography variant="h5" sx={{ fontWeight: 600 }}>
								{t("Footer.RelaySMS")}
							</Typography>
						</Box>
						<Typography variant="body2" sx={{ px: { md: 4, xs: 2 }, py: 2 }}>
							{t("Footer.footerbody2")}
						</Typography>
					</Grid>
					<Grid item md={2} xs={12}>
						<List>
							<ListItem sx={{ fontWeight: 600 }}>{t("Footer.footerHeader1")}</ListItem>
							<ListItem>
								<a href="https://blog.smswithoutborders.com/" style={linkStyle}>
									{t("Footer.footerquick1")}
								</a>
							</ListItem>
							<ListItem>
								<a href="/documentation" style={linkStyle}>
									{t("Footer.footerquick3")}
								</a>
							</ListItem>
							<ListItem>
								<a href="/privacy-policy" style={linkStyle}>
									{t("Footer.footerquick4")}
								</a>
							</ListItem>
						</List>
					</Grid>
					<Grid item md={2} xs={12}>
						<List>
							<ListItem sx={{ fontWeight: 600 }}>{t("Footer.footerHeader2")}</ListItem>
							<ListItem>
								<FaGithub style={{ marginInlineEnd: 15 }} />
								<a href="https://github.com/smswithoutborders" style={linkStyle}>
									{t("Footer.footersocial1")}
								</a>
							</ListItem>
							<ListItem>
								<FaFacebook style={{ marginInlineEnd: 15 }} />
								<a href="https://www.facebook.com/SMSWithoutBorders" style={linkStyle}>
									{t("Footer.footersocial2")}
								</a>
							</ListItem>
							<ListItem>
								<FaXTwitter style={{ marginInlineEnd: 15 }} />
								<a href="https://x.com/RelaySMS" style={linkStyle}>
									{t("Footer.footersocial3")}
								</a>
							</ListItem>
							<ListItem>
								<FaEnvelope style={{ marginInlineEnd: 15 }} />
								<a href="mailto:support@smswithoutborders.com" style={linkStyle}>
									{t("Footer.footersocial4")}
								</a>
							</ListItem>
						</List>
					</Grid>
					<Grid item md={2} xs={12}>
						<List>
							<ListItem sx={{ fontWeight: 600 }}>{t("Footer.footerHeader3")}</ListItem>
							<ListItem>
								<a href="/download/android" style={linkStyle}>
									{t("Footer.footerdownload1")}
								</a>
							</ListItem>
							<ListItem>
								<a href="/download/ios" style={linkStyle}>
									{t("Footer.footerdownload2")}
								</a>
							</ListItem>
							<ListItem>
								<a href="/download/linux" style={linkStyle}>
									{t("Footer.footerdownload3")}
								</a>
							</ListItem>
							<ListItem>
								<a href="/download/windows" style={linkStyle}>
									{t("Footer.footerdownload4")}
								</a>
							</ListItem>
						</List>
					</Grid>
				</Grid>
				<br />
			</Row>
			<Typography variant="body1" sx={{ mx: 4 }}>
				© 2024 SMSWithoutBorders
			</Typography>
		</Box>
	);
}
