const CARD_MIN_HEIGHT = 280;
const ICON_BOX_SIZE = 80;

export const sectionWrapperStyles = {
  py: { xs: 8, md: 12 },
  minHeight: { xs: 'auto', md: '640px' },
  backgroundColor: 'background.default',
};

export const sectionTitleStyles = {
  // fontSize: { xs: '1.75rem', md: '2.6rem' },
  fontSize: { xs: '2rem', sm: '3rem', md: '3.8rem' },
  fontWeight: 700,
  lineHeight: 1.15,
  textShadow: '0 2px 4px rgba(0,0,0,0.4)',
  textAlign: 'center',
  mb: 1,
  color: 'text.primary',
};

export const sectionSubtitleStyles = {
  textAlign: 'center',
  color: 'text.secondary',
  mb: { xs: 3, md: 4 },
  maxWidth: 920,
  mx: 'auto',
  fontSize: '1rem',
  fontWeight: 500,
};

export const chipsRowStyles = {
  display: 'flex',
  justifyContent: 'center',
  gap: 1,
  flexWrap: 'wrap',
  mb: { xs: 2, md: 3 },
};

export const gridStyles = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: '1fr 420px' },
  gap: { xs: 3, md: 6 },
  alignItems: 'center',
  mt: 2,
};

export const swiperContainerStyles = {
  position: 'relative',
  px: { xs: 1, md: 0 },
  minHeight: CARD_MIN_HEIGHT,
  display: 'flex',
  alignItems: 'stretch',
};

export const slideOuterStyles = {
  minHeight: CARD_MIN_HEIGHT,
  display: 'flex',
  alignItems: 'stretch',
  padding: { xs: '6px', md: '10px' },
  width: '100%',
};

export const cardStyles = (theme) => ({
  display: 'flex',
  gap: 2,
  alignItems: 'stretch',
  borderRadius: 2,
  minHeight: CARD_MIN_HEIGHT,
  boxShadow: 'none',
  border: `1px solid ${theme.palette.divider}`,
  overflow: 'visible',
  backgroundColor: 'common.white',
  transition: 'transform 240ms cubic-bezier(.2,.8,.2,1), box-shadow 240ms',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[6],
  },
});

export const iconBoxStyles = (theme) => ({
  width: ICON_BOX_SIZE,
  minWidth: ICON_BOX_SIZE,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  p: 1.5,
  borderTopLeftRadius: 12,
  borderBottomLeftRadius: 12,
  background: `linear-gradient(180deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
  color: 'common.white',
});

export const cardTitleStyles = {
  fontWeight: 800,
  fontSize: '1.05rem',
  color: 'text.primary',
  mb: 0.5,
};

export const cardDescStyles = {
  color: 'text.secondary',
  fontSize: '0.98rem',
  lineHeight: 1.5,
  maxHeight: 96,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

export const imageBoxStyles = {
  width: '100%',
  height: { xs: 220, md: 420 },
  borderRadius: 2,
  overflow: 'hidden',
};

export const ctaRowStyles = {
  mt: { xs: 3, md: 4 },
  display: 'flex',
  justifyContent: 'center',
  gap: 2,
};

export const paginationOverrides = (theme) => ({
  '.swiper-pagination': {
    bottom: 6,
  },
  '.swiper-pagination-bullet': {
    width: 10,
    height: 10,
    opacity: 0.36,
    background: '#cfcfcf',
  },
  '.swiper-pagination-bullet-active': {
    opacity: 1,
    background: theme.palette.primary.main,
    boxShadow: `0 6px 18px ${theme.palette.primary.main}22`,
  },
});
