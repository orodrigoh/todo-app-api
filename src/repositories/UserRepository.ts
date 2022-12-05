import { prismaClient } from "../database/prismaClient";
import { User } from "../entities/User";
import { IUsersRepository } from "./IUserRepository";

class UserRepository implements IUsersRepository {
  async save(data: User): Promise<User> {
    const createUser = await prismaClient.user.create({
      data: {
        id: data.id,
        email: data.email,
        name: data.name,
        password: data.password,
      },
    });
    return createUser;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await prismaClient.user.findFirst({
      where: { email },
    });
    return user;
  }
}

export { UserRepository };
