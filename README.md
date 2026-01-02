# chatbot-backend

A minimal Express backend that exposes a single `/chat` endpoint which forwards user messages to OpenAI's Chat Completions API and returns the assistant reply.

---

## 🔧 Prerequisites

- Node.js (v18+ recommended). If using Node <18, install `node-fetch`.
- An OpenAI API key.

## 🚀 Installation

```bash
cd chatbot-backend
npm install
```

## ⚙️ Environment

Create a `.env` file (a template is included) with:

```
PORT=3000
OPENAI_API_KEY=your_openai_api_key_here
```

> Keep your API key secret and do not commit `.env` to source control.

## ▶️ Run

```bash
node app.js
# or add a start script in package.json:
# "start": "node chatbot-backend/app.js"
```

Server listens on `PORT` (default 3000).

## 🛠 API

- POST /chat
  - Content-Type: `application/json`
  - Body: `{ "message": "Hello" }`
  - Response: `{ "reply": "...assistant reply..." }`

Example using curl:

```bash
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello, who are you?"}'
```

## ℹ️ Implementation notes

- The service uses `OPENAI_API_KEY` from `.env` and calls the OpenAI Chat Completions endpoint with model `gpt-4o-mini` (adjustable in `services/openai.service.js`).
- If `OPENAI_API_KEY` is missing, the service will throw an error.

## ✅ Next steps

- Optionally add a `start` script to `package.json` and add basic tests.
