import { useState } from "react";
import { Box, Button, TextField, Typography, Stack, useTheme, Alert } from "@mui/material";
import { useTranslation } from "react-i18next";
import { NEWSLETTER_HONEYPOT_NAME, NEWSLETTER_SUBMIT_URL } from "../config/newsletter";

const NewsletterForm = ({
	showHeading = true,
	align = "left",
	dark = false,
	stacked = false,
	adaptiveButtonContrast = false,
	sx = {}
}) => {
	const { t } = useTranslation();
	const theme = useTheme();
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState("idle");
	const [errorMessage, setErrorMessage] = useState("");

	const centered = align === "center";
	const isDarkMode = theme.palette.mode === "dark";
	const helperColor = dark ? "#b8b8b8" : "text.secondary";
	const showForm = status !== "success" && status !== "doubleOptIn";
	const isSubmitting = status === "submitting";
	const isError = status === "error";
	const submitButtonBg = adaptiveButtonContrast ? (isDarkMode ? "#ffffff" : "#000000") : "#ffffff";
	const submitButtonColor = adaptiveButtonContrast
		? isDarkMode
			? "#000000"
			: "#ffffff"
		: "#000000";
	const submitButtonHoverBg = adaptiveButtonContrast
		? isDarkMode
			? "#eaeaea"
			: "#1a1a1a"
		: "#eaeaea";
	const buttonLabel = isSubmitting
		? t("Newsletter.subscribing", "Subscribing…")
		: t("Newsletter.submit", "Subscribe");
	const successTitle =
		status === "doubleOptIn"
			? t("Newsletter.doubleOptInTitle", "Check your inbox.")
			: t("Newsletter.successTitle", "You're subscribed.");
	const successBody = t(
		"Newsletter.successHint",
		"Thanks. Please check your email to confirm your subscription."
	);
	const doubleOptInBody = t(
		"Newsletter.doubleOptInHint",
		"Check your inbox and click the confirmation link to finish subscribing."
	);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		const formData = new FormData(form);
		const honeypotValue = String(formData.get(NEWSLETTER_HONEYPOT_NAME) ?? "").trim();

		if (honeypotValue) {
			return;
		}

		setStatus("submitting");
		setErrorMessage("");

		try {
			const payload = new URLSearchParams();
			payload.append("contact[email]", email.trim());
			payload.append(NEWSLETTER_HONEYPOT_NAME, "");

			await fetch(NEWSLETTER_SUBMIT_URL, {
				method: "POST",
				mode: "no-cors",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
				},
				body: payload
			});

			setStatus("doubleOptIn");
		} catch (error) {
			setStatus("error");
			setErrorMessage(
				error instanceof Error
					? error.message
					: t("Newsletter.error", "Something went wrong while subscribing. Please try again.")
			);
		}
	};

	const statusMessage =
		status === "doubleOptIn" ? doubleOptInBody : status === "success" ? successBody : "";

	return (
		<Box sx={sx}>
			{showHeading && (
				<Box sx={{ mb: 4 }}>
					<Typography
						variant="h6"
						sx={{
							fontWeight: 600,
							fontFamily: "'Unbounded', Ubuntu",
							mb: 0.75,
							fontSize: { xs: "1rem", md: "1.15rem" },
							textAlign: centered ? "center" : "start",
							color: dark ? "#ffffff" : "text.primary"
						}}
					>
						{t("Newsletter.title", "Subscribe to our newsletter")}
					</Typography>
					<Typography
						sx={{
							color: helperColor,
							fontSize: "0.95rem",
							textAlign: centered ? "center" : "start"
						}}
					>
						{t(
							"Newsletter.description",
							"Get RelaySMS updates, release highlights, and practical tips in your inbox."
						)}
					</Typography>
				</Box>
			)}

			{showForm ? (
				<Box
					component="form"
					onSubmit={handleSubmit}
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 1,
						position: "relative",
						width: "100%"
					}}
				>
					<Stack
						direction={{ xs: "column", sm: stacked ? "column" : "row" }}
						spacing={1}
						sx={{ width: "100%" }}
					>
						<TextField
							type="email"
							name="email"
							value={email}
							onChange={(event) => {
								setEmail(event.target.value);
								if (isError) {
									setStatus("idle");
									setErrorMessage("");
								}
							}}
							required
							fullWidth
							size="small"
							placeholder={t("Newsletter.emailPlaceholder", "Email address")}
							inputProps={{
								"aria-label": t("Newsletter.emailAria", "Email address")
							}}
							sx={{
								maxWidth: stacked ? "100%" : { sm: 320 },
								"& .MuiOutlinedInput-root": {
									color: dark ? "#ffffff" : "text.primary",
									backgroundColor: dark ? "rgba(255,255,255,0.05)" : "background.paper",
									borderRadius: 3,
									"& fieldset": {
										borderColor: dark ? "#ffffff44" : "divider"
									},
									"&:hover fieldset": {
										borderColor: dark ? "#ffffff77" : "text.secondary"
									},
									"&.Mui-focused fieldset": {
										borderColor: dark ? "#ffffff" : "primary.main"
									}
								},
								"& input::placeholder": {
									opacity: 1,
									color: dark ? "#6c6b6b" : "text.secondary"
								}
							}}
						/>

						<Box
							aria-hidden="true"
							sx={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "hidden" }}
						>
							<input
								type="text"
								name={NEWSLETTER_HONEYPOT_NAME}
								autoComplete="off"
								tabIndex={-1}
								defaultValue=""
							/>
						</Box>

						<Button
							size="small"
							type="submit"
							variant="contained"
							disabled={isSubmitting}
							aria-busy={isSubmitting}
							sx={{
								textTransform: "none",
								fontWeight: 600,
								borderRadius: 3,
								whiteSpace: "nowrap",
								alignSelf: centered ? "center" : "stretch",
								px: 1.5,
								py: 0.9,
								minWidth: { sm: stacked ? "100%" : 140 },
								bgcolor: submitButtonBg,
								color: submitButtonColor,
								"&:hover": {
									bgcolor: submitButtonHoverBg
								},
								"&.Mui-disabled": {
									bgcolor: "#cccccc",
									color: "#555555"
								}
							}}
						>
							{buttonLabel}
						</Button>
					</Stack>

					{isError && errorMessage && (
						<Typography
							variant="caption"
							role="alert"
							sx={{
								display: "block",
								color: "#ff8a80",
								lineHeight: 1.5,
								textAlign: centered ? "center" : "start"
							}}
						>
							{errorMessage}
						</Typography>
					)}
				</Box>
			) : (
				<Alert severity="info">{statusMessage}</Alert>
			)}
		</Box>
	);
};

export default NewsletterForm;
