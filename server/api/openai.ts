import OpenAI from "openai";

export async function generateAIWorkoutPlan(goal: string, fitnessLevel: string): Promise<any> {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const prompt = `Create a workout plan for a ${fitnessLevel} fitness level with the goal of ${goal}.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are a fitness coach." },
        { role: "user", content: prompt }
      ],
    });

    return JSON.parse(response.choices[0].message.content);
  } catch (error) {
    console.error("Error generating workout plan:", error);
    throw new Error("Error generating workout plan");
  }
}
