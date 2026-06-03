import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Changelog = () => {
	const { t } = useTranslation();

	return (
		<Box
			sx={{
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				pt: { xs: 12, md: 14 },
				pb: { xs: 6, md: 8 },
				px: 2
			}}
		>
			<Typography
				variant="h3"
				sx={{
					fontFamily: "'Unbounded', Ubuntu",
					fontWeight: 700,
					fontSize: { xs: "1.8rem", md: "2.6rem" },
					color: "text.primary",
					textAlign: "center"
				}}
			>
				{t("Changelog.comingSoon")}
			</Typography>
		</Box>
	);
};

export default Changelog;
