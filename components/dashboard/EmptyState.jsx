import { FaGift } from "react-icons/fa";
import { BANGLA_MESSAGES } from "@/lib/constants";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-white/30 space-y-4">
      <FaGift className="text-5xl opacity-20" />
      <p className="text-center font-medium">{BANGLA_MESSAGES.EMPTY_HISTORY}</p>
    </div>
  );
}
