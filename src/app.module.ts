import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { CrawlerModule } from './crawler/crawler.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/const/jwt.constant';
import { AuthGuard } from './auth/const/guards/auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    HttpModule,
    CrawlerModule,
    AuthModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
