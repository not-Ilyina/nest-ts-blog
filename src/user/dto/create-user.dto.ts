export class CreateUserDto {
  username: string;
  password: string;
  email?: string;
  createTime: Date;
  updateTime: Date;
}
