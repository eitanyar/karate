import manifest from "../../content/media-manifest.json";

const videoIdPattern = /^[A-Za-z0-9_-]{11}$/;
const routePattern = /^\/(?:[a-z0-9-]+\/)*[a-z0-9-]*\/?$/;

type MediaManifest = {
  schemaVersion: 1;
  provenance: "owner-approved-plan-2026-09-10";
  videos: Record<string, string[]>;
};

function assertManifest(value: unknown): asserts value is MediaManifest {
  if (!value || typeof value !== "object") throw new Error("Invalid media manifest");
  const record = value as Partial<MediaManifest>;
  if (record.schemaVersion !== 1 || record.provenance !== "owner-approved-plan-2026-09-10" || !record.videos || typeof record.videos !== "object") throw new Error("Invalid media manifest");
  for (const [route, ids] of Object.entries(record.videos)) {
    if (!routePattern.test(route) || !Array.isArray(ids) || ids.some((id) => typeof id !== "string" || !videoIdPattern.test(id))) throw new Error("Invalid media manifest");
  }
}

assertManifest(manifest);

export function getVideosForRoute(route: string): readonly string[] {
  if (!routePattern.test(route)) throw new Error("Invalid media route");
  return manifest.videos[route] ?? [];
}
