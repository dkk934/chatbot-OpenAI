// app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoute from "./routes/chat.routes.js";

// Load environment variables from .env
dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
// Parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

app.use("/chat", chatRoute);

app.listen(port, () => console.log(`http://localhost:${port}`));