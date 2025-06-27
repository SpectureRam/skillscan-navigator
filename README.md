🧠 SkillScan Navigator – AI-Powered Role-Based Skill Assessment

SkillScan Navigator is a web-based platform that allows users to assess their skills for specific tech roles (e.g., Data Engineer, UI/UX Designer). It uses AI to conduct a 10–15 minute interactive assessment, identifies skill gaps, and provides personalized learning recommendations — all powered by free-tier tools.

🚀 Live Demo (coming soon...)

---

🔧 Tech Stack

| Layer       | Tool / Framework     |
|-------------|----------------------|
| Frontend    | Next.js (React)      |
| Backend     | Express.js (Node.js) |
| Hosting     | Vercel (Free Tier)   |
| AI Engine   | OpenAI GPT (API)     |
| Database    | MongoDB Atlas (Free) or Static JSON |
| Auth (Opt.) | NextAuth / Clerk (optional) |
| Voice Input | Web Speech API / Whisper (optional) |

---

🧩 Features

- ✅ Role-based skill assessment (choose from roles like Data Engineer, UX Designer)
- ✅ AI-driven questions using OpenAI API
- ✅ Real-time answer analysis (text-based)
- ✅ Skill gap report with actionable feedback
- ✅ English communication score and tips
- ✅ Personalized course/resource recommendations
- ✅ Mobile-friendly and clean UI

---

📂 Project Structure

skillscan-navigator/
├── client/               # Next.js frontend
│   ├── pages/
│   ├── components/
│   └── utils/
├── server/               # Express.js backend
│   ├── routes/
│   ├── skillMatrix/      # JSON files for each role
│   └── app.js
├── vercel.json           # Vercel proxy config (optional)
└── README.md

---

🧠 How It Works

1. User visits the site and selects a target role.
2. AI begins asking contextual questions based on the role.
3. User answers questions via text (or voice).
4. AI analyzes answers in real-time.
5. At the end of the session (10–15 min), the system:
   - Calculates readiness score
   - Identifies missing skills
   - Assesses English communication
   - Suggests courses to improve

---

📦 Sample Roles (more coming)

- Data Engineer
- Frontend Developer
- UI/UX Designer
- Business Analyst
- Customer Support Agent

---

🛠️ Setup (Local Development)

1. Clone this repo
   git clone https://github.com/saikrishna2003/skillscan-navigator.git

2. Install client
   cd client
   npm install

3. Install backend
   cd ../server
   npm install

4. Run both (use two terminals)
   cd client && npm run dev
   cd server && npm run start

---

🌐 Deployment on Vercel (Frontend)

- Connect the client/ folder to Vercel.
- Set OpenAI API key in Vercel Project Settings → Environment Variables:
  - OPENAI_API_KEY = your_key_here

Backend options:
- Deploy as Vercel Serverless Functions (api/ directory)
- Or proxy to Express server (use vercel.json)

---

🔒 Security & Privacy

- No personal data stored permanently.
- Session-based scoring only.
- Communication score is AI-evaluated but not recorded.

---

📌 To-Do / Feature Checklist

- [x] Role selector
- [x] Question generator (OpenAI)
- [x] Answer logging
- [x] Skill gap scoring logic
- [x] English proficiency analyzer
- [x] Feedback and course suggestions
- [x] Voice input
- [x] Auth (optional)
- [x] PDF report export (optional)

---

📄 License

MIT License © 2025

---

Made with 💡 using AI and Open Source Tools
