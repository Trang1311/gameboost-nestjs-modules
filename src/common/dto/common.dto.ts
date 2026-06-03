import { ApiProperty } from '@nestjs/swagger';

export class PaginationMetaDto {
  @ApiProperty({ example: 1 })
  current_page: number;

  @ApiProperty({ example: 1 })
  from: number;

  @ApiProperty({ example: 10 })
  last_page: number;

  @ApiProperty({ example: 20 })
  per_page: number;

  @ApiProperty({ example: 20 })
  to: number;

  @ApiProperty({ example: 100 })
  total: number;
}

export class PaginationLinksDto {
  @ApiProperty({ nullable: true })
  first: string | null;

  @ApiProperty({ nullable: true })
  last: string | null;

  @ApiProperty({ nullable: true })
  prev: string | null;

  @ApiProperty({ nullable: true })
  next: string | null;
}

export class GameDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'League of Legends' })
  name: string;

  @ApiProperty({ example: 'league-of-legends' })
  slug: string;
}

export class DeliveryTimeDto {
  @ApiProperty({ example: 10 })
  duration: number;

  @ApiProperty({ example: '10 hours' })
  format: string;

  @ApiProperty({ example: '10 hours delivery' })
  format_long: string;

  @ApiProperty({ example: 36000 })
  seconds: number;
}
