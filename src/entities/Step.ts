import { uuid } from "uuidv4";

export class Step {
  public readonly id: string;
  public name: string;
  public id_project: string;

  constructor(props: Omit<Step, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
