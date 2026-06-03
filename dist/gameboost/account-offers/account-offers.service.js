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
var AccountOffersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountOffersService = void 0;
const common_1 = require("@nestjs/common");
const gameboost_http_service_1 = require("../gameboost-http.service");
let AccountOffersService = AccountOffersService_1 = class AccountOffersService {
    constructor(http) {
        this.http = http;
        this.logger = new common_1.Logger(AccountOffersService_1.name);
        this.BASE = '/account-offers';
    }
    async findAll(query) {
        this.logger.log('Fetching all account offers');
        const response = await this.http.get(this.BASE, { params: query });
        if (response?.data && query.filter) {
            let filtered = [...response.data];
            if (query.filter.search) {
                const searchTerm = query.filter.search.toLowerCase();
                filtered = filtered.filter((offer) => offer.title.toLowerCase().includes(searchTerm) ||
                    offer.slug.toLowerCase().includes(searchTerm) ||
                    offer.external_id?.toLowerCase().includes(searchTerm));
            }
            if (query.filter.game_id && query.filter.game_id.length > 0) {
                filtered = filtered.filter((offer) => query.filter.game_id.includes(offer.game.id));
            }
            response.data = filtered;
            if (response.meta) {
                response.meta.total = filtered.length;
                response.meta.to = Math.min(response.meta.per_page, filtered.length);
            }
        }
        return response;
    }
    async findOne(id) {
        this.logger.log(`Fetching account offer #${id}`);
        return this.http.get(`${this.BASE}/${id}`);
    }
    async create(dto) {
        this.logger.log(`Creating account offer: ${dto.title}`);
        return this.http.post(`${this.BASE}/create`, dto);
    }
    async update(id, dto) {
        this.logger.log(`Updating account offer #${id}`);
        return this.http.patch(`${this.BASE}/${id}`, dto);
    }
    async remove(id) {
        this.logger.log(`Deleting account offer #${id}`);
        return this.http.delete(`${this.BASE}/${id}`);
    }
    async listOffer(id) {
        this.logger.log(`Listing account offer #${id}`);
        return this.http.post(`${this.BASE}/${id}/list`);
    }
    async unlistOffer(id) {
        this.logger.log(`Setting account offer #${id} to draft`);
        return this.http.post(`${this.BASE}/${id}/draft `);
    }
    async duplicateOffer(id) {
        this.logger.log(`Duplicating account offer #${id}`);
        return this.http.post(`${this.BASE}/${id}/actions/duplicate`);
    }
    async getTemplate(gameSlug) {
        this.logger.log(`Fetching account offer template for game: ${gameSlug}`);
        return this.http.get(`${this.BASE}/templates/${gameSlug}`);
    }
    async bulkUpdatePrice(items) {
        this.logger.log(`Bulk updating prices for ${items.length} items`);
        const CONCURRENCY = 5;
        let succeeded = 0;
        let failed = 0;
        const errors = [];
        const processItem = async (item) => {
            try {
                const response = await this.http.get(this.BASE, { params: { per_page: 10, 'filter[search]': item.external_id } });
                const offers = response?.data || [];
                const offer = offers.find((o) => {
                    const title = o.title?.trim().toUpperCase();
                    return title?.startsWith(item.external_id.toUpperCase());
                });
                if (!offer) {
                    failed++;
                    errors.push(`${item.external_id} - không tìm thấy`);
                    return;
                }
                await this.update(offer.id, { price: item.price });
                succeeded++;
            }
            catch (e) {
                failed++;
                const errMsg = e?.response?.data?.message || e.message || 'Unknown error';
                errors.push(`${item.external_id} - ${errMsg}`);
            }
        };
        for (let i = 0; i < items.length; i += CONCURRENCY) {
            const batch = items.slice(i, i + CONCURRENCY);
            await Promise.all(batch.map(processItem));
        }
        return {
            succeeded,
            failed,
            total: items.length,
            errors: errors.length > 0 ? errors : undefined,
        };
    }
};
exports.AccountOffersService = AccountOffersService;
exports.AccountOffersService = AccountOffersService = AccountOffersService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [gameboost_http_service_1.GameboostHttpService])
], AccountOffersService);
//# sourceMappingURL=account-offers.service.js.map