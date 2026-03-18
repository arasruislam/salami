"use client";
import { motion } from "framer-motion";

export default function GiftBoxAnimation({ isOpen }) {
  return (
    <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto flex items-center justify-center">
      {/* 3D Box Container */}
      <motion.div
        initial={false}
        animate={isOpen ? { rotateY: 180, scale: 1.2 } : { rotateY: 0, scale: 1 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
        className="relative w-20 h-20 md:w-28 md:h-28 preserve-3d"
      >
        {/* Box Lid */}
        <motion.div
          animate={isOpen ? { y: -50, rotateX: -110, opacity: 0 } : { y: 0, rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-x-0 -top-4 h-8 bg-[#D4AF37] border-2 border-[#010B09] rounded-t-lg z-20 shadow-[0_-5px_15px_rgba(212,175,55,0.4)]"
        />
        
        {/* Box Base (Emerald) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#021510] to-[#0b4d3c] border-2 border-[#D4AF37] rounded-lg shadow-xl overflow-hidden">
          {/* Ribbon */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-4 bg-[#D4AF37]" />
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-4 bg-[#D4AF37]" />
        </div>

        {/* Interior Glow (when opening) */}
        <motion.div
          animate={isOpen ? { opacity: 1, scale: 2.5 } : { opacity: 0, scale: 1 }}
          className="absolute inset-0 bg-gradient-radial from-[#D4AF37]/40 to-transparent blur-3xl rounded-full z-10"
        />
      </motion.div>

      {/* Gift Content Pulse */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          className="absolute z-30"
        >
          <div className="w-16 h-16 bg-white/10 backdrop-blur-3xl rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.3)]">
            <span className="text-2xl">🎁</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
