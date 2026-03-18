"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import GiftBoxAnimation from "./GiftBoxAnimation";
import GlowButton from "@/components/ui/GlowButton";

export default function ResultModal({ isOpen, amount, onClose }) {
  useEffect(() => {
    if (isOpen) {
      // 🎵 Play Celebration Sound
      const audio = new Audio("/sounds/win.mp3");
      audio.volume = 0.5;
      audio.play().catch(err => console.log("Audio play blocked:", err));

      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
      const randomInRange = (min, max) => Math.random() * (max - min) + min;

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        const particleCount = 50 * (timeLeft / duration);
        confetti({ 
          ...defaults, 
          particleCount, 
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ['#D4AF37', '#F3D060', '#10B981', '#ffffff']
        });
        confetti({ 
          ...defaults, 
          particleCount, 
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ['#D4AF37', '#F3D060', '#10B981', '#ffffff']
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-auto">
          {/* Backdrop with extreme blur and deep vignette */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
            onClick={onClose}
          />

          {/* Celebration Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 120 }}
            className="relative z-10 w-full max-w-md px-8 text-center"
          >
            {/* Heading Section */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="mb-4"
            >
              <h2 className="text-xl md:text-3xl font-black text-[#D4AF37] glow-title-3d animate-glow-pulse-heavy leading-tight">
                ঈদ মোবারক!
              </h2>
              <p className="text-base md:text-lg text-[#10B981] font-black mt-4 uppercase tracking-[0.3em] shimmer-text drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                 তুমি সালামি পেয়েছো
              </p>
            </motion.div>

            {/* 3D Gift Box Centerpiece */}
            <div className="my-6 scale-[1.0] relative">
               <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 bg-[#D4AF37]/5 blur-[80px] rounded-full pointer-events-none" />
               <GiftBoxAnimation isOpen={isOpen} />
            </div>

            {/* Amount Reveal */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 150 }}
              className="mt-6"
            >
              <div className="inline-block relative">
                 <div className="absolute inset-0 bg-[#D4AF37]/20 blur-[60px] animate-pulse" />
                 <div className="relative border-y-[2px] border-[#D4AF37]/40 py-3 px-8">
                    <span className="text-2xl md:text-[3.5rem] font-black text-white drop-shadow-[0_0_60px_rgba(212,175,55,1)] leading-none">
                      <span className="text-[#D4AF37] text-xl md:text-2xl mr-2">৳</span>{amount}
                    </span>
                 </div>
              </div>
            </motion.div>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="mt-6"
            >
              <GlowButton 
                onClick={onClose} 
                className="w-full max-w-sm mx-auto text-xl py-3 rounded-3xl"
              >
                ধন্যবাদ
              </GlowButton>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

