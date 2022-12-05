import { uuid } from "uuidv4";

export class Project {
  public readonly id: string;
  public title: string;
  public id_user: string;

  constructor(props: Omit<Project, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
