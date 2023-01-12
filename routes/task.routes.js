import express from "express";
import { addTaks, deleteTask, editTask, loadTask } from "../controllers/task.controller.js";

const route = express.Router();

route.get("/task", loadTask);
route.post("/task", addTaks);
route.delete("/task/:id", deleteTask);
route.put("/task/:id", editTask);

export default route;
