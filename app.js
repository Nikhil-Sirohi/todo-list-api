const express = require("express");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todos");

const app = express();

app.use(express.json());

connectDB();

app.use("/api", todoRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("App is listening on PORT:5000");
});
