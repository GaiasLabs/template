export function TopNavbarWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background px-safe h-t-nav mt-t-inset fixed top-0 right-0 left-0 z-50 flex w-full justify-center border-b">
      {children}
    </div>
  );
}
