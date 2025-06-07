export function BottomNavbarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background h-b-nav px-safe mb-b-inset fixed right-0 bottom-0 left-0 z-50 flex justify-center border-t">
      {children}
    </div>
  );
}
