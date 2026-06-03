"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountOfferDto = exports.AccountOfferCredentialsDto = exports.ListAccountOffersQueryDto = exports.UpdateAccountOfferDto = exports.CreateAccountOfferDto = exports.GameItemsDto = exports.DeliveryTimeInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const common_dto_1 = require("../../common/dto/common.dto");
class DeliveryTimeInputDto {
}
exports.DeliveryTimeInputDto = DeliveryTimeInputDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10, description: 'Duration number' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], DeliveryTimeInputDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'hours', enum: ['minutes', 'hours', 'days'] }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeliveryTimeInputDto.prototype, "unit", void 0);
class GameItemsDto {
}
exports.GameItemsDto = GameItemsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: ['lol-aatrox', 'lol-zed'],
        description: 'List of champion slugs',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], GameItemsDto.prototype, "champions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: ['lol-academy-ahri'],
        description: 'List of skin slugs',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], GameItemsDto.prototype, "skins", void 0);
class CreateAccountOfferDto {
}
exports.CreateAccountOfferDto = CreateAccountOfferDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'GameBoost game ID' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAccountOfferDto.prototype, "game_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Plat 1 LoL Account 50 Champs', maxLength: 255 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateAccountOfferDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Full description of the account...' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAccountOfferDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10.99, description: 'Price in USD' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0.01),
    __metadata("design:type", Number)
], CreateAccountOfferDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['Login: myuser\nPassword: mypass123'],
        description: 'Credentials as array of strings (new format)',
        type: [String],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateAccountOfferDto.prototype, "credentials", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: ['https://example.com/image1.jpg'],
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUrl)({}, { each: true }),
    __metadata("design:type", Array)
], CreateAccountOfferDto.prototype, "image_urls", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Game-specific account data (dynamic schema)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateAccountOfferDto.prototype, "account_data", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'league-of-legends' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAccountOfferDto.prototype, "game", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'my-external-id-001' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAccountOfferDto.prototype, "external_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'my-account-slug' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAccountOfferDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Account dump / extra info' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAccountOfferDto.prototype, "dump", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Private seller note (not shown to buyer)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAccountOfferDto.prototype, "private_note", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: false, description: 'Manual delivery flag' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateAccountOfferDto.prototype, "is_manual", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Login with provided credentials' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAccountOfferDto.prototype, "delivery_instructions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => DeliveryTimeInputDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => DeliveryTimeInputDto),
    __metadata("design:type", DeliveryTimeInputDto)
], CreateAccountOfferDto.prototype, "delivery_time", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => GameItemsDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => GameItemsDto),
    __metadata("design:type", GameItemsDto)
], CreateAccountOfferDto.prototype, "game_items", void 0);
class UpdateAccountOfferDto {
}
exports.UpdateAccountOfferDto = UpdateAccountOfferDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Updated Title' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], UpdateAccountOfferDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAccountOfferDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 15.99 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0.01),
    __metadata("design:type", Number)
], UpdateAccountOfferDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUrl)({}, { each: true }),
    __metadata("design:type", Array)
], UpdateAccountOfferDto.prototype, "image_urls", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAccountOfferDto.prototype, "delivery_instructions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => DeliveryTimeInputDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => DeliveryTimeInputDto),
    __metadata("design:type", DeliveryTimeInputDto)
], UpdateAccountOfferDto.prototype, "delivery_time", void 0);
class ListAccountOffersQueryDto {
}
exports.ListAccountOffersQueryDto = ListAccountOffersQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ListAccountOffersQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ListAccountOffersQueryDto.prototype, "per_page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'listed', enum: ['draft', 'listed', 'unlisted', 'archived'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListAccountOffersQueryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'league-of-legends' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListAccountOffersQueryDto.prototype, "game_slug", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter object with search and game_id', example: { search: 'lord', game_id: [2] } }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Object),
    __metadata("design:type", Object)
], ListAccountOffersQueryDto.prototype, "filter", void 0);
class AccountOfferCredentialsDto {
}
exports.AccountOfferCredentialsDto = AccountOfferCredentialsDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AccountOfferCredentialsDto.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AccountOfferCredentialsDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AccountOfferCredentialsDto.prototype, "email_login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AccountOfferCredentialsDto.prototype, "email_password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AccountOfferCredentialsDto.prototype, "email_provider", void 0);
class AccountOfferDto {
}
exports.AccountOfferDto = AccountOfferDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 123 }),
    __metadata("design:type", Number)
], AccountOfferDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], AccountOfferDto.prototype, "external_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => common_dto_1.GameDto }),
    __metadata("design:type", common_dto_1.GameDto)
], AccountOfferDto.prototype, "game", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Number] }),
    __metadata("design:type", Array)
], AccountOfferDto.prototype, "account_order_ids", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AccountOfferDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AccountOfferDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AccountOfferDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], AccountOfferDto.prototype, "parameters", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], AccountOfferDto.prototype, "dump", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => common_dto_1.DeliveryTimeDto }),
    __metadata("design:type", common_dto_1.DeliveryTimeDto)
], AccountOfferDto.prototype, "delivery_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], AccountOfferDto.prototype, "is_manual_delivery", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => AccountOfferCredentialsDto }),
    __metadata("design:type", AccountOfferCredentialsDto)
], AccountOfferDto.prototype, "credentials", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], AccountOfferDto.prototype, "delivery_instructions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10.99' }),
    __metadata("design:type", String)
], AccountOfferDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10.99' }),
    __metadata("design:type", String)
], AccountOfferDto.prototype, "price_usd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AccountOfferDto.prototype, "views", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], AccountOfferDto.prototype, "image_urls", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AccountOfferDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AccountOfferDto.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], AccountOfferDto.prototype, "listed_at", void 0);
//# sourceMappingURL=account-offers.dto.js.map