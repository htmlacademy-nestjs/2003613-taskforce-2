export interface Request {
  id?: number;
  text: string;
  costProposal?: number;
  executorId: string;
  taskId: number;
  dateCreated: Date;
}
