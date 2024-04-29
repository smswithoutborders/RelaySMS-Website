import { Box, Typography } from "@mui/material";
import React from "react";

export default function Installation() {
	return (
		<Box>
			<Typography variant="h4" sx={{ fontWeight: 700, pb: 5 }}>
				Download & Install App
			</Typography>
			<Box>
				<Typography variant="body1">
					Download and Install SWOB from Google Play Store , GitHub or build from source
				</Typography>
				<Typography variant="h6" sx={{ fontWeight: 700, pb: 5 }}>
					How to get started
				</Typography>
				<ul>
					<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
					<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
					<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				</ul>
				<Typography variant="body1" sx={{ py: 5 }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim purus eu nunc
					ullamcorper, vel convallis ante tincidunt. Vivamus lacinia, lacus nec tristique bibendum,
					velit libero consequat purus, ut finibus ex lectus eget nisi. Nulla facilisi. Phasellus
					quis libero nec libero tristique dapibus. Cras nec lacus vel magna posuere ultricies.
				</Typography>
			</Box>
			{/*  */}
			<Box>
				<Typography variant="h6" sx={{ fontWeight: 700, pb: 5 }}>
					iOS
				</Typography>
				<Typography variant="body1">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim purus eu nunc
					ullamcorper, vel convallis ante tincidunt.
				</Typography>
				<Typography variant="h6" sx={{ fontWeight: 700, pb: 5 }}>
					How to get started
				</Typography>
				<ul>
					<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
					<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
					<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				</ul>
				<Typography variant="body1">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim purus eu nunc
					ullamcorper.
				</Typography>
			</Box>
			{/*  */}
			<Box>
				<Typography variant="h6" sx={{ fontWeight: 700, pb: 5 }}>
					Desktop
				</Typography>
				<Typography variant="body1">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim purus eu nunc
					ullamcorper, vel convallis ante tincidunt.
				</Typography>
				<Typography variant="h6" sx={{ fontWeight: 700, pb: 5 }}>
					How to get started
				</Typography>
				<ul>
					<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
					<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
					<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				</ul>
				<Typography variant="body1">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim purus eu nunc
					ullamcorper.
				</Typography>
			</Box>
		</Box>
	);
}
