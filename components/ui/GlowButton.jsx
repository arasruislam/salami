"use client";
import { motion } from "framer-motion";

export default function GlowButton({ 
  children, 
  onClick, 
  disabled, 
  className = "", 
  variant = "primary" 
}) {
  const variants = {
    primary: "bg-gradient-to-b from-[#F3D060] to-[#D4AF37] text-[#010B09] shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.5)]",
    mint: "bg-gradient-to-b from-[#10B981] to-[#059669] text-[#010B09] shadow-[0_4px_15px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_25px_rgba(16,185,129,0.5)]",
    ghost: "border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`relative px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group overflow-hidden ${variants[variant]} ${className}`}
    >
      {/* Premium Shimmer Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-[200%] -translate-x-full group-hover:animate-shimmer pointer-events-none" />
      
      {/* Subtle Glow Ring */}
      <div className="absolute inset-0 rounded-full border border-white/20 opacity-0 group-hover:opacity-40 transition-opacity" />

      <span className="relative z-10 shrink-0 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}

