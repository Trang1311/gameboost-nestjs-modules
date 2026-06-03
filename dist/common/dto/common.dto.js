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
exports.DeliveryTimeDto = exports.GameDto = exports.PaginationLinksDto = exports.PaginationMetaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class PaginationMetaDto {
}
exports.PaginationMetaDto = PaginationMetaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "current_page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "last_page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 20 }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "per_page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 20 }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100 }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "total", void 0);
class PaginationLinksDto {
}
exports.PaginationLinksDto = PaginationLinksDto;
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    __metadata("design:type", String)
], PaginationLinksDto.prototype, "first", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    __metadata("design:type", String)
], PaginationLinksDto.prototype, "last", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    __metadata("design:type", String)
], PaginationLinksDto.prototype, "prev", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    __metadata("design:type", String)
], PaginationLinksDto.prototype, "next", void 0);
class GameDto {
}
exports.GameDto = GameDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], GameDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'League of Legends' }),
    __metadata("design:type", String)
], GameDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'league-of-legends' }),
    __metadata("design:type", String)
], GameDto.prototype, "slug", void 0);
class DeliveryTimeDto {
}
exports.DeliveryTimeDto = DeliveryTimeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    __metadata("design:type", Number)
], DeliveryTimeDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10 hours' }),
    __metadata("design:type", String)
], DeliveryTimeDto.prototype, "format", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10 hours delivery' }),
    __metadata("design:type", String)
], DeliveryTimeDto.prototype, "format_long", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 36000 }),
    __metadata("design:type", Number)
], DeliveryTimeDto.prototype, "seconds", void 0);
//# sourceMappingURL=common.dto.js.map