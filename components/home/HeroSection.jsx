"use client";
import { motion } from "framer-motion";
import { BANGLA_MESSAGES } from "@/lib/constants";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 py-4 md:py-10 px-4 relative z-10"
    >
      <motion.div 
        variants={itemVariants} 
        className="relative animate-float-slow"
      >
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#D4AF37] glow-title-premium leading-[1.2] py-4 tracking-tight z-10">
          {BANGLA_MESSAGES.TITLE}
        </h1>
        {/* Subtle sharp underline */}
        <div className="mx-auto w-24 sm:w-32 h-[1.5px] sm:h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-2 opacity-40 shadow-[0_0_10px_#D4AF37]" />
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col items-center gap-6 sm:gap-8 max-w-2xl">
        <div className="relative">
          <p className="text-[0.65rem] sm:text-sm md:text-base text-[#34D399] font-black tracking-[0.2em] sm:tracking-[0.4em] uppercase glass-pill px-6 sm:px-10 py-2 sm:py-3 rounded-full border border-[#D4AF37]/30 shadow-[0_0_30px_rgba(52,211,153,0.1)]">
            {BANGLA_MESSAGES.TAGLINE}
          </p>
          {/* Accent dots - Hidden on very small screens to avoid crowding */}
          <div className="hidden xs:block absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37] animate-pulse" />
          <div className="hidden xs:block absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37] animate-pulse" />
        </div>

        <motion.p 
          variants={itemVariants}
          className="text-[0.55rem] sm:text-[0.65rem] md:text-xs text-white/50 font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase leading-relaxed max-w-[280px] sm:max-w-md mx-auto"
        >
          Ralive ভাইয়ের পক্ষ থেকে সবার জন্য ঈদের সালামি <br className="hidden sm:block" /> 
          <span className="text-[#D4AF37] brightness-125">— নির্মাণে Sakib & Meraj ভাই</span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

