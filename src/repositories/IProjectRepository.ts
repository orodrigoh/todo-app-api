import { Project } from "../entities/Project";

export interface IFindUserProject {
  id_user: string;
  id_project: string;
}

export interface IProjectDTO {
  title: string;
  id_user: string;
}

export interface IProjectRepository {
  save(project: Project): Promise<void>;
  findById(id: string): Promise<Project>;
  findByUserId(userId: string): Promise<Project[]>;
  findUserProject(data: IFindUserProject): Promise<Project>;
}
