import { getBaseUrl } from "@/lib/constants";
import { type domainManifestSchema } from "@farcaster/frame-sdk";
import { type z } from "zod";

type Manifest = z.input<typeof domainManifestSchema>;

const appUrl = getBaseUrl();

// Docs
// https://miniapps.farcaster.xyz/docs/guides/publishing#host-a-manifest-file
export const farcasterManifest: Manifest = {
  accountAssociation: {
    header:
      "eyJmaWQiOjI5MjE5NCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDcyNTU0QTIyNEI0Qjc1Njk2OTdBYWQ1ZUE1YmQ1NzM5ZDAxQzliYzMifQ",
    payload: "eyJkb21haW4iOiJ0ZW1wbGF0ZS5nYWlhcy54eXoifQ",
    signature:
      "MHg0N2YwYzJlZDQ3ZTMwODZiMGVmYjk3ZmQwYWM5NGQxZjk3Mjg4NDg0NTc3MjY4Yjg4Yzk4MjAyODlmMTI4MjkzMGZiNmExYTdhN2IxYWJlMmQxMzNjMDE1YTQ0Y2FkNWU5M2NiNmRiNmZhYzFjNDcyNjI5NDAwZTk5YmExODNiNjFi",
  },
  frame: {
    version: "1",
    name: "Farcaster Mini App",
    homeUrl: `${appUrl}/farcaster`,
    iconUrl: `${appUrl}/icon.png`,
    splashImageUrl: `${appUrl}/splash.gif`,
    splashBackgroundColor: "#000000",
    // webhookUrl: "https://api.example.com/webhook/farcaster",
    subtitle: "Test your Farcaster mini app",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    screenshotUrls: [
      `${appUrl}/screen-home.png`,
      `${appUrl}/screen-club.png`,
      `${appUrl}/screen-animation.png`,
    ],
    // primaryCategory: "",
    // tags: [],
    heroImageUrl: `${appUrl}/hero.png`,
    tagline: "Test your Farcaster mini app",
    ogTitle: "Farcaster Mini App Example",
    ogDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
    ogImageUrl: `${appUrl}/og-image.png`,
    noindex: false,
    // requiredChains: [],
    // requiredCapabilities: [
    // "wallet.getEthereumProvider",
    // "wallet.getSolanaProvider",
    // "actions.ready",
    // "actions.openUrl",
    // "actions.close",
    // "actions.setPrimaryButton",
    // "actions.addMiniApp",
    // "actions.signIn",
    // "actions.viewCast",
    // "actions.viewProfile",
    // "actions.composeCast",
    // "actions.viewToken",
    // "actions.sendToken",
    // "actions.swapToken",
    // "haptics.impactOccurred",
    // "haptics.notificationOccurred",
    // "haptics.selectionChanged",
    // "back",
    // ],
    // castShareUrl
  },
};
