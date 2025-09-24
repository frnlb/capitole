import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5173;

async function createServer() {
  const app = express();

  let vite;
  if (!isProduction) {
    // Import Vite dynamically
    const { createServer: createViteServer } = await import("vite");

    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });

    // Use vite's connect instance as middleware
    app.use(vite.ssrLoadModule);
  } else {
    // Production: serve static files
    const compression = (await import("compression")).default;
    const sirv = (await import("sirv")).default;

    app.use(compression());
    app.use(sirv("./dist/client", { extensions: [] }));
  }

  // Handle all routes - use a more specific pattern instead of '*'
  app.use(/.*/, async (req, res) => {
    const url = req.originalUrl;

    try {
      let template;
      let render;

      if (!isProduction) {
        // Development
        template = fs.readFileSync(
          path.resolve(__dirname, "index.html"),
          "utf-8"
        );
        template = await vite.transformIndexHtml(url, template);
        const module = await vite.ssrLoadModule("/src/entry-server.tsx");
        render = module.render;
      } else {
        // Production
        template = fs.readFileSync(
          path.resolve(__dirname, "./dist/client/index.html"),
          "utf-8"
        );
        const module = await import("./dist/server/entry-server.js");
        render = module.render;
      }

      // Render the app
      const result = await render(url);
      const rendered = typeof result === "string" ? result : result.html;
      const ssrData = typeof result === "object" ? result.ssrData : {};

      const html = template
        .replace("<!--ssr-outlet-->", rendered)
        .replace(
          "</head>",
          `<script>window.__SSR_DATA__ = ${JSON.stringify(
            ssrData || {}
          )}</script></head>`
        );

      res.status(200).set({ "Content-Type": "text/html" }).send(html);
    } catch (e) {
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(e);
      }
      console.error("SSR Error:", e);
      res.status(500).send("Internal Server Error");
    }
  });

  return { app, vite };
}

createServer()
  .then(({ app }) => {
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });
