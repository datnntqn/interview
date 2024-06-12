import { Controller, Get, UseGuards } from '@nestjs/common';
import { CrawlerService } from '../services';
import { CRAWL_URL } from 'src/common/constant';
import { AuthGuard } from 'src/auth/const/guards/auth.guard';

@Controller('crawler')
export class CrawlerController {
  constructor(private readonly crawlerService: CrawlerService) {}

  @Get('crawl')
  @UseGuards(AuthGuard)
  async crawl() {
    const url = CRAWL_URL;
    await this.crawlerService.crawl(url);
    return 'ok';
  }

  @Get('images')
  @UseGuards(AuthGuard)
  async getAllImages() {
    return this.crawlerService.getAllImages();
  }
}
