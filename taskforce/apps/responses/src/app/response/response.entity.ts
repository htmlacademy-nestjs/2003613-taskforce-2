import { Response } from '@taskforce/shared-types';

export default class ResponseEntity implements Response {
  public id: number;
  public text: string;
  public executorId: string;
  public clientId: string;
  public taskId: number;
  public evaluation: number;

  constructor(response:Response) {
    this.fillEntity(response);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(response: Response) {
    this.id = response?.id;
    this.text = response?.text;
    this.executorId = response?.executorId;
    this.clientId = response?.clientId;
    this.taskId = response?.taskId;
    this.evaluation = response?.evaluation;
  }
}
