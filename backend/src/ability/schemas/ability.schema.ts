import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type mbtiDocument = HydratedDocument<ability>;

@Schema()
export class ability {
  @Prop()
  e: number;
  @Prop()
  n: number;
  @Prop()
  t: number;
  @Prop()
  j: number;
  @Prop()
  id: number;
  @Prop()
  name: string;
}
export const abilitySchema = SchemaFactory.createForClass(ability);
