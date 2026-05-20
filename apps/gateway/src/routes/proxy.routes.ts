import { Hono } from "hono";
import type { User } from "@social-lens/types";
import { analysisTierRateLimit } from "../middleware/rate.limit.middleware";

const SERVICES = {
  auth: process.env.AUTH_SERVICE_URL ?? "http://localhost:3001",
  analytics: process.env.ANALYTICS_SERVICE_URL ?? "http://localhost:3002",
  social: process.env.SOCIAL_SERVICE_URL ?? "http://localhost:3003",
  reports: process.env.REPORTS_SERVICE_URL ?? "http://localhost:3004",
};

const router = new Hono<{
  Variables: {
    currentUser: User;
    requestId: string;
    startTime: number;
  };
}>();

// Builds the full target URL preserving path + query string
function buildTargetUrl(serviceBase: string, c: any): string {
  const url = new URL(c.req.url);
  return `${serviceBase}${url.pathname}${url.search}`;
}

function gatewayHeaders(c: any): Record<string, string> {
  const user: User | undefined = c.get("currentUser");
  return {
    "x-request-id": c.get("requestId"),
    "x-gateway-timestamp": new Date().toISOString(),
    ...(user && {
      "x-user-id": user.id,
      "x-user-plan": user.plan,
      "x-user-email": user.email,
    }),
  };
}

// Generic proxy helper — builds URL and merges headers
async function forwardTo(serviceBase: string, c: any): Promise<Response> {
  const targetUrl = buildTargetUrl(serviceBase, c);

  const headers = new Headers(c.req.raw.headers);
  Object.entries(gatewayHeaders(c)).forEach(([k, v]) => headers.set(k, v));

  const res = await fetch(targetUrl, {
    method: c.req.method,
    headers,
    body: ["GET", "HEAD"].includes(c.req.method) ? undefined : c.req.raw.body,
  });

  return new Response(res.body, {
    status: res.status,
    headers: res.headers,
  });
}

// ─── Auth Service ──────────────────────────────────────────────────────────
router.all("/auth/*", (c) => forwardTo(SERVICES.auth, c));
router.get("/me", (c) => forwardTo(SERVICES.auth, c));
router.post("/workspaces", (c) => forwardTo(SERVICES.auth, c));

// ─── Analytics Service ─────────────────────────────────────────────────────
router.post("/analytics/analyse", analysisTierRateLimit, (c) =>
  forwardTo(SERVICES.analytics, c),
);
router.all("/analytics/*", (c) => forwardTo(SERVICES.analytics, c));

// ─── Social Service ────────────────────────────────────────────────────────
router.all("/social/*", (c) => forwardTo(SERVICES.social, c));

// ─── Reports Service ───────────────────────────────────────────────────────
router.all("/reports/*", (c) => forwardTo(SERVICES.reports, c));

export { router as proxyRouter };
