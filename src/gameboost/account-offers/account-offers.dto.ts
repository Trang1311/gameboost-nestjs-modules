import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  IsBoolean,
  IsObject,
  MaxLength,
  Min,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { GameDto, DeliveryTimeDto } from '../../common/dto/common.dto';

// ─── Request DTOs ────────────────────────────────────────────────────────────

export class DeliveryTimeInputDto {
  @ApiProperty({ example: 10, description: 'Duration number' })
  @IsNumber()
  @Min(1)
  duration: number;

  @ApiProperty({ example: 'hours', enum: ['minutes', 'hours', 'days'] })
  @IsString()
  unit: 'minutes' | 'hours' | 'days';
}

export class GameItemsDto {
  @ApiPropertyOptional({
    example: ['lol-aatrox', 'lol-zed'],
    description: 'List of champion slugs',
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  champions?: string[];

  @ApiPropertyOptional({
    example: ['lol-academy-ahri'],
    description: 'List of skin slugs',
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  skins?: string[];
}

export class CreateAccountOfferDto {
  @IsOptional()
  id?: number | null;

  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsNumber()
  original_price?: number | null;

  @IsNumber()
  price: number;

  @IsNumber()
  game_id: number;

  @IsOptional()
  @IsString()
  login?: string | null;

  @IsOptional()
  @IsString()
  password?: string | null;

  @IsOptional()
  @IsString()
  email_login?: string | null;

  @IsOptional()
  @IsString()
  email_password?: string | null;

  @IsOptional()
  @IsString()
  email_provider?: string | null;

  @IsOptional()
  @IsString()
  note?: string | null;

  @IsOptional()
  @IsString()
  dump?: string | null;

  @IsOptional()
  @IsString()
  delivery_instructions?: string | null;

  @ValidateNested()
  @Type(() => DeliveryTimeDto)
  delivery_time: DeliveryTimeDto;

  @IsBoolean()
  is_manual: boolean;

  @IsBoolean()
  is_featured: boolean;

  @IsBoolean()
  is_rare: boolean;

  @IsBoolean()
  is_discounted: boolean;

  @IsObject()
  gallery: Record<string, any>;

  @IsObject()
  account_data: Record<string, any>;

  @IsObject()
  game_items: Record<string, any>;

  @IsOptional()
  account_package_id?: number | null;

  @IsOptional()
  @IsString()
  private_note?: string | null;

  @IsArray()
  credentials: string[];

  @IsOptional()
  @IsString()
  external_id?: string | null;
}

export class UpdateAccountOfferDto {
  @ApiPropertyOptional({ example: 'Updated Title' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  title?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: 15.99 })
  @IsOptional()
  @IsNumber()
  @Min(0.01)
  price?: number;

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true })
  image_urls?: string[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  delivery_instructions?: string;

  @ApiPropertyOptional({ type: () => DeliveryTimeInputDto })
  @IsOptional()
  @Type(() => DeliveryTimeInputDto)
  delivery_time?: DeliveryTimeInputDto;
}

export class ListAccountOffersQueryDto {
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

  @ApiPropertyOptional({ example: 'listed', enum: ['draft', 'listed', 'unlisted', 'archived'] })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({ example: 'league-of-legends' })
  @IsOptional()
  @IsString()
  game_slug?: string;

  @ApiPropertyOptional({ description: 'Filter object with search and game_id', example: { search: 'lord', game_id: [2] } })
  @IsOptional()
  @Type(() => Object)
  filter?: { search?: string; game_id?: number[] };
}

// ─── Response DTOs ───────────────────────────────────────────────────────────

export class AccountOfferCredentialsDto {
  @ApiProperty() login: string;
  @ApiProperty() password: string;
  @ApiProperty() email_login: string;
  @ApiProperty() email_password: string;
  @ApiProperty() email_provider: string;
}

export class AccountOfferDto {
  @ApiProperty({ example: 123 })
  id: number;

  @ApiPropertyOptional()
  external_id?: string;

  @ApiProperty({ type: () => GameDto })
  game: GameDto;

  @ApiProperty({ type: [Number] })
  account_order_ids: number[];

  @ApiProperty()
  title: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  parameters: Record<string, any>;

  @ApiPropertyOptional()
  dump?: string;

  @ApiProperty({ type: () => DeliveryTimeDto })
  delivery_time: DeliveryTimeDto;

  @ApiProperty()
  is_manual_delivery: boolean;

  @ApiProperty({ type: () => AccountOfferCredentialsDto })
  credentials: AccountOfferCredentialsDto;

  @ApiPropertyOptional()
  delivery_instructions?: string;

  @ApiProperty({ example: '10.99' })
  price: string;

  @ApiProperty({ example: '10.99' })
  price_usd: string;

  @ApiProperty()
  views: number;

  @ApiProperty({ type: [String] })
  image_urls: string[];

  @ApiProperty()
  created_at: number;

  @ApiProperty()
  updated_at: number;

  @ApiPropertyOptional()
  listed_at?: number;
}

