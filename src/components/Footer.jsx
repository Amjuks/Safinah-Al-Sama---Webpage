import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
} from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import scrollToSection from '../utils/scrollToSection';

// Logo path from public folder
const logo = '/assets/logo/transparent.png';

const quickLinks = [
  {
    'name': 'About',
    'id': 'about-section-container'
  },
  {
    'name': 'Services',
    'id': 'service-container'
  },
  {
    'name': 'Contact',
    'id': 'contact-container'
  },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid
            container
            spacing={4}
            justifyContent="space-between"
            alignItems="flex-start"
        >
          {/* Branding */}
          <Grid size={{ xs: 12, md:5 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <Box
                component="img"
                src={logo}
                alt="Safinah Al Sama Logo"
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  objectFit: 'contain',
                  mr: 1.5,
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 900 }}>
                Safinah Al Sama
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Your trusted logistics & customs partner across the UAE & GCC.
            </Typography>
          </Grid>

          {/* Navigation */}
          <Grid size={{ xs:6, md:3 }}>
            <Typography variant="subtitle1" fontWeight={700} gutterBottom>
              Quick Links
            </Typography>
            {quickLinks.map(({ name, id }) => (
              <Link
                key={id}
                component="button"
                onClick={() => scrollToSection(id)}
                underline="hover"
                color="text.secondary"
                variant="body2"
                sx={{ display: 'block', mb: 0.5 }}
              >
                {name}
              </Link>
            ))}
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs:12, md:4 }}>
            <Typography variant="subtitle1" fontWeight={700} gutterBottom>
              Contact Information
            </Typography>

            <Box
              component="a"
              href="tel:+971501234567"
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 1,
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              <Phone sx={{ mr: 1 }} fontSize="small" />
              <Typography variant="body2">+971 50 123 4567</Typography>
            </Box>

            <Box
              component="a"
              href="mailto:info@safinahalsama.com"
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 1,
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              <Email sx={{ mr: 1 }} fontSize="small" />
              <Typography variant="body2">info@safinahalsama.com</Typography>
            </Box>

            <Box
              component="a"
              href="https://www.google.com/maps?q=Al+Twar+1,+Dubai,+United+Arab+Emirates"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              <LocationOn sx={{ mr: 1, mt: 0.3 }} fontSize="small" />
              <Typography variant="body2">
                Al Twar 1, Dubai, United Arab Emirates
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ fontSize: '0.875rem' }}
        >
          © {new Date().getFullYear()} Safinah Al Sama. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
