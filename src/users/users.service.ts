import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SignupInput } from 'src/auth/dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(signupInput: SignupInput): Promise<User> {
    try {
      const newUser = await this.usersRepository.create(signupInput);
      return await this.usersRepository.save(newUser);
    } catch (error) {
      console.error(error);
      throw new BadRequestException(`Error...`);
    }
  }

  async findAll(): Promise<User[]> {
    return [];
  }

  async findOne(id: string): Promise<User> {
    const newUser = new User();
    return newUser;
  }

  async block(id: string): Promise<User> {
    const newUser = new User();
    return newUser;
  }
}
