import * as bcrypt from 'bcrypt';
import { BadRequestException, Injectable } from '@nestjs/common';

import { UsersService } from './../users/users.service';
import { SigninInput, SignupInput } from './dto';
import { AuthResponse } from './types';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signup(signupInput: SignupInput): Promise<AuthResponse> {
    const user = await this.usersService.create(signupInput);
    // TODO: token
    const token = '123';
    return { user, token };
  }

  async signin({ email, password }: SigninInput): Promise<AuthResponse> {
    const user = await this.usersService.findOneByEmail(email);
    if (!bcrypt.compareSync(password, user.password)) {
      throw new BadRequestException('Email / Password do not match');
    }
    // TODO: token
    const token = '123';
    return { user, token };
  }
}
