import { prismaClient } from "../database/prismaClient";
import { Project } from "../entities/Project";
import { IFindUserProject, IProjectsRepository } from "./IProjectRepository";

class ProjectRepository implements IProjectsRepository {
  async findByUserId(userId: string): Promise<Project[]> {
    const projects = await prismaClient.project.findMany({
      where: { id_user: userId },
    });
    return projects;
  }

  async findUserProject(data: IFindUserProject): Promise<Project> {
    const project = await prismaClient.project.findFirst({
      where: {
        id_user: data.id_user,
        id: data.id_project,
      },
    });
    return project;
  }

  async save(project: Project): Promise<void> {
    await prismaClient.project.create({
      data: {
        id: project.id,
        id_user: project.id_user,
        title: project.title,
      },
    });
  }
  async findById(id: string): Promise<Project> {
    const project = await prismaClient.project.findFirst({
      where: { id },
    });
    return project;
  }
}

export { ProjectRepository };
