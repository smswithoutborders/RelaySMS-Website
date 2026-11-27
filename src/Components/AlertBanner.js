import { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FiX } from "react-icons/fi";

const DISMISS_KEY = "alertBannerDismissed_ios-parity";

const AlertBanner = () => {
	const { t } = useTranslation();
	const [dismissed, setDismissed] = useState(() => {
		try {
			return localStorage.getItem(DISMISS_KEY) === "1";
		} catch {
			return false;
		}
	});

	if (dismissed) return null;

	const handleDismiss = () => {
		setDismissed(true);
		try {
			localStorage.setItem(DISMISS_KEY, "1");
		} catch {
			/* ignore storage errors (private mode, etc.) */
		}
	};

	return (
		<Box
			sx={{
				position: "fixed",
				bottom: { xs: 16, sm: 24 },
				left: "50%",
				transform: "translateX(-50%)",
				width: { xs: "calc(100% - 32px)", sm: "auto" },
				maxWidth: { xs: "calc(100% - 32px)", sm: 560 },
				bgcolor: "primary.main",
				borderRadius: { xs: "20px", sm: "999px" },
				py: 2,
				pl: { md: 2.5, xs: 1.5 },
				pr: { md: 2.5, xs: 1.5 },
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: 0.5,
				zIndex: (theme) => theme.zIndex.drawer + 2,
				boxShadow: "0 8px 24px rgba(0,0,0,0.25)"
			}}
		>
			<Typography
				sx={{
					color: "white",
					fontSize: { xs: "12px", sm: "15px" },
					lineHeight: 1.4,
					textAlign: "center",
					whiteSpace: { xs: "normal", sm: "nowrap" },
					overflow: { xs: "visible", sm: "hidden" },
					textOverflow: { xs: "clip", sm: "ellipsis" },
					maxWidth: "100%"
				}}
			>
				🎉 {t("Alert.message", "RelaySMS on iOS is now fully up to date with Android!")}{" "}
				<a
					href="https://apps.apple.com/us/app/relaysms/id6630382970"
					target="_blank"
					rel="noopener noreferrer"
					style={{
						color: "#ffffff",
						textDecoration: "underline",
						fontWeight: "600",
						whiteSpace: "nowrap"
					}}
				>
					{t("Alert.readMore", "Download")}
				</a>
			</Typography>
			<IconButton
				onClick={handleDismiss}
				aria-label={t("Alert.dismiss", "Dismiss")}
				size="small"
				sx={{
					color: "white",
					opacity: 0.8,
					flexShrink: 0,
					p: 0.5,
					"&:hover": { opacity: 1, bgcolor: "rgba(255,255,255,0.15)" }
				}}
			>
				<FiX size={15} />
			</IconButton>
		</Box>
	);
};

export default AlertBanner;
