import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function PageNotFound() {
	const { i18n } = useTranslation();

	const isRtl = i18n.language === "fa" || i18n.language === "farshi";

	return (
		<Box
			dir={isRtl ? "rtl" : "ltr"}
			sx={{
				px: { md: 13, sm: 10, xs: 2 },
				my: { md: 7, xs: 5 },
				pb: 8,
				minHeight: { xs: "80vh", lg: "92vh", xl: "100vh" }
			}}
		>
			<Box component="img" src="/pnf.svg" sx={{ width: { md: "30%", xs: "18%" }, mb: 4 }} />
			<Typography variant="h2" sx={{ fontWeight: 500 }}>
				Sorry the page you are looking for does not exist
			</Typography>

			<Button component="a" href="/">
				Go back home <FaArrowRight />
			</Button>
		</Box>
	);
}
