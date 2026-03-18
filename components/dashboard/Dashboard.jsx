"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DashboardHeader from "./DashboardHeader";
import WinnerCard from "./WinnerCard";
import TopWinnerCard from "./TopWinnerCard";
import EmptyState from "./EmptyState";
import GlowCard from "../ui/GlowCard";
import { FaCrown, FaHistory, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BANGLA_MESSAGES } from "@/lib/constants";

const PAGE_SIZE = 5;

export default function Dashboard({ refreshTrigger }) {
  const [topWinners, setTopWinners] = useState([]);
  const [recentWinners, setRecentWinners] = useState([]);
  const [totalRecentCount, setTotalRecentCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);

  const fetchHistory = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/history?page=${page}&limit=${PAGE_SIZE}`);
      const data = await res.json();
      
      if (data) {
        setTopWinners(data.topWinners || []);
        setRecentWinners(data.recentWinners || []);
        setTotalRecentCount(data.totalRecentCount || 0);
        setTotalAmount(data.totalAmount || 0);
      }
    } catch (error) {
      console.error("Failed to fetch history:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [refreshTrigger, page]); // Refetch when refresh or page changes

  const totalPages = Math.max(1, Math.ceil(totalRecentCount / PAGE_SIZE));

  // Reset page when refresh happens (new win)
  useEffect(() => {
    if (refreshTrigger > 0) setPage(1);
  }, [refreshTrigger]);

  return (
    <div className="w-full h-[450px] flex flex-col p-5 sm:p-8 relative glass-panel rounded-[2rem] border-[#D4AF37]/30 shadow-[0_30px_100px_rgba(0,0,0,0.8)] mb-8 lg:mb-0">
      {/* Subtle recursive pattern corner */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-[#D4AF37]/10 opacity-40 pointer-events-none mask-islamic" />
      
      <div className="flex-shrink-0 border-b border-white/5 pb-4 mb-4 sm:mb-6">
        <DashboardHeader count={topWinners.length + totalRecentCount} totalAmount={totalAmount} />
      </div>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col relative mt-2">
        {loading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 z-20 bg-[#010B09]/40 backdrop-blur-[2px] rounded-[2rem]">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16">
              <div className="absolute inset-0 border-2 border-[#D4AF37]/10 rounded-full" />
              <div className="absolute inset-0 border-t-2 border-[#D4AF37] rounded-full animate-spin shadow-[0_0_30px_rgba(212,175,55,0.4)]" />
            </div>
            <p className="text-[#D4AF37]/60 font-black animate-pulse uppercase tracking-[0.4em] text-[0.55rem] sm:text-[0.6rem] shimmer-text">
              তথ্য যাচাই করা হচ্ছে...
            </p>
          </div>
        ) : null}

        <div className={`flex-1 space-y-8 sm:space-y-10 transition-all duration-500 ${loading ? "opacity-30 grayscale blur-[1px] pointer-events-none" : "opacity-100"}`}>
          {(topWinners.length > 0 || recentWinners.length > 0) ? (
            <>
              {/* 👑 TOP WINNERS SECTION */}
              {topWinners.length > 0 && (
                <section className="space-y-5 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4 text-[#D4AF37]">
                    <div className="w-6 sm:w-8 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/40" />
                    <FaCrown className="text-lg sm:text-xl drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
                    <h3 className="text-[0.6rem] sm:text-[0.7rem] font-black uppercase tracking-[0.2em] sm:tracking-[0.35em] whitespace-nowrap">{BANGLA_MESSAGES.TOP_WINNERS}</h3>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
                  </div>
                  <div className="grid gap-3 sm:gap-4">
                    {topWinners.map((winner, idx) => (
                      <TopWinnerCard key={`top-${winner._id}`} winner={winner} rank={idx + 1} />
                    ))}
                  </div>
                </section>
              )}

              {/* 🕒 RECENT HISTORY SECTION */}
              <section className="space-y-5 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4 text-white/20">
                  <div className="w-6 sm:w-8 h-[1px] bg-gradient-to-r from-transparent to-white/10" />
                  <FaHistory className="text-base sm:text-lg" />
                  <h3 className="text-[0.6rem] sm:text-[0.7rem] font-black uppercase tracking-[0.2em] sm:tracking-[0.35em] whitespace-nowrap">{BANGLA_MESSAGES.RECENT_WINNERS}</h3>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
                </div>

                {recentWinners.length > 0 ? (
                  <div className="space-y-4 sm:space-y-5">
                    <AnimatePresence mode="wait">
                      {recentWinners.map((winner, idx) => (
                        <WinnerCard key={String(winner._id)} winner={winner} />
                      ))}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div className="text-center py-10 sm:py-14 border border-dashed border-white/5 rounded-[2rem] sm:rounded-[2.5rem] bg-white/[0.01]">
                    <p className="text-white/10 text-[0.6rem] sm:text-[0.65rem] font-black uppercase tracking-[0.2em] px-6 leading-relaxed italic">বিজয়ীদের তালিকা শীঘ্রই হালনাগাদ করা হবে...</p>
                  </div>
                )}

                {/* Bottom Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-10 pt-6 border-t border-white/5">
                    <button 
                      onClick={() => setPage(p => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="flex items-center gap-2 p-3 sm:p-4 px-5 sm:px-8 rounded-2xl bg-[#D4AF37]/5 border border-[#D4AF37]/10 text-[#D4AF37]/40 disabled:opacity-5 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 transition-all duration-500 font-black text-[0.6rem] uppercase tracking-widest group"
                    >
                      <FaChevronLeft size={8} className="group-hover:-translate-x-1 transition-transform" /> 
                      <span className="hidden xs:inline">Prev</span>
                    </button>
                    
                    <div className="flex items-center gap-2 sm:gap-3.5">
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setPage(i + 1)}
                          className={`transition-all duration-700 rounded-full h-1 ${
                            page === i + 1 ? "w-8 sm:w-10 bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.7)]" : "w-1 bg-white/10 hover:bg-white/30"
                          }`}
                        />
                      ))}
                    </div>

                    <button 
                      onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages}
                      className="flex items-center gap-2 p-3 sm:p-4 px-5 sm:px-8 rounded-2xl bg-[#D4AF37]/5 border border-[#D4AF37]/10 text-[#D4AF37]/40 disabled:opacity-5 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 transition-all duration-500 font-black text-[0.6rem] uppercase tracking-widest group"
                    >
                      <span className="hidden xs:inline">Next</span> 
                      <FaChevronRight size={8} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                )}
              </section>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <EmptyState />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
