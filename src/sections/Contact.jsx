import React from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  useTheme,
  Divider,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import theme from '../theme/theme';

const textFieldStyles = {
  '& .MuiInputBase-root': {
    color: 'white', // Input text color
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'rgba(255, 255, 255, 0.5)', // Default underline
  },
  '& .MuiInput-underline:hover:before': {
    borderBottomColor: 'white', // Hover underline
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.palette.primary.main, // Focus underline
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'white',
  },
};

const Contact = () => {
  const theme = useTheme();

  const glassStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderRadius: 4,
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
    color: theme.palette.text.primary,
  };

  return (
    <Box
      id="contact-container"
      component="section"
      sx={{
        position: 'relative',
        py: 10,
        minHeight: '500px', // Ensure height so background appears
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/contact_banner.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0,0,0,0.4)',
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 2 }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 6, 
            fontSize: { xs: '2rem', sm: '3rem', md: '3.8rem' },
            fontWeight: 700,
            lineHeight: 1.15,
            color: 'common.white',
            textShadow: '0 2px 4px rgba(0,0,0,0.4)',
          }}
        >
          Contact Us
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gap: 5,
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            alignItems: 'start',
          }}
        >
          {/* Contact Form */}
          <Paper
            elevation={0}
            sx={{
              p: 5,
              order: { xs: 1, md: 1 },
              ...glassStyles,
              height: '100%',
              alignSelf: 'stretch'
            }}
          >
            <form noValidate autoComplete="off">
              <Box sx={{ display: 'grid', gap: 4 }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="standard"
                    required
                    sx={textFieldStyles}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    variant="standard"
                    required
                    type="email"
                    sx={textFieldStyles}
                  />
                </Box>

                <TextField
                  fullWidth
                  label="Message"
                  variant="standard"
                  required
                  multiline
                  rows={5}
                  sx={textFieldStyles}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    borderRadius: '999px',
                    px: 5,
                    py: 1.75,
                    fontWeight: 700,
                    fontSize: '1rem',
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </form>
          </Paper>

          {/* Contact Info */}
          <Paper
            elevation={0}
            sx={{
              p: 5,
              order: { xs: 2, md: 2 },
              ...glassStyles,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              alignSelf: 'stretch' 
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              fontWeight={700}
              sx={{ mb: 3, color: 'common.white' }}
            >
              Get in touch
            </Typography>

            <Box
              component="a"
              href="tel:+97141234567"
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 3,
                color: 'common.white',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              <PhoneIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
              <Typography variant="body1">+971 4 123 4567</Typography>
            </Box>

            <Box
              component="a"
              href="mailto:info@yourcompany.com"
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 3,
                color: 'common.white',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              <EmailIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
              <Typography variant="body1">info@yourcompany.com</Typography>
            </Box>

            <Box
              component="a"
              href="https://www.google.com/maps?q=Business+Bay,+Dubai,+UAE"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 3,
                color: 'common.white',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              <LocationOnIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
              <Typography variant="body1">Business Bay, Dubai, UAE</Typography>
            </Box>

            <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.3)' }} />

            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
              We’re here to help. Drop us a line and we’ll get back to you as soon as possible.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
