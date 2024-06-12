import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from '../dto/auth.dto';
import { PrismaService } from 'src/common/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(body: LoginDto) {
    const user = await this.prismaService.user.findFirst({
      where: {
        username: body.username,
      },
    });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    if (user.password !== body.password) {
      throw new UnauthorizedException('Password not match');
    }
    const payload = {
      username: user.username,
      id: user.id,
    };
    return {
      access_token: await this.jwtService.sign(payload),
    };
  }
}
