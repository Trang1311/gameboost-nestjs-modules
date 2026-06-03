import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 app.enableCors({
    origin: [
      'http://localhost:3001',
      'http://192.168.1.18:3001',
    ],
    credentials: true,
  });
  // Global validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  // Global prefix
  app.setGlobalPrefix('api');

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('GameBoost Auto-Poster API')
    .setDescription(
      `REST API for automatically posting and managing listings on GameBoost.\n\n` +
      `**Base GameBoost API**: https://api.gameboost.com/v2\n\n` +
      `**Workflow for posting an account offer:**\n` +
      `1. \`GET /api/games\` — tìm game và lấy id ở đây\n` +
      `2. \`GET /api/account-offers/templates/:gameSlug\` — lấy cấu trúc của account\n` +
      `3. \`POST /api/account-offers\` — create the offer (status: draft)\n` +
      `4. \`POST /api/account-offers/:id/list\` — publish offers\n`,
    )
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Account Offers', 'Manage game account listings')
    .addTag('Currency Offers', 'Manage in-game currency listings')
    .addTag('Games', 'Browse available games on GameBoost')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      defaultModelsExpandDepth: 2,
      defaultModelExpandDepth: 2,
    },
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`\n🚀 App running on: http://localhost:${port}/api`);
  console.log(`📖 Swagger UI:     http://localhost:${port}/docs\n`);
}

bootstrap();
