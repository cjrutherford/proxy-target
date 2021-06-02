import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
        .addBearerAuth()
        .setVersion('0.0.1')
        .setTitle('Proxy Target')
        .setDescription('Proxy Example target implementation')
        .build();

  const doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('proxy-target', app, doc);
  await app.listen(5000);
}
bootstrap();
