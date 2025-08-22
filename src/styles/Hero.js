// styles/Hero.js

export const heroContainerStyles = (image) => ({
  position: 'relative',
  minHeight: { xs: '82vh', md: '100vh' },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'common.white',
  textAlign: 'center',
  px: 2,
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

  // Add overlay using a pseudo-element
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.4)', // adjust opacity here
    zIndex: 1,
  },

  // Ensure content is above overlay
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
});

export const contentBoxStyles = {
  position: 'relative',
  zIndex: 2,
  maxWidth: 920,
  mx: 'auto',
  py: { xs: 6, md: 10 },
  px: { xs: 3, sm: 5 },
  backgroundColor: 'rgba(0, 0, 0, 0.6)', // Increase or decrease for contrast
  borderRadius: '16px',
};


export const titleStyles = {
  fontSize: { xs: '1.8rem', sm: '3rem', md: '3.8rem' },
  fontWeight: 700,
  lineHeight: 1.15,
  letterSpacing: '-0.01em',
  mb: { xs: 2.5, md: 3.5 },
  textShadow: '0 2px 4px rgba(0,0,0,0.4)',
};

export const subtitleStyles = {
  fontWeight: 400,
  color: 'grey.100', // You can try 'grey.50' for more brightness
  mb: { xs: 4, md: 6 },
  maxWidth: 760,
  mx: 'auto',
  textShadow: '0 1px 3px rgba(0,0,0,0.35)',
};

export const ctaStyles = {
  justifyContent: 'center',
  mt: 2,
};

export const primaryButtonStyles = {
  borderRadius: '999px',
  px: 5,
  py: 1.8,
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '1rem',
  backgroundColor: 'primary.main',
  color: 'primary.contrastText',
  '&:hover': {
    backgroundColor: '#099d98', // a slightly darker shade of your primary
  },
};

export const secondaryButtonStyles = {
  borderRadius: '999px',
  px: 5,
  py: 1.8,
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '1rem',
  backgroundColor: 'common.white',
  color: 'primary.main',
  border: '2px solid',
  borderColor: 'primary.main',
  '&:hover': {
    backgroundColor: 'grey.100', // subtle hover effect
    borderColor: 'primary.dark',
    color: 'primary.dark',
  },
};

export const infoRowStyles = {
  mt: { xs: 4, md: 6 },
  display: 'flex',
  gap: 2,
  justifyContent: 'center',
  flexWrap: 'wrap',
};

export const chipStyles = {
  bgcolor: 'rgba(255,255,255,0.15)',
  color: 'white',
  fontWeight: 600,
  borderRadius: '999px',
  px: 2,
  py: 0.7,
  fontSize: '0.85rem',
  backdropFilter: 'blur(2px)',
  border: '1px solid rgba(255,255,255,0.3)',
};