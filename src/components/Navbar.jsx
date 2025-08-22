import React, { useState, useRef, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import scrollToSection from '../utils/scrollToSection';

// Logo path since it's in public folder
const logo = '/assets/logo/transparent.png';

const navItems = [
  { label: 'About', id: 'about-section-container' },
  { label: 'Services', id: 'service-container' },
  { label: 'Contact', id: 'contact-container' },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const appBarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (appBarRef.current) {
      setNavbarHeight(appBarRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (appBarRef.current) {
        setNavbarHeight(appBarRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setDrawerOpen(false)}
      onKeyDown={() => setDrawerOpen(false)}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => scrollToSection(item.id)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        id="app-bar"
        ref={appBarRef}
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          bgcolor: 'background.paper',
          borderBottom: `1px solid ${theme.palette.divider}`,
          py: 1,
          px: { xs: 2, sm: 4 },
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: 64,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => scrollToSection('hero-container')}
          >
            <Box
              component="img"
              src={logo}
              alt="Safinah Al Sama Logo"
              sx={{
                width: 48,
                height: 48,
                mr: 1.5,
                objectFit: 'contain',
                padding: 0.5,
                bgcolor: 'transparent',
                borderRadius: '50%',
                position: 'relative',
                overflow: 'hidden',
              }}
            />
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontFamily: "'DM Serif Display'",
                fontWeight: 500,
                letterSpacing: 1.2,
                userSelect: 'none',
                color: theme.palette.primary.main,
              }}
            >
              Safinah Al Sama Shipping LLC
            </Typography>
          </Box>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="primary"
                aria-label="menu"
                onClick={handleDrawerToggle}
                size="large"
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  color="primary"
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    fontWeight: 700,
                    textTransform: 'none',
                    fontSize: '1rem',
                    mx: 1,
                    '&:hover': {
                      bgcolor: theme.palette.primary.light,
                      color: theme.palette.primary.contrastText,
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
