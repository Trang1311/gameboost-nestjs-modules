import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';
import { CurrencyOffersService } from './currency-offers.service';
import {
  CreateCurrencyOfferDto,
  UpdateCurrencyOfferDto,
  ListCurrencyOffersQueryDto,
  CurrencyOfferDto,
} from './currency-offers.dto';

@ApiTags('Currency Offers')
@ApiBearerAuth()
@Controller('currency-offers')
export class CurrencyOffersController {
  constructor(private readonly service: CurrencyOffersService) {}

  @Get()
  @ApiOperation({ summary: 'List all currency offers' })
  @ApiResponse({ status: 200, description: 'List of currency offers', type: [CurrencyOfferDto] })
  findAll(@Query() query: ListCurrencyOffersQueryDto) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single currency offer' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, type: CurrencyOfferDto })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new currency offer' })
  @ApiResponse({ status: 201, type: CurrencyOfferDto })
  create(@Body() dto: CreateCurrencyOfferDto) {
    return this.service.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a currency offer' })
  @ApiParam({ name: 'id', type: Number })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCurrencyOfferDto,
  ) {
    return this.service.update(id, dto);
  }

  @Patch(':id/list')
  @ApiOperation({ summary: 'Publish (list) a currency offer' })
  @ApiParam({ name: 'id', type: Number })
  listOffer(@Param('id', ParseIntPipe) id: number) {
    return this.service.listOffer(id);
  }

  @Patch(':id/unlist')
  @ApiOperation({ summary: 'Unlist a currency offer' })
  @ApiParam({ name: 'id', type: Number })
  unlistOffer(@Param('id', ParseIntPipe) id: number) {
    return this.service.unlistOffer(id);
  }

  @Patch(':id/archive')
  @ApiOperation({ summary: 'Archive a currency offer' })
  @ApiParam({ name: 'id', type: Number })
  archiveOffer(@Param('id', ParseIntPipe) id: number) {
    return this.service.archiveOffer(id);
  }

  @Patch(':id/restore')
  @ApiOperation({ summary: 'Restore an archived currency offer' })
  @ApiParam({ name: 'id', type: Number })
  restoreOffer(@Param('id', ParseIntPipe) id: number) {
    return this.service.restoreOffer(id);
  }
}
