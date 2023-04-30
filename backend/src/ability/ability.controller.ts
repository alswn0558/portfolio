import { Controller, Get, Body, Post } from '@nestjs/common';
import { AbilityService } from './ability.service';
import { ability } from './schemas/ability.schema';

@Controller('ability')
export class AbilityController {
  constructor(private readonly abilityService: AbilityService) {}

  @Get()
  findOne(): Promise<ability> {
    return this.abilityService.findOne();
  }

  @Post()
  async create(@Body() ability): Promise<ability> {
    return this.abilityService.create(ability);
  }
}
