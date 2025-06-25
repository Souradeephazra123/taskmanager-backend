import express from "express";
import { addTask, deleteTask, getAllTasks, getTaskById, updateTask } from "../controller/task.controller.js";
const TaskRouter = express.Router();


TaskRouter.get("/",getAllTasks);
TaskRouter.get("/:id", getTaskById);
TaskRouter.post("/", addTask);
TaskRouter.put("/:id", updateTask);
TaskRouter.delete("/:id", deleteTask);

export default TaskRouter;