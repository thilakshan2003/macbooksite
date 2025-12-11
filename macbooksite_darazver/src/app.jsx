import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import Showcase from './components/Showcase'
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
    </main>
  )
}

export default app
