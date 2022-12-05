import { ProjectRepository } from "../../repositories/ProjectRepository";
import { StepRepository } from "../../repositories/StepRepository";
import { CreateStepController } from "./CreateStepController";
import { CreateStepUseCase } from "./CreateStepUseCase";

const stepRepository = new StepRepository();
const projectRepository = new ProjectRepository();

const createStepUseCase = new CreateStepUseCase(
  stepRepository,
  projectRepository
);

const createStepController = new CreateStepController(createStepUseCase);

export { createStepController };
