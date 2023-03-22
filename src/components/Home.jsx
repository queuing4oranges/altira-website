import React, { useEffect } from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import Sluzby from './Sluzby';
import Ziskate from './Ziskate';
import Zkusenosti from './Zkusenosti';
import About from './About';
import Kontakt from './Kontakt';
import Reference from './Reference';
import Footer from './Footer';

export default function Home() {

  return (
    <div >
      <Navbar/>
      <Hero />
      <ImageSlider />
      <Sluzby />
      <Ziskate />
      <Zkusenosti />
      <About />
      <Kontakt />
      <Reference />
      <Footer />
    </div>
  )
}
