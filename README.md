# 🏋️‍♀️ FitTech Hub

AI-powered health and fitness platform that helps users build personalized workout plans, track progress, and generate data-driven recommendations — all in one place.

---

## 🚀 Key Features
- **AI-Generated Plans** – Uses OpenAI API to suggest personalized daily workouts.
- **Progress Tracking** – Log workouts, sets, and performance analytics.
- **Secure Auth** – JWT-based authentication with role-based access control.
- **Cloud Storage** – Stores media and user data securely in **AWS S3**.
- **Admin Dashboard** – Manage users, workouts, and analytics insights.
- **Scalable Stack** – Designed with modular microservice-friendly architecture.

---

## 🧩 Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React · TypeScript · Tailwind CSS · Vite |
| **Backend** | Node.js · Express · REST APIs |
| **Database** | MongoDB · Mongoose |
| **AI Integration** | OpenAI API |
| **Cloud/Infra** | AWS Lambda · S3 · CloudFront |
| **DevOps** | Docker · GitHub Actions CI |
| **Testing** | Jest · Supertest |

---

## ⚙️ Getting Started

```bash
# Clone the repo
git clone https://github.com/SupreetP/fittech-hub.git
cd fittech-hub

# Install dependencies
npm install

# Run backend
cd server && npm start

# Run frontend
cd client && npm run dev


🧠 Architecture Overview
fittech-hub/
 ├── client/      → React frontend
 ├── server/      → Express backend
 ├── shared/      → Common interfaces & constants

