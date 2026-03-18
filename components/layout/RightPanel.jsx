export default function RightPanel({ children }) {
  return (
    <div className="flex-1 lg:flex-none lg:w-[450px] flex flex-col min-h-0">
      {children}
    </div>
  );
}
