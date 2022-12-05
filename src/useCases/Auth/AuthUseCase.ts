import bcrypt from "bcrypt";

import {
  IAuthUserDTO,
  IUsersRepository,
  IUserToken,
} from "../../repositories/IUserRepository";
import { generateToken } from "../../utils/generateToken";

class AuthUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute({ email, password }: IAuthUserDTO): Promise<IUserToken> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    console.log(user);

    if (!isValidPassword) {
      throw new Error("Incorrect password");
    }

    user.password = undefined;

    const token = generateToken({ id: user.id });

    return { user, token };
  }
}
export { AuthUseCase };
