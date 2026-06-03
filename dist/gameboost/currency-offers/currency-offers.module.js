"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyOffersModule = void 0;
const common_1 = require("@nestjs/common");
const currency_offers_controller_1 = require("./currency-offers.controller");
const currency_offers_service_1 = require("./currency-offers.service");
const gameboost_module_1 = require("../gameboost.module");
let CurrencyOffersModule = class CurrencyOffersModule {
};
exports.CurrencyOffersModule = CurrencyOffersModule;
exports.CurrencyOffersModule = CurrencyOffersModule = __decorate([
    (0, common_1.Module)({
        imports: [gameboost_module_1.GameboostSharedModule],
        controllers: [currency_offers_controller_1.CurrencyOffersController],
        providers: [currency_offers_service_1.CurrencyOffersService],
        exports: [currency_offers_service_1.CurrencyOffersService],
    })
], CurrencyOffersModule);
//# sourceMappingURL=currency-offers.module.js.map