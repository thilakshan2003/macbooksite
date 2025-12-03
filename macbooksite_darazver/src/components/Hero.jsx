import React, { useRef, useEffect } from 'react'

const Hero = () => {
  const videoRef = useRef();

  /*React provides a reference (videoRef) to the actual video element on the screen. 
  The useEffect function uses this reference to directly access the video element's built-in functions 
  to make it start playing at double speed as soon as the video appears.*/
  
  useEffect(() => {
    // Play the video when the component mounts
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0; // Set playback speed to 2x
      videoRef.current.play();      
    }
  }, []);



  return (
    <section id='hero' className='hero-section'>
      <div className='hero-content'>
        <h1> Macbook Pro </h1>

        {/* We can use img tag to add image directly without importing*/}
        <img src='/title.png' alt='Macbook Pro Title' />

        {/* A very optimised video animation - playsinline to hide volume/forward/backwards stuff*/}
        <video ref = {videoRef} src='/videos/hero.mp4' autoPlay muted playsInline />
      </div>
      
    </section>
  )
}

export default Hero
