/**
 * Format timestamp into a readable date string.
 */
export function formatTime(timestamp) {
  if (!timestamp) return "";
  const date = new Date(timestamp);
  
  return new Intl.DateTimeFormat("bn-BD", {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "long",
  }).format(date);
}

/**
 * Utility for joining Tailwind classes conditionally.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
