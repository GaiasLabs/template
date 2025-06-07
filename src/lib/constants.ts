export function getBaseUrl() {
  if (typeof window !== "undefined") return window.location.origin;
  const PRODUCTION_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  return typeof PRODUCTION_URL === "string"
    ? `https://${PRODUCTION_URL}`
    : `http://localhost:${process.env.PORT ?? 3000}`;
}
