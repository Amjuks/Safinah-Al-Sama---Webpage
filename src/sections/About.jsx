import React from "react";
import { Container, Box, Typography, Button, Stack } from "@mui/material";
import { LocationOn, WorkspacePremium, Public, Verified } from "@mui/icons-material";
import {
  aboutSectionStyles,
  gridWrapperStyles,
  textColumnStyles,
  titleStyles,
  subtitleStyles,
  paragraphStyles,
  highlightsGridStyles,
  highlightItemStyles,
  ctaStyles,
  secondaryButtonStyles,
  imageColumnStyles,
  imageInnerStyles,
  iconCircleStyles,
} from "../styles/About.js";

import scrollToSection from '../utils/scrollToSection';

const iconMap = {
  HQ: <LocationOn fontSize="small" />,
  Service: <WorkspacePremium fontSize="small" />,
  Reach: <Public fontSize="small" />,
  Authority: <Verified fontSize="small" />,
};

const About = ({
  title = "About Us",
  subtitle = "Precision. Presence. Prestige.",
  paragraphs = [
    "We are a Dubai-based logistics house delivering bespoke customs brokerage, premium freight forwarding, and quietly impeccable cross-border solutions.",
    "We combine seasoned expertise with subtle tech to move high-value shipments with discretion, speed, and finesse.",
  ],
  highlights = [
    { label: "HQ", value: "Dubai" },
    { label: "Service", value: "White-glove" },
    { label: "Reach", value: "100+ countries" },
    { label: "Authority", value: "Licensed brokers" },
  ],
  image = `${process.env.PUBLIC_URL}/assets/logo/wall_mockup.jpg`,
  onContact = () => {},
  onServices = () => {},
}) => {
  return (
    <Box id="about-section-container" component="section" sx={aboutSectionStyles} aria-labelledby="about-heading">
      <Container maxWidth="xl" disableGutters>
        <Box sx={gridWrapperStyles}>
          <Box sx={{ ...textColumnStyles, order: { xs: 2, md: 1 } }}>
            <Typography id="about-heading" component="h2" sx={titleStyles}>
              {title}
            </Typography>
            <Typography component="h3" sx={subtitleStyles}>
              {subtitle}
            </Typography>
            {paragraphs.map((p, i) => (
              <Typography key={i} sx={paragraphStyles} paragraph>
                {p}
              </Typography>
            ))}
            <Box sx={highlightsGridStyles} aria-hidden>
              {highlights.map((h, idx) => (
                <Box key={idx} sx={highlightItemStyles}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={iconCircleStyles}>{iconMap[h.label]}</Box>
                    <Box>
                      <Typography component="div" sx={{ fontWeight: 700, fontSize: "0.95rem", whiteSpace: "nowrap" }}>
                        {h.label}
                      </Typography>
                      <Typography component="div" sx={{ color: "grey.700", fontSize: "0.85rem", whiteSpace: "nowrap" }}>
                        {h.value}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={ctaStyles}>
              <Button variant="contained" size="large" onClick={() => {scrollToSection('contact-container')}} sx={secondaryButtonStyles}>
                Contact Us
              </Button>
              <Button variant="outlined" size="large" onClick={() => {scrollToSection('service-container')}} sx={secondaryButtonStyles}>
                Our Services
              </Button>
            </Stack>
          </Box>
          <Box sx={{ ...imageColumnStyles, order: { xs: 1, md: 2 } }}>
            <Box
              component="img"
              src={image}
              alt="Brand mockup"
              sx={imageInnerStyles}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
