import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MbtiService } from './mbti.service';
import { mbti } from './schemas/mbti.schema';

@Controller('mbti')
export class MbtiController {
  constructor(private readonly mbtiService: MbtiService) {}

  @Get()
  findOne(): Promise<mbti> {
    return this.mbtiService.findOne();
  }

  @Post()
  async create(@Body() mbti): Promise<mbti> {
    return this.mbtiService.create(mbti);
  }
}
