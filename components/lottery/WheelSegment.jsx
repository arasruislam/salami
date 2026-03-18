export default function WheelSegment({ index, total, value }) {
  const angle = 360 / total;
  const rotation = index * angle;
  
  // Custom colors for segments to make it look premium
  const colors = [
    "from-eid-primary/80 to-eid-primary/40",
    "from-eid-accent/80 to-eid-accent/40",
  ];
  
  const bgGradient = colors[index % colors.length];

  return (
    <div
      className="absolute top-0 left-1/2 w-1/2 h-1/2 origin-bottom-left"
      style={{
        transform: `rotate(${rotation}deg) skewY(${90 - angle}deg)`,
      }}
    >
      <div 
        className={`w-full h-full bg-gradient-to-br ${bgGradient} border-l border-white/20`}
        style={{
          transform: `skewY(-${90 - angle}deg) rotate(${angle / 2}deg)`,
        }}
      >
        <span className="absolute top-10 left-1/2 -translate-x-1/2 text-eid-bg font-black text-lg drop-shadow-sm">
          {value}
        </span>
      </div>
    </div>
  );
}
