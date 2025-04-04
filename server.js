const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.options('*', cors()); // Enable preflight for all routes
app.use(express.json()); // Allow JSON request bodies

// Route imports
const roomsRoute = require("./routes/roomsRoute");
const usersRoute = require("./routes/usersRoute");
const bookingsRoute = require("./routes/bookingsRoute");

// DB config (ensure this connects to MongoDB)
const dbConfig = require("./db");

// Route registration
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingsRoute);

// Root test route (optional)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server start
const port = 5000;
app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
