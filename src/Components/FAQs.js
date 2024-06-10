import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import { Box } from "@mui/material";

export default function Faqs() {
	const [expanded, setExpanded] = React.useState(false);

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
						Is RelaySMS same as SMSWithoutBorders?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						RelaySMS is one of the biggest tools provided by SMSWithoutBorders
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2-content"
					id="panel2-header"
				>
					<Typography variant="body1" sx={{ fontWeight: 700 }}>
						Is RelaySMS free?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Yes you can get RelaySMS app for free{" "}
						<span style={{ color: "skyblue" }}>
							{" "}
							<a href="/download" target="_blank">
								download here
							</a>
						</span>
						, even our code base is open source
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
						How can I contribute to the RelaySMS project?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						You can contribute by visiting our{" "}
						<span style={{ color: "skyblue" }}>
							<a href="/contribute" target="_blank">
								contribution page
							</a>
						</span>
						, where you will find guidelines and resources on how to get started.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel4-content"
					id="panel4-header"
				>
					<Typography variant="body1" sx={{ fontWeight: 700 }}>
						Is there any customer support available for RelaySMS?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Yes, we offer 24/7 customer support. You can reach out to us through our{" "}
						<span style={{ color: "skyblue" }}>
							<a href="/support" target="_blank">
								support page
							</a>
						</span>
						.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel5-content"
					id="panel5-header"
				>
					<Typography variant="body1" sx={{ fontWeight: 700 }}>
						What platforms is RelaySMS compatible with?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						RelaySMS is compatible with both iOS and Android platforms. You can download the app
						from the respective app stores.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
}
