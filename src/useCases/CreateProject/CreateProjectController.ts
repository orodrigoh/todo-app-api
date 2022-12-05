import { Request, Response } from "express";

import { CreateProjectUseCase } from "./CreateProjectUseCase";

class CreateProjectController {
  constructor(private createProjectUseCase: CreateProjectUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;
    const id_user = request.userId;

    try {
      await this.createProjectUseCase.execute({ title, id_user });
      return response.status(201).send();
    } catch (error) {
      return response.status(201).json({
        message: error.message,
      });
    }
  }
}

export { CreateProjectController };
