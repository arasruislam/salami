"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HangingJewel = ({ x, side }) => (
  <motion.div
    initial={{ y: -150, opacity: 0 }}
    animate={{ 
      y: 0, 
      opacity: 1,
      rotate: [0, side === 'left' ? 2 : -2, 0, side === 'left' ? -1 : 1, 0]
    }}
    transition={{ 
      y: { duration: 2.5, ease: "easeOut", delay: side === 'left' ? 0.3 : 0.6 },
      rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }}
    className="absolute top-0 z-30 pointer-events-none hidden lg:block"
    style={{ [side]: `${x}%`, transformOrigin: "top center" }}
  >
    {/* Rope / String */}
    <div className="w-[1px] h-40 md:h-64 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-[#D4AF37] mx-auto opacity-70" />
    
    {/* Jewel Stack - More 3D geometry */}
    <div className="flex flex-col items-center -mt-1 gap-1.5">
      <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45" />
      <div className="w-3 h-3 bg-[#D4AF37] rotate-45 shadow-[0_0_10px_#D4AF37]" />
      
      {/* Main Diamond jewel */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <div className="absolute inset-0 bg-[#D4AF37] rotate-45 shadow-[0_0_25px_rgba(212,175,55,0.6)]" />
        <div className="absolute inset-[15%] bg-[#FFF4CC] rotate-45 opacity-60" />
        <div className="absolute inset-[30%] bg-[#012621] rotate-45" />
      </div>

      <div className="w-4 h-4 bg-[#D4AF37] rotate-45 shadow-[0_0_15px_#D4AF37]" />
      <div className="w-2 h-2 bg-[#D4AF37] rotate-45 shadow-[0_0_8px_#D4AF37]" />
    </div>
  </motion.div>
);

const DecorativeMandala = ({ position, scale = "scale-100" }) => (
  <div className={`absolute ${position} opacity-20 pointer-events-none z-10 ${scale}`}>
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]"
    >
      <svg width="100%" height="100%" viewBox="0 0 100 100">
         <circle cx="50" cy="50" r="48" fill="none" stroke="#D4AF37" strokeWidth="0.1" strokeDasharray="1 1" />
         <circle cx="50" cy="50" r="40" fill="none" stroke="#D4AF37" strokeWidth="0.05" />
         {[...Array(16)].map((_, i) => (
           <g key={i} transform={`rotate(${i * 22.5}, 50, 50)`}>
             <path d="M50 8 Q55 25 50 42 Q45 25 50 8" fill="none" stroke="#D4AF37" strokeWidth="0.2" opacity="0.6" />
             <path d="M50 12 L52 20 L50 28 L48 20 Z" fill="#D4AF37" opacity="0.15" />
             <circle cx="50" cy="12" r="1" fill="#D4AF37" opacity="0.4" />
           </g>
         ))}
      </svg>
    </motion.div>
  </div>
);

const OrnateMoon = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
    animate={{ 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      y: [0, -10, 0]
    }}
    transition={{ 
      duration: 2.5, 
      ease: "easeOut",
      y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
    }}
    className="absolute top-10 left-8 sm:top-20 sm:left-40 z-20 pointer-events-none"
  >
    <div className="relative group">
      {/* Ethereal Outer Glow */}
      <div className="absolute inset-[-40px] bg-[#D4AF37]/10 blur-[60px] rounded-full" />
      
      <svg width="100" height="100" className="sm:w-[220px] sm:h-[220px] drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="moon-pattern-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#F3D060" />
            <stop offset="70%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8B712A" />
          </linearGradient>
          
          <mask id="moon-mask">
             <path d="M50 10A40 40 0 1 0 50 90A32 32 0 1 1 50 10Z" fill="white" />
          </mask>
        </defs>

        {/* Main Moon Body */}
        <path
          d="M50 10A40 40 0 1 0 50 90A32 32 0 1 1 50 10Z"
          fill="url(#moon-pattern-grad)"
        />

        {/* Internal Engraved Pattern */}
        <g mask="url(#moon-mask)" opacity="0.3">
           {[...Array(12)].map((_, i) => (
             <circle 
               key={i} 
               cx={20 + (i % 3) * 30} 
               cy={10 + i * 10} 
               r="8" 
               fill="none" 
               stroke="white" 
               strokeWidth="0.5" 
               opacity="0.5" 
             />
           ))}
           <path d="M0 0 L100 100 M0 20 L80 100 M20 0 L100 80" stroke="white" strokeWidth="0.2" />
        </g>
        
        {/* Sharp inner rim highlight */}
        <path
          d="M50 12A38 38 0 0 0 50 88A33 33 0 1 1 50 12Z"
          fill="white"
          opacity="0.3"
        />
      </svg>
    </div>
  </motion.div>
);

const CinematicMosque = () => (
  <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-0 flex justify-center h-full overflow-hidden">
    <motion.svg
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      viewBox="0 0 1440 600"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax slice"
      className="w-full opacity-[0.12] sm:opacity-[0.15] filter blur-[0.5px]"
    >
      <defs>
        <linearGradient id="mosque-depth" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#023D33" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Background Layer */}
      <g fill="url(#mosque-depth)" opacity="0.3">
        <rect x="200" y="300" width="10" height="300" rx="2" />
        <ellipse cx="205" cy="300" rx="8" ry="15" />
        <rect x="1230" y="300" width="10" height="300" rx="2" />
        <ellipse cx="1235" cy="300" rx="8" ry="15" />
        <ellipse cx="720" cy="350" rx="150" ry="100" />
      </g>

      {/* Main Layer */}
      <g fill="url(#mosque-depth)">
        <rect x="100" y="200" width="15" height="400" rx="2" />
        <ellipse cx="107.5" cy="200" rx="10" ry="18" />
        <rect x="1325" y="200" width="15" height="400" rx="2" />
        <ellipse cx="1332.5" cy="200" rx="10" ry="18" />
        
        <ellipse cx="720" cy="220" rx="200" ry="140" />
        <path d="M720 80 L720 120" stroke="#34D399" strokeWidth="2" strokeOpacity="0.4" />
        <rect x="520" y="220" width="400" height="380" />
        
        <ellipse cx="400" cy="300" rx="100" ry="80" />
        <ellipse cx="1040" cy="300" rx="100" ry="80" />
      </g>
    </motion.svg>
  </div>
);

export default function BokehBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setParticles(
      Array.from({ length: isMobile ? 12 : 25 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        duration: Math.random() * 30 + 30,
        delay: Math.random() * -30,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
      {/* ───── BASE OVERLAYS ───── */}
      {/* Soft vignette and slight dim to make image stay in background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-0" />

      {/* ───── GEOMETRIC PATTERN TEXTURE ───── */}
      <div className="absolute inset-0 pattern-eid-geometric opacity-20 pointer-events-none" />
      
      {/* ───── LUXURY MANDALA MARGINS ───── */}
      <DecorativeMandala position="-top-[150px] -left-[150px]" scale="scale-50 sm:scale-100" />
      <DecorativeMandala position="-bottom-[150px] -right-[150px]" scale="scale-50 sm:scale-100" />
      
      {/* 🌙 Ornate Moon - Subtle Floating */}
      <div className="opacity-40 hover:opacity-100 transition-opacity duration-1000">
        <OrnateMoon />
      </div>

      {/* 💎 Hanging Jewels - Subtle Floating */}
      <div className="opacity-40">
        <HangingJewel x={12} side="left" />
        <HangingJewel x={15} side="right" />
      </div>

      {/* 🕌 Cinematic Mosque - Soft Silhouette */}
      <div className="opacity-30">
        <CinematicMosque />
      </div>

      {/* ✨ Subtle Floating Gold Dust */}
      {particles.map((p) => (
        <motion.div
   key={p.id}
          animate={{
            y: [0, -150, 0],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
          className="absolute rounded-full bg-[#D4AF37] blur-[0.2px]"
          style={{ 
            left: `${p.x}%`, 
            top: `${p.y}%`, 
            width: p.size, 
            height: p.size,
          }}
        />
      ))}

      {/* ───── PREMIUM VIGNETTE ───── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_black_100%)] opacity-60" />
    </div>
  );
}

