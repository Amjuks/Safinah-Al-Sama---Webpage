import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Box, Typography, Card, CardContent, Container, Button, Chip } from '@mui/material';
import { services } from '../data/Services';
import 'swiper/css';
import 'swiper/css/pagination';
import theme from '../theme/theme.js';

import {
  secondaryButtonStyles,
} from "../styles/About.js";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const swiperRef = useRef(null);

  const middleIndex = (activeIndex + Math.floor(slidesPerView / 2)) % services.length;

  const handleSelect = (index) => {
    if (!swiperRef.current) return;
    const shift = Math.floor(slidesPerView / 2);
    let targetIndex = index - shift;
    if (targetIndex < 0) {
      targetIndex = services.length + targetIndex;
    }
    swiperRef.current.slideToLoop(targetIndex);
  };

  return (
    <Box
      id="service-container"
      component="section"
      sx={{
        pt: 0,
        pb: 10,
        backgroundColor: 'background.default',
      }}
    >
      {/* Full-width Background Section */}
      <Box
        sx={{
          position: 'relative',
          mb: 4,
          py: 8,
          overflow: 'hidden',
          textAlign: 'center',
          color: '#fff',
          fontWeight: 900,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/service_banner.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.5)',
            zIndex: 1,
          }}
        />
        <Typography
          variant="h3"
          sx={{
            position: 'relative',
            zIndex: 2,
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '3rem', md: '3.8rem' },
            lineHeight: 1.15,
            textShadow: '0 2px 10px rgba(0,0,0,0.4)',
          }}
        >
          Our Services
        </Typography>
      </Box>

      {/* Rest of the content inside container */}
      <Container maxWidth="lg">
        {/* Chips ABOVE swiper */}
        <Box sx={{ mb: 6 }}>
  <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 1.5,
      maxWidth: 900,
      mx: 'auto',
    }}
  >
    {services.map((s, i) => (
      <Chip
        key={s.id}
        label={s.title}
        onClick={() => handleSelect(i)}
        color={middleIndex === i ? 'primary' : 'default'}
        variant={middleIndex === i ? 'filled' : 'outlined'}
        sx={{
          borderRadius: 8,
          fontWeight: 700,
          px: 2.5,
          py: 1,
          fontSize: {
            xs: '0.8rem',
            sm: '0.9rem',
            md: '1rem',
          },
          boxShadow: middleIndex === i ? theme.shadows[4] : 'none',
          transition: 'all 0.3s ease',
          whiteSpace: 'normal',
          textAlign: 'center',
          minWidth: { xs: 'auto', sm: 140 },
        }}
      />
    ))}
  </Box>
</Box>


        {/* Swiper */}
        <Box sx={{ px: { xs: 1, md: 4 }, py: 1 }}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setSlidesPerView(swiper.params.slidesPerView || 1);
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            style={{ padding: '10px 8px' }}
          >
            {services.map((service, index) => {
              const isMiddle = index === middleIndex;

              return (
                <SwiperSlide
                  key={service.id}
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <Card
                    elevation={4}
                    sx={{
                      width: '100%',
                      maxWidth: 320,
                      height: 400, // total card height - adjust as needed
                      display: 'flex',
                      flexDirection: 'column',
                      border: '1px solid',
                      borderColor: 'primary.main',
                      borderRadius: 2,
                      overflow: 'hidden',
                      backgroundColor: '#fff',
                      boxShadow: isMiddle
                        ? '0 5px 5px rgba(10,181,175,0.35)'
                        : '0 5px 5px rgba(0,0,0,0.12)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        py: 3,
                        px: 2,
                        backgroundColor: 'white',
                        // backgroundColor: 'primary.main',
                        height: 140, // NEW: fixed height
                      }}
                    >
                      {/* Icon in Circle */}
                      <Box
                        sx={{
                          backgroundColor: 'white',
                          color: 'primary.contrastText',
                          // borderRadius: '50%',
                          width: 64,
                          height: 64,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                        }}
                      >
                        <Box
                          component="img"
                          src={service.icon}
                          alt={service.title}
                          sx={{
                            width: 40,
                            height: 40,
                          }}
                        />
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          // color: 'text.primary',
                          color: 'primary.main',
                          lineHeight: 1.2,
                          wordBreak: 'break-word',
                          whiteSpace: 'normal',
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>

                    <CardContent
                      sx={{
                        flexGrow: 1,
                        px: 3,
                        pt: 3,
                        pb: 3,
                        color: 'text.secondary',
                        fontWeight: 400,
                        fontSize: '1rem',
                        lineHeight: 1.6,
                        overflow: 'auto',
                      }}
                    >
                      {service.description}
                    </CardContent>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>

        {/* Request Quote button */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={secondaryButtonStyles}
          >
            Request Quote
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
