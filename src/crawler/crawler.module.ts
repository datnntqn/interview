import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CrawlerController } from './controllers/crawler.controller';
import { CrawlerService } from './services';
import { PrismaService } from 'src/common/prisma.service';

@Module({
  imports: [HttpModule],
  providers: [CrawlerService, PrismaService],
  controllers: [CrawlerController],
  exports: [CrawlerService],
})
export class CrawlerModule {}
