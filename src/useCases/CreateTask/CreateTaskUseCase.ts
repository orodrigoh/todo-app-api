import { Task } from "../../entities/Task";
import { IProjectRepository } from "../../repositories/IProjectRepository";
import { IStepRepository } from "../../repositories/IStepRepository";
import { ITaskDTO, ITaskRepository } from "../../repositories/ITaskRepository";

class CreateTaskUseCase {
  constructor(
    private taskRepository: ITaskRepository,
    private projectRepository: IProjectRepository,
    private stepRepository: IStepRepository
  ) {}

  async execute(data: ITaskDTO): Promise<void> {
    const order = await this.taskRepository.getOrder(data.id_step);

    const task = {
      name: data.name,
      content: data.content,
      time_end: data.time_end,
      id_step: data.id_step,
      id_project: data.id_project,
      id_user: data.id_user,
      order,
    };

    const projectExists = await this.projectRepository.findUserProject({
      id_user: data.id_user,
      id_project: data.id_project,
    });

    if (!projectExists) {
      throw new Error("Project not found for User");
    }

    const stepExists = await this.stepRepository.findStepProject({
      id_step: data.id_step,
      id_project: data.id_project,
    });

    if (!stepExists) {
      throw new Error("Step not found in Project");
    }

    const newTask = new Task(task);

    await this.taskRepository.save(newTask);
  }
}

export { CreateTaskUseCase };
