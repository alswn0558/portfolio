import { Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { mbti, mbtiDocument } from './schemas/mbti.schema';

@Injectable()
export class MbtiService {
  constructor(@InjectModel(mbti.name) private mbtiModel: Model<mbtiDocument>) {}

  async findOne(): Promise<mbti> {
    const response = await this.mbtiModel.findOne({ name: 'minju' }).exec();
    return response;
  }

  async create(mbti): Promise<mbti> {
    const response = await this.mbtiModel.create(mbti);
    return response;
  }
}
