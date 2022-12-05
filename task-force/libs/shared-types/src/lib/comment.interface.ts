export interface Comment {
  id?: number;
  authorId: string;
  taskId: number;
  dateCreated?: Date;
  text: string;
}
