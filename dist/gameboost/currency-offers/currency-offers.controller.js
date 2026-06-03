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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyOffersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const currency_offers_service_1 = require("./currency-offers.service");
const currency_offers_dto_1 = require("./currency-offers.dto");
let CurrencyOffersController = class CurrencyOffersController {
    constructor(service) {
        this.service = service;
    }
    findAll(query) {
        return this.service.findAll(query);
    }
    findOne(id) {
        return this.service.findOne(id);
    }
    create(dto) {
        return this.service.create(dto);
    }
    update(id, dto) {
        return this.service.update(id, dto);
    }
    listOffer(id) {
        return this.service.listOffer(id);
    }
    unlistOffer(id) {
        return this.service.unlistOffer(id);
    }
    archiveOffer(id) {
        return this.service.archiveOffer(id);
    }
    restoreOffer(id) {
        return this.service.restoreOffer(id);
    }
};
exports.CurrencyOffersController = CurrencyOffersController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List all currency offers' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of currency offers', type: [currency_offers_dto_1.CurrencyOfferDto] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [currency_offers_dto_1.ListCurrencyOffersQueryDto]),
    __metadata("design:returntype", void 0)
], CurrencyOffersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single currency offer' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, type: currency_offers_dto_1.CurrencyOfferDto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CurrencyOffersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new currency offer' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: currency_offers_dto_1.CurrencyOfferDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [currency_offers_dto_1.CreateCurrencyOfferDto]),
    __metadata("design:returntype", void 0)
], CurrencyOffersController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a currency offer' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, currency_offers_dto_1.UpdateCurrencyOfferDto]),
    __metadata("design:returntype", void 0)
], CurrencyOffersController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/list'),
    (0, swagger_1.ApiOperation)({ summary: 'Publish (list) a currency offer' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CurrencyOffersController.prototype, "listOffer", null);
__decorate([
    (0, common_1.Patch)(':id/unlist'),
    (0, swagger_1.ApiOperation)({ summary: 'Unlist a currency offer' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CurrencyOffersController.prototype, "unlistOffer", null);
__decorate([
    (0, common_1.Patch)(':id/archive'),
    (0, swagger_1.ApiOperation)({ summary: 'Archive a currency offer' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CurrencyOffersController.prototype, "archiveOffer", null);
__decorate([
    (0, common_1.Patch)(':id/restore'),
    (0, swagger_1.ApiOperation)({ summary: 'Restore an archived currency offer' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CurrencyOffersController.prototype, "restoreOffer", null);
exports.CurrencyOffersController = CurrencyOffersController = __decorate([
    (0, swagger_1.ApiTags)('Currency Offers'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('currency-offers'),
    __metadata("design:paramtypes", [currency_offers_service_1.CurrencyOffersService])
], CurrencyOffersController);
//# sourceMappingURL=currency-offers.controller.js.map