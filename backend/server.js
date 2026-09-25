require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const weatherRoutes = require("./routes/weatherRoutes");

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/weather", weatherRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "WeatherVerse API is running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
