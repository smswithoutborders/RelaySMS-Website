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

			<Accordion
				sx={{
					"& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
					"& .MuiAccordionDetails-root": {
						display: expanded ? "block" : "none"
					}
				}}
			>
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

			{/*  */}
		</Box>
	);
}
