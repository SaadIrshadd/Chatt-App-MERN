# ✨ Full Stack Realtime Chat App ✨

### 🔗 Live Demo  
https://chatt-app-mern.vercel.app

## 📸 Screenshot
<img width="1366" height="768" alt="Chatty" src="https://github.com/user-attachments/assets/f6d9fc08-36d9-4f36-81c7-472f3ccd0a89" />

---

## 🔥 Highlights
- 🌟 Tech stack: MERN + Socket.io + TailwindCSS + Daisy UI  
- 🎃 Authentication & Authorization with JWT  
- 👾 Real-time messaging with Socket.io  
- 🚀 Online user status  
- 👌 Global state management with Zustand  
- 🐞 Error handling both on server & client  
- ⭐ Deployment for FREE  
- ⏳ And much more!  

---

### Setup .env file (backend)

```js
MONGODB_URI=...
PORT=5001
JWT_SECRET=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

NODE_ENV=development
```
---

## Main Dependencies

### Backend
```js
express
mongoose
cors
dotenv
bcryptjs
jsonwebtoken
socket.io
multer
cloudinary
nodemon
```

### Frontend
```js
react
react-router-dom
axios
zustand
socket.io-client
tailwindcss
daisyui
```
### Clone and run

```shell
git clone <repo-url>
cd project
```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm start
```

### Folder Structure
```js
├── .gitignore
├── Readme.md
├── backend
    ├── package-lock.json
    ├── package.json
    └── src
    │   ├── controllers
    │       ├── auth.controller.js
    │       └── message.controller.js
    │   ├── index.js
    │   ├── lib
    │       ├── cloudinary.js
    │       ├── db.js
    │       ├── socket.js
    │       └── utils.js
    │   ├── middleware
    │       └── auth.middleware.js
    │   ├── models
    │       ├── message.model.js
    │       └── user.model.js
    │   ├── routes
    │       ├── auth.route.js
    │       └── message.route.js
    │   └── seeds
    │       └── user.seed.js
├── frontend
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── avatar.png
    │   ├── msgSquare.svg
    │   └── vite.svg
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── components
    │   │   ├── AuthImagePattern.jsx
    │   │   ├── ChatContainer.jsx
    │   │   ├── ChatHeader.jsx
    │   │   ├── MessageInput.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── NoChatSelected.jsx
    │   │   └── Sidebar.jsx
    │   ├── constants
    │   │   └── index.js
    │   ├── index.css
    │   ├── lib
    │   │   ├── axios.js
    │   │   └── utils.js
    │   ├── main.jsx
    │   ├── pages
    │   │   ├── HomePage.jsx
    │   │   ├── LoginPage.jsx
    │   │   ├── ProfilePage.jsx
    │   │   ├── SettingsPage.jsx
    │   │   └── SignUpPage.jsx
    │   ├── skeletons
    │   │   ├── MessageSkeleton.jsx
    │   │   └── SidebarSkeleton.jsx
    │   └── store
    │   │   ├── useAuthStore.js
    │   │   ├── useChatStore.js
    │   │   └── useThemeStore.js
    ├── vercel.json
    └── vite.config.js
├── package-lock.json
└── package.json
```
