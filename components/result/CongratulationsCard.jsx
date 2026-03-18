"use client";
import { motion } from "framer-motion";
import { BANGLA_MESSAGES } from "@/lib/constants";

export default function CongratulationsCard({ amount }) {
  return (
    <div className="text-center space-y-4">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-black text-eid-primary uppercase tracking-widest"
      >
        {BANGLA_MESSAGES.CONGRATS}
      </motion.h2>
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
        className="inline-block bg-white/10 px-8 py-4 rounded-2xl border border-eid-primary/30"
      >
        <span className="text-5xl font-black text-white">
          {amount}৳
        </span>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl text-eid-accent font-medium"
      >
        {BANGLA_MESSAGES.YOU_WON.replace("$amount", amount.toString())}
      </motion.p>
    </div>
  );
}
