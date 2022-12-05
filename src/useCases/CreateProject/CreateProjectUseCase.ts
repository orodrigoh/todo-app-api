import { Project } from "../../entities/Project";
import {
  IProjectDTO,
  IProjectsRepository,
} from "../../repositories/IProjectRepository";

class CreateProjectUseCase {
  constructor(private projectRepository: IProjectsRepository) {}

  async execute(data: IProjectDTO): Promise<void> {
    const project = new Project(data);

    await this.projectRepository.save(project);
  }
}

export { CreateProjectUseCase };
