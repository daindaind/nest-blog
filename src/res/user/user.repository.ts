import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(
    email: string,
    hashedPassword: string,
    nickname: string,
  ): Promise<true> {
    await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        nickname,
      },
    });
    return true;
  }
}
