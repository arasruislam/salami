"use client";
import { motion } from "framer-motion";

export default function ConfettiBurst({ isActive }) {
  if (!isActive) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            scale: 0, 
            x: "50%", 
            y: "50%" 
          }}
          animate={{ 
            opacity: [0, 1, 1, 0], 
            scale: [0, 1.5, 1.5, 0.5],
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            rotate: Math.random() * 720
          }}
          transition={{ 
            duration: 3, 
            ease: [0.22, 1, 0.36, 1],
            delay: Math.random() * 0.8 
          }}
          className="absolute flex items-center justify-center"
        >
          {i % 2 === 0 ? (
            /* Crescent Shape */
            <div className="w-4 h-4 text-[#D4AF37] opacity-80 drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10c1.29,0,2.52-0.25,3.65-0.7c-3.15-1.42-5.35-4.59-5.35-8.3s2.2-6.88,5.35-8.3C14.52,2.25,13.29,2,12,2z" />
              </svg>
            </div>
          ) : (
            /* Star Shape */
            <div className="w-3 h-3 text-white opacity-90 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
