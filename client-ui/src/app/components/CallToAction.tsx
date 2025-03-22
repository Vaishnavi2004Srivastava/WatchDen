
// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

// export default function CallToAction() {
//   return (
//     <section className="relative py-16 px-6 text-white text-center overflow-hidden">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#020c1b]"></div>

//       {/* Animated Content */}
//       <motion.div
//         className="relative z-10 max-w-3xl mx-auto"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         <h2 className="text-4xl font-semibold tracking-wide">
//           Experience Timeless Luxury
//         </h2>
//         <p className="mt-4 text-lg text-gray-300">
//           Elevate your style with our meticulously crafted timepieces.
//         </p>
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
//         >
//           <Button className="mt-6 px-8 py-3 text-lg text-black bg-white hover:bg-gray-300">
//             Explore Now
//           </Button>
//         </motion.div>
//       </motion.div>

//       {/* Floating Background Elements */}
//       <motion.div
//         className="absolute top-10 left-10 w-24 h-24 bg-white bg-opacity-10 rounded-full"
//         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
//         transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-10 right-10 w-16 h-16 bg-white bg-opacity-10 rounded-full"
//         animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
//         transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//       />
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="relative py-20 px-6 text-white text-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001F3F] to-[#0A0A0A]"></div>

      {/* Animated Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-extrabold tracking-wide text-[#FFD700]">
          Experience Timeless Elegance
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Elevate your style with our meticulously crafted luxury timepieces.
        </p>

        {/* Animated Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <Button className="mt-6 px-10 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#FFD700] to-[#DAA520] rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition duration-300">
            Explore Collection
          </Button>
        </motion.div>
      </motion.div>

      {/* Floating Golden Glow Effects */}
      <motion.div
        className="absolute top-12 left-12 w-28 h-28 bg-[#FFD700] bg-opacity-20 rounded-full blur-2xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-12 right-12 w-20 h-20 bg-[#FFD700] bg-opacity-25 rounded-full blur-3xl"
        animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.6, 0.1] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
    </section>
  );
}
