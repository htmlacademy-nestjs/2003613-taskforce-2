import { Request } from '@taskforce/shared-types';

export default class RequestEntity implements Request {
  public id: number;
  public requestText: string;
  public costProposal: number;
  public executorId: string;
  public taskId: number;
  public publishedAt: Date;

  constructor(request: Request) {
    this.fillEntity(request);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(request: Request) {
    this.id = request.id;
    this.requestText = request.requestText;
    this.costProposal = request.costProposal;
    this.executorId = request.executorId;
    this.taskId = request.taskId;
    this.publishedAt = request.publishedAt;
  }
}
