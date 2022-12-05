import { Task } from "../entities/Task";

export interface ITaskRepository {
  save(task: Task): Promise<void>;
  getOrder(id_step: string): Promise<number>;
}

export interface ITaskDTO {
  name: string;
  content: string;
  time_end: Date;
  id_step: string;
  id_project: string;
  id_user: string;
}
