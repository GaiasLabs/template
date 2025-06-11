export function PwaSafeAreaProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-background h-t-inset pointer-events-none fixed top-0 right-0 left-0 z-99999" />
      <div className="bg-background h-b-inset pointer-events-none fixed right-0 bottom-0 left-0 z-99999" />
      <div className="px-safe mr-r-inset ml-l-inset mb-b-inset mt-t-inset min-h-content-inset">
        <div className="max-w-global mx-auto">{children}</div>
      </div>
    </>
  );
}
