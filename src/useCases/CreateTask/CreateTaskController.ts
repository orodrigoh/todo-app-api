import { Response, Request } from "express";

import { CreateTaskUseCase } from "./CreateTaskUseCase";

class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, content, time_end, id_step, id_project } = request.body;
    const id_user = request.userId;

    try {
      await this.createTaskUseCase.execute({
        name,
        content,
        time_end,
        id_user,
        id_step,
        id_project,
      });
      return response.status(201).send();
    } catch (error) {
      return response.status(201).json({
        message: error.message,
      });
    }
  }
}

export { CreateTaskController };
