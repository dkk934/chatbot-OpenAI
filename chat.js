// chat.js
import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";

// Ensure environment variables from .env are loaded when this module is imported
dotenv.config();

const router = express.Router();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post("/", async (req, res) => {
  const { message } = req.body || {};
    console.log(req.body);

  if (!message) {
    return res.status(400).json({ error: "Missing 'message' in request body" });
  }

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }]
    });

    const reply = response?.choices?.[0]?.message?.content ?? "";

    res.json({ reply });
  } catch (err) {
    console.error("OpenAI request failed:", err);
    res.status(500).json({ error: "OpenAI request failed", details: err?.message });
  }
});

export default router;
