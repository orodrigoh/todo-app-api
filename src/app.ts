import express from "express";

import { authMiddleware } from "./middlewares/authMiddleware";
import { authRoutes } from "./routes/auth.routes";
import { projectsRoutes } from "./routes/projects.routes";
import { stepsRoutes } from "./routes/steps.routes";
import { tasksRoutes } from "./routes/tasks.routes";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());
app.use("/users", usersRoutes);
app.use("/auth", authRoutes);
app.use("/projects", authMiddleware, projectsRoutes);
app.use("/steps", authMiddleware, stepsRoutes);
app.use("/tasks", authMiddleware, tasksRoutes);

export { app };
