// // export default function AboutSection() {
// //     return (
// //       <section className="py-12 bg-gray-200 px-6 text-center">
// //         <h2 className="text-3xl font-semibold">Crafted to Perfection</h2>
// //         <p className="mt-4 max-w-2xl mx-auto">
// //           Our watches are designed with precision, combining classic aesthetics with modern innovation.
// //         </p>
// //       </section>
// //     );
// //   }
//   "use client";

// import { motion } from "framer-motion";

// export default function AboutSection() {
//   return (
//     <section className="relative py-16 px-6 text-white text-center">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#020c1b]"></div>

//       {/* Content */}
//       <motion.div
//         className="relative z-10 max-w-3xl mx-auto"
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         <h2 className="text-4xl font-semibold tracking-wide">Crafted to Perfection</h2>
//         <motion.p
//           className="mt-4 text-lg leading-relaxed text-gray-300"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3, duration: 1 }}
//         >
//           Our watches are designed with precision, combining classic aesthetics with modern innovation.
//         </motion.p>
//       </motion.div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section className="relative py-24 px-6 flex justify-center items-center text-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#020c1b]"></div>

      {/* Animated Content */}
      <motion.div
        className="relative z-10 max-w-3xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Animated Card */}
        <motion.div variants={fadeIn}>
          <Card className="bg-transparent border border-yellow-500 shadow-lg shadow-yellow-500/50 text-white backdrop-blur-lg hover:shadow-yellow-300/60 transition-all duration-300">
            <CardHeader>
              <motion.h2
                className="text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"
                variants={fadeIn}
              >
                Crafted to Perfection
              </motion.h2>
            </CardHeader>
            <CardContent>
              <motion.p
                className="mt-4 text-lg leading-relaxed text-gray-300 font-light"
                variants={fadeIn}
              >
                Our watches are designed with precision, blending timeless elegance with cutting-edge craftsmanship.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Framer Motion Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};
