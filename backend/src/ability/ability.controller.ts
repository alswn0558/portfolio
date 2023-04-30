import { Controller, Get, Param } from '@nestjs/common';
import { AbilityService } from './ability.service';

@Controller('ability')
export class AbilityController {
  constructor(private readonly abilityService: AbilityService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.abilityService.findOne(+id);
  }
}
