import { Request, Response } from "express";

import { CreateStepUseCase } from "./CreateStepUseCase";

class CreateStepController {
  constructor(private createStepUseCase: CreateStepUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, id_project } = request.body;
    const id_user = request.userId;

    try {
      await this.createStepUseCase.execute({ name, id_project, id_user });
      return response.status(201).send();
    } catch (error) {
      return response.status(201).json({
        message: error.message,
      });
    }
  }
}

export { CreateStepController };
