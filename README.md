# 🏋️‍♀️ FitTech Hub
A full-stack AI-powered **health and fitness platform** that delivers personalized workout plans, tracks user progress, and recommends optimized routines based on activity data.

---

## 🚀 Features
- **AI-Powered Recommendations** — OpenAI API suggests daily workouts based on progress.
- **Secure Authentication** — JWT-based login & role-based access.
- **Workout Tracking** — Log exercises, sets, and performance analytics.
- **Custom Plans** — Create and modify fitness plans per goal (muscle gain, endurance, etc.).
- **Cloud Integration** — User data and media stored securely in AWS S3.
- **Admin Dashboard** — Manage users, plans, and analytics.

---

## 🧩 Tech Stack
| Layer | Technologies |
|:------|:--------------|
| **Frontend** | React, TypeScript, Tailwind CSS, Vite |
| **Backend** | Node.js, Express, REST API |
| **Database** | MongoDB + Mongoose |
| **AI Integration** | OpenAI API |
| **Cloud & Infra** | AWS (Lambda, S3, CloudFront) |
| **DevOps** | Docker, GitHub Actions CI |
| **Testing** | Jest & Supertest |

---

## ⚙️ Installation
```bash
# Clone
git clone https://github.com/SupreetP/fittech-hub.git
cd fittech-hub

# Install dependencies
npm install

# Run backend
cd server && npm start

# Run frontend
cd client && npm run dev
