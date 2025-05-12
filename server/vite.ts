import { Express } from 'express';
import { createServer as createViteServer } from 'vite';

export async function setupVite(app: Express) {
  if (process.env.NODE_ENV === "development") {
    const vite = await createViteServer({ server: { middlewareMode: "ssr" } });
    app.use(vite.middlewares);
  }
}
