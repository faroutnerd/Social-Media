# 🌐 Social Media Application  

[![MERN](https://img.shields.io/badge/MERN-Fullstack-brightgreen?style=for-the-badge&logo=mongodb&logoColor=white)]()  
[![Clerk](https://img.shields.io/badge/Auth-Clerk-blue?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com)  
[![ImageKit](https://img.shields.io/badge/Media-ImageKit-orange?style=for-the-badge&logo=imagekit&logoColor=white)](https://imagekit.io)  
[![Inngest](https://img.shields.io/badge/Workflow-Inngest-purple?style=for-the-badge&logo=githubactions&logoColor=white)](https://www.inngest.com)  
[![Vercel](https://img.shields.io/badge/Hosted%20On-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)  

---

A full-stack **MERN social media application** where users can:  
✔️ Create & view stories  
✔️ Post photos & text  
✔️ Chat in real-time  
✔️ Edit profiles  
✔️ Switch between multiple accounts  
✔️ Store media with ImageKit  
✔️ Authenticate securely with Clerk  

Deployed with **Vercel** and powered by **REST APIs + Inngest** for background jobs.  

---

## 📑 Table of Contents  
- [Features](#-features)  
- [Tech Stack](#-tech-stack)  
- [Live Demo](#-live-demo)  
- [Project Setup](#-project-setup)  
  - [Client Environment](#client-env)  
  - [Server Environment](#server-env)  
- [Screenshots](#-screenshots)  
- [Future Improvements](#-future-improvements)  
- [License](#-license)  

---

## 🚀 Features  
- 📖 **Stories**: Create & view stories  
- 📝 **Posts**: Share photos & text  
- 💬 **Chat**: Real-time messaging  
- 👤 **Profiles**: Edit & update profile  
- 🔑 **Authentication**: Secure login with [Clerk](https://clerk.com/)  
- 🖼 **Image Storage**: Store media via [ImageKit.io](https://imagekit.io/)  
- 🔄 **Multiple Accounts**: Switch between accounts  
- ⚡ **Inngest**: Event-driven workflows  
- 🌐 **REST API**: Express-based backend  
- ☁️ **Hosting**: Deployed on [Vercel](https://vercel.com/)  

---

## 🛠 Tech Stack  

**Frontend:** React.js (Vite), Redux, Clerk  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Media:** ImageKit.io  
**Auth:** Clerk  
**Workflow:** Inngest  
**Hosting:** Vercel  

---

## 🔗 Live Demo  

🌍 **Frontend** → [https://social-media-blond-psi.vercel.app](https://social-media-blond-psi.vercel.app)  
⚙️ **Backend** → [https://social-media-server-rose-xi.vercel.app](https://social-media-server-rose-xi.vercel.app)  

---

## ⚙️ Project Setup  

### 1️⃣ Clone Repo  
```bash
git clone https://github.com/your-username/social-media-app.git
cd social-media-app
```

### 2️⃣ Install Dependencies
Frontend
```bash
cd client
npm install
```
Backend
```bash
cd server
npm install
```
### 🌍 Client Env
```bash
VITE_CLERK_PUBLISHABLE_KEY=
VITE_BASEURL=
```
### 🖥 Server Env
```bash
PORT=
FRONTEND_URL=

MONGODB_URI=

INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=

CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=

# SMTP
SENDER_EMAIL=
SMTP_USER=
SMPT_PASS=
```
### ▶️ Run Locally
Frontend:
```bash
cd client
npm run dev
```
Backend:
```bash
cd server
npm start
```

📸 Screenshots

### 🚧 Future Improvements
🔔 Push notifications
👥 Group chats
🌙 Dark mode
📂 Story highlights







