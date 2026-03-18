"use client";
import { BANGLA_MESSAGES } from "@/lib/constants";
import { HiLightningBolt } from "react-icons/hi";
import { motion } from "framer-motion";

export default function DashboardHeader({ count, totalAmount }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
          <HiLightningBolt className="text-lg sm:text-xl" />
        </div>
        <div>
          <h2 className="text-sm sm:text-base font-black text-white tracking-[0.15em] sm:tracking-[0.2em] uppercase leading-none">
            সালামি বোর্ড
          </h2>
          <p className="text-[0.5rem] sm:text-[0.6rem] text-white/30 font-bold uppercase tracking-widest mt-1">
            Live Updates
          </p>
        </div>
      </div>
      
      {/* Total Salami Amount Badge */}
      <div className="text-right">
        <p className="text-[0.5rem] sm:text-[0.55rem] text-white/30 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-black mb-1">মোট সালামি</p>
        <motion.div
          key={totalAmount}
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-xl sm:text-2xl font-black text-[#D4AF37] tabular-nums tracking-tighter"
        >
          ৳{totalAmount}
        </motion.div>
      </div>
    </div>
  );
}
