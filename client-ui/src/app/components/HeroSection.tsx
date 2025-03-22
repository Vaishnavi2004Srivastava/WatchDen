
"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("hero");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.75);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center p-6 bg-cover bg-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#020c1b]"></div>

      {/* Glitter Sprinkler Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-50"
            initial={{ x: Math.random() * 100 + "vw", y: Math.random() * 100 + "vh", opacity: 0 }}
            animate={{
              y: ["100vh", "-10vh"],
              opacity: [0.3, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 5 + 2,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Writing Animation */}
        <motion.h1
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
          initial={{ opacity: 0, width: 0 }}
          animate={isVisible ? { opacity: 1, width: "100%" } : {}}
          transition={{ duration: 2, delay: 0.2 }}
          style={{ whiteSpace: "nowrap", overflow: "hidden", display: "inline-block" }}
        >
         Classic Refinement
        </motion.h1>

        <motion.p
          className="mt-4 text-lg max-w-lg mx-auto text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Discover the finest craftsmanship in luxury watches.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Button className="mt-6 px-6 py-3 text-lg bg-yellow-400 text-black hover:bg-yellow-300 transition-all">
            Shop Now
          </Button>
        </motion.div>
      </motion.div>

      {/* Floating Golden and Silver Glow */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute w-24 h-24 bg-yellow-300 opacity-20 rounded-full top-10 left-10 animate-glow"></div>
        <div className="absolute w-16 h-16 bg-gray-300 opacity-20 rounded-full bottom-10 right-10 animate-glow"></div>
      </motion.div>

      <style jsx>{`
        @keyframes glow {
          0% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1);
          }
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
        }

        .animate-glow {
          animation: glow 6s infinite ease-in-out alternate;
        }
      `}</style>
    </section>
  );
}
