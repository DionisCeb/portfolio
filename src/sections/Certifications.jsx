import React, {useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const certificateImages = [
  { src: '/certificates/maisonneuve.png', alt: 'Maisonneuve Diploma' },
  { src: '/certificates/ai&machinelearning.png', alt: 'AI & Machine Learning' },
  { src: '/certificates/cybersecurity.png', alt: 'Cybersecurity' },
  { src: '/certificates/reactnative.png', alt: 'React Native' },
  { src: '/certificates/python.png', alt: 'Python' },
]

const Certifications = () => {

   useEffect(() => {
        const elements = document.querySelectorAll(".slide-block");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = `${index * 200 + 2000}ms`; // Delay increases by 200ms for each element
                    entry.target.classList.add("slide-in");
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, { threshold: 0.3 });

        elements.forEach(element => observer.observe(element));

        return () => observer.disconnect(); // Clean up observer on unmount
    }, []);
  return (
    <section className="py-20 bg-black text-white slide-block" id="certifications">
      <h2 className="text-3xl text-center font-bold mb-10 ">🎓 Certifications</h2>

      <div className="w-full max-w-5xl mx-auto px-4">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full"
        >
          {certificateImages.map((item, idx) => (
            <SwiperSlide
                key={idx}
                className="w-[340px] flex justify-center items-center relative group"
            >
                <img
                src={item.src}
                alt={item.alt}
                className="rounded-xl shadow-lg border border-gray-300 transition-opacity duration-300 group-[.swiper-slide-active]:opacity-100 opacity-70"
                />
            </SwiperSlide>
            ))}

        </Swiper>
      </div>
    </section>
  )
}

export default Certifications
