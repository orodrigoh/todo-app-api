import { uuid } from "uuidv4";

export class Task {
  public readonly id: string;
  public name: string;
  public content: string;
  public time_end: Date;
  public order: number;
  public id_step: string;
  public id_project: string;
  public id_user: string;

  constructor(props: Omit<Task, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
