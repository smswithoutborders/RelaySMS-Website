import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

const spin = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

const LoadingLogo = ({ label = "Loading...", fullScreen = true }) => {
	return (
		<Box
			role="status"
			aria-live="polite"
			aria-label={label}
			sx={{
				position: fullScreen ? "fixed" : "relative",
				inset: fullScreen ? 0 : "auto",
				width: "100%",
				minHeight: fullScreen ? "100dvh" : 140,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				gap: 1.5,
				bgcolor: fullScreen ? "background.default" : "transparent",
				zIndex: (theme) => theme.zIndex.modal + 1
			}}
		>
			<Box
				component="img"
				src="/Relaysms.png"
				alt="RelaySMS logo"
				sx={{
					width: 64,
					height: 64,
					objectFit: "contain",
					animation: `${spin} 1.1s linear infinite`,
					willChange: "transform"
				}}
			/>
			<Typography
				variant="h6"
				sx={{
					fontFamily: "Ubuntu, sans-serif",
					fontWeight: 500,
					color: "text.secondary"
				}}
			>
				{label}
			</Typography>
		</Box>
	);
};

export default LoadingLogo;
