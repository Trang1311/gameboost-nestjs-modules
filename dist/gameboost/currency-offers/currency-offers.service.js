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
var CurrencyOffersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyOffersService = void 0;
const common_1 = require("@nestjs/common");
const gameboost_http_service_1 = require("../gameboost-http.service");
let CurrencyOffersService = CurrencyOffersService_1 = class CurrencyOffersService {
    constructor(http) {
        this.http = http;
        this.logger = new common_1.Logger(CurrencyOffersService_1.name);
        this.BASE = '/currency-offers';
    }
    async findAll(query) {
        return this.http.get(this.BASE, { params: query });
    }
    async findOne(id) {
        return this.http.get(`${this.BASE}/${id}`);
    }
    async create(dto) {
        this.logger.log(`Creating currency offer: ${dto.title}`);
        return this.http.post(this.BASE, dto);
    }
    async update(id, dto) {
        return this.http.patch(`${this.BASE}/${id}`, dto);
    }
    async listOffer(id) {
        this.logger.log(`Publishing currency offer #${id}`);
        return this.http.patch(`${this.BASE}/${id}/actions/list`);
    }
    async unlistOffer(id) {
        return this.http.patch(`${this.BASE}/${id}/actions/unlist`);
    }
    async archiveOffer(id) {
        return this.http.patch(`${this.BASE}/${id}/actions/archive`);
    }
    async restoreOffer(id) {
        return this.http.patch(`${this.BASE}/${id}/actions/restore`);
    }
};
exports.CurrencyOffersService = CurrencyOffersService;
exports.CurrencyOffersService = CurrencyOffersService = CurrencyOffersService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [gameboost_http_service_1.GameboostHttpService])
], CurrencyOffersService);
//# sourceMappingURL=currency-offers.service.js.map