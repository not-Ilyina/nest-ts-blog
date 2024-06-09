import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    createUserDto.createTime = createUserDto.updateTime = new Date();
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    return await this.userRepository.find({
      where: {},
      order: {
        updateTime: 'DESC',
      },
    });
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({
      where: { id },
    });
  }

  async update(updateUserDto: UpdateUserDto) {
    updateUserDto.updateTime = new Date();
    const { id } = updateUserDto;
    console.log('this', this);
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    return await this.userRepository.delete(id);
  }
}
