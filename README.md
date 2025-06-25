
# 💬 ChatZone – Real-Time Chat Application

A real-time chat application built using **React** on the frontend and **Node.js + Express + Socket.IO** on the backend. Users can send and receive messages instantly, view chat history, and enjoy a clean, responsive UI.

---

## 🚀 Features

- ✅ Real-time messaging using WebSocket (Socket.IO)
- ✅ View chat history on new connection
- ✅ Basic user login (username only)
- ✅ Responsive design (mobile + desktop)
- ✅ User avatar icons next to messages



## 🧱 Tech Stack



 Frontend   -  React, Tailwind CSS, Vite           
 Backend   -  Node.js, Express.js, Socket.IO      
 Styling   -  Tailwind CSS                        



## 📁 Folder Structure

```
chatzone/
├── backend/
│   └── server.js               
├── frontend/
│   ├── src/
│   │   ├── App.jsx            
│   │   └── components/
│   │       ├── ChatBox.jsx     
│   │       ├── Message.jsx     
│   │       └── InputBar.jsx    
│   └── index.html
└── README.md
```



## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/dheeraj2488/chatzone.git
cd chatzone
```

### 2. Backend Setup

```bash
cd backend
npm install
node server.js
```

Server will start on `http://localhost:7001`.

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Frontend will start on `http://localhost:5173` (or similar).

---

## 🔄 Application Flow

1. User enters a username and joins the chat.
2. Server sends them the existing chat history.
3. Messages are sent and broadcasted to all connected users in real-time.
4. Chat UI displays messages with avatars and timestamps.

---


## ✨ Future Improvements

-  Store chat messages in MongoDB
-  Private chat rooms or groups
-  JWT-based login authentication

---
