import http from "http";
import express from "express";
import TaskRouter from "./router/task.routes.js";
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/", TaskRouter);

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
