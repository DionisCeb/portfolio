import React, { useState } from 'react'
import Carousel from 'react-spring-3d-carousel'
import { config } from 'react-spring'

/* const certificateImages = [
  '/certificates/ai&machinelearning.png',
  '/certificates/cybersecurity.png',
  '/certificates/reactnative.png',
]; */

const certificateImages = [
    {
      key: 1,
      content: (
        <img
          src="/certificates/ai&machinelearning.png"
          alt="AI & Machine Learning Google"
          className="rounded-xl shadow-lg border border-gray-200 max-w-full h-auto"
        />
      ),
    },
    {
      key: 2,
      content: (
        <img
          src="/certificates/cybersecurity.png"
          alt="Cybersecurity Certificate Google"
          className="rounded-xl shadow-lg border border-gray-200 max-w-full h-auto"
        />
      ),
    },
    {
      key: 3,
      content: (
        <img
          src="/certificates/reactnative.png"
          alt="React Native Meta"
          className="rounded-xl shadow-lg border border-gray-200 max-w-full h-auto"
        />
      ),
    },
  ]
  
  

  const Certifications = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
  
    const slides = certificateImages.map((item, index) => ({
      ...item,
      onClick: () => setCurrentSlide(index),
    }))
  
    return (
      <section className="w-full bg-black text-white py-20" id="certifications">
        <h2 className="head-text"> Certifications</h2>
  
        <div className="w-full max-w-5xl mx-auto h-[400px]">
          <Carousel
            slides={slides}
            goToSlide={currentSlide}
            offsetRadius={1} // Shows 1 before and 1 after = 3 total
            showNavigation
            animationConfig={config.gentle}
          />
        </div>
      </section>
    )
  }

export default Certifications
