import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  findMany = this.prismaService.user.findMany;
  findUnique = this.prismaService.user.findUnique;
  upsert = this.prismaService.user.upsert;

  async validateUsername(username: string): Promise<boolean> {
    const profile = await this.prismaService.profile.findUnique({
      where: { username },
    });
    return !!profile;
  }
}
