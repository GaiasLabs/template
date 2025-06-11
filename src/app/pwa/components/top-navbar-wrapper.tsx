export function TopNavbarWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background px-safe fixed top-0 right-0 left-0 z-50 mt-[env(safe-area-inset-top)] flex h-[var(--t-nav)] w-full justify-center border-b">
      {children}
    </div>
  );
}
