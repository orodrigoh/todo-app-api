import { UserRepository } from "../../repositories/UserRepository";
import { AuthController } from "./AuthController";
import { AuthUseCase } from "./AuthUseCase";

const userRepository = new UserRepository();
const authUseCase = new AuthUseCase(userRepository);
const authController = new AuthController(authUseCase);

export { authController };
