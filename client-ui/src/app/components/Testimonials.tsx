
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "James Carter",
    role: "Luxury Watch Collector",
    image: "/avatars/james.jpg", // Replace with actual images
    feedback:
      "Absolutely stunning craftsmanship! The attention to detail in every timepiece is truly remarkable.",
  },
  {
    name: "Sophia Williams",
    role: "Fashion Influencer",
    image: "/avatars/sophia.jpg",
    feedback:
      "A perfect blend of elegance and durability. I’ve never owned a watch that feels this premium!",
  },
  {
    name: "Daniel Brooks",
    role: "CEO, Elite Timepieces",
    image: "/avatars/daniel.jpg",
    feedback:
      "Each watch tells a story of precision and luxury. Highly recommend for anyone who appreciates fine horology.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 px-6 flex justify-center items-center text-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#020c1b]"></div>

      {/* Animated Content */}
      <motion.div
        className="relative z-10 max-w-4xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-8"
          variants={fadeIn}
        >
          What Our Clients Say
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="bg-transparent border border-yellow-500 shadow-lg shadow-yellow-500/50 text-white backdrop-blur-lg hover:shadow-yellow-300/60 transition-all duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Avatar className="w-16 h-16 border-2 border-yellow-500">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-lg font-bold text-yellow-400">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 italic">"{testimonial.feedback}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// Framer Motion Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};
