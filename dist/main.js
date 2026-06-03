"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: [
            'http://localhost:3001',
            'http://192.168.1.18:3001',
        ],
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
    }));
    app.setGlobalPrefix('api');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('GameBoost Auto-Poster API')
        .setDescription(`REST API for automatically posting and managing listings on GameBoost.\n\n` +
        `**Base GameBoost API**: https://api.gameboost.com/v2\n\n` +
        `**Workflow for posting an account offer:**\n` +
        `1. \`GET /api/games\` — tìm game và lấy id ở đây\n` +
        `2. \`GET /api/account-offers/templates/:gameSlug\` — lấy cấu trúc của account\n` +
        `3. \`POST /api/account-offers\` — create the offer (status: draft)\n` +
        `4. \`POST /api/account-offers/:id/list\` — publish offers\n`)
        .setVersion('1.0')
        .addBearerAuth()
        .addTag('Account Offers', 'Manage game account listings')
        .addTag('Currency Offers', 'Manage in-game currency listings')
        .addTag('Games', 'Browse available games on GameBoost')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document, {
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
//# sourceMappingURL=main.js.map