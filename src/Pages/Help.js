import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Installation from "../Posts/Installation";
import { FaChevronRight } from "react-icons/fa6";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`
	};
}

export default function Help() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const labels = [
		"Installing RelaySMS",
		"How to use App",
		"Features and Functionality",
		"Relay Bridges",
		"Selecting reliable gateway clients",
		"How to update the RelaySMS app"
	];

	return (
		<>
			<Box sx={{ px: { md: 15, xs: 2 }, pt: { md: 0, xs: 10 }, display: "flex" }}>
				<Typography sx={{ px: 2 }}>Help</Typography>
				<FaChevronRight style={{ marginTop: 4 }} />
				<Typography sx={{ px: 2, color: "#4E6A80" }}>{labels[value]}</Typography>
			</Box>
			<Box
				sx={{
					flexGrow: 1,
					bgcolor: "background.paper",
					display: "flex",
					height: "100%",
					mx: { md: 15, xs: 1 },
					py: { md: 5, xs: 5 }
				}}
			>
				<Grid container>
					<Grid
						item
						md={3}
						xs={3}
						sx={{
							position: "sticky",
							top: 40,
							maxHeight: "100vh",
							overflowY: "auto"
						}}
					>
						<Tabs
							orientation="vertical"
							variant="scrollable"
							value={value}
							onChange={handleChange}
							aria-label="Vertical tabs example"
							sx={{
								borderRight: 1,
								borderColor: "divider",
								height: "100vh"
							}}
						>
							<Tab
								sx={{
									justifyContent: "start",
									textTransform: "none",
									alignItems: "start",
									py: 3
								}}
								label="Installing RelaySMS"
								{...a11yProps(0)}
							/>
							<Tab
								sx={{
									justifyContent: "start",
									textTransform: "none",
									alignItems: "start",
									py: 3
								}}
								label="How to use App"
								{...a11yProps(1)}
							/>
							<Tab
								sx={{
									justifyContent: "start",
									textTransform: "none",
									alignItems: "start",
									py: 3
								}}
								label="Features  and Functionality"
								{...a11yProps(2)}
							/>
							<Tab
								sx={{
									justifyContent: "start",
									textTransform: "none",
									alignItems: "start",
									py: 3
								}}
								label="Relay Bridges"
								{...a11yProps(3)}
							/>
							<Tab
								sx={{
									justifyContent: "start",
									textTransform: "none",
									alignItems: "start",
									py: 3
								}}
								label="Selecting reliable gateway clients"
								{...a11yProps(4)}
							/>
							<Tab
								sx={{
									justifyContent: "start",
									textTransform: "none",
									alignItems: "start",
									py: 3
								}}
								label="How to update the RelaySMS app"
								{...a11yProps(5)}
							/>
						</Tabs>
					</Grid>
					<Grid item md={9} xs={9}>
						<TabPanel value={value} index={0}>
							<Installation />
						</TabPanel>
						<TabPanel value={value} index={1}>
							How to use App
						</TabPanel>
						<TabPanel value={value} index={2}>
							Features and Functionality
						</TabPanel>
						<TabPanel value={value} index={3}>
							Relay Bridges
						</TabPanel>
						<TabPanel value={value} index={4}>
							Selecting reliable gateway clients
						</TabPanel>
						<TabPanel value={value} index={5}>
							How to update the RelaySMS app
						</TabPanel>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}
