import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUserMainPage(): Promise<string> {
    return 'User Main Page';
  }

  async signUp(
    email: string,
    password: string,
    nickname: string,
  ): Promise<true> {
    const hashedPassword = await bcrypt.hash(password, 10);

    const isCreated = await this.userRepository.createUser(
      email,
      hashedPassword,
      nickname,
    );

    return isCreated;
  }
}
