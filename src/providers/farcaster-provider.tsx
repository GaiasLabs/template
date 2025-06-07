"use client";

import sdk, { type Context } from "@farcaster/frame-sdk";
import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";

type FarcasterContextType =
  | {
      farcaster: Context.FrameContext | undefined;
    }
  | undefined;

const FarcasterContext = createContext<FarcasterContextType>(undefined);

export function FarcasterProvider({ children }: { children: React.ReactNode }) {
  const [farcasterContext, setFarcasterContext] = useState<
    Context.FrameContext | undefined
  >(undefined);

  useEffect(() => {
    sdk.actions
      .ready()
      .then(() =>
        sdk
          .isInMiniApp()
          .then((isInMiniApp) => {
            if (isInMiniApp === false) return;
            sdk.actions.addMiniApp().catch(console.error);
            sdk.context.then(setFarcasterContext).catch(console.error);
          })
          .catch(console.error),
      )
      .catch(console.error);
  }, []);

  return (
    <FarcasterContext.Provider value={{ farcaster: farcasterContext }}>
      {children}
    </FarcasterContext.Provider>
  );
}

export function useFarcaster() {
  const context = useContext(FarcasterContext);
  if (context === undefined) {
    throw new Error("useFarcaster must be used within a FarcasterProvider");
  }
  return context;
}

export { FarcasterContext };
