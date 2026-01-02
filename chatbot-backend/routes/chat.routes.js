// routes/chat.routes.js
import express from "express";
import { getAIResponse } from "../services/openai.service.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Missing 'message' in request body" });
  }

  try {
    const reply = await getAIResponse(message);
    res.json({ reply });
  } catch (err) {
    console.error("OpenAI request failed:", err);
    res
      .status(500)
      .json({ error: "OpenAI request failed", details: err?.message });
  }

  const reply = await getAIResponse(message);
  res.json({ reply });
});

export default router;
