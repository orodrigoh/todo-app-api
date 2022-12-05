import { Step } from "../../entities/Step";
import { IProjectRepository } from "../../repositories/IProjectRepository";
import { IStepDTO, IStepRepository } from "../../repositories/IStepRepository";

class CreateStepUseCase {
  constructor(
    private stepRepository: IStepRepository,
    private projectRepository: IProjectRepository
  ) {}

  async execute(data: IStepDTO): Promise<void> {
    const projectExists = await this.projectRepository.findUserProject({
      id_user: data.id_user,
      id_project: data.id_project,
    });

    if (!projectExists) {
      throw new Error("Project not found for User");
    }

    const newStep = new Step(data);

    await this.stepRepository.save(newStep);
  }
}

export { CreateStepUseCase };
