import { Router } from "express";

import { createProjectController } from "../useCases/CreateProject";

const projectsRoutes = Router();

projectsRoutes.post("/", (request, response) => {
  return createProjectController.handle(request, response);
});

export { projectsRoutes };
