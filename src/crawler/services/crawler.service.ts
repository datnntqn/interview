import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class CrawlerService {
  constructor(
    private httpService: HttpService,
    private prismaService: PrismaService,
  ) {}

  async crawl(url: string) {
    const body = {
      exclude: [],
    };
    const result = await this.httpService.post(url, body).toPromise();
    const images = result.data?.files;
    await this.prismaService.crawlImage.createMany({
      data: images.map((image) => ({ image })),
    });
  }

  async getAllImages() {
    return this.prismaService.crawlImage.findMany();
  }
}
