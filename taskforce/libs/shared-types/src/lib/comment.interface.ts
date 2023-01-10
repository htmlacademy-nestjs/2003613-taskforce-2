export interface Comment {
  id?: number;
  authorId: string;
  taskId: number;
  publishAt?: Date;
  text: string;
}
