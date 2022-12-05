import { ProjectRepository } from "../../repositories/ProjectRepository";
import { CreateProjectController } from "./CreateProjectController";
import { CreateProjectUseCase } from "./CreateProjectUseCase";

const projectRepository = new ProjectRepository();
const createProjectUseCase = new CreateProjectUseCase(projectRepository);
const createProjectController = new CreateProjectController(
  createProjectUseCase
);

export { createProjectController };
