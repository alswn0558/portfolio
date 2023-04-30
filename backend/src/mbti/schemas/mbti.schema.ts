import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type mbtiDocument = HydratedDocument<mbti>;

@Schema()
export class mbti {
  @Prop()
  m: number;
  @Prop()
  b: number;
  @Prop()
  t: number;
  @Prop()
  i: number;
  @Prop()
  name: string;
}
export const mbtiSchema = SchemaFactory.createForClass(mbti);
