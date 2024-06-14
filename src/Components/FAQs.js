import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./i18n/Config.js";

export default function Faqs() {
	const [expanded, setExpanded] = React.useState(false);
	const { t } = useTranslation();

	const handleExpansion = () => {
		setExpanded((prevExpanded) => !prevExpanded);
	};

	return (
		<Box
			sx={{
				backgroundColor: "white",
				color: "black",
				borderRadius: 1,
				p: 2
			}}
		>
			<Accordion
				expanded={expanded}
				onChange={handleExpansion}
				slots={{ transition: Fade }}
				slotProps={{ transition: { timeout: 400 } }}
				sx={{
					"& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
					"& .MuiAccordionDetails-root": {
						display: expanded ? "block" : "none"
					}
				}}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1-content"
					id="panel1-header"
				>
					<Typography variant="body1" sx={{ fontWeight: 800 }}>
						{t("FAQ1")}
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>{t("faq1")}</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2-content"
					id="panel2-header"
				>
					<Typography variant="body1" sx={{ fontWeight: 700 }}>
						{t("FAQ2")}
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						{t("faq2")}
						{/* Yes you can get RelaySMS app for free{" "}
						<span style={{ color: "skyblue" }}>
							{" "}
							<a href="/download" target="_blank">
								download here
							</a>
						</span>
						, even our code base is open source */}
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel3-content"
					id="panel3-header"
				>
					<Typography variant="body1" sx={{ fontWeight: 700 }}>
						{t("FAQ3")}
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>{t("faq3")}</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel4-content"
					id="panel4-header"
				>
					<Typography variant="body1" sx={{ fontWeight: 700 }}>
						{t("FAQ4")}
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>{t("faq4")}</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel5-content"
					id="panel5-header"
				>
					<Typography variant="body1" sx={{ fontWeight: 700 }}>
						{t("FAQ5")}
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>{t("faq5")}</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
}
