export default function SectionTitle({ children, className = "" }) {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-4xl font-bold bg-gradient-to-r from-eid-primary to-eid-accent bg-clip-text text-transparent inline-block">
        {children}
      </h2>
      <div className="h-1 w-20 bg-gradient-to-r from-eid-primary to-transparent mt-2 rounded-full" />
    </div>
  );
}
