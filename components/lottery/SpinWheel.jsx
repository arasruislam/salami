"use client";
import { motion } from "framer-motion";
import { WHEEL_VALUES } from "@/lib/constants";

export default function SpinWheel({ rotation = 0, spinning = false, onAnimationComplete }) {
  const segments = WHEEL_VALUES.length;
  const anglePerSegment = 360 / segments;
  
  // 🎯 Correct landed index calculation (segment under the top pointer)
  const landedIndex = (segments + (Math.floor(-rotation / anglePerSegment) % segments)) % segments;
  // Only show highlight if we have rotated and are NOT currently spinning
  const isLanded = !spinning && rotation !== 0;

  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] mx-auto transition-all duration-700">
      
      {/* ───── POLISHED 3D OUTER RIM ───── */}
      <div className="absolute inset-[-24px] rounded-full border-[1px] border-[#D4AF37]/50 shadow-[0_0_100px_rgba(0,0,0,0.9),inset_0_0_20px_rgba(0,0,0,0.8)] z-0 group">
        {/* Polished Gold Main Body */}
        <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-[#F3D060] via-[#D4AF37] to-[#8B712A] shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.4)]" />
        
        {/* Deep Dark Inset */}
        <div className="absolute inset-[14px] rounded-full bg-[#010807] shadow-[inset_0_10px_30px_rgba(0,0,0,1)]" />
        
        {/* Decorative Gold Filigree Line */}
        <div className="absolute inset-[10px] rounded-full border-[1px] border-[#F3D060]/40" />
        
        {/* Specular Highlight */}
        <div className="absolute top-[5%] left-[20%] w-[15%] h-[5%] bg-white/20 blur-[10px] rotate-[-45deg] rounded-full pointer-events-none" />
        
        {/* Delicate Studs on the rim */}
        {[...Array(24)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-1/2 left-1/2 w-[2px] h-full pointer-events-none"
            style={{ transform: `translate(-50%, -50%) rotate(${i * 15}deg)` }}
          >
            <div className="w-1.5 h-1.5 bg-[#F3D060] rounded-full shadow-[0_0_10px_#D4AF37] opacity-80 mx-auto" style={{ marginTop: '-3px' }} />
          </div>
        ))}
      </div>

      {/* ───── PREMIUM POINTER ───── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-14 z-50">
        <motion.div
           animate={{ 
             y: rotation === 0 ? [0, -5, 0] : 0,
             rotate: rotation !== 0 ? [0, -12, 6, -3, 0] : 0
           }}
           transition={{ 
             y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
             rotate: { duration: 0.4, ease: "backOut" }
           }}
           className="filter drop-shadow-[0_8px_15px_rgba(0,0,0,0.6)]"
        >
          <svg width="60" height="60" viewBox="0 0 60 60">
            <path d="M30 60L52 18H8L30 60Z" fill="url(#pointer-grad)" stroke="#8a6d1d" strokeWidth="1.5" />
            <defs>
              <linearGradient id="pointer-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFF4CC" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
            <path d="M30 52L44 18H16L30 52Z" fill="white" fillOpacity="0.2" />
          </svg>
        </motion.div>
      </div>

      {/* ───── SVG WHEEL ───── */}
      <motion.div
        className="w-full h-full relative z-10"
        animate={{ rotate: rotation }}
        transition={{
          duration: 7,
          ease: [0.15, 0, 0.05, 1], 
        }}
        onAnimationComplete={onAnimationComplete}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_20px_60px_rgba(0,0,0,1)]">
          <defs>
            <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>
            {WHEEL_VALUES.map((_, i) => (
              <linearGradient key={`seg-grad-${i}`} id={`seg-grad-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={i % 2 === 0 ? "#011B15" : "#010807"} />
                <stop offset="100%" stopColor={i % 2 === 0 ? "#010F0C" : "#000000"} />
              </linearGradient>
            ))}
          </defs>

          {WHEEL_VALUES.map((val, i) => {
            const startAngle = i * anglePerSegment - 90;
            const endAngle = (i + 1) * anglePerSegment - 90;
            const x1 = 50 + 50 * Math.cos((startAngle * Math.PI) / 180);
            const y1 = 50 + 50 * Math.sin((startAngle * Math.PI) / 180);
            const x2 = 50 + 50 * Math.cos((endAngle * Math.PI) / 180);
            const y2 = 50 + 50 * Math.sin((endAngle * Math.PI) / 180);

            const pathData = `M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`;
            const isActive = isLanded && i === landedIndex;

            return (
              <g key={i}>
                <path 
                  d={pathData} 
                  fill={`url(#seg-grad-${i})`} 
                  stroke="rgba(212,175,55,0.2)" 
                  strokeWidth="0.2"
                />
                
                {/* Visual Highlight on landed segment — Subtle Golden Pulse */}
                {isActive && (
                  <motion.path 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    d={pathData} 
                    fill="#D4AF37" 
                  />
                )}
                
                <text
                  x="50"
                  y="12"
                  transform={`rotate(${i * anglePerSegment + anglePerSegment / 2}, 50, 50)`}
                  fill={isActive ? "#FFFBF0" : "#D4AF37"}
                  fontSize="7.5"
                  fontWeight="900"
                  textAnchor="middle"
                  className="font-sans tracking-tight pointer-events-none transition-all duration-500"
                  style={{ filter: isActive ? 'drop-shadow(0 0 8px #D4AF37)' : 'none' }}
                >
                  {val}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <div className="relative w-16 h-16 flex items-center justify-center">
             <div className="absolute inset-0 bg-[#D4AF37] opacity-20 blur-xl animate-pulse" />
             
             {/* Rub el Hizb (8-pointed star as two overlapping squares) */}
             <div className="absolute inset-[15%] bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)]" />
             <div className="absolute inset-[15%] bg-[#D4AF37] rotate-45 shadow-[0_0_20px_rgba(212,175,55,0.4)]" />
             
             <div className="absolute inset-[32%] bg-[#010807] border border-[#D4AF37]/50 rounded-full flex items-center justify-center z-10 shadow-inner">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
             </div>
          </div>
        </div>
      </motion.div>
      
    </div>
  );
}

