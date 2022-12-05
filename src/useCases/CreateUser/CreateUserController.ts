import bcrypt from "bcrypt";
import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const data = await this.createUserUseCase.execute({
        name,
        email,
        password: hashedPassword,
      });

      data.user.password = undefined;

      return response.status(201).json(data);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}

export { CreateUserController };
