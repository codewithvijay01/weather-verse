# 🌦️ WeatherVerse

A full-stack weather application built with **React, Node.js, Express, MongoDB, and OpenWeather API**.

WeatherVerse allows users to search for weather information by city or use their current location to get real-time weather data.

## 🚀 Live Demo

**Live Website:**
https://weather-verse-beige.vercel.app/

**Backend API:**
https://weather-verse-backend.onrender.com/

**GitHub Repository:**
https://github.com/codewithvijay01/weather-verse

---

## ✨ Features

- 🌍 Search weather by city name
- 📍 Get weather using current location
- 🌡️ Current temperature
- 🌡️ Feels-like temperature
- 💧 Humidity information
- 💨 Wind speed
- ☁️ Weather condition and icon
- ⚡ Real-time weather data from OpenWeather API
- 🔐 User authentication with JWT
- 🔒 Protected backend routes
- 🗄️ MongoDB database integration
- 📱 Responsive design
- 🚀 Live deployment with Vercel and Render

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript
- CSS
- Axios

### Backend

- Node.js
- Express.js
- Axios
- JWT
- bcryptjs
- CORS
- dotenv

### Database

- MongoDB
- Mongoose

### API

- OpenWeather API

### Deployment

- Vercel — Frontend
- Render — Backend
- MongoDB Atlas — Database

---

## 📂 Project Structure

```text
weather-verse/
│
├── frontend/
│   ├── src/
│   │   ├── services/
│   │   │   └── weatherApi.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── .env
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── weatherController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── WeatherHistory.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── protectedRoutes.js
│   │   └── weatherRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

Follow these steps to run WeatherVerse locally.

### 1. Clone the repository

```bash
git clone https://github.com/codewithvijay01/weather-verse.git
```

### 2. Go to the project directory

```bash
cd weather-verse
```

---

## 🔧 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENWEATHER_API_KEY=your_openweather_api_key
```

Start the backend:

```bash
npm start
```

The backend will run on:

```text
http://localhost:5000
```

---

## 💻 Frontend Setup

Open another terminal and run:

```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend` folder:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

The application will run on:

```text
http://localhost:5173
```

---

## 🔐 Authentication

WeatherVerse includes a JWT-based authentication system.

### Available Authentication Endpoints

```text
POST /api/auth/register
POST /api/auth/login
```

### Protected Endpoint

```text
GET /api/protected/profile
```

Protected routes require a valid JWT token in the request:

```text
Authorization: Bearer <token>
```

---

## 🌤️ Weather API

WeatherVerse uses the **OpenWeather API** to retrieve real-time weather information.

### Weather Endpoint

```text
GET /api/weather?city=Delhi
```

### Location-based Weather

```text
GET /api/weather?lat=28.6139&lon=77.2090
```

The API returns information such as:

- City
- Country
- Temperature
- Feels-like temperature
- Humidity
- Wind speed
- Weather description
- Weather icon

---

## 🚀 Deployment

WeatherVerse is deployed using:

### Frontend

**Vercel**

https://weather-verse-beige.vercel.app/

### Backend

**Render**

https://weather-verse-backend.onrender.com/

### Database

**MongoDB Atlas**

The production backend connects securely to MongoDB Atlas using environment variables.

---

## 🔒 Environment Variables

Environment variables are used to keep sensitive credentials outside the source code.

### Backend

```env
PORT=
MONGO_URI=
JWT_SECRET=
OPENWEATHER_API_KEY=
```

### Frontend

```env
VITE_API_URL=
```

> Never commit `.env` files or API keys to GitHub.

---

## 📸 Screenshots

Add screenshots of the application here.

Example:

```text
screenshots/
├── home.png
├── weather-result.png
└── mobile-view.png
```

---

## 🔮 Future Improvements

Some possible future improvements:

- 📅 Multi-day weather forecast
- ⭐ Favorite cities
- 🕘 Weather search history
- 🌙 Dark mode
- 🌡️ Temperature unit conversion
- 📊 Weather charts
- 🔔 Weather alerts
- 👤 Complete user dashboard

---

## 📚 What I Learned

While building WeatherVerse, I practiced:

- Building a React frontend with Vite
- Creating REST APIs with Express.js
- Connecting Node.js with MongoDB
- Working with external APIs
- Implementing JWT authentication
- Password hashing with bcrypt
- Handling environment variables
- Building protected routes
- Connecting frontend and backend
- Deploying a full-stack application
- Using Git and GitHub for version control

---

## 👨‍💻 Author

**Vijay Yadav**

GitHub:
https://github.com/codewithvijay01

---

## 📄 License

This project is available for educational and personal portfolio purposes.

---

⭐ If you found this project interesting, feel free to explore the repository.
