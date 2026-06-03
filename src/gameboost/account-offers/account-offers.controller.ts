import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
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
  ApiQuery,
} from '@nestjs/swagger';
import { AccountOffersService } from './account-offers.service';
import {
  CreateAccountOfferDto,
  UpdateAccountOfferDto,
  ListAccountOffersQueryDto,
  AccountOfferDto,
} from './account-offers.dto';

@ApiTags('Account Offers')
@ApiBearerAuth()
@Controller('account-offers')
export class AccountOffersController {
  constructor(private readonly service: AccountOffersService) {}

  // ── GET /account-offers ──────────────────────────────────────────────────
  @Get()
  @ApiOperation({
    summary: 'List all account offers',
    description: 'Retrieve a paginated list of all account offers from GameBoost.',
  })
  @ApiResponse({ status: 200, description: 'List of account offers', type: [AccountOfferDto] })
  @ApiResponse({ status: 401, description: 'Unauthorized - invalid token' })
  @ApiResponse({ status: 429, description: 'Rate limit exceeded' })
  findAll(@Query() query: ListAccountOffersQueryDto) {
    return this.service.findAll(query);
  }

  // ── GET /account-offers/template/:gameSlug ───────────────────────────────
  @Get('template/:gameSlug')
  @ApiOperation({
    summary: 'Get account offer template',
    description: 'Get the dynamic JSON schema for a specific game to build an account offer.',
  })
  @ApiParam({ name: 'gameSlug', example: 'league-of-legends' })
  @ApiResponse({ status: 200, description: 'Account offer template schema' })
  getTemplate(@Param('gameSlug') gameSlug: string) {
    return this.service.getTemplate(gameSlug);
  }

  // ── GET /account-offers/:id ──────────────────────────────────────────────
  @Get(':id')
  @ApiOperation({ summary: 'Get a single account offer by ID' })
  @ApiParam({ name: 'id', type: Number, example: 123 })
  @ApiResponse({ status: 200, description: 'Account offer found', type: AccountOfferDto })
  @ApiResponse({ status: 404, description: 'Not found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  // ── POST /account-offers ─────────────────────────────────────────────────
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new account offer',
    description:
      'Create a new account offer on GameBoost using the new credential format (array of strings). ' +
      'Use GET /account-offers/template/:gameSlug first to get the correct account_data schema.',
  })
  @ApiResponse({ status: 201, description: 'Account offer created', type: AccountOfferDto })
  @ApiResponse({ status: 422, description: 'Validation error' })
  create(@Body() dto: CreateAccountOfferDto) {
    return this.service.create(dto);
  }

  // ── POST /account-offers/bulk-update-price ──────────────────────────────
  @Post('bulk-update-price')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Bulk update prices by external_id',
    description: 'Update prices for multiple account offers by their external_id. Returns success/failure counts.',
  })
  @ApiResponse({ status: 200, description: 'Bulk update result', schema: { example: { succeeded: 5, failed: 1 } } })
  bulkUpdatePrice(@Body('items') items: Array<{ external_id: string; price: number }>) {
    return this.service.bulkUpdatePrice(items);
  }

  // ── PATCH /account-offers/:id ────────────────────────────────────────────
  @Patch(':id')
  @ApiOperation({ summary: 'Update an account offer' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Account offer updated', type: AccountOfferDto })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateAccountOfferDto,
  ) {
    return this.service.update(id, dto);
  }

  // ── DELETE /account-offers/:id ───────────────────────────────────────────
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete an account offer' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 204, description: 'Deleted successfully' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }

  // ── POST /account-offers/:id/list ────────────────────────────────────────
  @Post(':id/list')
  @ApiOperation({
    summary: 'List (publish) an account offer',
    description: 'Make the account offer visible to buyers on GameBoost.',
  })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Account offer listed' })
  listOffer(@Param('id', ParseIntPipe) id: number) {
    return this.service.listOffer(id);
  }

  // ── POST /account-offers/:id/draft ─────────────────────────────────────
  @Post(':id/draft')
  @ApiOperation({ summary: 'Set an account offer to draft status' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Account offer set to draft' })
  unlistOffer(@Param('id', ParseIntPipe) id: number) {
    return this.service.unlistOffer(id);
  }

  // ── POST /account-offers/:id/duplicate ──────────────────────────────────
  @Post(':id/duplicate')
  @ApiOperation({ summary: 'Duplicate an account offer' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Account offer duplicated', type: AccountOfferDto })
  duplicateOffer(@Param('id', ParseIntPipe) id: number) {
    return this.service.duplicateOffer(id);
  }
}
