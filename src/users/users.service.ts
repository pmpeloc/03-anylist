import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  // NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { SignupInput } from 'src/auth/dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private logger = new Logger('UsersService');

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(signupInput: SignupInput): Promise<User> {
    try {
      const newUser = await this.usersRepository.create({
        ...signupInput,
        password: bcrypt.hashSync(signupInput.password, 10),
      });
      return await this.usersRepository.save(newUser);
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async findAll(): Promise<User[]> {
    return [];
  }

  async findOneByEmail(email: string): Promise<User> {
    try {
      return await this.usersRepository.findOneByOrFail({ email });
    } catch (error) {
      // throw new NotFoundException(`${email} not found`);
      this.handleDBErrors({
        code: 'error-001',
        detail: `${email} not found`,
      });
    }
  }

  async block(id: string): Promise<User> {
    const newUser = new User();
    return newUser;
  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail.replace('Key ', ''));
    }
    if (error.code === 'error-001') {
      throw new BadRequestException(error.detail.replace('Key ', ''));
    }
    this.logger.error(error);
    throw new InternalServerErrorException('Please check server logs');
  }
}
