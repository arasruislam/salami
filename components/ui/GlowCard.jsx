"use client";
import React from "react";

export default function GlowCard({ children, className = "" }) {
  return (
    <div className={`premium-glass p-8 rounded-[2.5rem] relative overflow-hidden transition-all duration-500 premium-glass-hover ${className}`}>
      {/* Subtle top light source */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      
      {/* Decorative inner glow corners */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#D4AF37]/10 blur-[50px] rounded-full -translate-x-16 -translate-y-16" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#10B981]/5 blur-[50px] rounded-full translate-x-16 translate-y-16" />
      
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}

