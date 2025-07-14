import http from "http";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConnect.js";
import TaskRouter from "./router/task.routes.js";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/tasks", TaskRouter);

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
