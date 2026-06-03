"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('gameboost', () => ({
    apiUrl: process.env.GAMEBOOST_API_URL || 'https://api.gameboost.com/v2',
    apiToken: process.env.GAMEBOOST_API_TOKEN || '',
    timeout: parseInt(process.env.GAMEBOOST_TIMEOUT || '10000', 10),
}));
//# sourceMappingURL=gameboost.config.js.map