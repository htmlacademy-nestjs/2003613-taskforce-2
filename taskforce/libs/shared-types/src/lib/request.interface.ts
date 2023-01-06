export interface Request {
  id?: number;
  requestText: string;
  costProposal?: number;
  executorId: string;
  taskId: number;
  publishedAt?: Date;
}
