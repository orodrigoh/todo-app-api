import { Request, Response } from "express";

import { AuthUseCase } from "./AuthUseCase";

class AuthController {
  constructor(private authUseCase: AuthUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
      const { user, token } = await this.authUseCase.execute({
        email,
        password,
      });

      return response.status(200).json({ user, token });
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}

export { AuthController };
