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
exports.GamesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const games_service_1 = require("./games.service");
let GamesController = class GamesController {
    constructor(service) {
        this.service = service;
    }
    findAll(page, per_page, search) {
        return this.service.findAll({ page, per_page, search });
    }
    findOne(slug) {
        return this.service.findOne(slug);
    }
};
exports.GamesController = GamesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List all available games on GameBoost' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'per_page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, type: String }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('per_page')),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], GamesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get details for a specific game' }),
    (0, swagger_1.ApiParam)({ name: 'slug', example: 'league-of-legends' }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GamesController.prototype, "findOne", null);
exports.GamesController = GamesController = __decorate([
    (0, swagger_1.ApiTags)('Games'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('games'),
    __metadata("design:paramtypes", [games_service_1.GamesService])
], GamesController);
//# sourceMappingURL=games.controller.js.map