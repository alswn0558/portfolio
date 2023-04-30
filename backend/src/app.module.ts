import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AbilityModule } from './ability/ability.module';
import { MbtiModule } from './mbti/mbti.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    AbilityModule,
    MbtiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
