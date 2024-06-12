import { Module } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { AuthService } from './service/auth.service';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [],
  providers: [PrismaService, AuthService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
