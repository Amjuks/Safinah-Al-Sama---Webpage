const scrollToSection = (id) => {
  const element = document.getElementById(id);
  const navbar = document.getElementById('app-bar');

  if (element) {
    const navbarHeight = navbar?.offsetHeight || 0;
    const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

export default scrollToSection;