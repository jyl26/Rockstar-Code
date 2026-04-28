import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedMission } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const missionSchema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "Catchy mission title in Rockstar style" },
    description: { type: Type.STRING, description: "A brief, gritty description of the mission" },
    objectives: { 
      type: Type.ARRAY, 
      items: { type: Type.STRING }, 
      description: "Step-by-step objectives for the player" 
    },
    location: { type: Type.STRING, description: "Setting within Vice City (e.g., Little Havana, Vice Beach)" },
    vibe: { type: Type.STRING, description: "The visual and atmospheric vibe (e.g., 80s neon, gritty industrial)" },
    reward: { type: Type.NUMBER, description: "Total cash reward for the mission (e.g. 50000, 125000)" },
    estimatedDifficulty: { 
      type: Type.STRING, 
      enum: ["EASY", "MEDIUM", "HARD", "INSANE"],
      description: "Challenge level" 
    },
  },
  required: ["title", "description", "objectives", "location", "vibe", "estimatedDifficulty", "reward"]
};

export async function generateMission(prompt: string): Promise<GeneratedMission> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a Rockstar-style mission for Rockstar Code based on this 'vibe' or prompt: "${prompt}". 
      Make it feel like a real Rockstar Games mission - gritty, cinematic, and immersive.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: missionSchema,
      },
    });

    const result = JSON.parse(response.text || "{}");
    
    return {
      id: Math.random().toString(36).substring(7),
      author: "Local_Player",
      likes: 0,
      plays: 0,
      ...result
    };
  } catch (error) {
    console.error("Error generating mission:", error);
    throw error;
  }
}
