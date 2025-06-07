import { PwaProviders } from "@/app/pwa/providers";
import "@/styles/globals.css";

import { type Metadata, type Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  userScalable: false,
};

export const metadata: Metadata = {
  title: "PWA Template",
  description: "PWA template for Next.js",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  appleWebApp: {
    capable: true,
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className="overscroll-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      suppressHydrationWarning
    >
      <body className="overscroll-none">
        <PwaProviders>{children}</PwaProviders>
      </body>
    </html>
  );
}
