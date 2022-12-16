import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import * as dayjs from 'dayjs';
import { UserAge } from '../user/user.constant';

@ValidatorConstraint({ name: 'Invalid Age', async: false })
export class AgeValidator implements ValidatorConstraintInterface {
  validate(dateBirth: string) {
    const now = dayjs();
    return now.diff(dateBirth,'year') >= UserAge.Min ;
  }
}
