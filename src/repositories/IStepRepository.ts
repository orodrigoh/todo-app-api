import { Step } from "../entities/Step";

export interface IFindStepProject {
  id_project: string;
  id_step: string;
}

export interface IStepDTO {
  name: string;
  id_project: string;
  id_user: string;
}

export interface IStepRepository {
  save(step: Step): Promise<void>;
  findByProjectId(projectId: string): Promise<Step>;
  findStepProject(data: IFindStepProject): Promise<Step>;
}
