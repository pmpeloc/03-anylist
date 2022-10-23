import { Injectable } from '@nestjs/common';

import { UsersService } from './../users/users.service';
import { SignupInput } from './dto';
import { AuthResponse } from './types';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signup(signupInput: SignupInput): Promise<AuthResponse> {
    const user = await this.usersService.create(signupInput);
    const token = '123';
    return { user, token };
  }
}
