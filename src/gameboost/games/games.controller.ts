import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { GamesService } from './games.service';

@ApiTags('Games')
@ApiBearerAuth()
@Controller('games')
export class GamesController {
  constructor(private readonly service: GamesService) {}

  @Get()
  @ApiOperation({ summary: 'List all available games on GameBoost' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'per_page', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false, type: String })
  findAll(
    @Query('page') page?: number,
    @Query('per_page') per_page?: number,
    @Query('search') search?: string,
  ) {
    return this.service.findAll({ page, per_page, search });
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Get details for a specific game' })
  @ApiParam({ name: 'slug', example: 'league-of-legends' })
  findOne(@Param('slug') slug: string) {
    return this.service.findOne(slug);
  }
}
