import { Injectable } from '@nestjs/common';

import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
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
