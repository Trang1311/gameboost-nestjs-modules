import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  Min,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import { GameDto, DeliveryTimeDto } from '../../common/dto/common.dto';

export class CreateCurrencyOfferDto {
  @ApiProperty({ example: 1, description: 'GameBoost game ID' })
  @IsNumber()
  game_id: number;

  @ApiProperty({ example: '1000 Gold - Fast Delivery', maxLength: 255 })
  @IsString()
  @MaxLength(255)
  title: string;

  @ApiProperty({ example: 'Will deliver 1000 gold within 1 hour.' })
  @IsString()
  description: string;

  @ApiProperty({ example: 5.99, description: 'Price in USD' })
  @IsNumber()
  @Min(0.01)
  price: number;

  @ApiProperty({ example: 1000, description: 'Amount of currency to sell' })
  @IsNumber()
  @Min(1)
  amount: number;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  is_manual?: boolean;

  @ApiPropertyOptional({ example: 'Meet at capital city auction house' })
  @IsOptional()
  @IsString()
  delivery_instructions?: string;

  @ApiPropertyOptional({ example: 'my-external-ref-001' })
  @IsOptional()
  @IsString()
  external_id?: string;
}

export class UpdateCurrencyOfferDto {
  @ApiPropertyOptional({ example: 'Updated Currency Offer Title' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  title?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: 7.99 })
  @IsOptional()
  @IsNumber()
  @Min(0.01)
  price?: number;

  @ApiPropertyOptional({ example: 2000 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  amount?: number;
}

export class ListCurrencyOffersQueryDto {
  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page?: number;

  @ApiPropertyOptional({ example: 20 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  per_page?: number;

  @ApiPropertyOptional({ enum: ['draft', 'listed', 'unlisted', 'archived'] })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({ example: 'league-of-legends' })
  @IsOptional()
  @IsString()
  game_slug?: string;
}

export class CurrencyOfferDto {
  @ApiProperty({ example: 456 }) id: number;
  @ApiPropertyOptional() external_id?: string;
  @ApiProperty({ type: () => GameDto }) game: GameDto;
  @ApiProperty() title: string;
  @ApiProperty() description: string;
  @ApiProperty({ example: '5.99' }) price: string;
  @ApiProperty({ example: '5.99' }) price_usd: string;
  @ApiProperty({ example: 1000 }) amount: number;
  @ApiProperty() is_manual_delivery: boolean;
  @ApiPropertyOptional() delivery_instructions?: string;
  @ApiProperty({ type: () => DeliveryTimeDto }) delivery_time: DeliveryTimeDto;
  @ApiProperty() status: string;
  @ApiProperty() created_at: number;
  @ApiProperty() updated_at: number;
}
