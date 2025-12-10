import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const AlertBanner = () => {
	const { t } = useTranslation();

	return (
		<Box
			sx={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				width: "100%",
				backgroundColor: "#001871",
				py: 1,
				px: { xs: 2, md: 5, lg: 8, xl: 20 },
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				zIndex: (theme) => theme.zIndex.drawer + 2,
				boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
			}}
		>
			<Typography
				sx={{
					color: "white",
					fontSize: { xs: "13px", sm: "14px", md: "15px" },
					textAlign: "center",
					fontFamily: "Ubuntu",
					lineHeight: 1.4
				}}
			>
				✨ {t("Alert.message", "You can now make RelaySMS your default SMS app on Android!")}{" "}
				<a
					href="https://blog.smswithoutborders.com/posts/default-app"
					target="_blank"
					rel="noopener noreferrer"
					style={{
						color: "#D1DAFC",
						textDecoration: "underline",
						fontWeight: "500"
					}}
				>
					{t("Alert.readMore", "Read more")}
				</a>
			</Typography>
		</Box>
	);
};

export default AlertBanner;
