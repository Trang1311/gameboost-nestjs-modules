"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const gameboost_config_1 = require("./config/gameboost.config");
const account_offers_module_1 = require("./gameboost/account-offers/account-offers.module");
const currency_offers_module_1 = require("./gameboost/currency-offers/currency-offers.module");
const games_module_1 = require("./gameboost/games/games.module");
const global_exception_filter_1 = require("./common/filters/global-exception.filter");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [gameboost_config_1.default],
                envFilePath: '.env',
            }),
            account_offers_module_1.AccountOffersModule,
            currency_offers_module_1.CurrencyOffersModule,
            games_module_1.GamesModule,
        ],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: global_exception_filter_1.GlobalExceptionFilter,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map