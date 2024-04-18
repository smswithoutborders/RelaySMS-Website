import { Box, ListItemButton, Typography, List } from "@mui/material";
import React from "react";

export default function Installation() {
	return (
		<Box>
			<Typography variant="h4" sx={{ fontWeight: 700, pb: 5 }}>
				Installing RelaySMS
			</Typography>
			<Typography variant="body1">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim purus eu nunc
				ullamcorper, vel convallis ante tincidunt.
			</Typography>
			<List>
				<ListItemButton>Andriod</ListItemButton>
				<ListItemButton>iOS</ListItemButton>
				<ListItemButton>Linux</ListItemButton>
				<ListItemButton>Windows</ListItemButton>
				<ListItemButton>Mac</ListItemButton>
			</List>
			<Box>
				<Typography variant="h6" sx={{ fontWeight: 700, pb: 5 }}>
					Android
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
