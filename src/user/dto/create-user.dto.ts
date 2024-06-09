export class CreateUserDto {
  username: string;
  password: string;
  email?: string;
  ctime: Date;
  mtime: Date;
}
