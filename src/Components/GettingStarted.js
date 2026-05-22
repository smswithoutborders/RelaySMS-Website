import React, { useState, useMemo, useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import DOMPurify from "dompurify";
import { FiExternalLink } from "react-icons/fi";

const MobileCarousel = ({ slides, t }) => {
	const [current, setCurrent] = useState(0);
	const touchStartX = useRef(null);
	const touchStartY = useRef(null);

	const prev = () => setCurrent((c) => Math.max(c - 1, 0));
	const next = () => setCurrent((c) => Math.min(c + 1, slides.length - 1));

	const onTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX;
		touchStartY.current = e.touches[0].clientY;
	};

	const onTouchEnd = (e) => {
		if (touchStartX.current === null) return;
		const dx = e.changedTouches[0].clientX - touchStartX.current;
		const dy = e.changedTouches[0].clientY - touchStartY.current;
		if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
			if (dx < 0) next();
			else prev();
		}
		touchStartX.current = null;
		touchStartY.current = null;
	};

	const slide = slides[current];

	return (
		<Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", px: 3, py: 6 }}>
			<Box sx={{ textAlign: "center", mb: 4 }}>
				<Typography
					variant="h3"
					sx={{
						fontSize: "1.5rem",
						color: "text.primary",
						fontWeight: 700,
						fontFamily: "'Unbounded', Ubuntu"
					}}
				>
					{t("Howitworks.Header", "Getting Started with RelaySMS")}
				</Typography>
				<Typography
					variant="body1"
					sx={{ fontSize: "1rem", color: "text.secondary", mt: 1, fontFamily: "Ubuntu" }}
				>
					{t(
						"Howitworks.SubHeader",
						"Learn how to set up and use RelaySMS for seamless offline communication."
					)}
				</Typography>
			</Box>

			<Box
				onTouchStart={onTouchStart}
				onTouchEnd={onTouchEnd}
				sx={{ overflow: "hidden", position: "relative" }}
			>
				{/* Track */}
				<Box
					sx={{
						display: "flex",
						transform: `translateX(-${current * 100}%)`,
						transition: "transform 0.4s ease"
					}}
				>
					{slides.map((s, index) => (
						<Box
							key={index}
							sx={{
								minWidth: "100%",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								px: 1
							}}
						>
							<Box
								component="img"
								src={s.image}
								alt={s.title}
								sx={{ width: "70%", maxHeight: 260, objectFit: "contain", mb: 3 }}
							/>
							<Typography
								sx={{
									color: "primary.light",
									fontWeight: 700,
									letterSpacing: "0.15em",
									fontFamily: "Ubuntu",
									fontSize: "0.75rem",
									textTransform: "uppercase",
									mb: 0.75,
									alignSelf: "flex-start"
								}}
							>
								Step {s.number}
							</Typography>
							<Typography
								variant="h5"
								sx={{
									fontFamily: "'Unbounded', Ubuntu",
									fontWeight: 700,
									color: "text.primary",
									fontSize: "1.1rem",
									mb: 1.5,
									alignSelf: "flex-start"
								}}
							>
								{s.title}
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontFamily: "Ubuntu",
									color: "text.secondary",
									fontSize: "0.95rem",
									lineHeight: 1.8,
									mb: 2,
									alignSelf: "flex-start",
									"& a": { textDecoration: "none", color: "primary.light" }
								}}
								dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(s.description) }}
							/>
							<Button
								variant="text"
								endIcon={<FiExternalLink style={{ marginLeft: 4 }} />}
								href={s.link}
								target="_blank"
								rel="noopener noreferrer"
								sx={{
									textTransform: "none",
									fontFamily: "Ubuntu",
									fontSize: "13px",
									alignSelf: "flex-start",
									color: "primary.light"
								}}
							>
								{s.buttonText}
							</Button>
						</Box>
					))}
				</Box>
			</Box>

			<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 4, gap: 2 }}>
				<Box
					component="button"
					onClick={prev}
					disabled={current === 0}
					sx={{
						background: "none",
						border: "none",
						cursor: current === 0 ? "default" : "pointer",
						fontSize: "1.4rem",
						color: current === 0 ? "text.disabled" : "primary.light",
						lineHeight: 1,
						p: 0
					}}
				>
					‹
				</Box>
				{slides.map((_, i) => (
					<Box
						key={i}
						onClick={() => setCurrent(i)}
						sx={{
							width: i === current ? 20 : 8,
							height: 8,
							borderRadius: 4,
							bgcolor: i === current ? "primary.light" : "action.disabled",
							cursor: "pointer",
							transition: "all 0.3s ease"
						}}
					/>
				))}
				<Box
					component="button"
					onClick={next}
					disabled={current === slides.length - 1}
					sx={{
						background: "none",
						border: "none",
						cursor: current === slides.length - 1 ? "default" : "pointer",
						fontSize: "1.4rem",
						color: current === slides.length - 1 ? "text.disabled" : "primary.light",
						lineHeight: 1,
						p: 0
					}}
				>
					›
				</Box>
			</Box>
		</Box>
	);
};

const GettingStarted = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";
	const [activeStep, setActiveStep] = useState(0);
	const activeStepRef = useRef(0);
	const sectionRef = useRef(null);
	const lastWheelTime = useRef(0);

	const slides = useMemo(
		() => [
			{
				number: 1,
				title: t("Howitworks.Step1Title"),
				description: t("Howitworks.Step1Desc"),
				image: "/Download-copy.png",
				buttonText: t("Howitworks.Step1Button", "Download"),
				link: "/download"
			},
			{
				number: 2,
				title: t("Howitworks.Step2Title"),
				description: t("Howitworks.Step2Desc"),
				image: "/Login-half.png",
				buttonText: t("Howitworks.Step2Button", "Learn More"),
				link: "https://docs.smswithoutborders.com/docs/Android%20Tutorial/Getting-Started-With-Android#step-2-create-an-account"
			},
			{
				number: 3,
				title: t("Howitworks.Step3Title"),
				description: t("Howitworks.Step3Desc"),
				image: "/saveplatform-copy.png",
				buttonText: t("Howitworks.Step3Button", "Set Up Now"),
				link: "https://docs.smswithoutborders.com/docs/Android%20Tutorial/Getting-Started-With-Android#step-5-save-access-to-platforms"
			},
			{
				number: 4,
				title: t("Howitworks.Step4Title"),
				description: t("Howitworks.Step4Desc"),
				image: "/Gateway-copy.png",
				buttonText: t("Howitworks.Step4Button", "Select a Gateway"),
				link: "https://docs.smswithoutborders.com/docs/Android%20Tutorial/Getting-Started-With-Android#step-6-choose-a-gateway-client"
			},
			{
				number: 5,
				title: t("Howitworks.Step5Title"),
				description: t("Howitworks.Step5Desc"),
				image: "/saveplatform-copy.png",
				buttonText: t("Howitworks.Step5Button", "Start Messaging"),
				link: "https://docs.smswithoutborders.com/docs/Android%20Tutorial/Getting-Started-With-Android#step-3-compose-your-message-and-send-as-sms"
			}
		],
		[t]
	);

	const goToStep = (index) => {
		activeStepRef.current = index;
		setActiveStep(index);
	};

	useEffect(() => {
		const el = sectionRef.current;
		if (!el) return;

		const onWheel = (e) => {
			const { top, bottom } = el.getBoundingClientRect();
			if (top > 60 || bottom < window.innerHeight - 60) return;

			const dir = e.deltaY > 0 ? 1 : -1;

			if (dir > 0 && activeStepRef.current >= slides.length - 1) return;
			if (dir < 0 && activeStepRef.current <= 0) return;

			e.preventDefault();

			const now = Date.now();
			if (now - lastWheelTime.current < 650) return;
			lastWheelTime.current = now;

			const next = activeStepRef.current + dir;
			activeStepRef.current = next;
			setActiveStep(next);
		};

		const onIntersect = ([entry]) => {
			if (entry.isIntersecting && entry.boundingClientRect.top > window.innerHeight * 0.3) {
				activeStepRef.current = 0;
				setActiveStep(0);
			}
		};

		const observer = new IntersectionObserver(onIntersect, { threshold: 0.1 });
		observer.observe(el);
		window.addEventListener("wheel", onWheel, { passive: false });

		return () => {
			observer.disconnect();
			window.removeEventListener("wheel", onWheel);
		};
	}, [slides.length]);

	return (
		<Box dir={isRtl ? "rtl" : "ltr"}>
			<Box
				ref={sectionRef}
				sx={{
					display: { xs: "none", md: "flex" },
					flexDirection: "column",
					justifyContent: "center",
					height: "100vh",
					px: { md: 6, lg: 10 },
					py: 4,
					boxSizing: "border-box"
				}}
			>
				<Box sx={{ textAlign: "center", mb: 10 }}>
					<Typography
						variant="h3"
						sx={{
							fontSize: { md: "2rem", xs: "1.5rem" },
							color: "text.primary",
							fontWeight: 700,
							fontFamily: "'Unbounded', Ubuntu"
						}}
					>
						{t("Howitworks.Header", "Getting Started with RelaySMS")}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							fontSize: "1.1rem",
							color: "text.secondary",
							mt: 1,
							fontFamily: "Ubuntu"
						}}
					>
						{t(
							"Howitworks.SubHeader",
							"Learn how to set up and use RelaySMS for seamless offline communication."
						)}
					</Typography>
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: isRtl ? "row-reverse" : "row",
						gap: { md: 6, lg: 10 },
						maxWidth: 1200,
						mx: "auto",
						width: "100%",
						alignItems: "center"
					}}
				>
					<Box
						sx={{
							flex: 1,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center"
						}}
					>
						{slides.map((slide, index) => {
							const isActive = activeStep === index;
							return (
								<Box
									key={index}
									onClick={() => goToStep(index)}
									sx={{
										cursor: "pointer",
										borderLeftWidth: "3px",
										borderLeftStyle: "solid",
										borderLeftColor: isActive ? "primary.light" : "transparent",
										pl: 3,
										py: isActive ? 2 : 1,
										transition: "all 0.3s ease",
										opacity: isActive ? 1 : 0.3,
										"&:hover": { opacity: isActive ? 1 : 0.55 }
									}}
								>
									{/* <Typography
										sx={{
											color: "primary.light",
											fontWeight: 700,
											letterSpacing: "0.15em",
											fontFamily: "Ubuntu",
											fontSize: "0.7rem",
											textTransform: "uppercase",
											mb: 0.25
										}}
									>
										Step {slide.number}
									</Typography> */}
									<Typography
										variant="h6"
										sx={{
											fontFamily: "'Unbounded', Ubuntu",
											fontWeight: 700,
											color: "text.primary",
											lineHeight: 1.3
										}}
									>
										{slide.title}
									</Typography>

									<Box
										sx={{
											overflow: "hidden",
											maxHeight: isActive ? "220px" : "0px",
											opacity: isActive ? 1 : 0,
											transition: "max-height 0.45s ease, opacity 0.35s ease",
											mt: isActive ? 1.5 : 0
										}}
									>
										<Typography
											variant="body1"
											sx={{
												fontFamily: "Ubuntu",
												color: "text.secondary",
												lineHeight: 1.8,
												mb: 2,
												"& a": {
													textDecoration: "none",
													color: "primary.light"
												}
											}}
											dangerouslySetInnerHTML={{
												__html: DOMPurify.sanitize(slide.description)
											}}
										/>
										<Button
											variant="text"
											href={slide.link}
											target="_blank"
											rel="noopener noreferrer"
											onClick={(e) => e.stopPropagation()}
											endIcon={<FiExternalLink style={{ marginLeft: 4 }} />}
											sx={{
												textTransform: "none",
												py: 0.75,
												fontFamily: "Ubuntu",
												color: "primary.light"
											}}
										>
											{slide.buttonText}
										</Button>
									</Box>
								</Box>
							);
						})}

						<Typography
							sx={{
								mt: 3,
								fontFamily: "Ubuntu",
								fontSize: "0.75rem",
								color: "text.secondary",
								letterSpacing: "0.05em"
							}}
						>
							{t("Howitworks.ScrollHint", "Scroll to advance steps")}
						</Typography>
					</Box>

					<Box
						sx={{
							flex: 1,
							position: "relative",
							height: "55vh"
						}}
					>
						{slides.map((slide, index) => (
							<Box
								key={index}
								component="img"
								src={slide.image}
								alt={slide.title}
								sx={{
									position: "absolute",
									inset: 0,
									width: "100%",
									height: "100%",
									objectFit: "contain",
									opacity: activeStep === index ? 1 : 0,
									transition: "opacity 0.5s ease",
									pointerEvents: "none"
								}}
							/>
						))}
					</Box>
				</Box>
			</Box>

			<MobileCarousel slides={slides} t={t} />
		</Box>
	);
};

export default GettingStarted;
