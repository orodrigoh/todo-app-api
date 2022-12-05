import { Router } from "express";

import { createStepController } from "../useCases/CreateStep";

const stepsRoutes = Router();

stepsRoutes.post("/", (request, response) => {
  return createStepController.handle(request, response);
});

export { stepsRoutes };
