import { ProjectRepository } from "../../repositories/ProjectRepository";
import { StepRepository } from "../../repositories/StepRepository";
import { TaskRepository } from "../../repositories/TaskRepository";
import { CreateTaskController } from "./CreateTaskController";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

const stepRepository = new StepRepository();
const projectRepository = new ProjectRepository();

const taskRepository = new TaskRepository();
const createTaskUseCase = new CreateTaskUseCase(
  taskRepository,
  projectRepository,
  stepRepository
);
const createTaskController = new CreateTaskController(createTaskUseCase);

export { createTaskController };
