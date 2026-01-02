// routes/chat.routes.js
import express from "express";
import { getAIResponse } from "../services/openai.service.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Missing 'message' in request body" });
  }

  const reply = await getAIResponse(message);
  res.json({ reply });
});

export default router;
