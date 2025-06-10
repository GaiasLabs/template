import { farcasterManifest } from "../../farcaster-manifest";

export async function GET() {
  return Response.json(farcasterManifest);
}
