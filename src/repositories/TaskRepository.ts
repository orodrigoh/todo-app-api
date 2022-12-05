import { prismaClient } from "../database/prismaClient";
import { Task } from "../entities/Task";
import { ITaskRepository } from "./ITaskRepository";

class TaskRepository implements ITaskRepository {
  async getOrder(id_step: string): Promise<number> {
    const taskCount = await prismaClient.task.count({
      where: {
        id_step,
      },
    });

    return taskCount;
  }
  async save(task: Task): Promise<void> {
    await prismaClient.task.create({
      data: {
        id: task.id,
        name: task.name,
        content: task.content,
        order: task.order,
        time_end: task.time_end,
        id_step: task.id_step,
        id_project: task.id_project,
        id_user: task.id_user,
      },
    });
  }
}

export { TaskRepository };
