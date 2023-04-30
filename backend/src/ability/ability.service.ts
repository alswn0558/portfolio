import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ability, abilityDocument } from './schemas/ability.schema';

@Injectable()
export class AbilityService {
  constructor(
    @InjectModel(ability.name) private abilityModel: Model<abilityDocument>,
  ) {}

  async findOne(): Promise<ability> {
    const response = await this.abilityModel.findOne({ name: 'minju' }).exec();
    return response;
  }

  async create(ability): Promise<ability> {
    const response = await this.abilityModel.create(ability);
    return response;
  }
}
