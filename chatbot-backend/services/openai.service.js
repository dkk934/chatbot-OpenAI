// services/openai.service.js
import OpenAI from "openai";
import dotenv from "dotenv";

// Ensure environment variables from .env are loaded when this module is imported
dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function getAIResponse(message) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: message }]
  });

  return response.choices[0].message.content;
}
