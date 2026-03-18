"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/home/HeroSection";
import SpinSection from "@/components/home/SpinSection";
import Dashboard from "@/components/dashboard/Dashboard";
import ResultModal from "@/components/result/ResultModal";
import BokehBackground from "@/components/ui/BokehBackground";

export default function Home() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [result, setResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpinComplete = (data) => {
    setResult(data);
    setIsModalOpen(true);
    setIsSpinning(false);
    setTimeout(() => {
      setRefreshTrigger((prev) => prev + 1);
    }, 1000);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setResult(null);
  };

  return (
    <div className="min-h-full w-full flex flex-col relative overflow-x-hidden selection:bg-[#D4AF37]/30">
      {/* Eid Vibe Background */}
      <BokehBackground />

      {/* Spin Hype Dim */}
      <motion.div 
        animate={{ opacity: isSpinning ? 0.7 : 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-[#010B09] z-[1] pointer-events-none"
      />

      {/* ───── Page Content Container ───── */}
      <div className="relative z-10 flex flex-col w-full max-w-[1600px] mx-auto px-4 md:px-10 lg:px-16 py-6 md:py-10">

        {/* Header - Hero Section */}
        <HeroSection />

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start mt-8 md:mt-12">

          {/* Left/Top: Spin Wheel & Form Section */}
          <div className="w-full lg:flex-[1.2] flex flex-col items-center">
            <SpinSection
              onSpinStart={() => setIsSpinning(true)}
              onSpinComplete={handleSpinComplete}
            />
          </div>

          {/* Right/Bottom: Dashboard */}
          <div className="w-full lg:flex-1 lg:max-w-[500px]">
            <Dashboard refreshTrigger={refreshTrigger} />
          </div>

        </div>
      </div>

      {/* Celebration Modal */}
      <ResultModal
        isOpen={isModalOpen}
        amount={result?.amount || 0}
        onClose={handleCloseModal}
      />
    </div>
  );
}
