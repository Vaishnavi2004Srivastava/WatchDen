
"use client"; // Required for Framer Motion in Next.js

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 w-full bg-[#0a192f] shadow-lg z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <motion.h1
            className="text-2xl font-bold text-[#FFD700] cursor-pointer tracking-wide"
            whileHover={{ scale: 1.05 }}
          >
            WatchDen
          </motion.h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "Shop", "About", "Contact"].map((item, index) => (
            <Link key={index} href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
              <motion.span
                className="text-[#C0A040] hover:text-white transition-colors duration-300 text-lg"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.span>
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
