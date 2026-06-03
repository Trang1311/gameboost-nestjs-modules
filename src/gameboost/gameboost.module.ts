import { Module } from '@nestjs/common';
import { GameboostHttpService } from './gameboost-http.service';

// Sub-modules import GameboostHttpService via this shared module
@Module({
  providers: [GameboostHttpService],
  exports: [GameboostHttpService],
})
export class GameboostSharedModule {}
