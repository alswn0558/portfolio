import { Module } from '@nestjs/common';
import { MbtiService } from './mbti.service';
import { MbtiController } from './mbti.controller';
import { mbti, mbtiSchema } from './schemas/mbti.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: mbti.name, schema: mbtiSchema }]),
  ],
  controllers: [MbtiController],
  providers: [MbtiService],
})
export class MbtiModule {}
