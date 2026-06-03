import { Module } from '@nestjs/common';
import { CurrencyOffersController } from './currency-offers.controller';
import { CurrencyOffersService } from './currency-offers.service';
import { GameboostSharedModule } from '../gameboost.module';

@Module({
  imports: [GameboostSharedModule],
  controllers: [CurrencyOffersController],
  providers: [CurrencyOffersService],
  exports: [CurrencyOffersService],
})
export class CurrencyOffersModule {}
