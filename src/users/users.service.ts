import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  findMany = this.prismaService.user.findMany;
  findUnique = this.prismaService.user.findUnique;
  findUniqueOrThrow = this.prismaService.user.findUniqueOrThrow;
  create = this.prismaService.user.create;

  async validateUsername(username: string): Promise<boolean> {
    const user = await this.prismaService.user.findUnique({
      where: { username },
    });
    return !user;
  }
}
