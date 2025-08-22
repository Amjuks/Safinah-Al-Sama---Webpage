export const aboutSectionStyles = {
  backgroundColor: "#fff", // or remove entirely for transparent
  position: "relative",
};

export const gridWrapperStyles = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "minmax(600px, 700px) 1fr",
  },
  alignItems: "stretch", // <-- make sure both columns are equal height
  width: "100%",
};

export const textColumnStyles = {
  zIndex: 3,
  maxWidth: 640,
  p: { xs: 3, md: 6 },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export const titleStyles = {
  fontSize: { xs: "1.6rem", md: "2.3rem" },
  fontWeight: 900,
  letterSpacing: "-0.02em",
  mb: 1,
  color: "text.primary",
};

export const subtitleStyles = {
  fontSize: { xs: "0.98rem", md: "1.05rem" },
  fontWeight: 700,
  color: "primary.main",
  mb: 2,
};

export const paragraphStyles = {
  fontSize: "1.03rem",
  color: "grey.900",
  lineHeight: 1.75,
  mb: 2,
};

export const highlightsGridStyles = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr 1fr", // 2 per row on small screens
    sm: "repeat(4, 1fr)", // 4 equal columns
  },
  gap: 3,
  alignItems: "center",
  justifyItems: "center",
  textAlign: "center",
  mt: 3,
  mb: 3,
};

export const highlightItemStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: 0.8,
};

export const iconCircleStyles = {
  width: 38,
  height: 38,
  borderRadius: 8,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255,255,255,0.02)",
  boxShadow: "0 6px 18px rgba(12,18,30,0.06)",
  color: "primary.main",
};

export const ctaStyles = { mt: 1 };
export const primaryButtonStyles = {
  py: 1.4,
  px: 3.5,
  borderRadius: 999,
  fontWeight: 800,
  boxShadow: "0 14px 36px rgba(12,18,30,0.14)",
};
export const secondaryButtonStyles = {
  py: 1.4,
  px: 3.5,
  borderRadius: 999,
  fontWeight: 700,
};

export const imageColumnStyles = {
  display: "flex", // always display
  alignItems: "stretch",
  justifyContent: "flex-end",
  width: "100%",
};

export const imageInnerStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center", // centers the image
  display: "block",
};