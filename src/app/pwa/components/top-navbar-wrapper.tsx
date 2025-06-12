export function TopNavbarWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background px-safe fixed inset-x-0 top-0 z-50 mt-[env(safe-area-inset-top)] flex h-[var(--t-nav)] w-full justify-center border-b">
      {children}
    </div>
  );
}
