import React from 'react';
import Layout from './layout/Layout';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Contact from './sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Contact />
    </Layout>
  );
}

export default App;