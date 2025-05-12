import { Express, Router } from 'express';
import { storage } from './storage';
import { generateAIWorkoutPlan } from './api/openai';

export function registerRoutes(app: Express) {
  const router = Router();

  router.get("/users/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const user = await storage.getUser(id);
    res.json(user);
  });

  router.post("/ai/workout", async (req, res) => {
    const { goal, fitnessLevel } = req.body;
    try {
      const plan = await generateAIWorkoutPlan(goal, fitnessLevel);
      res.json(plan);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  app.use("/api", router);
}
