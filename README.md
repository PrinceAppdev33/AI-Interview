# 🎯 AI Interview Prep — SaaS Platform

An AI-powered, credit-based SaaS platform that helps users **practice interviews smarter**. Upload your resume, get AI-generated questions tailored to your profile, practice technical & HR rounds, and receive intelligent feedback — all wrapped in a smooth, modern UI.

Built as a full production-grade MERN stack application, from authentication and payments to deployment.

---

## ✨ Features

- 📄 **Resume Upload & Analysis** — Upload your PDF resume for AI-driven parsing and insights
- 🤖 **AI-Generated Interview Questions** — Personalized questions based on your resume and role
- 💻 **Technical & HR Round Practice** — Simulate real interview scenarios across categories
- 🧠 **Intelligent Feedback** — Get AI-powered evaluation of your answers
- 📊 **Interview History & Reports** — Track past sessions with detailed performance reports
- 🔐 **Google Authentication** — Secure sign-in via Firebase
- 💳 **Credit-Based Access System** — Pay-as-you-go model for interview sessions
- 💰 **Razorpay Payment Integration** — Purchase credits seamlessly
- 🎨 **Smooth UI/UX** — Animated interactions powered by Framer Motion
- 🚀 **Production Deployment** — Fully deployed full-stack app on Render

---

## 🛠️ Tech Stack

**Frontend**
- React.js (Vite)
- Redux Toolkit
- Tailwind CSS
- Framer Motion

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- Multer (file uploads)

**Auth & Payments**
- Firebase Google Authentication
- Razorpay

**AI Integration**
- OpenRouter API

**Deployment**
- Render

---

## 📸 Demo

> 🎥 Add a link, GIF, or screenshots of the live app here.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account
- Firebase project (Google Auth enabled)
- Razorpay account (API keys)
- OpenRouter API key

### 1. Clone the repository
```bash
git clone https://github.com/PrinceAppdev33/AI-Interview
cd AI-Interview
```

### 2. Install dependencies

**Backend**
```bash
cd backend
npm install
```

**Frontend**
```bash
cd frontend
npm install
```

### 3. Environment Variables

Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FIREBASE_PROJECT_ID=your_firebase_project_id
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Create a `.env` file in the `frontend` directory:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_BACKEND_URL=http://localhost:5000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### 4. Run locally

**Backend**
```bash
cd Backend
npm run dev
```

**Frontend**
```bash
cd Frontend
npm run dev
```

The app will be running at `http://localhost:5173` 🎉

---

## 📂 Project Structure

```
├── Frontend/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── firebase.js
│   └── ...
├── backend/                 # Node/Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middlewares/
│   └── server.js
└── README.md
```

---

## 🔑 Core Modules

| Module | Description |
|---|---|
| **Auth** | Google Sign-In via Firebase, JWT-based session middleware |
| **Resume Analysis** | Multer-based upload, AI parsing via OpenRouter |
| **Interview Engine** | Dynamic question generation for Technical/HR rounds |
| **Feedback System** | AI-evaluated answers with actionable insights |
| **Credit System** | Deducts credits per interview session |
| **Payments** | Razorpay checkout for credit top-ups |
| **History & Reports** | Stores and displays past interview performance |

---

## 🌐 Deployment

This project is deployed as a full-stack app on **[Render](https://render.com)** — both frontend and backend services are hosted and connected via environment-configured API URLs.

---

## 🎓 What This Project Teaches

- Real-world SaaS architecture and backend structuring
- Firebase authentication integration
- Credit-based monetization systems
- Payment gateway integration (Razorpay)
- AI API integration for dynamic content generation
- Full-stack deployment workflows

---
