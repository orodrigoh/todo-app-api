import { Router } from "express";

import { createTaskController } from "../useCases/CreateTask";

const tasksRoutes = Router();

tasksRoutes.post("/", (request, response) => {
  return createTaskController.handle(request, response);
});

export { tasksRoutes };
