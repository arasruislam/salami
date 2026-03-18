export default function MainLayout({ children }) {
  return (
    <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-8 min-h-0">
      {children}
    </div>
  );
}
