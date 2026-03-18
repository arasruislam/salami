export default function WheelPointer() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-30">
      <div 
        className="w-8 h-8 bg-eid-primary shadow-[0_0_15px_rgba(255,194,0,0.8)]"
        style={{
          clipPath: "polygon(50% 100%, 0 0, 100% 0)",
        }}
      />
    </div>
  );
}
