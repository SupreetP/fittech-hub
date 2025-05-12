import express from 'express';
import { registerRoutes } from './routes';
import { setupVite } from './vite';

async function startServer() {
  const app = express();
  app.use(express.json());

  await setupVite(app);
  registerRoutes(app);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

startServer().catch(err => {
  console.error("Error starting server:", err);
});
