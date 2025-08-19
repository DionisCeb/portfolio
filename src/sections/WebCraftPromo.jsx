import { useEffect } from "react";
import { motion } from "framer-motion";

export default function WebcraftPromo() {
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
    <section className="relative py-20 px-6 flex justify-center items-center slide-block">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-10 max-w-3xl text-center"
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
          🚀 Boost Your Business with{" "}
          <span className="text-indigo-400">Webcraft</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl mb-10 text-gray-300">
          A platform for agencies and companies — providing modern,
          custom website solutions that help your business grow.
        </p>

        {/* Button */}
        <motion.a
          href="https://webcraft.dioniscode.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-indigo-400 text-indigo-400 font-semibold hover:bg-indigo-500/20 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Visit Webcraft
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="rgb(129 140 248 / var(--tw-text-opacity, 1))"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>
      </motion.div>

      {/* Floating Blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        animate={{ scale: [1, 1.3, 1], rotate: [360, 0, 360] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
    </section>
  );
}
