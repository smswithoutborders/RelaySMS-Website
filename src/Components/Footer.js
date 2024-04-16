import { Box, Typography, Grid, ListItem, List } from "@mui/material";
import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          bgcolor: "black",
          color: "white",
          p: 3,
          px: { xs: 3, md: 10 },
          position: "static",
          bottom: 0,
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                dignissim purus eu nunc ullamcorper, vel convallis ante
                tincidunt.
              </Typography>
            </Grid>
            <Grid item md={2} xs={12}>
              <List>
                <ListItem variant="body1" sx={{ fontWeight: 600 }}>
                  Quick links
                </ListItem>
                <ListItem variant="body1">Blogs</ListItem>
                <ListItem variant="body1">Documentation</ListItem>
                <ListItem variant="body1">Privacy Policy</ListItem>
                <ListItem variant="body1">Developers</ListItem>
              </List>
            </Grid>
            <Grid item md={2} xs={12}>
              <List>
                <ListItem variant="body1" sx={{ fontWeight: 600 }}>
                  Socials
                </ListItem>
                <ListItem variant="body1">
                  <FaGithub style={{ marginRight: 15 }} />
                  GitHub
                </ListItem>
                <ListItem variant="body1">
                  <FaFacebook style={{ marginRight: 15 }} />
                  Facebook
                </ListItem>
                <ListItem variant="body1">
                  <FaXTwitter style={{ marginRight: 15 }} /> X
                </ListItem>
                <ListItem variant="body1">
                  <FaEnvelope style={{ marginRight: 15 }} /> Mail
                </ListItem>
              </List>
            </Grid>
            <Grid item md={2} xs={12}>
              <List>
                <ListItem variant="body1" sx={{ fontWeight: 600 }}>
                  Download
                </ListItem>
                <ListItem variant="body1">Android</ListItem>
                <ListItem variant="body1">iOS</ListItem>
                <ListItem variant="body1">Linux</ListItem>
                {/* <ListItem variant="body1">Mac</ListItem> */}
                <ListItem variant="body1">Windows</ListItem>
              </List>
            </Grid>
          </Grid>
          <br />
        </Box>
        <Typography variant="body1" sx={{ mx: 4 }}>
          © 2024 SMSWithoutBorders
        </Typography>
      </Box>
    </>
  );
}
