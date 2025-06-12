export function BottomNavbarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background px-safe fixed inset-x-0 bottom-0 z-50 mb-[env(safe-area-inset-bottom)] flex h-[var(--b-nav)] justify-center border-t">
      {children}
    </div>
  );
}
