import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import gameboostConfig from './config/gameboost.config';
import { AccountOffersModule } from './gameboost/account-offers/account-offers.module';
import { CurrencyOffersModule } from './gameboost/currency-offers/currency-offers.module';
import { GamesModule } from './gameboost/games/games.module';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [gameboostConfig],
      envFilePath: '.env',
    }),
    AccountOffersModule,
    CurrencyOffersModule,
    GamesModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
