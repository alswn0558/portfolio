import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type abilityDocument = HydratedDocument<ability>;

@Schema()
export class ability {
  @Prop()
  humanities: number;
  @Prop()
  Communication: number;
  @Prop()
  global: number;
  @Prop()
  creative: number;
  @Prop()
  specialty: number;
  @Prop()
  name: string;
}
export const abilitySchema = SchemaFactory.createForClass(ability);
