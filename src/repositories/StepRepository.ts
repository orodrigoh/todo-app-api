import { prismaClient } from "../database/prismaClient";
import { Step } from "../entities/Step";
import { IFindStepProject, IStepRepository } from "./IStepRepository";

class StepRepository implements IStepRepository {
  async save(step: Step): Promise<void> {
    await prismaClient.step.create({
      data: {
        id: step.id,
        name: step.name,
        id_project: step.id_project,
      },
    });
  }
  async findStepProject(data: IFindStepProject): Promise<Step> {
    const step = await prismaClient.step.findFirst({
      where: {
        id: data.id_step,
        id_project: data.id_project,
      },
    });
    return step;
  }

  findByProjectId(projectId: string): Promise<Step> {
    throw new Error("Method not implemented.");
  }
}

export { StepRepository };
