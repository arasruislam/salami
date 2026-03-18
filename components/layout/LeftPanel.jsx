export default function LeftPanel({ children }) {
  return (
    <div className="flex-[1.5] flex flex-col items-center justify-center p-4 lg:p-10 min-h-0 overflow-y-auto custom-scrollbar">
      {children}
    </div>
  );
}
