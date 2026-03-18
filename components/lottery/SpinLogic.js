/**
 * Calculates the total rotation degrees needed to land on a specific index.
 * @param {number} targetIndex - The index of the segment to land on.
 * @param {number} currentRotation - The current cumulative rotation of the wheel.
 * @param {number} totalSegments - Total number of segments on the wheel.
 */
export function calculateRotation(targetIndex, currentRotation, totalSegments = 10) {
  const segmentAngle = 360 / totalSegments;
  
  // Each segment center is at (i * segmentAngle + segmentAngle / 2) clockwise from top.
  // To move that center to top, the wheel needs to rotate by 360 - centerAngle.
  const centerAngle = targetIndex * segmentAngle + segmentAngle / 2;
  const targetAngle = 360 - centerAngle;
  
  // Random spins between 4 and 6
  const extraSpins = Math.floor(Math.random() * 3) + 4; // 4, 5, or 6
  const additionalRotation = 360 * extraSpins;
  
  // Find current base rotation (0-360) and add enough to reach target Angle
  const currentBase = currentRotation % 360;
  let moveAmount = targetAngle - currentBase;
  
  // Ensure the wheel always spins forward
  if (moveAmount <= 0) {
    moveAmount += 360;
  }
  
  return currentRotation + moveAmount + additionalRotation;
}
