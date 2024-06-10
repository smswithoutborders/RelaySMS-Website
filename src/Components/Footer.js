import { Box, Typography, Grid, ListItem, List } from "@mui/material";
import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
	return (
		<Box
			component="footer"
			sx={{
				bgcolor: "black",
				color: "white",
				p: 3,
				px: { xs: 3, md: 10 },
				position: "static",
				bottom: 0
			}}
		>
			<Box>
				<Grid container justifyContent="space-between">
					<Grid item md={4} xs={12}>
						<Box sx={{ display: "flex", pt: 3 }}>
							<Box
								component="img"
								src="/logo.png"
								sx={{ width: "40px", mx: 2 }}
								alt="smswithoutborders logo"
							/>
							<Typography variant="h5" sx={{ fontWeight: 600 }}>
								RelaySMS
							</Typography>
						</Box>
						<Typography variant="body2" sx={{ px: { md: 4, xs: 2 }, py: 2 }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim purus eu nunc
							ullamcorper, vel convallis ante tincidunt.
						</Typography>
					</Grid>
					<Grid item md={2} xs={12}>
						<List>
							<ListItem variant="body1" sx={{ fontWeight: 600 }}>
								Quick links
							</ListItem>
							<ListItem variant="body1">
								<a href="https://blog.smswithoutborders.com/">Blogs</a>
							</ListItem>
							<ListItem variant="body1">
								<a href="https://github.com/smswithoutborders">GitHub</a>
							</ListItem>
							<ListItem variant="body1">
								<a href="/documentation">Documentation</a>
							</ListItem>
							<ListItem variant="body1">
								<a href="/privacy-policy">Privacy Policy</a>
							</ListItem>
						</List>
					</Grid>
					<Grid item md={2} xs={12}>
						<List>
							<ListItem variant="body1" sx={{ fontWeight: 600 }}>
								Socials
							</ListItem>
							<ListItem variant="body1">
								<FaGithub style={{ marginRight: 15 }} />
								<a href="https://github.com/smswithoutborders">GitHub</a>
							</ListItem>
							<ListItem variant="body1">
								<FaFacebook style={{ marginRight: 15 }} />
								<a href="https://www.facebook.com/SMSWithoutBorders">Facebook</a>
							</ListItem>
							<ListItem variant="body1">
								<FaXTwitter style={{ marginRight: 15 }} />
								<a href="https://x.com/SwobOutreach">X </a>
							</ListItem>
							<ListItem variant="body1">
								<FaEnvelope style={{ marginRight: 15 }} />
								<a href="mailto:support@smswithoutborders.com">Mail</a>
							</ListItem>
						</List>
					</Grid>
					<Grid item md={2} xs={12}>
						<List>
							<ListItem variant="body1" sx={{ fontWeight: 600 }}>
								Download
							</ListItem>
							<ListItem variant="body1">
								<a href="/download/android">Android</a>
							</ListItem>
							<ListItem variant="body1">
								<a href="/download/ios">iOS</a>
							</ListItem>
							<ListItem variant="body1">
								<a href="/download/linux">Linux</a>
							</ListItem>
							<ListItem variant="body1">
								<a href="/download/windows">Windows</a>
							</ListItem>
						</List>
					</Grid>
				</Grid>
				<br />
			</Box>
			<Typography variant="body1" sx={{ mx: 4 }}>
				© 2024 SMSWithoutBorders
			</Typography>
		</Box>
	);
}
