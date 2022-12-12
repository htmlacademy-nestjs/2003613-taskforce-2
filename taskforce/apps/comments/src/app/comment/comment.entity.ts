import { Comment } from '@taskforce/shared-types';

export default class CommentEntity implements Comment {
  public id: number;
  public authorId: string;
  public taskId: number;
  public dateCreated: Date;
  public text: string;

  constructor(comment:Comment) {
    this.fillEntity(comment);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(comment: Comment) {
  this.id = comment?.id;
  this.authorId = comment?.authorId;
  this.dateCreated = new Date();
  this.text = comment?.text;
  }
}
