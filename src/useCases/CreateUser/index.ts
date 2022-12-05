import { UserRepository } from "../../repositories/UserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const usersRepository = new UserRepository();

const createUserUseCase = new CreateUserUseCase(usersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
