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
exports.CurrencyOfferDto = exports.ListCurrencyOffersQueryDto = exports.UpdateCurrencyOfferDto = exports.CreateCurrencyOfferDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const common_dto_1 = require("../../common/dto/common.dto");
class CreateCurrencyOfferDto {
}
exports.CreateCurrencyOfferDto = CreateCurrencyOfferDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'GameBoost game ID' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCurrencyOfferDto.prototype, "game_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1000 Gold - Fast Delivery', maxLength: 255 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateCurrencyOfferDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Will deliver 1000 gold within 1 hour.' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCurrencyOfferDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5.99, description: 'Price in USD' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0.01),
    __metadata("design:type", Number)
], CreateCurrencyOfferDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1000, description: 'Amount of currency to sell' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateCurrencyOfferDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateCurrencyOfferDto.prototype, "is_manual", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Meet at capital city auction house' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCurrencyOfferDto.prototype, "delivery_instructions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'my-external-ref-001' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCurrencyOfferDto.prototype, "external_id", void 0);
class UpdateCurrencyOfferDto {
}
exports.UpdateCurrencyOfferDto = UpdateCurrencyOfferDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Updated Currency Offer Title' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], UpdateCurrencyOfferDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCurrencyOfferDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 7.99 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0.01),
    __metadata("design:type", Number)
], UpdateCurrencyOfferDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 2000 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateCurrencyOfferDto.prototype, "amount", void 0);
class ListCurrencyOffersQueryDto {
}
exports.ListCurrencyOffersQueryDto = ListCurrencyOffersQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ListCurrencyOffersQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ListCurrencyOffersQueryDto.prototype, "per_page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['draft', 'listed', 'unlisted', 'archived'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListCurrencyOffersQueryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'league-of-legends' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListCurrencyOffersQueryDto.prototype, "game_slug", void 0);
class CurrencyOfferDto {
}
exports.CurrencyOfferDto = CurrencyOfferDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 456 }),
    __metadata("design:type", Number)
], CurrencyOfferDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CurrencyOfferDto.prototype, "external_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => common_dto_1.GameDto }),
    __metadata("design:type", common_dto_1.GameDto)
], CurrencyOfferDto.prototype, "game", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CurrencyOfferDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CurrencyOfferDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5.99' }),
    __metadata("design:type", String)
], CurrencyOfferDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5.99' }),
    __metadata("design:type", String)
], CurrencyOfferDto.prototype, "price_usd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1000 }),
    __metadata("design:type", Number)
], CurrencyOfferDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CurrencyOfferDto.prototype, "is_manual_delivery", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CurrencyOfferDto.prototype, "delivery_instructions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => common_dto_1.DeliveryTimeDto }),
    __metadata("design:type", common_dto_1.DeliveryTimeDto)
], CurrencyOfferDto.prototype, "delivery_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CurrencyOfferDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CurrencyOfferDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CurrencyOfferDto.prototype, "updated_at", void 0);
//# sourceMappingURL=currency-offers.dto.js.map