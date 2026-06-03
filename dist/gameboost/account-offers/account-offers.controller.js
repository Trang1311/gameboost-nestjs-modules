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
exports.AccountOffersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const account_offers_service_1 = require("./account-offers.service");
const account_offers_dto_1 = require("./account-offers.dto");
let AccountOffersController = class AccountOffersController {
    constructor(service) {
        this.service = service;
    }
    findAll(query) {
        return this.service.findAll(query);
    }
    getTemplate(gameSlug) {
        return this.service.getTemplate(gameSlug);
    }
    findOne(id) {
        return this.service.findOne(id);
    }
    create(dto) {
        return this.service.create(dto);
    }
    bulkUpdatePrice(items) {
        return this.service.bulkUpdatePrice(items);
    }
    update(id, dto) {
        return this.service.update(id, dto);
    }
    remove(id) {
        return this.service.remove(id);
    }
    listOffer(id) {
        return this.service.listOffer(id);
    }
    unlistOffer(id) {
        return this.service.unlistOffer(id);
    }
    duplicateOffer(id) {
        return this.service.duplicateOffer(id);
    }
};
exports.AccountOffersController = AccountOffersController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'List all account offers',
        description: 'Retrieve a paginated list of all account offers from GameBoost.',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of account offers', type: [account_offers_dto_1.AccountOfferDto] }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized - invalid token' }),
    (0, swagger_1.ApiResponse)({ status: 429, description: 'Rate limit exceeded' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_offers_dto_1.ListAccountOffersQueryDto]),
    __metadata("design:returntype", void 0)
], AccountOffersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('template/:gameSlug'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get account offer template',
        description: 'Get the dynamic JSON schema for a specific game to build an account offer.',
    }),
    (0, swagger_1.ApiParam)({ name: 'gameSlug', example: 'league-of-legends' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Account offer template schema' }),
    __param(0, (0, common_1.Param)('gameSlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccountOffersController.prototype, "getTemplate", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single account offer by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 123 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Account offer found', type: account_offers_dto_1.AccountOfferDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AccountOffersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Create a new account offer',
        description: 'Create a new account offer on GameBoost using the new credential format (array of strings). ' +
            'Use GET /account-offers/template/:gameSlug first to get the correct account_data schema.',
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Account offer created', type: account_offers_dto_1.AccountOfferDto }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation error' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_offers_dto_1.CreateAccountOfferDto]),
    __metadata("design:returntype", void 0)
], AccountOffersController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('bulk-update-price'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Bulk update prices by external_id',
        description: 'Update prices for multiple account offers by their external_id. Returns success/failure counts.',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Bulk update result', schema: { example: { succeeded: 5, failed: 1 } } }),
    __param(0, (0, common_1.Body)('items')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], AccountOffersController.prototype, "bulkUpdatePrice", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an account offer' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Account offer updated', type: account_offers_dto_1.AccountOfferDto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, account_offers_dto_1.UpdateAccountOfferDto]),
    __metadata("design:returntype", void 0)
], AccountOffersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an account offer' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Deleted successfully' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AccountOffersController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/list'),
    (0, swagger_1.ApiOperation)({
        summary: 'List (publish) an account offer',
        description: 'Make the account offer visible to buyers on GameBoost.',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Account offer listed' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AccountOffersController.prototype, "listOffer", null);
__decorate([
    (0, common_1.Post)(':id/draft'),
    (0, swagger_1.ApiOperation)({ summary: 'Set an account offer to draft status' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Account offer set to draft' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AccountOffersController.prototype, "unlistOffer", null);
__decorate([
    (0, common_1.Post)(':id/duplicate'),
    (0, swagger_1.ApiOperation)({ summary: 'Duplicate an account offer' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Account offer duplicated', type: account_offers_dto_1.AccountOfferDto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AccountOffersController.prototype, "duplicateOffer", null);
exports.AccountOffersController = AccountOffersController = __decorate([
    (0, swagger_1.ApiTags)('Account Offers'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('account-offers'),
    __metadata("design:paramtypes", [account_offers_service_1.AccountOffersService])
], AccountOffersController);
//# sourceMappingURL=account-offers.controller.js.map