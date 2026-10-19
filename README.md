# Move 37 — Interactive Go Showcase & AI Learning Coach

An exquisite, interactive Go (Baduk / Weiqi) web application featuring historical AlphaGo match analysis, real-time tactical AI coaching powered by **Gemini 3.8 Flash**, spoken audio commentary via **Gemini 3.8 Flash TTS**, 8-fold dihedral symmetry caching, and particle capture visual effects.

---

## ✨ Features

- **Historical AlphaGo vs. Lee Sedol Replays**:
  - **Game 2, Move 37**: The legendary 5th-line shoulder hit that reshaped centuries of Go theory.
  - **Game 4, Move 78**: Lee Sedol's "Divine Move" (*God's Touch*) wedge in the center.
  - Move-by-move professional commentary, win-rate graphs, and branching move tree exploration.
- **Interactive Go Engine**:
  - Full support for **19×19**, **13×13**, and **9×9** boards.
  - Complete rule implementation: liberties, multi-group captures, ko rules, suicide prevention, and territory scoring.
  - Play vs. Local Player, vs. Gemini AI, or observe AI vs. AI simulation.
- **Gemini 3.8 Flash AI Go Coach**:
  - Instant move recommendations, tactical tips, opening book insights, and mistake analysis.
  - Explains the strategic "why" behind every candidate move.
- **Gemini 3.8 Flash TTS Spoken Audio**:
  - Real-time voice commentary delivered with natural voice personas (*Aoede*, *Puck*, *Charon*, *Fenrir*, *Kore*).
- **8-Fold Dihedral ($D_4$) Symmetry Normalization**:
  - Canonical transformation algorithm covering all 8 planar rotations and reflections.
  - Pre-computed 9×9 opening book cache (0ms) and Cloud Firestore shared cache.
- **Exquisite Presentation**:
  - Photorealistic slate & shell stones on kaya wood grain.
  - Dynamic camera switching: **2D Top-Down** and **3D Isometric Tilt**.
  - Particle burst VFX on stone capture and subtle placement acoustics.
  - Persistent Dark / Light theme toggle.

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js** (v18 or higher recommended)
- A **Gemini API Key** from [Google AI Studio](https://aistudio.google.com/app/apikey)

### 2. Installation
```bash
git clone https://github.com/aosterloh/Move37.git
cd Move37
npm install
```

### 3. Configure API Key
Create a `.env` file in the project root:
```bash
cp .env.example .env
```
Edit `.env` and add your Gemini API key:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Run Locally
```bash
npm start
```
Open your browser and navigate to:
```
http://localhost:8080
```

---

## 🐳 Docker

Run Move 37 in a self-contained container:
```bash
docker build -t move37:latest .
docker run -p 8080:8080 --env-file .env move37:latest
```

---

## ☁️ Deployment

The project includes an automated deployment script [`deploy.sh`](deploy.sh) supporting local, Docker, Google Cloud Run, and Firebase Hosting:

```bash
# Run locally
./deploy.sh local

# Build and run Docker container
./deploy.sh docker

# Deploy to Cloud Run
./deploy.sh cloudrun

# Deploy to Firebase Hosting
./deploy.sh firebase
```

---

## 📁 Project Structure

```
├── public/                 # Client assets (HTML, CSS, JS, audio)
│   ├── index.html          # Main application page
│   ├── app.js              # UI controller, game loop, theme & view management
│   ├── go-engine.js        # Go logic: board state, rules, liberties, captures, ko
│   ├── ai-agent.js         # AI opponent heuristic engine
│   ├── alphago-games.js    # Curated AlphaGo vs Lee Sedol matches & commentary
│   ├── voice-coach.js      # Gemini TTS audio playback & persona manager
│   └── style.css           # Board styling, stone shaders, animations, responsive layout
├── server.js               # Zero-dependency Node.js HTTP & WebSocket server
├── symmetry.js             # D4 dihedral group canonical symmetry calculations
├── opening-book-9x9.js     # Fast pre-computed 9x9 canonical opening book
├── firestore-cache.js      # Cloud Firestore 2-tier caching layer
├── Dockerfile              # Lightweight node:20-alpine container definition
├── deploy.sh               # Multi-target deployment script
└── package.json
```

---

## 📄 License

Apache-2.0
