import { Router } from "express";

import { authController } from "../useCases/Auth";

const authRoutes = Router();

authRoutes.post("/", (request, response) => {
  return authController.handle(request, response);
});

export { authRoutes };
