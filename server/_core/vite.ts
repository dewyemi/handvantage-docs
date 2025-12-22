import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import viteConfig from "../../vite.config";

// Valid routes defined in the client-side router (App.tsx)
// This list should be kept in sync with client/src/App.tsx
const VALID_ROUTES = [
  "/",
  "/landing",
  "/marketing-assets",
  "/guides",
  "/quick-start",
  "/overview",
  "/voice-agent/build",
  "/voice-agent/settings",
  "/voice-agent/phone-numbers",
  "/chat-agent/build",
  "/chat-agent/widget",
  "/chat-agent/deploy",
  "/billing/pay-as-you-go",
  "/guides/data-sources",
  "/call-widgets/plivo",
  "/call-widgets/telnyx",
  "/call-widgets/sip",
  "/chat-widgets/messenger",
  "/chat-widgets/instagram",
  "/chat-widgets/sms",
  "/tools/custom-tool",
  "/features/webhooks",
  "/features/intents",
  "/features/campaigns",
  "/integrations/twilio",
  "/integrations/ghl",
  "/integrations/whatsapp",
  "/integrations/calendar",
  "/api-reference",
];

/**
 * Check if a given path matches any valid route
 * Returns true for valid routes, false for 404 routes
 */
function isValidRoute(pathname: string): boolean {
  // Remove query string and hash
  const cleanPath = pathname.split("?")[0].split("#")[0];
  
  // Check if it's an exact match with any valid route
  return VALID_ROUTES.includes(cleanPath);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      
      // Check if the route is valid and set appropriate status code
      // Use originalUrl instead of req.path to get the actual requested path
      const requestPath = req.originalUrl.split("?")[0].split("#")[0];
      const statusCode = isValidRoute(requestPath) ? 200 : 404;
      res.status(statusCode).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath =
    process.env.NODE_ENV === "development"
      ? path.resolve(import.meta.dirname, "../..", "dist", "public")
      : path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (req, res) => {
    // Check if the route is valid and set appropriate status code
    // Use originalUrl to get the actual requested path
    const requestPath = req.originalUrl.split("?")[0].split("#")[0];
    const statusCode = isValidRoute(requestPath) ? 200 : 404;
    res.status(statusCode).sendFile(path.resolve(distPath, "index.html"));
  });
}
