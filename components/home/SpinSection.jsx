"use client";
import { useState } from "react";
import SpinWheel from "../lottery/SpinWheel";
import NameInputForm from "./NameInputForm";
import SpinButton from "./SpinButton";
import { calculateRotation } from "../lottery/SpinLogic";
import { BANGLA_MESSAGES } from "@/lib/constants";

export default function SpinSection({ onSpinStart, onSpinComplete }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleSpin = async () => {
    // Validation
    if (!name.trim()) {
      setError(BANGLA_MESSAGES.NAME_REQUIRED);
      return;
    }
    if (name.length > 40) {
      setError(BANGLA_MESSAGES.NAME_TOO_LONG);
      return;
    }
    setError("");
    
    // Notify parent for visual hype (e.g. background dimming)
    if (onSpinStart) onSpinStart();
    
    setIsSpinning(true);

    try {
      const res = await fetch("/api/spin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      const data = await res.json();

      if (data.success) {
        // Calculate the next rotation target
        const newRotation = calculateRotation(data.targetIndex, rotation);
        setRotation(newRotation);

        // This callback will be triggered when the wheel stops
        const completeHandler = () => {
          onSpinComplete(data);
          setIsSpinning(false);
        };

        // We pass this logic through a temporary storage or state if needed, 
        // but here we'll handle it via the SpinWheel's onAnimationComplete
        window._onSpinEnd = completeHandler;
      } else {
        setError(data.message);
        setIsSpinning(false);
      }
    } catch (err) {
      setError("নেটওয়ার্ক সমস্যা। আবার চেষ্টা করো।");
      setIsSpinning(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 sm:gap-14 w-full mb-4">
      {/* Wheel — on top */}
      <div className="relative flex-shrink-0">
        <SpinWheel
          rotation={rotation}
          spinning={isSpinning}
          onAnimationComplete={() => {
            if (window._onSpinEnd) {
              window._onSpinEnd();
              delete window._onSpinEnd;
            }
          }}
        />
      </div>

      {/* Input + Button — responsive layout */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-[300px] sm:max-w-[420px] px-2">
        <div className="flex-1 min-w-0">
          <NameInputForm
            value={name}
            onChange={setName}
            disabled={isSpinning}
            error={error}
          />
        </div>
        <div className="flex-shrink-0">
          <SpinButton
            onClick={handleSpin}
            disabled={isSpinning}
            loading={isSpinning}
          />
        </div>
      </div>
    </div>
  );
}
