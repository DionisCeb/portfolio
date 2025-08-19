import { motion } from "framer-motion";
import { useEffect } from "react";

export default function AISolutionsPromo() {
  //Use Effect to add the effect on scroll
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
    <section className="relative py-20 px-6 flex justify-center items-center" id="ai-solutions">
      {/* Neon gradient ring */}
      <div className="absolute inset-0 blur-3xl opacity-20 pointer-events-none"
           style={{ background: "radial-gradient(50% 50% at 50% 50%, #7c3aed 0%, rgba(124,58,237,0) 60%), radial-gradient(40% 40% at 80% 20%, #2563eb 0%, rgba(37,99,235,0) 60%)" }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-5xl w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-10"
      >
        {/* Header */}
        <div className="text-center slide-block">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-4">
            🤖 AI Solutions for Your Product
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Launch a branded AI chat for support, lead capture, and knowledge retrieval.
            Secure, fast, and easy to embed in any website.
          </p>
        </div>

        {/* Feature chips */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 slide-block">
          {[
            "Custom branding",
            "Knowledge base (docs/FAQ)",
            "Multi-language UI",
            "Embeddable widget",
            "Auth ready",
            "Analytics hooks",
          ].map((t) => (
            <span
              key={t}
              className="text-sm px-3 py-1 rounded-full border border-white/10 text-gray-200 bg-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA + arrow */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="https://aichat.dioniscode.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-indigo-400 text-indigo-300 font-semibold hover:bg-indigo-500/15 transition-all"
          >
            Try the AI Chat
            {/* inline arrow icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"
                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>

          <a
            href="https://webcraft.dioniscode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-200 hover:bg-white/10 transition-all"
          >
            See Web Solutions
          </a>
        </div>

        {/* Mini embed hint (copy-paste) */}
        <div className="mt-10 rounded-xl border border-white/10 bg-black/30 p-4 slide-block">
          <div className="text-sm text-gray-400 mb-2">Embed in any page:</div>
          <pre className="text-xs md:text-sm text-gray-200 overflow-x-auto">
{`<!-- AI Chat Widget -->
<script defer src="/path/to/aichat-widget.js"></script>
<div id="ai-chat" data-brand="YourBrand" data-primary="#6366f1"></div>`}
          </pre>
        </div>
      </motion.div>

      {/* Subtle corner glows */}
      <motion.div
        className="absolute -top-28 -left-28 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen blur-3xl opacity-20"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-28 -right-28 w-72 h-72 bg-indigo-600 rounded-full mix-blend-screen blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1], rotate: [180, 0, 180] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
    </section>
  );
}
