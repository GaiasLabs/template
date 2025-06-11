"use client";

// function setProperties(data: [string, string][]) {
//   if (typeof window !== "undefined") {
//     data.forEach(([property, value]) => {
//       document.documentElement.style.setProperty(property, value);
//     });
//   }
// }

export function PwaSafeArea({
  children,
  topNavHeight = "0px",
  bottomNavHeight = "0px",
}: {
  children: React.ReactNode;
  topNavHeight?: string;
  bottomNavHeight?: string;
}) {
  // setProperties([
  //   ["--t-nav", topNavHeight],
  //   ["--b-nav", bottomNavHeight],
  // ]);
  if (typeof window !== "undefined") {
    document.documentElement.style.setProperty("--t-nav", topNavHeight);
    document.documentElement.style.setProperty("--b-nav", bottomNavHeight);
  }

  return (
    <>
      <div className="bg-background pointer-events-none fixed top-0 right-0 left-0 z-99999 h-[env(safe-area-inset-top)]" />
      <div className="bg-background pointer-events-none fixed right-0 bottom-0 left-0 z-99999 h-[env(safe-area-inset-bottom)]" />
      <div className="px-safe mt-[calc(env(safe-area-inset-top)+var(--t-nav))] mr-[env(safe-area-inset-right)] mb-[calc(env(safe-area-inset-bottom)+var(--b-nav))] ml-[env(safe-area-inset-left)] min-h-[calc(100dvh-(env(safe-area-inset-top)+env(safe-area-inset-bottom)+var(--t-nav)+var(--b-nav)))]">
        <div className="max-w-global mx-auto">{children}</div>
      </div>
    </>
  );
}
