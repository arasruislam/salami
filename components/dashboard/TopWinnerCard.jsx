"use client";
import { motion } from "framer-motion";
import { FaCrown, FaTrophy, FaMedal } from "react-icons/fa";

export default function TopWinnerCard({ winner, rank }) {
  const isFirst = rank === 1;

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: rank * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`relative flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl border transition-all duration-500 group overflow-hidden ${
        isFirst 
          ? "bg-gradient-to-r from-[#D4AF37]/25 via-[#064E3B]/20 to-transparent border-[#D4AF37] shadow-[0_15px_40px_rgba(212,175,55,0.2)]" 
          : "bg-[#011B15]/40 border-white/5 hover:border-white/10"
      }`}
    >
      {/* Radiant Shimmer for 1st Place */}
      {isFirst && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-[200%] -translate-x-full animate-shimmer pointer-events-none" />
      )}
      {/* Rank Badge */}
      <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex-shrink-0 ${
        isFirst ? "bg-[#D4AF37] border-[#FFF4CC]" : "bg-white/5 border-white/10"
      }`}>
        {isFirst ? (
          <FaCrown className="text-white text-lg sm:text-xl drop-shadow-md" />
        ) : (
          <span className={`font-black text-sm sm:text-base ${rank === 2 ? "text-slate-300" : "text-amber-700"}`}>
            #{rank}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className={`font-black text-[0.85rem] sm:text-base truncate ${isFirst ? "text-white" : "text-white/80"}`}>
          {winner.name}
        </h4>
        <p className="text-[0.55rem] sm:text-[0.65rem] text-white/40 uppercase tracking-[0.1em] sm:tracking-widest font-bold">
          Top Winner
        </p>
      </div>

      {/* Amount Display */}
      <div className="text-right">
        <div className={`text-xl sm:text-2xl font-black tabular-nums tracking-tighter ${isFirst ? "text-[#D4AF37]" : "text-white/90"}`}>
          ৳{winner.amount}
        </div>
        <div className="text-[0.55rem] sm:text-[0.6rem] text-white/30 font-bold uppercase tracking-tighter">
          {new Date(winner.createdAt).toLocaleDateString()}
        </div>
      </div>

      {isFirst && (
        <div className="absolute inset-0 rounded-2xl border-2 border-[#D4AF37] animate-pulse-subtle pointer-events-none" />
      )}
    </motion.div>
  );
}

