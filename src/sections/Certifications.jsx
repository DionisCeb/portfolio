import React, { useState } from 'react'
import Carousel from 'react-spring-3d-carousel'

const certificateImages = [
  '/certificates/ai&machinelearning.png',
  '/certificates/cybersecurity.png',
  '/certificates/reactnative.png',
];

const Certifications = () => {
    const [current, setCurrent] = useState(0)
  
    const prevSlide = () => {
      setCurrent((prev) => (prev === 0 ? certificateImages.length - 1 : prev - 1))
    }
  
    const nextSlide = () => {
      setCurrent((prev) => (prev === certificateImages.length - 1 ? 0 : prev + 1))
    }
  
    return (
      <section className="c-space my-20 text-center" id="work">
        <p className="text-3xl font-bold mb-10">🎓 Certifications and Diploma</p>
  
        <div className="relative flex justify-center items-center">
          {/* Left Arrow */}
          <button onClick={prevSlide} className="absolute left-0 text-4xl px-4 z-10">
            ‹
          </button>
  
          <div className="flex gap-4 items-center overflow-hidden w-[90vw] max-w-5xl">
            {certificateImages.map((src, index) => {
              // Determine position relative to current
              const offset = index - current
  
              // Handle wrapping logic (e.g., last before first)
              const isPrev = (current === 0 && index === certificateImages.length - 1) || offset === -1
              const isNext = (current === certificateImages.length - 1 && index === 0) || offset === 1
              const isCenter = index === current
  
              let scale = 'scale-75'
              let opacity = 'opacity-70'
              let zIndex = 'z-0'
  
              if (isCenter) {
                scale = 'scale-100'
                opacity = 'opacity-100'
                zIndex = 'z-10'
              } else if (isPrev || isNext) {
                scale = 'scale-90'
                zIndex = 'z-5'
              }
  
              return (
                <div
                  key={index}
                  className={`transition-transform duration-500 ease-in-out transform ${scale} ${opacity} ${zIndex}`}
                >
                  <img
                    src={src}
                    alt={`Certificate ${index + 1}`}
                    className="w-64 h-44 object-cover rounded-lg shadow-lg"
                  />
                </div>
              )
            })}
          </div>
  
          {/* Right Arrow */}
          <button onClick={nextSlide} className="absolute right-0 text-4xl px-4 z-10">
            ›
          </button>
        </div>
      </section>
    )
  }

export default Certifications
