import { Module } from '@nestjs/common';
import { AccountOffersController } from './account-offers.controller';
import { AccountOffersService } from './account-offers.service';
import { GameboostSharedModule } from '../gameboost.module';

@Module({
  imports: [GameboostSharedModule],
  controllers: [AccountOffersController],
  providers: [AccountOffersService],
  exports: [AccountOffersService],
})
export class AccountOffersModule {}
