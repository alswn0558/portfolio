import { Module } from '@nestjs/common';
import { AbilityService } from './ability.service';
import { AbilityController } from './ability.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ability, abilitySchema } from './schemas/ability.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ability.name, schema: abilitySchema }]),
  ],
  controllers: [AbilityController],
  providers: [AbilityService],
})
export class AbilityModule {}
