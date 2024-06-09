import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: number;
  username: string;
  password: string;
  email?: string;
  ctime: Date;
  mtime: Date;
}
