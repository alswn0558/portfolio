import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true, //여기에 url을 넣어도된다.
    credentials: true,
  });
  await app.listen(3001);
}
bootstrap();
