import { User } from "../../entities/User";
import {
  IUsersRepository,
  IUserToken,
} from "../../repositories/IUserRepository";
import { generateToken } from "../../utils/generateToken";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserRequestDTO): Promise<IUserToken> {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error("User Already Exists");
    }
    const user = new User(data);
    const newUser = await this.usersRepository.save(user);

    const token = generateToken({ id: newUser.id });

    return {
      user: newUser,
      token,
    };
  }
}

export { CreateUserUseCase };
