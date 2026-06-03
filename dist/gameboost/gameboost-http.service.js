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
var GameboostHttpService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameboostHttpService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("axios");
let GameboostHttpService = GameboostHttpService_1 = class GameboostHttpService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(GameboostHttpService_1.name);
        const apiUrl = this.configService.get('gameboost.apiUrl');
        const apiToken = this.configService.get('gameboost.apiToken');
        const timeout = this.configService.get('gameboost.timeout');
        this.client = axios_1.default.create({
            baseURL: apiUrl,
            timeout,
            headers: {
                Authorization: `Bearer ${apiToken}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
        this.client.interceptors.request.use((config) => {
            this.logger.debug(`→ ${config.method?.toUpperCase()} ${config.url}`);
            return config;
        });
        this.client.interceptors.response.use((response) => {
            this.logger.debug(`← ${response.status} ${response.config.url}`);
            return response;
        }, (error) => {
            const status = error.response?.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            const message = error.response?.data?.message ||
                error.response?.data?.error ||
                error.message;
            this.logger.error(`GameBoost API error [${status}]: ${message}`, JSON.stringify(error.response?.data));
            throw new common_1.HttpException({
                statusCode: status,
                message: `GameBoost API: ${message}`,
                gameboostError: error.response?.data,
            }, status);
        });
    }
    async get(url, config) {
        const response = await this.client.get(url, config);
        return response.data;
    }
    async post(url, data, config) {
        const response = await this.client.post(url, data, config);
        return response.data;
    }
    async patch(url, data, config) {
        const response = await this.client.patch(url, data, config);
        return response.data;
    }
    async delete(url, config) {
        const response = await this.client.delete(url, config);
        return response.data;
    }
};
exports.GameboostHttpService = GameboostHttpService;
exports.GameboostHttpService = GameboostHttpService = GameboostHttpService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], GameboostHttpService);
//# sourceMappingURL=gameboost-http.service.js.map