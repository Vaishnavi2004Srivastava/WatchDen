// "use client";

// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// const featuredWatches = [
//   { src: "/watch1.jpg", alt: "Luxury Watch 1" },
//   { src: "/watch2.jpg", alt: "Luxury Watch 2" },
//   { src: "/watch3.jpg", alt: "Luxury Watch 3" },
// ];

// export default function FeaturedSection() {
//   const text = "Experience timeless craftsmanship and elegance.";
//   const [displayText, setDisplayText] = useState("");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (index < text.length) {
//         setDisplayText((prev) => prev + text[index]);
//         setIndex((prev) => prev + 1);
//       } else {
//         setTimeout(() => {
//           setDisplayText(""); // Clear the text
//           setIndex(0); // Restart animation
//         }, 1000); // Pause for 1s before restarting
//       }
//     }, 80);

//     return () => clearInterval(interval);
//   }, [index]); // Depend on index to restart the effect

//   return (
//     <section className="py-16 px-6 relative text-white">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#020c1b]"></div>

//       {/* Content */}
//       <motion.div
//         className="relative z-10 text-center"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-4xl font-semibold">Our Featured Collection</h2>
//         <p className="mt-4 text-lg font-mono text-yellow-300">
//           {displayText}
//           <span className="animate-blink">|</span> {/* Blinking cursor */}
//         </p>
//       </motion.div>

//       {/* Watches Grid */}
//       <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//         {featuredWatches.map((watch, index) => (
//           <motion.div
//             key={index}
//             className="flex justify-center"
//             initial={{ opacity: 0, y: 50, scale: 0.9 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
//           >
//             <div className="relative group">
//               {/* Glowing Border Effect */}
//               <div className="absolute inset-0 rounded-xl border-glow"></div>

//               {/* Card */}
//               <Card className="overflow-hidden bg-white shadow-lg rounded-xl relative border-[4px] border-transparent group-hover:scale-105 transition-transform duration-300">
//                 <CardContent className="p-0 relative z-10">
//                   <motion.div
//                     initial={{ scale: 1 }}
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <Image
//                       src={watch.src}
//                       alt={watch.alt}
//                       width={400}
//                       height={300}
//                       className="w-full h-64 object-cover rounded-xl"
//                     />
//                   </motion.div>
//                 </CardContent>
//               </Card>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Styles for Animated Golden Glow & Cursor */}
//       <style jsx>{`
//         @keyframes glow {
//           0% { box-shadow: 0 0 10px rgba(255, 215, 0, 0.5); }
//           50% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.9); }
//           100% { box-shadow: 0 0 10px rgba(255, 215, 0, 0.5); }
//         }

//         .border-glow {
//           border: 4px solid transparent;
//           border-radius: 12px;
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(90deg, gold, orange, gold);
//           filter: blur(8px);
//           opacity: 0.7;
//           z-index: -1;
//           animation: glow 2s infinite ease-in-out;
//         }

//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }

//         .animate-blink {
//           display: inline-block;
//           width: 8px;
//           background: yellow;
//           height: 20px;
//           margin-left: 4px;
//           animation: blink 1s infinite;
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const featuredWatches = [
  { src: "/watch1.jpg", alt: "Luxury Watch 1" },
  { src: "/watch2.jpg", alt: "Luxury Watch 2" },
  { src: "/watch3.jpg", alt: "Luxury Watch 3" },
];

export default function FeaturedSection() {
  const text = "Experience timeless craftsmanship and elegance.";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayText(""); // Clear the text
        setIndex(0); // Restart animation
      }, 1000); // Pause for 1s before restarting

      return () => clearTimeout(resetTimeout);
    }
  }, [index, text]); // Include `text` to ensure proper updates

  return (
    <section className="py-16 px-6 relative text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#020c1b]"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-semibold">Our Featured Collection</h2>
        <p className="mt-4 text-lg font-mono text-yellow-300">
          {displayText}
          <span className="animate-blink">|</span> {/* Blinking cursor */}
        </p>
      </motion.div>

      {/* Watches Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {featuredWatches.map((watch, index) => (
          <motion.div
            key={index}
            className="flex justify-center"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative group">
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-xl border-glow"></div>

              {/* Card */}
              <Card className="overflow-hidden bg-white shadow-lg rounded-xl relative border-[4px] border-transparent group-hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0 relative z-10">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={watch.src}
                      alt={watch.alt}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Styles for Animated Golden Glow & Cursor */}
      <style jsx>{`
        @keyframes glow {
          0% { box-shadow: 0 0 10px rgba(255, 215, 0, 0.5); }
          50% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.9); }
          100% { box-shadow: 0 0 10px rgba(255, 215, 0, 0.5); }
        }

        .border-glow {
          border: 4px solid transparent;
          border-radius: 12px;
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, gold, orange, gold);
          filter: blur(8px);
          opacity: 0.7;
          z-index: -1;
          animation: glow 2s infinite ease-in-out;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .animate-blink {
          display: inline-block;
          width: 8px;
          background: yellow;
          height: 20px;
          margin-left: 4px;
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
}
