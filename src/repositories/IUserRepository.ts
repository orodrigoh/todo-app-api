import { User } from "../entities/User";

export interface IUsersRepository {
  save(user: User): Promise<User>;
  findByEmail(email: string): Promise<User>;
}

export interface IAuthUserDTO {
  email: string;
  password: string;
}

export interface IUserToken {
  user: User;
  token: string;
}
