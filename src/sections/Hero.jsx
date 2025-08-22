import React from 'react';
import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import {
  heroContainerStyles,
  primaryButtonStyles,
  secondaryButtonStyles,
  titleStyles,
  subtitleStyles,
  ctaStyles,
  infoRowStyles,
  chipStyles,
} from '../styles/Hero.js';

import scrollToSection from '../utils/scrollToSection';

const Hero = ({
  image = '/assets/hero_banner.jpg',
  title = 'Your Cargo, Our Priority',
  subtitle = 'Trusted logistics partner for customs brokerage, freight forwarding, customs representation, and cross-border solutions based in Dubai.',
  onGetQuote = () => {},
}) => {
  return (
    <Box id="hero-container" component="section" aria-label="Hero - Safinah Al Sama Shipping" sx={heroContainerStyles(image)}>
      <Box sx={{ textAlign: 'center', px: 2 }}>
        <Typography component="h1" sx={titleStyles}>
          {title}
        </Typography>

        <Typography variant="h6" component="p" sx={subtitleStyles}>
          {subtitle}
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={ctaStyles}
          role="group"
          aria-label="Primary calls to action"
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={onGetQuote}
            aria-label="Get a Quote"
            sx={primaryButtonStyles} // ✅ use primary styles here
          >
            Get a Quote
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => { scrollToSection('service-container') }}
            aria-label="View Our Services"
            sx={secondaryButtonStyles} // ✅ new style
          >
            Our Services
          </Button>
        </Stack>

        <Box sx={infoRowStyles} aria-hidden>
          <Chip label="Customs brokerage" sx={chipStyles} />
          <Chip label="Air & Sea Freight" sx={chipStyles} />
          <Chip label="Transit & Transshipment" sx={chipStyles} />
          <Chip label="Land Transport" sx={chipStyles} />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
