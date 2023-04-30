import { Module } from '@nestjs/common';
import { AbilityService } from './ability.service';
import { AbilityController } from './ability.controller';

@Module({
  controllers: [AbilityController],
  providers: [AbilityService],
})
export class AbilityModule {}
