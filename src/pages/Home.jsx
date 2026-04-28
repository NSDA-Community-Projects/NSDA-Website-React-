import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import WhatWeDo from '../sections/WhatWeDo';
import Mentorship from '../sections/Mentorship';
import Projects from '../sections/Projects';
import Nujum from '../sections/Nujum';
import Leadership from '../sections/Leadership';
import CTA from '../sections/CTA';
import Footer from '../components/layout/Footer';

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <WhatWeDo />
      <Mentorship />
      <Projects />
      <Nujum />
      <Leadership />
      <CTA />
      <Footer />
    </main>
  );
}

export default Home;