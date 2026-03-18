"use client";
import { BANGLA_MESSAGES } from "@/lib/constants";

export default function NameInputForm({ value, onChange, disabled, error }) {
  return (
    <div className="w-full relative">
      <div className="relative group">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder={BANGLA_MESSAGES.NAME_PLACEHOLDER}
          className={`w-full h-16 px-6 font-bold text-white bg-black/40 border-[1px] transition-all duration-300 outline-none rounded-xl placeholder:text-white/20 backdrop-blur-xl disabled:opacity-30 disabled:cursor-not-allowed ${
            error
              ? "border-red-500/50"
              : "border-white/10 hover:border-[#D4AF37]/40 focus:border-[#D4AF37] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
          }`}
        />
        
        {/* Accent line on focus */}
        <div className={`absolute left-0 bottom-0 h-[2px] bg-[#D4AF37] transition-all duration-500 rounded-full ${
          value ? "w-full opacity-40" : "w-0 opacity-0"
        }`} />
      </div>
      
      {error && (
        <p className="absolute -bottom-6 left-0 text-red-500 text-[0.6rem] font-black uppercase tracking-widest pl-2">
          {error}
        </p>
      )}
    </div>
  );
}

