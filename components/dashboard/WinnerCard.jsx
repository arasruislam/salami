"use client";
import { motion } from "framer-motion";
import { formatTime } from "@/lib/helpers";
import { FaUserCircle } from "react-icons/fa";

export default function WinnerCard({ winner }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-300 group"
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#064E3B]/20 border border-white/5 flex items-center justify-center text-[#34D399]/60 transition-colors flex-shrink-0">
        <FaUserCircle className="text-xl sm:text-2xl" />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-[0.8rem] sm:text-sm text-white/90 truncate transition-colors">
          {winner.name}
        </h4>
        <p className="text-[0.5rem] sm:text-[0.6rem] text-white/30 uppercase tracking-[0.1em] sm:tracking-widest font-black">
          {formatTime(winner.createdAt)}
        </p>
      </div>

      <div className="text-right">
        <div className="text-[0.9rem] sm:text-lg font-black text-white/90 transition-colors tabular-nums">
          <span className="text-[#D4AF37] text-[0.6rem] sm:text-xs mr-0.5 font-bold">৳</span>{winner.amount}
        </div>
      </div>
    </motion.div>
  );
}
