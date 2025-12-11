import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import Showcase from './components/Showcase'
import Performance from './components/Performance'
import Highlights from './components/Highlights'
import Features from './components/Features'
import Footer from './components/Footer'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger) //Make sure plugin is registered globally

const app = () => {
  return (
    <main >
      <Navbar />
      <Hero />
      <ProductViewer /> 
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  )
}

export default app
