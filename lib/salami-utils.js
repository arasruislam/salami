import { ACTUAL_WINNING_OPTIONS, WHEEL_VALUES } from "@/lib/constants";

/**
 * Picks a winning amount based on weighted probability.
 */
export function getWeightedAmount() {
  const random = Math.random();
  let cumulativeProbability = 0;

  for (const option of ACTUAL_WINNING_OPTIONS) {
    cumulativeProbability += option.probability;
    if (random < cumulativeProbability) {
      return option.amount;
    }
  }

  return ACTUAL_WINNING_OPTIONS[0].amount; // Fallback
}

/**
 * Finds the index of an amount in the wheel values array.
 * If multiple exist, picks one randomly.
 */
export function getWheelIndex(amount) {
  const indices = WHEEL_VALUES.reduce((acc, val, idx) => {
    if (val === amount) acc.push(idx);
    return acc;
  }, []);

  if (indices.length === 0) return 0;
  return indices[Math.floor(Math.random() * indices.length)];
}

/**
 * Simple name sanitizer.
 */
export function sanitizeName(name) {
  if (!name) return "";
  return name.trim().substring(0, 40).replace(/[<>]/g, "");
}
