import { City } from '@taskforce/shared-types';
import { Document } from 'mongoose';
import { User, UserRole } from '@taskforce/shared-types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'users',
})
export class UserModel extends Document implements User {

  @Prop({
    required: true,
  })
  public name: string;

  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
    type: String,
    enum: City,
  })
  public city: City;

  @Prop({
    required: true,
  })
  public passwordHash: string;

  @Prop({
    required: true,
  })
  public dateBirth: Date;

  @Prop({
    required: true,
    type: String,
    enum: UserRole,
  })
  public role: UserRole;

  @Prop()
  public avatar?: string;

  @Prop()
  public info?: string;

  @Prop()
  public taskPublishedCount?: number;

  @Prop()
  public taskNewCount?: number;

  @Prop()
  public occupations?: string[];

  @Prop()
  public rating?: number;

  @Prop()
  public rank?: number;

  @Prop()
  public taskDoneCount?: number;

  @Prop()
  public taskFailedCount?: number;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
