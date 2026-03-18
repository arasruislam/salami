"use client";
import { motion } from "framer-motion";
import { BANGLA_MESSAGES } from "@/lib/constants";
import { FaSpinner } from "react-icons/fa";

export default function SpinButton({ onClick, disabled, loading }) {
  return (
    <motion.button
      whileHover={!disabled ? { y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={!disabled ? onClick : null}
      disabled={disabled}
      className={`relative h-16 px-12 rounded-xl font-black text-base whitespace-nowrap transition-all duration-500 overflow-hidden ${
        disabled 
          ? "bg-[#011B15] text-white/10 border border-white/5 cursor-not-allowed" 
          : "bg-gradient-to-b from-[#FFF4CC] via-[#D4AF37] to-[#B08D26] text-black shadow-[0_12px_40px_rgba(212,175,55,0.4)] hover:shadow-[0_20px_60px_rgba(212,175,55,0.6)] border-t border-white/40 active:translate-y-1"
      }`}
    >
      <span className="relative z-10 flex items-center justify-center gap-3">
        {loading ? (
          <>
            <FaSpinner className="animate-spin text-xl" />
            <span className="tracking-[0.2em] uppercase text-[0.65rem] font-black">{BANGLA_MESSAGES.BUTTON_SPINNING}</span>
          </>
        ) : (
          <span className="tracking-[0.3em] uppercase">{BANGLA_MESSAGES.BUTTON_SPIN}</span>
        )}
      </span>
    </motion.button>
  );
}

