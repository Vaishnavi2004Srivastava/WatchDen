// export default function Footer() {
//     return (
//       <footer className="py-6 bg-gray-100 text-gray-800 text-center border-t border-gray-300">
//         <p>&copy; 2025 Watch Company. All Rights Reserved.</p>
//       </footer>
//     );
//   }
"use client"; // ⬅️ Mark as a Client Component

export default function Footer() {
  return (
    <footer className="relative py-6 text-center border-t border-[#A38F2D] text-[#001F3F] overflow-hidden">
      {/* Darker Golden Shimmer Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#5E4B18] via-[#7D6621] to-[#5E4B18] animate-shimmer"></div>

      {/* Footer Content */}
      <div className="relative z-10">
        <p className="font-medium text-[#D4AF37]">&copy; 2025 WatchDen. All Rights Reserved.</p>
      </div>

      {/* Shimmer Animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background-size: 400% 100%;
          animation: shimmer 5s linear infinite;
          opacity: 0.8;
        }
      `}</style>
    </footer>
  );
}
