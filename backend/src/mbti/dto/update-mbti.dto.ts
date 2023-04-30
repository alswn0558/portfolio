import { PartialType } from '@nestjs/mapped-types';
import { CreateMbtiDto } from './create-mbti.dto';

export class UpdateMbtiDto extends PartialType(CreateMbtiDto) {}
